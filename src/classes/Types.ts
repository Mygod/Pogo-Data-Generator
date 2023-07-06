import { Rpc } from '@na-ji/pogo-protos'
import { AllTypes } from '../typings/dataTypes'
import Masterfile from './Masterfile'

export default class Types extends Masterfile {
  parsedTypes: AllTypes

  constructor() {
    super()
    this.parsedTypes = {}
  }

  buildTypes() {
    Object.entries(Rpc.HoloPokemonType).forEach((proto) => {
      try {
        const [name, id] = proto
        this.parsedTypes[id] = {
          typeId: +id,
          typeName: this.capitalize(name.substring(13)),
        }
      } catch (e) {
        console.warn(e, proto)
      }
    })
  }

  parsePokeApi(types: AllTypes) {
    Object.keys(types).forEach((typeId) => {
      this.parsedTypes[typeId] = {
        ...this.parsedTypes[typeId],
        ...types[typeId],
      }
    })
  }
}
