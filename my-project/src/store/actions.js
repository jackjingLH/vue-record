import * as types from './mutation-types'
import {saveplist, savewlist, savellist} from 'common/cache'

export const addList = function ({commit, state}, {list}) {
  let type = state.currentType
  let List = {}
  switch (type) {
    case 'Personal':
      List = state.pList.slice()
      List.splice(0, 0, list)
      commit(types.SET_P_LIST, saveplist(List))
      break
    case 'Work':
      List = state.wList.slice()
      List.splice(0, 0, list)
      commit(types.SET_W_LIST, savewlist(List))
      break
    case 'Learning':
      List = state.lList.slice()
      List.splice(0, 0, list)
      commit(types.SET_L_LIST, savellist(List))
      break
  }
}

export const deleteList = function ({commit, state}) {
  let type = state.currentType
  let List = []
  switch (type) {
    case 'Personal':
      commit(types.SET_P_LIST, saveplist(List))
      break
    case 'Work':
      commit(types.SET_W_LIST, savewlist(List))
      break
    case 'Learning':
      commit(types.SET_L_LIST, savellist(List))
      break
  }
}

export const setCurrentType = function ({commit}, {type}) {
  commit(types.SET_CURRENT_TYPE, type)
}

export const changeState = function ({commit, state}, {list, index}) {
  let type = state.currentType
  let List = {}
  switch (type) {
    case 'Personal':
      List = state.pList.slice()
      List.splice(index, 1, list)
      commit(types.SET_P_LIST, saveplist(List))
      break
    case 'Work':
      List = state.wList.slice()
      List.splice(index, 1, list)
      commit(types.SET_W_LIST, savewlist(List))
      break
    case 'Learning':
      List = state.lList.slice()
      List.splice(index, 1, list)
      commit(types.SET_L_LIST, savellist(List))
      break
  }
}
