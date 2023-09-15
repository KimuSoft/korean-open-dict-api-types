import { BaseParam } from "./index"

/**
 * https://opendict.korean.go.kr/api/search
 */
export interface SearchBaseParam extends BaseParam {
  /** 검색어 */
  q: string

  /** 검색의 시작 번호 (기본값 1, 1~1000) */
  start?: number

  /** 검색 결과의 개수 (기본값 10, 10~100) */
  num?: number

  /** 검색 대상 (기본값 word) */
  part?: SearchPartType

  /** 자세히 찾기 여부 */
  advanced?: "n" | "y"
}

export enum SearchPartType {
  /** 단어 */
  Word = "word",

  /** 용례 */
  Example = "exam",
}
