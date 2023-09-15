import { AdvancedSearchBaseParam } from "./advanced-search-base"
import { SearchPartType } from "./search-base"

/**
 * https://opendict.korean.go.kr/api/search (`part`: `"exam"`, `advanced`: `"y"`)
 */
export interface AdvancedSearchExampleParam extends AdvancedSearchBaseParam {
  part: SearchPartType.Example
}
