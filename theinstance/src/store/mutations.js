import * as types from './mutation-types'

const matutaions = {
  [types.SET_RECORD_LIST](state, recordList) {
    state.recordList = recordList
  }
}

export default matutaions
