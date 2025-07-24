# K-MFDS FoodDB MCP Server

> **식품의약품안전처(K-MFDS) 식품영양성분DB를 MCP(Model Context Protocol) 도구로 바로 활용!**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/slicequeue/k-mfds-fooddb-mcp-server)
[![npm](https://img.shields.io/badge/npm-package-green?style=flat-square&logo=npm)](https://www.npmjs.com/package/k-mfds-fooddb-mcp-server)

## 실행 화면

|예시1 일반 검색|
|---|
|<img width="800" alt="image" src="https://github.com/user-attachments/assets/2781d2d6-2566-4ddb-8afb-64d2dea86816" />|

|예시2 응용 검색|
|---|
|<img width="800" alt="image" src="https://github.com/user-attachments/assets/4b2baa3a-523e-49be-a916-ebe8cd01264e" /><img width="800" alt="image" src="https://github.com/user-attachments/assets/39719b71-f2de-44b9-9b50-a6e5dba4da6f" />|

**사용방법은 아래 `🛠️ 사용 가능한 MCP 도구`를 참고해주세요 :)**

---

## ✨ 빠른 시작 (npx)

```bash
npx k-mfds-fooddb-mcp-server
```

- MCP 호환 플랫폼(예: ModelContext, MCP SDK 등)에서 바로 실행할 수 있습니다.
- 표준 입력/출력(STDIO) 기반 MCP 서버로 동작합니다.

---

## 🚀 MCP 클라이언트 설정

### Gemini (Google AI Studio)

1. **Google AI Studio**에서 새 프로젝트 생성
2. **Tools** 섹션에서 **Add tool** 클릭
3. **MCP Server** 선택
4. 설정:
   ```
   Name: K-MFDS FoodDB
   Command: npx k-mfds-fooddb-mcp-server
   ```
5. **Save** 클릭

### Cursor

1. **Cursor** 설정에서 **Extensions** → **MCP** 활성화
2. `~/.cursor/mcp_servers.json` 파일 생성/수정:
   ```json
   {
     "mcpServers": {
       "k-mfds-fooddb": {
         "command": "npx",
         "args": ["k-mfds-fooddb-mcp-server"],
         "env": {
           "GOV_API_KEY": "발급받은_식약처_API_키"
         }
       }
     }
   }
   ```
3. Cursor 재시작

> 💡 **환경변수 설정**: `env` 섹션에 `GOV_API_KEY`를 추가하세요. API 키는 [공공데이터포털](https://www.data.go.kr/data/15000161/openapi.do)에서 발급받을 수 있습니다.

### Continue

1. **Continue** 설정에서 **MCP Servers** 섹션으로 이동
2. 새 서버 추가:
   ```yaml
   Name: k-mfds-fooddb
   Command: npx k-mfds-fooddb-mcp-server
   Environment Variables:
     GOV_API_KEY: 발급받은_식약처_API_키
   ```
3. **Save** 클릭

> 💡 **환경변수 설정**: Environment Variables 섹션에 `GOV_API_KEY`를 추가하세요.

### ModelContext

1. **ModelContext** 설정에서 **MCP Servers** 탭
2. **Add Server** 클릭
3. 설정:
   ```json
   {
     "name": "K-MFDS FoodDB",
     "command": "npx",
     "args": ["k-mfds-fooddb-mcp-server"],
     "env": {
       "GOV_API_KEY": "발급받은_식약처_API_키"
     }
   }
   ```
4. **Connect** 클릭

> 💡 **환경변수 설정**: `env` 섹션에 `GOV_API_KEY`를 추가하세요.

### 기타 MCP 호환 클라이언트

대부분의 MCP 호환 클라이언트에서 다음과 같이 설정:

```json
{
  "name": "k-mfds-fooddb",
  "command": "npx",
  "args": ["k-mfds-fooddb-mcp-server"],
  "env": {
    "GOV_API_KEY": "발급받은_식약처_API_키"
  }
}
```

> 💡 **환경변수 설정**: `env` 섹션에 `GOV_API_KEY`를 추가하세요. API 키는 [공공데이터포털](https://www.data.go.kr/data/15000161/openapi.do)에서 발급받을 수 있습니다.

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
    {
      "code": "AMT_NUM1",
      "name": "에너지",
      "label": "에너지(kcal)",
      "unit": "kcal"
    },
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
- 저장소: [GitHub Repository](https://github.com/slicequeue/k-mfds-fooddb-mcp-server)

---

## 📄 라이선스

ISC
