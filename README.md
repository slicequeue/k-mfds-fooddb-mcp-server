# K-MFDS FoodDB MCP Server

식품의약품안전처(K-MFDS) 식품 데이터베이스에 접근하기 위한 Model Context Protocol (MCP) 서버입니다.

## 기능

- 식품 정보 검색
- 영양 성분 조회
- 식품 안전 정보 제공

## 설치

```bash
npm install
```

## 환경변수 설정

1. `.env.example` 파일을 `.env`로 복사합니다:
```bash
cp .env.example .env
```

2. `.env` 파일을 편집하여 필요한 환경변수를 설정합니다:
```env
# MFDS (식품의약품안전처) API 설정
GOV_API_KEY=your_government_api_key_here

# 기타 설정
LOG_LEVEL=info
```

### 필수 환경변수

- `GOV_API_KEY`: 식품의약품안전처 API 키 (필수)

### 선택적 환경변수

- `LOG_LEVEL`: 로그 레벨 (기본값: info)

## 개발

```bash
npm run dev
```

## 빌드

```bash
npm run build
```

## 사용법

이 MCP 서버는 Model Context Protocol을 통해 식품 데이터베이스에 접근할 수 있도록 합니다.

## 라이선스

ISC 