<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped lang="sass">
  #app
    width: 640px
    height: 1136px
    background: url('assets/images/h.png') no-repeat left top

</style>
