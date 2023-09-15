import { BaseChannel, BaseResponse, NumberString } from "./index"

export const SEARCH_WORD_TITLE =
  "우리말샘 개발 지원(Open API) - 사전 검색" as const

export const SEARCH_WORD_DESCRIPTION =
  "우리말샘 개발 지원(Open API) – 사전 검색 결과" as const

export type SearchResponse = BaseResponse<SearchChannel>

export interface SearchChannel extends BaseChannel<SearchWordItem[]> {
  /** 우리말샘 오픈 API 제목 */
  title: typeof SEARCH_WORD_TITLE

  /** 우리말샘 오픈 API 설명 */
  description: typeof SEARCH_WORD_DESCRIPTION

  /** 검색 결과 시작 번호 */
  start: NumberString

  /** 검색 결과로 제공하는 어휘 개수 */
  num: NumberString
}

export interface SearchWordItem {
  /** 표제어 */
  word: string

  /** 개별 의미를 포함하는 컨테이너 */
  sense: SearchWordSense[]
}

export interface SearchWordSense {
  /** 의미번호 (3자리 정수) */
  sense_no: NumberString

  /** 뜻풀이 */
  definition: string

  /** 품사. 구, 속담 (관용구는 품사가 없음) */
  pos?: string

  /** 사전 내용 보기 URL */
  link: string

  /** 범주(일반어, 지역어(방언), 북한어, 옛말) */
  type: string

  /** 전문 분야 */
  cat?: string

  /** 원어 */
  origin?: string

  /** 문형 */
  syntacticArgument?: string

  /** 문법 */
  syntacticAnnotation?: string

  /** 대상 코드 */
  target_code: string
}
