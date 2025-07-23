# K-MFDS FoodDB MCP Server

> **식품의약품안전처(K-MFDS) 식품영양성분DB를 MCP(Model Context Protocol) 도구로 바로 활용!**

---

## ✨ 빠른 시작 (npx)

```bash
npx k-mfds-fooddb-mcp-server
```

- MCP 호환 플랫폼(예: ModelContext, MCP SDK 등)에서 바로 실행할 수 있습니다.
- 표준 입력/출력(STDIO) 기반 MCP 서버로 동작합니다.

---

## 📦 설치 (npm)

```bash
npm install -g k-mfds-fooddb-mcp-server
# 또는 프로젝트에 설치
npm install k-mfds-fooddb-mcp-server
```

---

## ⚡ 환경 변수 설정

1. `.env` 파일을 프로젝트 루트에 생성하세요. (예시: `env.example` 참고)
2. 필수 항목:
   - `GOV_API_KEY`: 식품의약품안전처 OpenAPI 키

```env
GOV_API_KEY=발급받은_식약처_API_키
```

> API 키는 [공공데이터포털](https://www.data.go.kr/data/15000161/openapi.do)에서 신청/발급받을 수 있습니다.

---

## 🛠️ 사용 가능한 MCP 도구

### 1. 식품 검색 도구 (`searchFoodNutrition`)
- **설명**: 식품명, 제조사, 카테고리 등 다양한 조건으로 식품 영양성분 정보를 검색합니다.
- **입력 파라미터**:
  - `foodNameKr`: 식품명 (예: "사과")
  - `makerName`: 제조사명 (예: "농심")
  - `foodCategory1Name`: 식품 대분류명 (예: "과일류")
  - `itemReportNo`: 품목제조보고번호
  - `researchYearMonthDate`: 데이터 생성일자 (YYYYMMDD)
  - `pageNo`: 페이지 번호 (기본값: 1)
  - `numOfRows`: 한 페이지 결과수 (기본값: 10, 최대: 100)
  - `updateDate`: 데이터 수정일자 (YYYYMMDD)
  - `dbClassName`: 품목대표/상용제품 구분

#### ✅ 예시 요청
```json
{
  "foodNameKr": "사과",
  "numOfRows": 5
}
```

#### ✅ 예시 응답
```json
{
  "data": [
    {
      "foodNameKr": "사과",
      "makerName": "농협",
      "foodCategory1Name": "과일류",
      "servingSize": "100g",
      "nutritionComponents": [
        { "name": "열량", "value": "52", "unit": "kcal" },
        { "name": "단백질", "value": "0.3", "unit": "g" }
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

---

### 2. 영양성분 코드 조회 도구 (`getNutritionComponentTypes`)
- **설명**: 식품영양성분DB에서 제공하는 영양성분 코드/이름/단위 목록을 조회합니다.
- **입력 파라미터**: 없음

#### ✅ 예시 응답
```json
{
  "items": [
    { "code": "AMT_NUM1", "name": "에너지", "label": "에너지(kcal)", "unit": "kcal" },
    { "code": "AMT_NUM2", "name": "수분", "label": "수분(g)", "unit": "g" },
    { "code": "AMT_NUM3", "name": "단백질", "label": "단백질(g)", "unit": "g" }
    // ... 이하 생략
  ]
}
```

---

## 🏃 MCP 서버 직접 실행 예시

```bash
npx k-mfds-fooddb-mcp-server
```
- MCP 플랫폼에서 자동으로 도구를 인식/등록합니다.
- STDIO 기반이므로, MCP SDK/ModelContext 등에서 바로 연결해 사용할 수 있습니다.

---

## 🏗️ 프로젝트 구조 (참고)

```
src/
├── config/           # 환경변수 및 설정
├── external/         # 외부 API 연동/매핑
├── tools/            # MCP 도구 구현
└── index.ts          # MCP 서버 진입점
```

---

## 🧪 테스트

```bash
npm test
```

---

## 🤝 기여 및 문의

- Pull Request/이슈 환영합니다!
- 문의: [GitHub Issues](https://github.com/slicequeue/k-mfds-fooddb-mcp-server/issues)

---

## 📄 라이선스

ISC 