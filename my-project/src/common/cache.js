import storage from 'good-storage'

const PLIST_KEY = '__plist__'
const WLIST_KEY = '__wlist__'
const LLIST_KEY = '__llist__'

export function saveplist(list) {
  storage.set(PLIST_KEY, list)
  return list
}

export function savewlist(list) {
  storage.set(WLIST_KEY, list)
  return list
}

export function savellist(list) {
  storage.set(LLIST_KEY, list)
  return list
}

export function loadplist() {
  return storage.get(PLIST_KEY, [])
}

export function loadwlist() {
  return storage.get(WLIST_KEY, [])
}

export function loadllist() {
  return storage.get(LLIST_KEY, [])
}
