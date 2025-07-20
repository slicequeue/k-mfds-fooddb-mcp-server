export interface SearchFoodNutritionRequestParams {
  foodNameKr: string;
  researchYearMonthDate: string;
  makerName: string;
}

export class SearchFoodNutritionRequest {
  /** 검색할 식품명 */
  foodNameKr: string;
  /** 검색할 데이터 생성일자 */
  researchYearMonthDate: string;
  /** 검색할 업체명 */
  makerName: string;

  constructor({
    foodNameKr,
    researchYearMonthDate,
    makerName,
  }: SearchFoodNutritionRequestParams) {
    this.foodNameKr = foodNameKr;
    this.researchYearMonthDate = researchYearMonthDate;
    this.makerName = makerName;
  }

  validate(): boolean {
    return this.foodNameKr !== undefined && this.foodNameKr !== null;
  }
} 