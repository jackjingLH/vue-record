<template>
  <transition name="addplan">
    <div class="ba">
      <h1 class="text_h1">CASUALLY</h1>
      <p class="text">Add a plan to your life</p>
      <input class="input" v-model="text" type="text">
      <button class="button" @click.stop="cancel">CANCEL</button>
      <button class="button" @click.stop="ensure">ENSURE</button>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        text: ''
      }
    },
    computed: {
      iteype: function () {
        return this.currentType
      },
      ...mapGetters([
        'currentType'
      ])
    },
    methods: {
      cancel() {
        this.$router.push({
          path: '/'
        })
      },
      ensure() {
        let list = {
          text: this.text,
          select: false,
          delete: false
        }
        this.addList({
          list: list
        })
        this.$router.push({
          path: '/'
        })
      },
      ...mapActions([
        'addList'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import "~common/variable"

  .addplan-enter-active, .addplan-leave-active
    transition: all 0.7s ease

  .addplan-enter, .addplan-leave-to
    transform: translate3d(0, 100%, 0)
    opacity: 0

  .ba
    position: fixed
    z-index: 10
    top: 0
    left: 0
    bottom: 0
    right: 0
    background #fff
    padding 0 50px
    .text_h1
      font-size: 18px
      color: #000
      text-align center
      margin-bottom 60px
    .text
      color #707070
    .input
      display block
      width 100%
      border none
      height 30px
      line-height 30px
      font-size 14px
      border-bottom solid 1px #c7c7c7
      margin-bottom 50px
    .button
      display block
      width 100%
      margin-top 10px
      background $color-background
      color #fff
      border none
      padding 10px
</style>
