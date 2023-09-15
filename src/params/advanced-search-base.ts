import { SearchBaseParam } from "./search-base"

/**
 * https://opendict.korean.go.kr/api/search (`advanced`: `"y"`)
 */
export interface AdvancedSearchBaseParam extends SearchBaseParam {
  advanced: "y"

  /** 찾을 대상 (기본값 1) */
  target?: AdvancedSearchTarget

  /** 검색 방식 (기본값 exact) */
  method?: AdvancedSearchMethod

  /** 구분 1 (기본값 all) */
  type1?: AdvancedSearchType1[]

  /** 구분 2 (기본값 all) */
  type2?: AdvancedSearchType2[]

  /** 구분 3 (기본값 all) */
  type3?: AdvancedSearchType3[]

  /** 구분 4 (기본값 all) */
  type4?: AdvancedSearchType4[]

  /** 품사 (기본값 전체) */
  pos?: Pos[]

  /** 방언 지역 (기본값 전체) */
  region?: Region[]

  /** 전문 분야 (기본값 전체) */
  cat?: Category[]

  /** 언어 (기본값 전체) */
  lang?: Language

  /** 규범 유형 (기본값 전체) */
  norm?: Norm

  /** 다중 매체 (멀티미디어, 기본값 전체) */
  multimedia?: Multimedia[]

  /** 음절 수 시작 (기본값 1, 1~80) */
  letter_s?: number

  /** 음절 수 끝 (기본값 80, 1~80) */
  letter_e?: number

  /** 올린 날짜 시작일 */
  date_s?: number
}

export enum AdvancedSearchTarget {
  // 어휘 (표제어)
  Word = 1,

  // 원어 (요청 변수 `lang` 사용 가능)
  Origin = 2,

  // 어원
  Etymology = 3,

  // 발음
  Pronunciation = 4,

  // 활용
  Conjugation = 5,

  // 활용의 준말
  ConjugationAbbreviation = 6,

  // 문형
  SyntacticArgument = 7,

  // 문법
  SyntacticAnnotation = 8,

  // 뜻풀이
  Definition = 9,

  // 용례
  Example = 10,

  // 용례 출처
  ExampleSource = 11,

  // 대역어 (요청 변수 `lang` 사용 가능)
  Translation = 12,

  // 학명
  ScientificName = 13,

  // 수어 정보 (`method`는 `yes`, `no`로 고정, `q`는 무시됨.)
  SignLanguage = 14,

  // 규범 정보 (요청 변수 `norm` 사용 가능)
  Norm = 15,
}

export enum AdvancedSearchMethod {
  /** 일치 검색 */
  Exact = "exact",

  /** 포함 검색 */
  Include = "include",

  /** 시작 */
  Start = "start",

  /** 끝 */
  End = "end",

  /** 내용 있음 (`target`이 14인 경우) */
  HasContent = "yes",

  /** 내용 없음 (`target`이 14인 경우) */
  NoContent = "no",
}

export enum AdvancedSearchType1 {
  /** 전체 */
  All = "all",

  /** 단어 */
  Word = "word",

  /** 구 */
  Phrase = "phrase",

  /** 관용구 */
  Idiom = "idiom",

  /** 속담 */
  Proverb = "proverb",
}

export enum AdvancedSearchType2 {
  /** 전체 */
  All = "all",

  /** 고유어 */
  Native = "native",

  /** 한자어 */
  Chinese = "chinese",

  /** 외래어 */
  Loanword = "loanword",

  /** 혼종어 */
  Hybrid = "hybrid",
}

export enum AdvancedSearchType3 {
  /** 전체 */
  All = "all",

  /** 일반어 */
  General = "general",

  /** 지역어(방언) */
  Dialect = "dialect",

  /** 북한어 */
  NorthKorean = "nkorean",

  /** 옛말 */
  Ancient = "ancient",
}

export enum AdvancedSearchType4 {
  /** 전체 */
  All = "all",

  /** 일상어 (설정 시 요청 변수 `cat` 무시) */
  General = "general",

  /** 전문어 */
  Technical = "technical",
}

export enum Pos {
  /** 전체 */
  All = 0,

  /** 명사 */
  Noun = 1,

  /** 대명사 */
  Pronoun = 2,

  /** 수사 */
  Numeral = 3,

  /** 조사 */
  Postposition = 4,

  /** 동사 */
  Verb = 5,

  /** 형용사 */
  Adjective = 6,

  /** 관형사 */
  Determiner = 7,

  /** 부사 */
  Adverb = 8,

  /** 감탄사 */
  Exclamation = 9,

  /** 접사 */
  Affix = 10,

  /** 의존 명사 */
  DependentNoun = 11,

  /** 보조 동사 */
  AuxiliaryVerb = 12,

  /** 보조 형용사 */
  AuxiliaryAdjective = 13,

  /** 어미 */
  Ending = 14,

  /** 관형사·명사 */
  DeterminerNoun = 15,

  /** 수사·관형사 */
  NumeralDeterminer = 16,

  /** 명사·부사 */
  NounAdverb = 17,

  /** 감탄사·명사 */
  ExclamationNoun = 18,

  /** 대명사·부사 */
  PronounAdverb = 19,

  /** 대명사·감탄사 */
  PronounExclamation = 20,

  /** 동사·형용사 */
  VerbAdjective = 21,

  /** 관형사·감탄사 */
  DeterminerExclamation = 22,

  /** 부사·감탄사 */
  AdverbExclamation = 23,

  /** 의존명사·조사 */
  DependentNounPostposition = 24,

  /** 수사·관형사·명사 */
  NumeralDeterminerNoun = 25,

  /** 대명사·관형사 */
  PronounDeterminer = 26,

  /** 품사 없음 */
  None = 27,
}

export enum Region {
  /** 전체 */
  All = 0,

  /** 강원 */
  Gangwon = 1,

  /** 경기 */
  Gyeonggi = 2,

  /** 경남 */
  Gyeongnam = 3,

  /** 경북 */
  Gyeongbuk = 4,

  /** 경상 */
  Gyeongsang = 5,

  /** 전남 */
  Jeonnam = 6,

  /** 전라 */
  Jeolla = 7,

  /** 전북 */
  Jeonbuk = 8,

  /** 제주 */
  Jeju = 9,

  /** 충남 */
  Chungnam = 10,

  /** 충북 */
  Chungbuk = 11,

  /** 충청 */
  Chungcheong = 12,

  /** 평남 */
  Pyeongnam = 13,

  /** 평북 */
  Pyeongbuk = 14,

  /** 평안 */
  Pyeongan = 15,

  /** 함경 */
  Hamgyeong = 16,

  /** 함남 */
  Hamnam = 17,

  /** 함북 */
  Hambuk = 18,

  /** 황해 */
  Hwanghae = 19,

  /** 중국 길림성 */
  ChinaGyeongsang = 20,

  /** 중국 요령성 */
  ChinaYoryeong = 21,

  /** 중국 흑룡강성 */
  ChinaHeungnyeong = 22,

  /** 중앙아시아 */
  CentralAsia = 23,
}

export enum Category {
  /** 전체 */
  All = 0,

  /** 가톨릭 */
  Catholic = 1,

  /** 건설 */
  Construction = 2,

  /** 경영 */
  Management = 3,

  /** 경제 */
  Economy = 4,

  /** 고유명 일반 */
  ProperNounGeneral = 5,

  /** 공업 */
  Industry = 6,

  /** 공예 */
  Handicraft = 7,

  /** 공학 일반 */
  EngineeringGeneral = 8,

  /** 광업 */
  Mining = 9,

  /** 교육 */
  Education = 10,

  /** 교통 */
  Transportation = 11,

  /** 군사 */
  Military = 12,

  /** 기계 */
  Machine = 13,

  /** 기독교 */
  Christianity = 14,

  /** 농업 */
  Agriculture = 15,

  /** 동물 */
  Animal = 16,

  /** 매체 */
  Media = 17,

  /** 무용 */
  Dance = 18,

  /** 문학 */
  Literature = 19,

  /** 물리 */
  Physics = 20,

  /** 미술 */
  Art = 21,

  /** 민속 */
  Folklore = 22,

  /** 법률 */
  Law = 23,

  /** 보건 일반 */
  HealthGeneral = 24,

  /** 복식 */
  Costume = 25,

  /** 복지 */
  Welfare = 26,

  /** 불교 */
  Buddhism = 27,

  /** 사회 일반 */
  SocietyGeneral = 28,

  /** 산업 일반 */
  IndustryGeneral = 29,

  /** 생명 */
  Life = 30,

  /** 서비스업 */
  Service = 31,

  /** 수산업 */
  Fisheries = 32,

  /** 수의 */
  Veterinary = 33,

  /** 수학 */
  Mathematics = 34,

  /** 식물 */
  Plant = 35,

  /** 식품 */
  Food = 36,

  /** 심리 */
  Psychology = 37,

  /** 약학 */
  Pharmacy = 38,

  /** 언어 */
  Language = 39,

  /** 역사 */
  History = 40,

  /** 연기 */
  Acting = 41,

  /** 영상 */
  Video = 42,

  /** 예체능 일반 */
  PerformingArtsGeneral = 43,

  /** 음악 */
  Music = 44,

  /** 의학 */
  Medicine = 45,

  /** 인명 */
  PersonalName = 46,

  /** 인문 일반 */
  HumanitiesGeneral = 47,

  /** 임업 */
  Forestry = 48,

  /** 자연 일반 */
  NatureGeneral = 49,

  /** 재료 */
  Material = 50,

  /** 전기·전자 */
  ElectricityElectronics = 51,

  /** 정보·통신 */
  InformationCommunication = 52,

  /** 정치 */
  Politics = 53,

  /** 종교 일반 */
  ReligionGeneral = 54,

  /** 지구 */
  Earth = 55,

  /** 지리 */
  Geography = 56,

  /** 지명 */
  PlaceName = 57,

  /** 책명 */
  BookName = 58,

  /** 천문 */
  Astronomy = 59,

  /** 천연자원 */
  NaturalResources = 60,

  /** 철학 */
  Philosophy = 61,

  /** 체육 */
  Sports = 62,

  /** 한의 */
  OrientalMedicine = 63,

  /** 해양 */
  Marine = 64,

  /** 행정 */
  Administration = 65,

  /** 화학 */
  Chemistry = 66,

  /** 환경 */
  Environment = 67,
}

export enum Language {
  /** 전체 */
  All = 0,

  /** 고유어 */
  Native = 1,

  /** 한자 */
  ChineseCharacter = 2,

  /** 안 밝힘 */
  NotSpecified = 3,

  /** 영어 */
  English = 4,

  /** 그리스어 */
  Greek = 5,

  /** 네덜란드어 */
  Dutch = 6,

  /** 노르웨이어 */
  Norwegian = 7,

  /** 독일어 */
  German = 8,

  /** 라틴어 */
  Latin = 9,

  /** 러시아어 */
  Russian = 10,

  /** 루마니아어 */
  Romanian = 11,

  /** 마오리어 */
  Maori = 12,

  /** 말레이어 */
  Malay = 13,

  /** 몽골어 */
  Mongolian = 14,

  /** 바스크어 */
  Basque = 15,

  /** 버마어 */
  Burmese = 16,

  /** 베트남어 */
  Vietnamese = 17,

  /** 불가리아어 */
  Bulgarian = 18,

  /** 산스크리트어 */
  Sanskrit = 19,

  /** 세르보·크로아트어 */
  SerboCroatian = 20,

  /** 스와힐리어 */
  Swahili = 21,

  /** 스웨덴어 */
  Swedish = 22,

  /** 아랍어 */
  Arabic = 23,

  /** 아일랜드어 */
  Irish = 24,

  /** 에스파냐어 */
  Spanish = 25,

  /** 우즈베크어 */
  Uzbek = 26,

  /** 우크라이나어 */
  Ukrainian = 27,

  /** 이탈리아어 */
  Italian = 28,

  /** 인도네시아어 */
  Indonesian = 29,

  /** 일본어 */
  Japanese = 30,

  /** 중국어 */
  Chinese = 31,

  /** 체코어 */
  Czech = 32,

  /** 캄보디아어 */
  Cambodian = 33,

  /** 케추아어 */
  Quechua = 34,

  /** 타갈로그어 */
  Tagalog = 35,

  /** 타이어 */
  Thai = 36,

  /** 터키어 */
  Turkish = 37,

  /** 티베트어 */
  Tibetan = 38,

  /** 페르시아어 */
  Persian = 39,

  /** 포르투갈어 */
  Portuguese = 40,

  /** 폴란드어 */
  Polish = 41,

  /** 프랑스어 */
  French = 42,

  /** 프로방스어 */
  Provencal = 43,

  /** 핀란드어 */
  Finnish = 44,

  /** 헝가리어 */
  Hungarian = 45,

  /** 히브리어 */
  Hebrew = 46,

  /** 힌디어 */
  Hindi = 47,

  /** 기타어 */
  Other = 48,

  /** 덴마크어 */
  Danish = 49,
}

export enum Norm {
  /** 전체 */
  All = 0,

  /** 없음 */
  None = 1,

  /** 한글 맞춤법 */
  KoreanSpelling = 2,

  /** 띄어쓰기 */
  Spacing = 3,

  /** 표준어 */
  Standard = 4,

  /** 문장 부호 */
  Punctuation = 5,

  /** 외래어 표기 */
  LoanwordSpelling = 6,

  /** 로마자 표기 */
  Romanization = 7,

  /** 발음 */
  Pronunciation = 8,

  /** 문법 */
  Grammar = 9,

  /** 어휘 */
  Vocabulary = 10,

  /** 언어 예절 */
  LanguageEtiquette = 11,

  /** 순화 */
  Simplification = 12,

  /** 기타 */
  Other = 13,
}

export enum Multimedia {
  /** 전체 */
  All = 0,

  /** 사진 */
  Photo = 1,

  /** 삽화 */
  Illustration = 2,

  /** 동영상 */
  Video = 3,

  /** 애니메이션 */
  Animation = 4,

  /** 소리 */
  Sound = 5,

  /** 없음 */
  None = 6,
}
