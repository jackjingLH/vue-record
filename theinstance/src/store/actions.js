import * as types from './mutation-types'
import {saveRecord, deleteRecord, changeRecord} from 'common/js/cache'

export const addRecordList = function ({commit, state}, {list}) {
  let recordList = state.recordList.slice()
  recordList.splice(0, 0, list)
  commit(types.SET_RECORD_LIST, saveRecord(list))
}

export const deleteRecordList = function ({commit, state}, {index}) {
  let recordList = state.recordList.slice()
  recordList.splice(index, 1)
  commit(types.SET_RECORD_LIST, deleteRecord(index))
}

export const changeState = function ({commit, state}, {list, index}) {
  let recordList = state.recordList.slice()
  recordList.splice(index, 1, list)
  commit(types.SET_RECORD_LIST, changeRecord(recordList))
}
