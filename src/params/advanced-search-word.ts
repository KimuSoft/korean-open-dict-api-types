import { AdvancedSearchBaseParam } from "./advanced-search-base"
import { SearchPartType } from "./search-base"

/**
 * https://opendict.korean.go.kr/api/search (`part`: `"word"`, `advanced`: `"y"`)
 */
export interface AdvancedSearchWordParam extends AdvancedSearchBaseParam {
  part?: SearchPartType.Word

  /** 정렬 기준 (기본값 dict)
   * dict: 우리말샘 순
   * popular: 많이 찾은 순
   * date: 새로 올린 순
   */
  sort?: SearchSortType
}

export enum SearchSortType {
  /** 정확도 기준 정렬 (우리말샘 순) */
  Accuracy = "dict",

  /** 많이 찾은 순 정렬 */
  Popular = "popular",

  /** 최신순 */
  Latest = "date",
}
