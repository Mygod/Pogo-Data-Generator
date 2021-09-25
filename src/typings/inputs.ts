export interface Options {
  topLevelName?: string
  keys?: {
    [key: string]: string
  }
  customFields?: {
    [key: string]: string
  }
  customChildObj?: {
    [key: string]: string
  }
  makeSingular?: {
    [key: string]: boolean
  }
  prefix?: {
    [key: string]: string
  }
  questVariables?: {
    prefix?: string
    suffix?: string
  }
  keyJoiner?: string
  genderString?: boolean
  snake_case?: boolean
  unsetDefaultForm?: boolean
  skipNormalIfUnset?: boolean
  skipForms?: string[]
  includeProtos?: boolean
  includeEstimatedPokemon?:
    | {
        [key: string]: boolean
        baseStats?: boolean
      }
    | true
  minTrainerLevel?: number
  placeholderData?: boolean
  masterfileLocale?: string
  manualTranslations?: boolean
  mergeCategories?: boolean
  processFormsSeparately?: boolean
  includeRawForms?: boolean
  includeBalloons?: boolean
  useLanguageAsRef?: string
  includeUnset?: boolean
  unsetFormName?: string
  allUnset?: boolean
  pokeApiIds?: number[]
}

interface PokemonTemplate extends Form {
  pokedexId?: boolean
  pokemonName?: boolean
  forms?: Form
  defaultFormId?: boolean
  genId?: boolean
  generation?: boolean
  fleeRate?: boolean
  captureRate?: boolean
  bonusCandyCapture?: boolean
  bonusStardustCapture?: boolean
  legendary?: boolean
  mythic?: boolean
  buddyGroupNumber?: boolean
  buddyDistance?: boolean
  buddyMegaEnergy?: number
  thirdMoveStardust?: boolean
  thirdMoveCandy?: boolean
  gymDefenderEligible?: boolean
  tradable?: boolean
  transferable?: boolean
  unreleased?: boolean
}

interface CostumeTemplate {
  id?: boolean
  name?: boolean
  proto?: boolean
  noEvolve?: boolean
}

interface Form extends BaseStats {
  formName?: boolean
  proto?: boolean
  formId?: boolean
  isCostume?: boolean
  evolutions?: {
    evoId?: boolean
    formId?: boolean
    genderRequirement?: boolean
    candyCost?: boolean
    itemRequirement?: boolean
    tradeBonus?: boolean
    mustBeBuddy?: boolean
    onlyDaytime?: boolean
    onlyNighttime?: boolean
    questRequirement?:
      | {
          target?: boolean
          assetsRef?: boolean
          i18n?: boolean
          questType?: boolean
          translated?: boolean
        }
      | string
  }
  tempEvolutions?: TempEvolution | string
  quickMoves?: Move | string
  chargedMoves?: Move | string
  family?: boolean
  little?: boolean
}

type Move = {
  moveId?: boolean
  moveName?: boolean
  proto?: boolean
  type:
    | {
        typeId?: boolean
        type?: boolean
      }
    | string
}

interface TempEvolution extends BaseStats {
  tempEvoId?: boolean
  unreleased?: boolean
  firstEnergyCost?: boolean
  subsequentEnergyCost?: boolean
}

type BaseStats = {
  attack?: boolean
  defense?: boolean
  stamina?: boolean
  height?: boolean
  weight?: boolean
  types?: {
    typeId?: boolean
    typeName?: boolean
  }
}

export interface TypesTempOpt {
  enabled?: boolean
  options?: Options
  template?: TypesTemplate
}

type TypesTemplate = {
  typeId?: boolean
  typeName?: boolean
}

type MoveTemplate = {
  moveId?: boolean
  moveName?: boolean
  proto?: boolean
  type?:
    | {
        typeId?: boolean
        typeName?: boolean
      }
    | string
  power?: boolean
}

type ItemTemplate = {
  itemId?: boolean
  itemName?: boolean
  proto?: boolean
  type?: boolean
  category?: boolean
  minTrainerLevel?: boolean
}

type QuestTemplate = {
  id?: boolean
  proto?: boolean
  formatted?: boolean
}

type InvasionTemplate = {
  id?: boolean
  type?: boolean
  gender?: boolean
  grunt?: boolean
  secondReward?: boolean
  encounters?: {
    id: boolean
    formId: boolean
    position: boolean
  }
}

type WeatherTemplate = {
  weatherId?: boolean
  weatherName?: boolean
  proto?: boolean
  types?: {
    typeId?: boolean
    typeName?: boolean
  }
}

type TranslationsTemplate = {
  pokemon?: {
    names?: boolean
    forms?: boolean
    descriptions?: boolean
  }
  moves?: boolean
  items?: boolean
  types?: boolean
  characters?: boolean
  weather?: boolean
  misc?: boolean
  pokemonCategories?: boolean
  quests?: boolean
}

export interface Input {
  url?: string
  template?: FullTemplate
  test?: boolean
  raw?: boolean
  pokeApi?: boolean
}

export interface FullTemplate {
  globalOptions?: {
    keyJoiner?: string
    genderString?: boolean
    snake_case?: boolean
    customChildObj?: { [key: string]: string }
    customFields?: { [key: string]: string }
    includeProtos?: boolean
  }
  pokemon?: {
    enabled?: boolean
    options: Options
    template: PokemonTemplate
  }
  costumes?: {
    enabled?: boolean
    options: Options
    template: CostumeTemplate
  }
  types?: {
    enabled?: boolean
    options: Options
    template: TypesTemplate
  }
  moves?: {
    enabled?: boolean
    options: Options
    template: MoveTemplate
  }
  items?: {
    enabled?: boolean
    options: Options
    template: ItemTemplate
  }
  questTypes?: {
    enabled?: boolean
    options: Options
    template: QuestTemplate
  }
  questConditions?: {
    enabled?: boolean
    options: Options
    template: QuestTemplate
  }
  questRewardTypes?: {
    enabled?: boolean
    options: Options
    template: QuestTemplate
  }
  invasions?: {
    enabled?: boolean
    options: Options
    template: InvasionTemplate
  }
  weather?: {
    enabled?: boolean
    options: Options
    template: WeatherTemplate
  }
  translations?: {
    enabled?: boolean
    options: Options
    template: TranslationsTemplate
    locales: { [code: string]: boolean }
  }
}

export interface InvasionsOnly {
  template?: {
    enabled: boolean
    options: Options
    template: InvasionTemplate
  }
  test?: boolean
}
