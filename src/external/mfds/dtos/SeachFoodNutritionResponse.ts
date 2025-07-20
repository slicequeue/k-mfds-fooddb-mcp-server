import { FoodNutrition } from './FoodNutrition';

export interface PagingInfo {
  numOfRows: number;
  pageNo: string;
  totalCount: string;
  [key: string]: any;
}

export interface SeachFoodNutritionResponseParams {
  data: FoodNutrition[];
  paging: PagingInfo;
}

export class SeachFoodNutritionResponse {
  data: FoodNutrition[];
  paging: PagingInfo;

  constructor({
    data,
    paging,
  }: SeachFoodNutritionResponseParams) {
    this.data = data;
    this.paging = paging;
  }
} 