import { BaseParam } from "./index"

/**
 * https://opendict.korean.go.kr/api/view
 */
export interface ViewParam extends BaseParam {
  method: ViewFindMethod
  q: string
}

export enum ViewFindMethod {
  /** 단어 정보 */
  WordInfo = "word_info",

  /** 대상 코드 */
  TargetCode = "target_code",
}
