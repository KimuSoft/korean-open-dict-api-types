export interface KoreanOpenDictApiError {
  error_code: KoreanOpenDictApiErrorCode
  message: string
}

export enum KoreanOpenDictApiErrorCode {
  /** 시스템 에러 */
  SystemError = "000",

  /** 등록되지 않은 키 */
  UnregisteredKey = "020",

  /** 일시적으로 사용 중지된 인증키 */
  KeyUnavailable = "021",

  /** 부적절한 쿼리 요청. query 필드 자체가 없는 경우에 발생하는 에러 메시지 */
  IncorrectQueryRequest = "100",

  /** 부적절한 검색 필드 */
  InvalidTargetValue = "101",

  /** 부적절한 검색 방식 */
  InvalidMethodValue = "102",

  /** 부적절한 검색 개수 */
  InvalidNumValue = "103",

  /** 부적절한 start 값 */
  InvalidStartValue = "104",

  /** 부적절한 정렬순 */
  InvalidSortValue = "105",

  /** 부적절한 자세히 찾기 여부 */
  InvalidAdvancedValue = "106",

  /** 부적절한 언어 값 */
  InvalidLangValue = "107",

  /** 부적절한 규범 유형 값 */
  InvalidNormValue = "108",

  /** 부적절한 검색 대상 값 */
  InvalidPartValue = "109",

  /** 부적절한 type1 값 */
  InvalidType1Value = "200",

  /** 부적절한 type2 값 */
  InvalidType2Value = "201",

  /** 부적절한 type3 값 */
  InvalidType3Value = "202",

  /** 부적절한 type4 값 */
  InvalidType4Value = "203",

  /** 부적절한 품사 */
  InvalidPosValue = "210",

  /** 부적절한 방언 지역 */
  InvalidRegionValue = "211",

  /** 부적절한 전문 분야 */
  InvalidCatValue = "212",

  /** 부적절한 다중 매체(멀티미디어) */
  InvalidMultimediaValue = "213",

  /** 부적절한 음절수 시작 */
  InvalidLetterStartValue = "214",

  /** 부적절한 음절수 종료 */
  InvalidLetterEndValue = "215",

  /** 부적절한 올린 날짜 시작일 */
  InvalidDateStartValue = "216",

  /** 부적절한 올린 날짜 종료일 */
  InvalidDateEndValue = "217",
}
