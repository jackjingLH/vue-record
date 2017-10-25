<template>
  <div class="record">
    <scroll class="list" :data="recordList">
      <transition-group name="list" tag="ul">
        <li v-for="(item, index) in recordList" class="item" :key="item.key">
          <van-cell-swipe :right-width="65">
            <van-panel :title="item.type" :desc="desc(item)" :status="status(item)">
              <div class="input">
                <van-cell-group>
                  <van-field
                    :value="item.textarea"
                    type="textarea"
                    label="理由"
                    disabled="true"
                    autosiz
                  >
                  </van-field>
                </van-cell-group>
              </div>
            </van-panel>
            <span slot="right">
            <div class="right" @click="deleteItem(index)">删除</div>
          </span>
          </van-cell-swipe>
        </li>
      </transition-group>
    </scroll>
    <div v-show="!recordList.length" class="null">
      <p>暂无无记录</p>
    </div>
    <confirm @confirm="confirmClear" ref="confirm" text="是否删除记录" confirmBtnText="删除"></confirm>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'
  import confirm from 'components/confirm/confirm'
  import Scroll from 'components/scroll/scroll'

  export default {
    components: {
      confirm,
      Scroll
    },
    data() {
      return {
        index: ''
      }
    },
    computed: {
      ...mapGetters([
        'recordList'
      ])
    },
    watch: {
      states() {
        console.log(1)
      }
    },
    methods: {
      status(item) {
        return item.state === 1 ? '通过' : item.state === -1 ? '拒绝' : '待审'
      },
      desc(item) {
        if (item.type !== '转正' && item.type !== '离职') {
          return `${item.user} | 日期：${item.data} | 天数：${item.days}`
        } else {
          return `${item.user} | 日期：${item.data} | 岗位：${item.job}`
        }
      },
      deleteItem(index) {
        this.$refs.confirm.show()
        this.index = index
      },
      confirmClear() {
        let index = this.index
        this.deleteRecordList({index})
      },
      ...mapActions([
        'deleteRecordList'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import '~common/stylus/variable'
  .record
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
      transition: all .2s
    &.list-leave-to, &.list-enter
      opacity: 0
  .right
    text-align: center
    width: 65px
    background #d93f30
    color: #eee
    height 100%
    line-height 120px
  .null
    position: absolute
    width: 100%
    height: 100%
    top: 0
    text-align: center
    padding-top: 100px
</style>
