import { AdvancedSearchWordParam } from "./advanced-search-word"
import { AdvancedSearchExampleParam } from "./advanced-search-example"
import { SearchWordParam } from "./search-word"
import { SearchExampleParam } from "./search-example"

export interface BaseParam {
  /** 우리말샘 인증키 */
  key: string

  /** 요청 타입 (기본값은 xml) */
  req_type?: "json" | "xml"
}

export type SearchParam =
  | SearchWordParam
  | SearchExampleParam
  | AdvancedSearchWordParam
  | AdvancedSearchExampleParam

export type AdvancedSearchParam =
  | AdvancedSearchWordParam
  | AdvancedSearchExampleParam

export * from "./advanced-search-base"
export * from "./advanced-search-example"
export * from "./advanced-search-word"
export * from "./search-base"
export * from "./search-example"
export * from "./search-word"
export * from "./view"
