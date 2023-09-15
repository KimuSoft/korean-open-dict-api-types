import { SearchBaseParam, SearchPartType } from "./search-base"

/**
 * https://opendict.korean.go.kr/api/search (`part`: `"word"`, `advanced`: `"n"`)
 */
export interface SearchWordParam extends SearchBaseParam {
  part?: SearchPartType.Word
  advanced?: "n"
}
