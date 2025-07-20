export interface AmtCodeTypeItemParams {
  code: string;
  label: string;
  name: string;
  unit: string;
}

export class AmtCodeTypeItem {
  code: string;
  label: string;
  name: string;
  unit: string;

  constructor({
    code,
    label,
    name,
    unit,
  }: AmtCodeTypeItemParams) {
    this.code = code;
    this.label = label;
    this.name = name;
    this.unit = unit;
  }
}

export class AmtCodeTypeResponse {
  static AmtCodeTypeItem = AmtCodeTypeItem;

  /** AmtCodeTypeItem 리스트 */
  private _items: AmtCodeTypeItem[] = [];

  constructor(amtCodeTypes: AmtCodeTypeItem[]) {
    this.items = amtCodeTypes;
  }

  get items(): AmtCodeTypeItem[] {
    return this._items;
  }

  set items(values: AmtCodeTypeItem[]) {
    if (!Array.isArray(values) || !values.every(each => each instanceof AmtCodeTypeItem)) {
      throw new Error('items 형식에 맞지 않습니다.');
    }
    this._items = values;
  }
} 