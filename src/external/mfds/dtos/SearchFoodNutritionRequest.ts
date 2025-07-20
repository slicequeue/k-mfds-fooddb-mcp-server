export interface SearchFoodNutritionRequestParams {
  foodNameKr?: string;
  researchYearMonthDate?: string;
  makerName?: string;
  pageNo?: number;
  numOfRows?: number;
  type?: 'xml' | 'json';
  foodCategory1Name?: string;
  itemReportNo?: string;
  updateDate?: string;
  dbClassName?: string;
}

export class SearchFoodNutritionRequest {
  /** 검색할 식품명 */
  foodNameKr: string;
  /** 검색할 데이터 생성일자 */
  researchYearMonthDate: string;
  /** 검색할 업체명 */
  makerName: string;
  /** 페이지 번호 */
  pageNo: number;
  /** 한 페이지 결과수 */
  numOfRows: number;
  /** 응답데이터 형식 (xml/json) */
  type: 'xml' | 'json';
  /** 식품대분류명 */
  foodCategory1Name: string;
  /** 품목제조보고번호 */
  itemReportNo: string;
  /** 데이터수정일자 */
  updateDate: string;
  /** 품목대표/상용제품 */
  dbClassName: string;

  constructor({
    foodNameKr = '',
    researchYearMonthDate = '',
    makerName = '',
    pageNo = 1,
    numOfRows = 10,
    type = 'json',
    foodCategory1Name = '',
    itemReportNo = '',
    updateDate = '',
    dbClassName = '',
  }: SearchFoodNutritionRequestParams) {
    this.foodNameKr = foodNameKr;
    this.researchYearMonthDate = researchYearMonthDate;
    this.makerName = makerName;
    this.pageNo = pageNo;
    this.numOfRows = numOfRows;
    this.type = type;
    this.foodCategory1Name = foodCategory1Name;
    this.itemReportNo = itemReportNo;
    this.updateDate = updateDate;
    this.dbClassName = dbClassName;
  }

  validate(): boolean {
    // 최소한 하나의 검색 조건은 있어야 함
    return !!(this.foodNameKr || this.makerName || this.foodCategory1Name || this.itemReportNo);
  }
} 