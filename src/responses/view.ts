import { BaseChannel, BaseResponse, NumberString } from "./index"

const DETAIL_TITLE = "우리말샘 개발 지원(Open API) - 사전 내용 검색" as const
const DETAIL_DESCRIPTION =
  "우리말샘 개발 지원(Open API) - 사전 내용 검색 결과" as const

export type ViewResponse = BaseResponse<ViewChannel>

export interface ViewChannel extends BaseChannel<ViewItem> {
  /** 우리말샘 오픈 API 제목 */
  title: typeof DETAIL_TITLE

  /** 우리말샘 오픈 API 설명 */
  description: typeof DETAIL_DESCRIPTION
}

export interface ViewItem {
  /** 대상 코드 */
  target_code: NumberString

  /** 다의어 번호 (고유한 구분 KEY 값 – 다의어 묶음 정보로 사용) */
  group_code: NumberString

  /** 다의어 순번 (다의어 묶음 정보로 사용) */
  group_order: NumberString

  /** 형태 항목을 포함하는 컨테이너 */
  word_info: WordInfo[]

  /** 의미 항목을 포함하는 컨테이너 */
  sense_info: SenseInfo[]
}

export interface WordInfo {
  /** 표제어 */
  word: string

  /** 구성 단위 */
  word_unit: string

  /** 고유어 여부 */
  word_type: string

  /** 원어 항목을 포함하는 컨테이너 */
  original_language_info?: OriginalLanguageInfo[]

  /** 표제어 발음 항목을 포함하는 컨테이너 */
  pronunciation_info?: PronunciationInfo[]

  /** 활용,준말 항목을 포함하는 컨테이너 */
  conju_info?: ConjugationInfo[]

  /** 어원 */
  origin?: string

  /** 이형태 */
  allomorph?: string
}

export interface OriginalLanguageInfo {
  original_language: string
  language_type: string
}

export interface PronunciationInfo {
  pronunciation: string
}

export interface ConjugationAndAbbreviationInfo {
  conjugation_info?: ConjugationInfo
  abbreviation_info?: AbbreviationInfo
}

export interface ConjugationInfo {
  conjugation: string
  pronunciation_info?: PronunciationInfo
}

export interface AbbreviationInfo {
  abbreviation: string
  pronunciation_info?: PronunciationInfo
}

export interface SenseInfo {
  /** 의미 번호 (3자리 정수)*/
  sense_no: string
  pos?: string
  type: string
  definition: string
  definition_original: string
  scientific_name?: string
  pattern_info?: {
    pattern: string
  }
  grammar_info?: {
    grammar: string
  }
  cat_info?: {
    cat: string
  }
  region_info?: {
    region: string
  }
  example_info?: ExampleInfo[]
  relation_info?: {
    word: string
    type: string
    link_target_code: string
    link: string
  }
  translation_info?: {
    translation: string
    language_type: string
  }
  history_info?: {
    word_form?: string
    desc?: string
    allomorph?: string
    remark?: string
    history_sense_info?: {
      definition: string
      history_century_info?: {
        century?: string
        mark?: string
        history_example_info?: {
          example?: string
          source?: string
          origin?: string
          translation?: string
        }
      }
    }
  }
  multimedia_info?: {
    label: string
    type: string
    link: string
  }
  norm_info?: {
    type: string
    role?: string
    desc?: string
  }
  proverb_info?: {
    word: string
    definition: string
    type: string
    link_target_code: string
    link: string
  }
  sl_info_link: string
}

export interface ExampleInfo {
  example: string
  source?: string
  origin?: string
  translation?: string
  region?: string
}
