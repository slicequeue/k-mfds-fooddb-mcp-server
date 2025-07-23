import dotenv from 'dotenv';

// 테스트 환경에서 .env 파일 로드
dotenv.config({ path: '.env.test' });

// Jest 전역 설정
beforeAll(() => {
  // 테스트 시작 전 설정
  console.log('테스트 환경 설정 완료');
});

afterAll(() => {
  // 테스트 종료 후 정리
  console.log('테스트 완료');
}); 