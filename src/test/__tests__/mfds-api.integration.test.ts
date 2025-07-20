import { getFoodNutritionComponentDatabaseInquery } from '@/external/mfds/api';
import { searchFoodNutritionInfo } from '@/external/mfds/service';
import { SearchFoodNutritionRequest } from '@/external/mfds/dtos/SearchFoodNutritionRequest';

describe('MFDS API E2E 테스트 (실제 API 호출)', () => {
  it('getFoodNutritionComponentDatabaseInquery - 실제 API 호출', async () => {
    const result = await getFoodNutritionComponentDatabaseInquery(
      '우유', // 실제 존재하는 식품명
      '',
      ''
    );
    expect(result).toBeDefined();
    expect(result.items.length).toBeGreaterThan(0);
    expect(result.items[0].FOOD_NM_KR).toContain('우유');
  });

  it('searchFoodNutritionInfo - 실제 API 호출', async () => {
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
}); 