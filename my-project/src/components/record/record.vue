<template>
  <scroll class="record" :data="Tlist && Flist" ref="record">
    <div>
      <p class="title">To be processed</p>
      <div v-show="!Tlist.length">NULL</div>
      <transition-group tag="ul" class="rul" name="list">
        <li class="rli" v-for="(item, index) in Tlist"
            :class="{'select':item.select}" :key="index" @click="select(item)">
          <div class="border"></div>
          <p class="rp">{{item.text}}</p>
          <span class="delete" @click.stop="deleted(item)">
          <i class="icon-delete" v-show="item.select"></i>
        </span>
        </li>
      </transition-group>
      <hr v-show="Flist.length">
      <p class="title" v-show="Flist.length">delede</p>
      <transition-group class="rul" tag="ul" name="list">
        <li class="rli" :key="index" v-for="(item, index) in Flist" @click="restore(item)">
          <p class="rp deleterp">{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from 'vuex'
  import Scroll from 'components/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    data() {
      return {
        deleteList: []
      }
    },
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    mounted() {
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      this.$refs.record.$el.style.maxHeight = (h - 200) + 'px'
    },
    computed: {
      list: function () {
        if (this.type === 'Personal') {
          return this.pList
        } else if (this.type === 'Work') {
          return this.wList
        } else if (this.type === 'Learning') {
          return this.lList
        }
      },
      Tlist: function () {
        return this.list.filter(function (item) {
          return !item.delete
        })
      },
      Flist: function () {
        return this.list.filter(function (item) {
          return item.delete
        })
      },
      processedList: function () {
        return this.list.filter(function (item) {
          return (!item.delete && !item.select)
        })
      },
      ...mapGetters([
        'pList',
        'wList',
        'lList'
      ])
    },
    methods: {
      processedListtLength() {
        console.log(this.processedList.length)
        return this.processedList.length
      },
      select(item) {
        let index = this.list.indexOf(item)
        let state = item.select
        let list = {
          text: item.text,
          select: !state,
          delete: false
        }
        this.changeState({
          list: list,
          index: index
        })
      },
      deleted(item) {
        let index = this.list.indexOf(item)
        let list = {
          text: item.text,
          select: false,
          delete: true
        }
        this.changeState({
          list: list,
          index: index
        })
      },
      restore(item) {
        let index = this.list.indexOf(item)
        let list = {
          text: item.text,
          select: false,
          delete: false
        }
        this.changeState({
          list: list,
          index: index
        })
      },
      ...mapActions([
        'changeState'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .record
    text-align left
    padding 0 50px
    max-height: 450px
    overflow: hidden
    .title
      opacity 0.5
    .rul
      list-style: none
      padding-left 0
      .rli
        position relative
        height 45px
        border-bottom solid 1px #eee
        line-height: 45px
        &.list-enter-active, &.list-leave-active
          transition: all 0.3s
        &.list-enter, &.list-leave-to
          height 0
          opacity 0
        .border
          position absolute
          left 0
          margin-top: 15px
          height 10px
          width 10px
          border solid 1px #949494
        .rp
          display inline-block
          height 45px
          line-height 45px
          margin 0
          padding-left 30px
          width: 70%
          overflow hidden
          text-overflow ellipsis
          font-size 14px
        .delete
          position absolute
          right 0
          opacity 0.5
      .select
        .border
          background #949494
        .rp
          text-decoration: line-through
          opacity 0.5
      .deleterp
        text-align left
        width 100% !important
        padding-left 0 !important
        opacity 0.5

</style>
