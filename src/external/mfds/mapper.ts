import { AmtCodeTypeResponse, AmtCodeTypeItem } from "./dtos/AmtCodeTypeResponse";
import { FoodNutrition } from "./dtos/FoodNutrition";
import { NutritionComponent } from "./dtos/NutritionComponent";
import { AmtNumDataType } from "./types/AmtNumDataType";

const KEY_NAME_PREFIX_NUTRITION_COMPONENT = 'AMT_NUM';

interface AmtNumDataItem {
  key: string;
  value: number;
}

const toNutritionComponent = (apiResponseBodyArrayItem: Record<string, any>): NutritionComponent[] => {
  const amtNumDataList: AmtNumDataItem[] = [];
  Object.keys(apiResponseBodyArrayItem).filter(each =>
    each.indexOf(KEY_NAME_PREFIX_NUTRITION_COMPONENT) === 0)
    .forEach(key => {
      if (apiResponseBodyArrayItem[key] !== '') {
        amtNumDataList.push({
          key: key.trim(),
          value: parseFloat(apiResponseBodyArrayItem[key])
        });
      }
    });

  return amtNumDataList.map(elem =>
    new NutritionComponent({
      name: AmtNumDataType[elem.key].name,
      label: AmtNumDataType[elem.key].label,
      value: elem.value,
      unit: AmtNumDataType[elem.key].unit,
    })
  );
}

/**
 * toSearchFoodNutritionResponse
 * @param apiResponseBodyArrayItem - gov food api 통해 받은 응답 객체의 item 리스트
 */
export function toFoodNutrition(apiResponseBodyArrayItem: Record<string, any>): FoodNutrition {
  return new FoodNutrition({
    num: apiResponseBodyArrayItem.NUM,
    foodCode: apiResponseBodyArrayItem.FOOD_CD,
    foodNameKr: apiResponseBodyArrayItem.FOOD_NM_KR,
    dbGroupCode: apiResponseBodyArrayItem.DB_GRP_CM,
    dbGroupName: apiResponseBodyArrayItem.DB_GRP_NM,
    foodOriginCode: apiResponseBodyArrayItem.FOOD_OR_CD,
    foodOriginName: apiResponseBodyArrayItem.FOOD_OR_NM,
    foodCategory1Code: apiResponseBodyArrayItem.FOOD_CAT1_CD,
    foodCategory1Name: apiResponseBodyArrayItem.FOOD_CAT1_NM,
    foodRepresentCode: apiResponseBodyArrayItem.FOOD_REF_CD,
    foodRepresentName: apiResponseBodyArrayItem.FOOD_REF_NM,
    foodCategory2Code: apiResponseBodyArrayItem.FOOD_CAT2_CD,
    foodCategory2Name: apiResponseBodyArrayItem.FOOD_CAT2_NM,
    foodCategory3Code: apiResponseBodyArrayItem.FOOD_CAT3_CD,
    foodCategory3Name: apiResponseBodyArrayItem.FOOD_CAT3_NM,
    foodCategory4Code: apiResponseBodyArrayItem.FOOD_CAT4_CD,
    foodCategory4Name: apiResponseBodyArrayItem.FOOD_CAT4_NM,
    servingSize: apiResponseBodyArrayItem.SERVING_SIZE,
    subReferenceCode: apiResponseBodyArrayItem.SUB_REF_CM,
    subReferenceName: apiResponseBodyArrayItem.SUB_REF_NAME,
    nutritionalAmountPerServing: apiResponseBodyArrayItem.NUTRI_AMOUNT_SERVING,
    foodWeight: apiResponseBodyArrayItem.Z10500,
    itemReportNum: apiResponseBodyArrayItem.ITEM_REPORT_NO,
    makerName: apiResponseBodyArrayItem.MAKER_NM,
    importManufacturerName: apiResponseBodyArrayItem.IMP_MANUFAC_NM,
    sellerManufacturerName: apiResponseBodyArrayItem.SELLER_MANUFAC_NM,
    importYesOrNo: apiResponseBodyArrayItem.IMP_YN,
    nationCode: apiResponseBodyArrayItem.NATION_CM,
    nationName: apiResponseBodyArrayItem.NATION_NM,
    creationMethodCode: apiResponseBodyArrayItem.CRT_MTH_CD,
    creationMethodName: apiResponseBodyArrayItem.CRT_MTH_NM,
    researchDate: apiResponseBodyArrayItem.RESEARCH_YMD,
    updateDate: apiResponseBodyArrayItem.UPDATE_YMD,
    nutritionComponents: toNutritionComponent(apiResponseBodyArrayItem),
  });
}

/**
 * toAmtCodeTypeResponse AmtNumDataType 객체 AmtCodeTypeResponse 으로 전환
 * @param amtNumDataType - AmtNumDataType 객체
 */
export function toAmtCodeTypeResponse(amtNumDataType: typeof AmtNumDataType): AmtCodeTypeResponse {
  const amtCodeTypeItems = Object.keys(amtNumDataType)
    .map(code => {
      return new AmtCodeTypeItem({
        code,
        label: amtNumDataType[code].label,
        name: amtNumDataType[code].name,
        unit: amtNumDataType[code].unit,
      });
    });
  return new AmtCodeTypeResponse(amtCodeTypeItems);
} 