<template>
  <div class="rolling">
    <div class="cad"
         ref="cad"
         :class="{ cadA: isActive }"
         @touchstart.prevent="progressTouchStart"
         @touchend.prevent="progressTouchEnd"
    >
      <div name="back" class="back" @click.stop="back">
        <i class="icon-back"></i>
      </div>
      <div class="img" ref="img">
        <i class="icon-asv">
          <i class="path1"></i>
          <i class="path2"></i>
        </i>
      </div>
      <div class="text" ref="text">
        <p class="text_p">{{rLength}} record</p>
        <h1>{{text}}
          <span v-show="isActive" class="deleteAll" @click="deleteAll"><i class="icon-delete"></i></span>
        </h1>

      </div>
      <div class="text_hr">
        <div class="text_hr_color"></div>
      </div>
      <div name="form" class="form" v-if="isActive">
        <record :type="text"></record>
      </div>
      <div class="add" @click.stop="add">
        <i class="icon-add"></i>
      </div>
    </div>
    <confirm @confirm="confirmClear" ref="confirm" text="是否删除记录" confirmBtnText="删除"></confirm>
  </div>
</template>

<script type="text/ecmascript-6">
  import Record from 'components/record/record'
  import {mapActions, mapGetters} from 'vuex'
  import Confirm from 'components/confirm/confirm'

  export default {
    data() {
      return {
        isActive: false
      }
    },
    components: {
      Record,
      Confirm
    },
    props: {
      Iindex: {
        type: Number,
        default: 0
      },
      Dindex: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 0
      },
      str: {
        type: Object,
        default: {}
      }
    },
    computed: {
      text() {
        return this.str.name
      },
      left() {
        let left = (this.Iindex - this.Dindex) * 300 - 140 + 'px'
        return left
      },
      rLength() {
        switch (this.str.name) {
          case 'Personal':
            return this.pList.filter(function (item) {
              return (!item.delete && !item.select)
            }).length
          case 'Work':
            return this.wList.filter(function (item) {
              return (!item.delete && !item.select)
            }).length
          case 'Learning':
            return this.lList.filter(function (item) {
              return (!item.delete && !item.select)
            }).length
        }
      },
      ...mapGetters([
        'pList',
        'wList',
        'lList'
      ])
    },
    created() {
      this.touch = {}
    },
    mounted() {
      console.log(this.rLength)
      this.$refs.cad.style.marginLeft = this.left
    },
    methods: {
      confirmClear() {
        this.deleteList()
      },
      deleteAll() {
        this.$refs.confirm.show()
      },
      add() {
        this.$emit('addplan')
      },
      dogo() {
        if (this.Iindex === this.Dindex) {
          this.setCurrentType({
            type: this.text
          })
          this.isActive = true
          this.$refs.cad.style.marginLeft = 0
        } else {
          this.$emit('change', this.Iindex)
        }
      },
      back() {
        this.isActive = false
        this.$refs.cad.style.marginLeft = this.left
      },
      progressTouchStart(e) {
        if (this.isActive) {
          return
        }
        const touch = e.touches[0]
        this.touch.startX = touch.pageX
        this.touch.startY = touch.pageY
      },
      progressTouchEnd(e) {
        if (this.isActive) {
          return
        }
        const touch = e.changedTouches[0]
        const deltaX = touch.pageX - this.touch.startX
        const deltaY = touch.pageY - this.touch.startY
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          this.dogo()
          return
        }
        if (deltaX < -30) {
          let abc = this.Dindex + 1
          if (abc > this.length - 1) {
            abc = this.length - 1
          }
          this.$emit('change', abc)
        } else if (deltaX > 30) {
          let abc = this.Dindex - 1
          if (abc < 0) {
            abc = 0
          }
          this.$emit('change', abc)
        } else {
          this.dogo()
        }
      },
      ...mapActions([
        'setCurrentType',
        'deleteList'
      ])
    },
    watch: {
      Dindex() {
        this.$refs.cad.style.marginLeft = this.left
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import "~common/variable"

  .rolling
    .cad
      position absolute
      bottom: 50px
      left: 50%
      margin-left: -140px
      height 200px
      width 280px
      background #fff
      border-radius 10px
      transition: all .8s ease
      .img
        position absolute
        top 10px
        left 10px
        height: 50px
        width: 50px
        transition: all .8s ease
        .icon-asv
          display: inline-flex;
          padding: 9px
          font-size: 22px
      .text
        position absolute
        left 10px
        top  100px
        padding-left 9px
        color: #000
        transition: all .8s ease
        .text_p
          margin-bottom -20px
          opacity 0.5
      .text_hr
        position: absolute
        bottom: 20px
        background: #d8d8d8
        height 3px
        width 100%
        .text_hr_color
          height 100%
          width 30%
          background $color-background
          transition: all .8s ease
    .cadA
      left 0
      bottom 0
      height 100%
      width 100%
      margin-left 0
      border-radius 0px
      z-index 10
      .img
        left 50px
        top 50px
      .text
        left 100px
        top 45px
        .deleteAll
          font-size 14px
          color #000
      .text_hr
        animation confirm-zoom 2s
        .text_hr_color
          height 100%
          width 100%
          background $color-background
      .back
        position absolute
        top: 0
        left: 6px
        z-index: 50
        .icon-back
          display: block
          padding: 9px
          font-size: 32px
          color: #000
      .add
        position absolute
        bottom: 40px
        right: 20px
        z-index: 50
        background #4a90e2
        border-radius 25px
        box-shadow 0px 0px 50px #4a90e2
        .icon-add
          display: block
          padding: 9px
          font-size: 22px
          color: #fff
      .form
        text-align center
        position relative
        top: 150px
        color #000

  @keyframes confirm-zoom
    0%
      transform: rotate(0deg) scale(1)
    30%
      transform: rotate(720deg) scale(0.1)
    100%
      transform: rotate(720deg) scale(1)
</style>
