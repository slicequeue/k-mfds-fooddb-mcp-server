import { NutritionComponent } from './NutritionComponent';

export interface FoodNutritionParams {
  num: string;
  foodCode: string;
  foodNameKr: string;
  dbGroupCode: string;
  dbGroupName: string;
  foodOriginCode: string;
  foodOriginName: string;
  foodCategory1Code: string;
  foodCategory1Name: string;
  foodRepresentCode: string;
  foodRepresentName: string;
  foodCategory2Code: string;
  foodCategory2Name: string;
  foodCategory3Code: string;
  foodCategory3Name: string;
  foodCategory4Code: string;
  foodCategory4Name: string;
  servingSize: string;
  subReferenceCode: string;
  subReferenceName: string;
  nutritionalAmountPerServing: string;
  foodWeight: string;
  itemReportNum: string;
  makerName: string;
  importManufacturerName: string;
  sellerManufacturerName: string;
  importYesOrNo: string;
  nationCode: string;
  nationName: string;
  creationMethodCode: string;
  creationMethodName: string;
  researchDate: string;
  updateDate: string;
  nutritionComponents: NutritionComponent[];
}

export class FoodNutrition {
  /** 음식 일련번호 NUM */
  num: string;
  /** 식품코드 FOOD_CD */
  foodCode: string;
  /** 식품명 FOOD_NM_KR */
  foodNameKr: string;
  /** 데이터구분코드 DB_GRP_CM */
  dbGroupCode: string;
  /** 데이터구분명 DB_GRP_NM */
  dbGroupName: string;
  /** 식품기원코드 FOOD_OR_CD */
  foodOriginCode: string;
  /** 식품기원명 FOOD_OR_NM */
  foodOriginName: string;
  /** 식품대분류코드 FOOD_CAT1_CD */
  foodCategory1Code: string;
  /** 식품대분류명 FOOD_CAT1_NM */
  foodCategory1Name: string;
  /** 대표식품코드 FOOD_REF_CD */
  foodRepresentCode: string;
  /** 대표식품명 FOOD_REF_NM */
  foodRepresentName: string;
  /** 식품중분류코드 FOOD_CAT2_CD */
  foodCategory2Code: string;
  /** 식품중분류명 FOOD_CAT2_NM */
  foodCategory2Name: string;
  /** 식품소분류코드 FOOD_CAT3_CD */
  foodCategory3Code: string;
  /** 식품소분류명 FOOD_CAT3_NM */
  foodCategory3Name: string;
  /** 식품세분류코드 FOOD_CAT4_CD */
  foodCategory4Code: string;
  /** 식품세분류명 FOOD_CAT4_NM */
  foodCategory4Name: string;
  /** 영양성분함량기준량 SERVING_SIZE */
  servingSize: string;
  /** 출처코드 SUB_REF_CM */
  subReferenceCode: string;
  /** 출처명 SUB_REF_NAME */
  subReferenceName: string;
  /** 1회 섭취참고량 NUTRI_AMOUNT_SERVING */
  nutritionalAmountPerServing: string;
  /** 식품중량 Z10500 */
  foodWeight: string;
  /** 품목제조보고번호 ITEM_REPORT_NO */
  itemReportNum: string;
  /** 업체명 MAKER_NM */
  makerName: string;
  /** 수입업체명 IMP_MANUFAC_NM */
  importManufacturerName: string;
  /** 유통업체명 SELLER_MANUFAC_NM */
  sellerManufacturerName: string;
  /** 수입여부 IMP_YN */
  importYesOrNo: string;
  /** 원산지국코드 NATION_CM */
  nationCode: string;
  /** 원산지국명 NATION_NM */
  nationName: string;
  /** 데이터생성방법코드 CRT_MTH_CD */
  creationMethodCode: string;
  /** 데이터생성방법명 CRT_MTH_NM */
  creationMethodName: string;
  /** 데이터생성일자 RESEARCH_YMD */
  researchDate: string;
  /** 데이터기준일자 UPDATE_DATE */
  updateDate: string;
  /** 영양소 성분 리스트 */
  nutritionComponents: NutritionComponent[];

  constructor(params: FoodNutritionParams) {
    this.num = params.num;
    this.foodCode = params.foodCode;
    this.foodNameKr = params.foodNameKr;
    this.dbGroupCode = params.dbGroupCode;
    this.dbGroupName = params.dbGroupName;
    this.foodOriginCode = params.foodOriginCode;
    this.foodOriginName = params.foodOriginName;
    this.foodCategory1Code = params.foodCategory1Code;
    this.foodCategory1Name = params.foodCategory1Name;
    this.foodRepresentCode = params.foodRepresentCode;
    this.foodRepresentName = params.foodRepresentName;
    this.foodCategory2Code = params.foodCategory2Code;
    this.foodCategory2Name = params.foodCategory2Name;
    this.foodCategory3Code = params.foodCategory3Code;
    this.foodCategory3Name = params.foodCategory3Name;
    this.foodCategory4Code = params.foodCategory4Code;
    this.foodCategory4Name = params.foodCategory4Name;
    this.servingSize = params.servingSize;
    this.subReferenceCode = params.subReferenceCode;
    this.subReferenceName = params.subReferenceName;
    this.nutritionalAmountPerServing = params.nutritionalAmountPerServing;
    this.foodWeight = params.foodWeight;
    this.itemReportNum = params.itemReportNum;
    this.makerName = params.makerName;
    this.importManufacturerName = params.importManufacturerName;
    this.sellerManufacturerName = params.sellerManufacturerName;
    this.importYesOrNo = params.importYesOrNo;
    this.nationCode = params.nationCode;
    this.nationName = params.nationName;
    this.creationMethodCode = params.creationMethodCode;
    this.creationMethodName = params.creationMethodName;
    this.researchDate = params.researchDate;
    this.updateDate = params.updateDate;
    this.nutritionComponents = params.nutritionComponents;
  }
} 