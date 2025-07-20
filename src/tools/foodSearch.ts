import { z } from "zod";
import { searchFoodNutritionInfo } from "../external/mfds/service";
import { SearchFoodNutritionRequest } from "../external/mfds/dtos/SearchFoodNutritionRequest";

export const foodSearchTool = {
  name: 'searchFoodNutrition',
  description: '식품의약품안전처 식품영양성분DB에서 식품 정보를 검색합니다. 식품명, 제조사, 카테고리 등을 기준으로 검색할 수 있습니다.',
  inputSchema: {
    foodNameKr: z.string().optional().describe('검색할 식품명 (예: "사과", "김치")'),
    makerName: z.string().optional().describe('제조사명 (예: "농심", "롯데")'),
    foodCategory1Name: z.string().optional().describe('식품 대분류명 (예: "곡류", "채소류", "육류")'),
    itemReportNo: z.string().optional().describe('품목제조보고번호'),
    researchYearMonthDate: z.string().optional().describe('데이터 생성일자 (YYYYMMDD 형식)'),
    pageNo: z.number().optional().describe('페이지 번호 (기본값: 1)'),
    numOfRows: z.number().optional().describe('한 페이지 결과수 (기본값: 10, 최대: 100)'),
    type: z.enum(['xml', 'json']).optional().describe('응답 데이터 형식 (기본값: json)'),
    updateDate: z.string().optional().describe('데이터 수정일자 (YYYYMMDD 형식)'),
    dbClassName: z.string().optional().describe('품목대표/상용제품 구분')
  },
  handler: async (params: any) => {
    try {
      // 최소한 하나의 검색 조건이 있는지 확인
      const hasSearchCriteria = params.foodNameKr || params.makerName || params.foodCategory1Name || params.itemReportNo;
      if (!hasSearchCriteria) {
        return {
          content: [{ 
            type: 'text' as const, 
            text: '검색 조건이 필요합니다. 식품명(foodNameKr), 제조사명(makerName), 식품대분류명(foodCategory1Name), 또는 품목제조보고번호(itemReportNo) 중 하나 이상을 입력해주세요.' 
          }]
        };
      }

      const request = new SearchFoodNutritionRequest({
        foodNameKr: params.foodNameKr || '',
        makerName: params.makerName || '',
        foodCategory1Name: params.foodCategory1Name || '',
        itemReportNo: params.itemReportNo || '',
        researchYearMonthDate: params.researchYearMonthDate || '',
        pageNo: params.pageNo || 1,
        numOfRows: params.numOfRows || 10,
        type: params.type || 'json',
        updateDate: params.updateDate || '',
        dbClassName: params.dbClassName || ''
      });

      const response = await searchFoodNutritionInfo(request);
      
      if (response.data.length === 0) {
        return {
          content: [{ 
            type: 'text' as const, 
            text: '검색 결과가 없습니다. 검색 조건을 변경해보세요.' 
          }]
        };
      }

      // 검색 결과를 구조화된 형태로 반환
      const resultText = response.data.map((food, index) => {
        const nutritionInfo = food.nutritionComponents.map(comp => 
          `${comp.name}: ${comp.value}${comp.unit}`
        ).join(', ');
        
        return `${index + 1}. ${food.foodNameKr}
- 제조사: ${food.makerName}
- 카테고리: ${food.foodCategory1Name} > ${food.foodCategory2Name} > ${food.foodCategory3Name}
- 1회 섭취량: ${food.servingSize}
- 영양성분: ${nutritionInfo}
- 품목제조보고번호: ${food.itemReportNum}
- 데이터생성일: ${food.researchDate}`;
      }).join('\n\n');

      const pagingInfo = response.paging;
      const summary = `\n\n총 ${pagingInfo.totalCount}개 중 ${response.data.length}개 결과 (페이지 ${pagingInfo.pageNo}/${Math.ceil(parseInt(pagingInfo.totalCount) / pagingInfo.numOfRows)})`;

      return {
        content: [{ 
          type: 'text' as const, 
          text: resultText + summary 
        }]
      };
    } catch (error) {
      return {
        content: [{ 
          type: 'text' as const, 
          text: `검색 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}` 
        }]
      };
    }
  }
}; 