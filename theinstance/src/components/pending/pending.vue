<template>
  <div class="pending">
    <scroll class="list" :data="pendingList" ref="pendingList">
      <transition-group name="list" tag="div">
        <van-panel :title="item.type" :desc="item.user" v-for="(item, index) in pendingList" class="item" :key="item.key">
          <div class="input">
            <van-cell-group>
              <van-field
                :value="item.data"
                label="开始日期"
                disabled="true"
              >
              </van-field>
              <van-field
                :value="item.days"
                v-show="item.days"
                type="number"
                label="天数"
                disabled="true"
              >
              </van-field>
              <van-field
                v-show="item.job"
                :value="item.job"
                label="岗位"
                disabled="true"
              >
              </van-field>
              <van-field
                :value="item.textarea"
                type="textarea"
                disabled="true"
                label="理由"
                autosiz
              >
              </van-field>
            </van-cell-group>
          </div>
          <div slot="footer" class="footer">
            <van-button size="small" type="danger" @click="refused(item, -1)">拒绝</van-button>
            <van-button size="small" @click="refused(item, 1)">同意</van-button>
          </div>
        </van-panel>
      </transition-group>
    </scroll>
    <div v-show="!pendingList.length" class="null">
      <p>无记录需要审核</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'
  import Scroll from 'components/scroll/scroll'

  export default {
    data() {
      return {
        pendingList: []
      }
    },
    computed: {
      ...mapGetters([
        'recordList'
      ])
    },
    mounted: function () {
      this._pendingF()
    },
    components: {
      Scroll
    },
    methods: {
      refused(item, state) {
        let index = this.recordList.indexOf(item)
        this.changeState({
          list: {
            'data': item.data,
            'days': item.days,
            'textarea': item.textarea,
            'type': item.type,
            'user': '张三',
            'state': state,
            'job': item.job,
            'key': item.key
          },
          index
        })
        this._pendingF()
      },
      _pendingF: function () {
        this.pendingList = this.recordList.filter(function (item) {
          return item.state === 0
        })
      },
      ...mapActions([
        'changeState'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import '~common/stylus/variable'
  .pending
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .list
      text-align: left
      height: 100%
      overflow: hidden
  .item
    margin-top 3px
    &.list-leave-active, &.list-enter-active
      transition: all 0.2s
    &.list-leave-to, &.list-enter
      opacity: 0
  .footer
    text-align right
  .div
    height 100%
  .null
    position: absolute
    width: 100%
    height: 100%
    top: 0
    text-align: center
    padding-top: 100px
</style>
