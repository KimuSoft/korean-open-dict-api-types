Simple type definitions for the [**Korean Open Dict Open API**](https://opendict.korean.go.kr/service/openApiInfo).

대한민국 국립국어원에서 운영하는 우리말샘 오픈 API의 타입스크립트 타입 정의입니다.

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.js.org/):

```sh
npm install korean-open-dict-api-types
yarn add korean-open-dict-api-types
pnpm add korean-open-dict-api-types
```

## Docs

### Search API

- **Endpoint**: _GET_ `https://opendict.korean.go.kr/api/search`
- **Params**
  - _interface_ `SearchParam`
  - _interface_ `SearchWordParam`
  - _interface_ `SearchExampleParam`
  - _interface_ `AdvancedSearchParam`
  - _interface_ `AdvancedSearchWordParam`
  - _interface_ `AdvancedSearchExampleParam`
- **Response**
  - _interface_ `SearchResponse`

### View API

- **Endpoint**: _GET_ `https://opendict.korean.go.kr/api/view`
- **Params**
  - _interface_ `ViewParam`
  - _interface_ `ViewWordParam`
  - _interface_ `ViewExampleParam`
- **Response**
  - _interface_ `ViewResponse`

### Error Codes

- **Error Code**
  - _interface_ `KoreanOpenDictApiError`
    - _enum_ `KoreanOpenDictApiErrorCode`
