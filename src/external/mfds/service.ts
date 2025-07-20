import { extractItemArrayOrDefualtEmptyArrayFromBody, extractPagingInfoOrDefaultEmptyObjectFromBody } from './util';
import * as api from './api';
import * as mapper from './mapper';
import { SearchFoodNutritionRequest } from './dtos/SearchFoodNutritionRequest';
import { SeachFoodNutritionResponse } from './dtos/SeachFoodNutritionResponse';
import { AmtNumDataType } from './types/AmtNumDataType';

/**
 * `식품의약품안전처_식품영양성분DB정보` 음식 정보 검색 
 * @param searchFoodNutritionRequest 요청 인자
 * @returns 검색 결과
 */
export async function searchFoodNutritionInfo(searchFoodNutritionRequest: SearchFoodNutritionRequest): Promise<SeachFoodNutritionResponse> {
  if (!(searchFoodNutritionRequest instanceof SearchFoodNutritionRequest)) {
    throw new Error('요청인자 형식에 맞지 않음');
  }
  console.log(searchFoodNutritionRequest);

  const body = await api.getFoodNutritionComponentDatabaseInquery(
    searchFoodNutritionRequest.foodNameKr,
    searchFoodNutritionRequest.researchYearMonthDate,
    searchFoodNutritionRequest.makerName,
    searchFoodNutritionRequest.pageNo,
    searchFoodNutritionRequest.numOfRows,
    searchFoodNutritionRequest.type,
    searchFoodNutritionRequest.foodCategory1Name,
    searchFoodNutritionRequest.itemReportNo,
    searchFoodNutritionRequest.updateDate,
    searchFoodNutritionRequest.dbClassName,
  );

  const foodNutritions = extractItemArrayOrDefualtEmptyArrayFromBody(body)
    .map(each => mapper.toFoodNutrition(each));

  const paging = extractPagingInfoOrDefaultEmptyObjectFromBody(body);

  return new SeachFoodNutritionResponse({
    data: foodNutritions,
    paging,
  });
}

export function getNutritionComponentTypes() {
  return mapper.toAmtCodeTypeResponse(AmtNumDataType);
} 