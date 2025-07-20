import { AxiosResponse } from 'axios';

export interface ApiResponseBody {
  header: {
    resultCode: string;
  };
  body: any;
}

export interface PagingInfo {
  numOfRows: number;
  pageNo: string;
  totalCount: string;
  [key: string]: any;
}

export function extractBodyFromResponse(res: AxiosResponse<ApiResponseBody>): any {
  const data = res.data;
  if (!data.header || !data.header.resultCode || data.header.resultCode != '00') {
    throw Error(`gov api error: ${data.body}`);
  }
  return data.body;
}

export function extractItemArrayOrDefualtEmptyArrayFromBody(body: any): any[] {
  let result: any[] = [];
  if (body && body.items) {
    if (!Array.isArray(body.items)) {
      result = [body.items];
    } else {
      result = body.items;
    }
  }
  return result;
}

export function extractPagingInfoOrDefaultEmptyObjectFromBody(body: any, appendObject: Record<string, any> = {}): PagingInfo {
  let paging: PagingInfo = {
    numOfRows: Number(body.numOfRows),
    pageNo: body.pageNo,
    totalCount: body.totalCount,
  };

  Object.keys(appendObject).forEach(key => {
    paging[key] = appendObject[key];
  });

  return paging;
} 