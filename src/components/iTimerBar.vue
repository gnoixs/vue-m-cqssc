<template>
  <div class="divBox">
    <div class="left">距052期截至   <span>1分42秒</span></div>
    <div class="right">机选</div>
    <div class="dropDown"> v </div>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
  div.divBox
    width: 640px
    height: 60px
    position: absolute
    top: 88px
    background: #e8e8e8
    box-shadow: 0 0 10px 2px #ccc
    box-sizing: border-box
    .left
      width: 400px
      height: 60px
      font-size: 24px
      color: #333
      line-height: 60px
      padding-left: 20px
      display: inline-block
      span
        color: #088
    .right
      display: inline-block
      width: 120px
      height: 60px
      line-height: 60px
      color: #088
      float: right
      background: gold
      margin-right: 20px
      text-align: right
      font-size: 24px
    .dropDown
      clear: both
      display: block
      width: 120px
      height: 30px
      background: #e8e8e8
      position: absolute
      left: 50%
      text-align: center
      margin-top: 0px
      margin-left: -60px
      border-radius: 0 0 5px 5px/0 0 5px 5px
      box-shadow: 0 3px 3px 1px #ccc
      color: #088

</style>
