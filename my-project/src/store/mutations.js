import * as types from './mutation-types'

const matutaions = {
  [types.SET_P_LIST](state, pList) {
    state.pList = pList
  },
  [types.SET_W_LIST](state, wList) {
    state.wList = wList
  },
  [types.SET_L_LIST](state, lList) {
    state.lList = lList
  },
  [types.SET_CURRENT_TYPE](state, currentType) {
    state.currentType = currentType
  }
}

export default matutaions
