import storage from 'good-storage'

const RECORD_KEY = '__record__'
const RECORD_MAX_LENGTH = 200

function insertArray(arr, val, maxLen) {
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}
function deleteFromArray(arr, index) {
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveRecord(itemOne) {
  let list = storage.get(RECORD_KEY, [])
  insertArray(list, itemOne, RECORD_MAX_LENGTH)
  storage.set(RECORD_KEY, list)
  return list
}

export function deleteRecord(index) {
  let list = storage.get(RECORD_KEY, [])
  deleteFromArray(list, index)
  storage.set(RECORD_KEY, list)
  return list
}

export function changeRecord(list) {
  storage.set(RECORD_KEY, list)
  return list
}

export function loadFavorite() {
  return storage.get(RECORD_KEY, [])
}
