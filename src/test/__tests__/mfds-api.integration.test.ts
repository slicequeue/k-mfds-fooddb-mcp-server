import { getFoodNutritionComponentDatabaseInquery } from '@/external/mfds/api';
import { searchFoodNutritionInfo } from '@/external/mfds/service';
import { SearchFoodNutritionRequest } from '@/external/mfds/dtos/SearchFoodNutritionRequest';

describe('MFDS API E2E 테스트 (실제 API 호출)', () => {
  it('getFoodNutritionComponentDatabaseInquery - 기본 검색 (우유)', async () => {
    const result = await getFoodNutritionComponentDatabaseInquery(
      '우유', // 실제 존재하는 식품명
      '',
      ''
    );
    expect(result).toBeDefined();
    expect(result.items.length).toBeGreaterThan(0);
    expect(result.items[0].FOOD_NM_KR).toContain('우유');
  });

  it('getFoodNutritionComponentDatabaseInquery - 업체명으로 검색 (크리스피크림도넛)', async () => {
    const result = await getFoodNutritionComponentDatabaseInquery(
      '', // 식품명 없음
      '',
      '크리스피크림도넛' // 업체명으로 검색
    );
    expect(result).toBeDefined();
    expect(result.items.length).toBeGreaterThan(0);
    expect(result.items[0].MAKER_NM).toContain('크리스피크림도넛');
  });

  it('getFoodNutritionComponentDatabaseInquery - 식품대분류명으로 검색 (빵 및 과자류)', async () => {
    const result = await getFoodNutritionComponentDatabaseInquery(
      '', // 식품명 없음
      '',
      '', // 업체명 없음
      1, // pageNo
      10, // numOfRows
      'json', // type
      '빵 및 과자류' // 식품대분류명
    );
    expect(result).toBeDefined();
    expect(result.items.length).toBeGreaterThan(0);
    expect(result.items[0].FOOD_CAT1_NM).toBe('빵 및 과자류');
  });

  it('searchFoodNutritionInfo - 기본 검색 (우유)', async () => {
    const req = new SearchFoodNutritionRequest({
      foodNameKr: '우유',
      researchYearMonthDate: '', // 날짜 없이 요청
      makerName: ''
    });
    const result = await searchFoodNutritionInfo(req);
    console.log('실제 API 응답:', result);
    expect(result).toBeDefined();
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].foodNameKr).toContain('우유');
  });

  it('searchFoodNutritionInfo - 업체명으로 검색', async () => {
    const req = new SearchFoodNutritionRequest({
      foodNameKr: '',
      researchYearMonthDate: '',
      makerName: '크리스피크림도넛',
      pageNo: 1,
      numOfRows: 5,
      type: 'json'
    });
    const result = await searchFoodNutritionInfo(req);
    console.log('업체명 검색 결과:', result);
    expect(result).toBeDefined();
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].makerName).toContain('크리스피크림도넛');
  });

  it('searchFoodNutritionInfo - 식품대분류명으로 검색', async () => {
    const req = new SearchFoodNutritionRequest({
      foodNameKr: '',
      researchYearMonthDate: '',
      makerName: '',
      foodCategory1Name: '빵 및 과자류',
      pageNo: 1,
      numOfRows: 3
    });
    const result = await searchFoodNutritionInfo(req);
    console.log('식품대분류명 검색 결과:', result);
    expect(result).toBeDefined();
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0].foodCategory1Name).toBe('빵 및 과자류');
  });
}); 