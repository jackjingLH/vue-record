<template>
  <transition name="slide">
    <div class="afrom">
      <div name="back" class="back" @click="back">
        <van-icon name="close"/>
      </div>
      <div class="ensure" @click="ensure">
        <van-icon name="success"/>
      </div>
      <van-datetime-picker
        v-show="dataTime"
        v-model="currentDate1"
        type="date"
        class="date"
        :min-date="minDate"
        @cancel="OnCancel"
        @confirm="OnConfirm">
      </van-datetime-picker>
      <div class="input">
        <van-cell-group>
          <van-field
            v-model="site"
            label="出差地点"
            placeholder="城市 - 地点（如厦门 - 软件园）"
          >
          </van-field>
          <van-field
            v-model="Ddata"
            label="开始日期"
            @focus="Bfocus"
          >
          </van-field>
          <van-field
            v-model="number"
            type="number"
            label="出差天数"
          >
          </van-field>
          <div class="stepper">
            <van-stepper v-model="number"></van-stepper>
          </div>
          <van-field
            v-model="textarea"
            class="stepperNext"
            type="textarea"
            label="理由"
            autosiz
          >
          </van-field>
        </van-cell-group>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        textarea: [],
        currentDate1: new Date(2018, 0, 1),
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(2019, 10, 1),
        dataTime: false,
        number: 1,
        oldData: new Date(2018, 0, 1),
        key: 0,
        site: ''
      }
    },
    computed: {
      Ddata() {
        let d = this.currentDate1
        let youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        return youWant
      }
    },
    methods: {
      ensure() {
        this.$router.back()
        this.addRecordList({
          list: {
            'data': this.Ddata,
            'days': this.number,
            'textarea': this.textarea,
            'type': `出差(${this.site})`,
            'user': '张三',
            'state': 0,
            'key': this.key + 1
          }
        })
      },
      back() {
        this.$router.back()
      },
      OnCancel() {
        this.dataTime = false
        this.currentDate1 = this.oldData
      },
      OnConfirm() {
        this.dataTime = false
      },
      Bfocus() {
        document.activeElement.blur()
        this.dataTime = true
        this.oldData = this.currentDate1
      },
      ...mapActions([
        'addRecordList'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(0, 100%, 0)
    opacity: 0

  .afrom
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .back
      position absolute
      top: 0
      left: 15px
      top: 15px
      z-index: 50
      font-size: 30px
      color: $color-theme
    .date
      position absolute
      bottom: 0
      right: 0
      left: 0
      z-index: 60
    .ensure
      position absolute
      right 15px
      bottom: 15px
      z-index: 50
      font-size: 30px
      color: $color-theme
    .input
      position absolute
      width: 100%
      top: 70px
      .stepper
        position relative
        top: -36px
        left: -35px
        z-index 50
      .stepperNext
        top: -30px
</style>
