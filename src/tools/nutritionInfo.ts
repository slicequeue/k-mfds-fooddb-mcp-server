import { getNutritionComponentTypes } from "../external/mfds/service";

export const nutritionInfoTool = {
  name: 'getNutritionComponentTypes',
  description: '식품영양성분DB에서 제공하는 영양성분 유형 목록을 조회합니다.',
  inputSchema: {},
  handler: async () => {
    try {
      const nutritionTypes = getNutritionComponentTypes();
      
      const resultText = nutritionTypes.items.map((type, index) => 
        `${index + 1}. ${type.name} (${type.code})`
      ).join('\n');

      return {
        content: [{ 
          type: 'text' as const, 
          text: `사용 가능한 영양성분 유형:\n${resultText}` 
        }]
      };
    } catch (error) {
      return {
        content: [{ 
          type: 'text' as const, 
          text: `영양성분 유형 조회 중 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}` 
        }]
      };
    }
  }
}; 