import {loadplist, loadwlist, loadllist} from 'common/cache'

const state = {
  pList: loadplist(),
  wList: loadwlist(),
  lList: loadllist(),
  currentType: ''
}

export default state
