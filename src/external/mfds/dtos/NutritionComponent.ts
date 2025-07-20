export interface NutritionComponentParams {
  name: string;
  label: string;
  value: number;
  unit: string;
}

export class NutritionComponent {
  /** 영양소명 */
  name: string;
  /** 화면표시용 레이블 */
  label: string;
  /** 영양소값 */
  value: number;
  /** 영양소 단위 */
  unit: string;

  constructor({
    name,
    label,
    value,
    unit,
  }: NutritionComponentParams) {
    this.name = name;
    this.label = label;
    this.value = value;
    this.unit = unit;
  }
} 