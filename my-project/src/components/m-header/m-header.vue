<template>
  <div class="m-header">
    <i class="icon-Category"></i>
    <h1 class="text">CAPSULE</h1>
    <i class="icon-search"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style type="text/stylus" scoped lang="stylus" rel="stylesheet/stylus">
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: #ffcd32
    font-size: 0
    .icon-Category
      position absolute
      left 0
      padding: 9px
      font-size: 22px
      color: #fff
    .icon-search
      position absolute
      right 0
      display: inline-block
      padding: 9px
      font-size: 22px
      color: #fff
    .text
      display: inline-block
      vertical-align: top
      font-size: 18px
      color: #fff
      text-shadow: 1px 1px 5px #173567
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: #ffcd32
</style>
