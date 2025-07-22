# K-MFDS FoodDB MCP Server

식품의약품안전처(K-MFDS) 식품영양성분DB API를 활용한 Model Context Protocol (MCP) 서버입니다. 식품 검색 및 영양성분 정보 조회 기능을 제공합니다.

## 🚀 주요 기능

### 1. 식품 검색 도구 (`searchFoodNutrition`)
- **검색 조건**: 식품명, 제조사, 카테고리, 품목제조보고번호
- **응답 형식**: JSON/XML 지원
- **페이징**: 페이지 번호, 결과 수 설정 가능
- **상세 정보**: 영양성분, 섭취량, 제조사 정보 포함

### 2. 영양성분 코드 조회 도구 (`getNutritionComponentTypes`)
- **영양성분 분류**: 식품의약품안전처 표준 분류
- **코드 정보**: 영양성분 코드 및 설명 제공

## 🛠️ 기술 스택

### 핵심 기술
- **TypeScript**: 타입 안전성 보장
- **MCP SDK**: Model Context Protocol 구현
- **Axios**: HTTP 클라이언트
- **Zod**: 스키마 검증

### 개발 도구
- **tsup**: 빠른 번들링 (84ms 빌드)
- **Jest**: 테스트 프레임워크
- **dotenv**: 환경변수 관리

## 📦 설치

```bash
# 저장소 클론
git clone https://github.com/slicequeue/k-mfds-fooddb-mcp-server.git
cd k-mfds-fooddb-mcp-server

# 의존성 설치
npm install
```

## 🔐 환경변수 설정

### 1. 환경변수 파일 생성

```bash
# .env 파일 생성 (env.example 참고)
cp env.example .env
```

### 2. API 키 발급 및 설정

1. **식품의약품안전처 API 키 발급**:
   - https://www.data.go.kr/data/15000161/openapi.do 방문
   - 식품영양성분DB API 신청 및 키 발급

2. **`.env` 파일 편집**:
```env
# 식품의약품안전처 API 키 (필수)
GOV_API_KEY=실제_API_키_입력

# 로그 레벨 (선택사항, 기본값: info)
# 가능한 값: error, warn, info, debug
LOG_LEVEL=info
```

### 필수 환경변수
- `GOV_API_KEY`: 식품의약품안전처 API 키

### 선택적 환경변수
- `LOG_LEVEL`: 로그 레벨 (기본값: info)

## 🚀 실행 방법

### 개발 환경
```bash
# 빌드
npm run build

# 서버 실행
npm start
```

### 프로덕션 환경
```bash
# 최적화된 빌드
npm run build:prod

# 서버 실행
npm start
```

### 개발 모드 (빌드 + 실행)
```bash
npm run dev
```

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 감시 모드
npm run test:watch

# 커버리지 리포트
npm run test:coverage
```

## 📊 API 응답 예시

### 식품 검색 결과
```json
{
  "data": [
    {
      "foodNameKr": "사과",
      "makerName": "농협",
      "foodCategory1Name": "과일류",
      "foodCategory2Name": "사과류",
      "foodCategory3Name": "사과",
      "servingSize": "100g",
      "nutritionComponents": [
        {
          "name": "열량",
          "value": "52",
          "unit": "kcal"
        },
        {
          "name": "단백질",
          "value": "0.3",
          "unit": "g"
        }
      ],
      "itemReportNum": "2020123456789",
      "researchDate": "20201201"
    }
  ],
  "paging": {
    "totalCount": "100",
    "pageNo": "1",
    "numOfRows": "10"
  }
}
```

## 🔄 MCP 프로토콜

### 도구 등록
```typescript
// 식품 검색 도구
server.registerTool('searchFoodNutrition', {
  title: 'searchFoodNutrition',
  description: '식품의약품안전처 식품영양성분DB에서 식품 정보를 검색합니다.',
  inputSchema: foodSearchSchema
}, foodSearchHandler);

// 영양성분 코드 조회 도구  
server.registerTool('getNutritionComponentTypes', {
  title: 'getNutritionComponentTypes',
  description: '식품의약품안전처 영양성분 코드를 조회합니다.',
  inputSchema: nutritionInfoSchema
}, nutritionInfoHandler);
```

### 사용 가능한 파라미터

#### 식품 검색 (`searchFoodNutrition`)
- `foodNameKr`: 검색할 식품명 (예: "사과", "김치")
- `makerName`: 제조사명 (예: "농심", "롯데")
- `foodCategory1Name`: 식품 대분류명 (예: "곡류", "채소류", "육류")
- `itemReportNo`: 품목제조보고번호
- `researchYearMonthDate`: 데이터 생성일자 (YYYYMMDD 형식)
- `pageNo`: 페이지 번호 (기본값: 1)
- `numOfRows`: 한 페이지 결과수 (기본값: 10, 최대: 100)
- `type`: 응답 데이터 형식 (기본값: json)
- `updateDate`: 데이터 수정일자 (YYYYMMDD 형식)
- `dbClassName`: 품목대표/상용제품 구분

#### 영양성분 코드 조회 (`getNutritionComponentTypes`)
- `pageNo`: 페이지 번호 (기본값: 1)
- `numOfRows`: 한 페이지 결과수 (기본값: 10, 최대: 100)
- `type`: 응답 데이터 형식 (기본값: json)

## 🏗️ 프로젝트 구조

```
src/
├── config/
│   └── index.ts              # 환경변수 및 설정
├── external/
│   └── mfds/
│       ├── api.ts            # HTTP 클라이언트 및 API 호출
│       ├── service.ts        # 비즈니스 로직 및 데이터 변환
│       ├── mapper.ts         # API 응답 데이터 매핑
│       ├── util.ts           # 유틸리티 함수
│       ├── dtos/             # 데이터 전송 객체
│       │   ├── SearchFoodNutritionRequest.ts
│       │   ├── SeachFoodNutritionResponse.ts
│       │   ├── FoodNutrition.ts
│       │   ├── NutritionComponent.ts
│       │   └── AmtCodeTypeResponse.ts
│       └── types/            # 타입 정의
│           └── AmtNumDataType.ts
├── tools/
│   ├── foodSearch.ts         # 식품 검색 도구
│   ├── nutritionInfo.ts      # 영양성분 코드 조회 도구
│   └── index.ts              # 도구 등록
├── test/
│   └── __tests__/
│       └── mfds-api.integration.test.ts  # 통합 테스트
└── index.ts                  # MCP 서버 진입점
```

## 📦 번들링 최적화

### 해결된 문제들
- ✅ **동적 require 오류**: Node.js 내장 모듈 문제 해결
- ✅ **경로 해석 문제**: import 경로 자동 해석
- ✅ **번들 크기 최적화**: 33.93 KB 단일 파일
- ✅ **빌드 속도**: 84ms로 매우 빠른 빌드

### tsup 설정
```json
{
  "scripts": {
    "build": "tsup src/index.ts --format esm --target node18 --outDir dist --external @modelcontextprotocol/sdk",
    "build:prod": "tsup src/index.ts --format esm --target node18 --outDir dist --external @modelcontextprotocol/sdk --minify"
  }
}
```

## 🎯 주요 성과

### 기능 완성도
- ✅ 식품 검색 기능 완전 구현
- ✅ 영양성분 정보 조회 기능 구현
- ✅ 페이징 및 필터링 지원
- ✅ 에러 처리 및 검증 로직

### 기술적 성과
- ✅ TypeScript 타입 안전성 확보
- ✅ 번들링 최적화로 배포 간소화
- ✅ 테스트 커버리지 확보
- ✅ 환경변수 보안 설정

### 개발 경험
- ✅ 빠른 빌드 속도 (84ms)
- ✅ 간단한 설정 (tsup CLI)
- ✅ 명확한 에러 메시지
- ✅ 완전한 타입 정의

## 🔮 향후 계획

### 기능 확장
- [ ] 식품 상세 정보 조회
- [ ] 영양성분 비교 기능
- [ ] 식품 추천 기능
- [ ] 사용자 정의 필터링

### 기술 개선
- [ ] 캐싱 시스템 도입
- [ ] 로깅 시스템 강화
- [ ] 모니터링 도구 연동
- [ ] 성능 최적화

## 📄 라이선스

ISC

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요. 