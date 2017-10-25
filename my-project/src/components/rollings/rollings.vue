<template>
  <div class="rollings">
    <rolling v-for="(item, index) in apply"
             :Iindex="index"
             :Dindex="dindex"
             :str="item"
             :length="length"
             @change="changeDindex"
             @addplan="addplan"
             :key="index"
    ></rolling>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Rolling from 'components/rolling/rolling'
  import {apply} from 'api/api'

  export default {
    data() {
      return {
        apply: [],
        dindex: 0
      }
    },
    computed: {
      length() {
        return this.apply.length
      }
    },
    created() {
      this._Fapply()
    },
    methods: {
      addplan() {
        this.$router.push({
          path: `/addplan`
        })
      },
      changeDindex(index) {
        this.dindex = index
      },
      _Fapply() {
        this.apply = apply()
      }
    },
    components: {
      Rolling
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
  .rollings
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    overflow hidden
</style>
