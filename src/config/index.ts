import dotenv from 'dotenv';

// .env 파일 로드
dotenv.config();

export interface Config {
  govApi: {
    key: string;
  };
  log: {
    level: string;
  };
}

// 환경변수 검증 함수
function validateConfig(): Config {
  const govApiKey = process.env.GOV_API_KEY;
  if (!govApiKey) {
    throw new Error('GOV_API_KEY 환경변수가 설정되지 않았습니다.');
  }

  return {
    govApi: {
      key: govApiKey,
    },
    log: {
      level: process.env.LOG_LEVEL || 'info',
    },
  };
}

// 설정 객체 export
export const config: Config = validateConfig(); 