import {loadFavorite} from 'common/js/cache'

const state = {
  recordList: loadFavorite()
}

export default state
