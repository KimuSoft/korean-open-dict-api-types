export type NumberString = `${number}`
export const KOREAN_OPEN_DICT_LINK = "http://opendict.korean.go.kr" as const

export interface BaseResponse<C extends BaseChannel = BaseChannel> {
  channel: C
}

export interface BaseChannel<I = unknown> {
  /** 우리말샘 URL */
  link: typeof KOREAN_OPEN_DICT_LINK

  /** 우리말샘 오픈 API 제목 */
  title: string

  /** 우리말샘 오픈 API 설명 */
  description: string

  /** 검색된 전체 어휘 개수 */
  total: NumberString

  /** 검색 결과를 생성한 시간 */
  lastBuildDate: string

  /** 개별 검색 결과를 포함하는 컨테이너. */
  item: I
}

export * from "./search"
export * from "./view"
