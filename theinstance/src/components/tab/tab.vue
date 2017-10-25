<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/applyFor">
      <span class="tab-link">申请</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/pending">
      <span class="tab-link">待审 <span class="badge" v-if="noend">{{noend}}</span></span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/record">
      <span class="tab-link">记录
      </span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      noend: function () {
        return this.recordList.filter(function (item) {
          return item.state === 0
        }).length
      },
      ...mapGetters([
        'recordList'
      ])
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
        .badge
          position: absolute
          top: 50px
          display: inline-block
          min-width: 10px
          padding: 1px 3px
          font-size: 12px
          line-height: 1
          color: #fff
          text-align: center
          white-space: nowrap
          vertical-align: middle
          background-color: $color-sub-theme
          border-radius: 10px
      &.router-link-active
        .tab-link
          color: $color-theme
          border-radius: 5px
          border-bottom: 2px solid $color-theme
          .badge
            position: absolute
            top: 50px
            display: inline-block
            min-width: 10px
            weight: 700
            padding: 1px 3px
            font-size: 12px
            line-height: 1
            color: $color-dialog-background
            text-align: center
            white-space: nowrap
            vertical-align: middle
            background-color: $color-theme
            border-radius: 10px
</style>
