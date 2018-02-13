import * as types from './mutation-types'

export default {
  [types.SET_HEADER](state, header) {
    state.header = header
  }
}