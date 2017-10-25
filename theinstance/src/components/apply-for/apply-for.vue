<template>
  <div class="div">
    <van-notice-bar :scrollable="false" v-if="noend">
      还有{{noend}}条待审记录
    </van-notice-bar>
    <div class="bm">
      <p class="p">- 技术部 -</p>
    </div>
    <van-row>
      <div v-for="(item, index) in apply">
        <van-col class="item" span="8" >
          <div @click="selectItem(index)"><van-icon name="edit"/>{{item.name}}</div>
        </van-col>
      </div>
    </van-row>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {apply} from 'api/api'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        apply: [],
        number: 0
      }
    },
    created() {
      this._Fapply()
    },
    computed: {
      noend: function () {
        return this.recordList.filter(function (item) {
          return item.state === 0
        }).length
      },
      ...mapGetters([
        'recordList'
      ])
    },
    methods: {
      _Fapply() {
        this.apply = apply()
      },
      selectItem(index) {
        this.$router.push({
          path: `/applyFor/${index}`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import '~common/stylus/variable'
  .div
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .bm
      height: 50px
      line-height: 50px
      background: $color-theme
      color: #222
      .p
        font-weight: bold
    .item
      height: 150px
      line-height: 150px
      color: #eee
      border-bottom solid 1px $color-text-d
      border-right solid 1px $color-text-d
</style>
