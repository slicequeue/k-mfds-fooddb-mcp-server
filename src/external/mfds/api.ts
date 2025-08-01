import axios, { AxiosInstance } from 'axios';
import { extractBodyFromResponse } from './util';
import { config } from '../../config';

const DataType = {
  XML: 'xml',
  JSON: 'json',
} as const;

type DataType = typeof DataType[keyof typeof DataType];

const API_URL = 'http://apis.data.go.kr/1471000/FoodNtrCpntDbInfo02';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    serviceKey: config.govApi.key,
    type: DataType.JSON,
  }
});

export interface FoodNutritionApiParams {
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

// 영양 성분 조회
export async function getFoodNutritionComponentDatabaseInquery(
  foodNameKr: string = '', 
  researchYearMonthDate: string = '', 
  makerName: string = '',
  pageNo: number = 1, 
  numOfRows: number = 10,
  type: 'xml' | 'json' = 'json',
  foodCategory1Name: string = '',
  itemReportNo: string = '',
  updateDate: string = '',
  dbClassName: string = '',
): Promise<any> {
  const res = await axiosInstance.get('/getFoodNtrCpntDbInq02', {
    params: {
      FOOD_NM_KR: foodNameKr,
      RESEARCH_YMD: researchYearMonthDate,
      MAKER_NM: makerName,
      pageNo,
      numOfRows,
      type,
      FOOD_CAT1_NM: foodCategory1Name,
      ITEM_REPORT_NO: itemReportNo,
      UPDATE_DATE: updateDate,
      DB_CLASS_NM: dbClassName,
    }
  }); // 응답 형태 주소: https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15127578#/API%20%EB%AA%A9%EB%A1%9D/getFoodNtrCpntDbInq02
  return extractBodyFromResponse(res);
} 