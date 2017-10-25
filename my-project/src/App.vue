<template>
  <div id="app">
    <m-header></m-header>
    <m-main></m-main>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import MMain from 'components/m-main/m-main'

  export default {
    components: {
      MHeader,
      MMain
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylue" type="text/stylus">
</style>
