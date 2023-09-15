import { SearchBaseParam, SearchPartType } from "./search-base"

/**
 * https://opendict.korean.go.kr/api/search (`part`: `"exam"`, `advanced`: `"n"`)
 */
export interface SearchExampleParam extends SearchBaseParam {
  part: SearchPartType.Example
  advanced?: "n"
}
