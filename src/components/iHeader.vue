<template>
  <header>
    <!--后退按钮(button back)-->
    <button
      @click="onGoBack">
      <<
    </button>

    <!-- 标题名称(title name) -->
    <h1>
      后三复式
      <i
        @click="onShow('menu')"
        v-if="prop_full_menu"
      > V
      </i>
    </h1>
    <!-- 更多按钮(button more)-->
    <button
      class="more"
      @click="onShow('more')"
      v-if="prop_full_menu">
      more
    </button>
  </header>
</template>

<script>


  export default {
    name: 'header',
    props: {
        prop_full_menu: {
            type: Boolean,
            default:true
        }
    },
    data(){
      return {
      }
    },
    mounted(){
    },
    methods: {
      //上次路由
      onGoBack(){
        history.go(-1);
      },
      // 改变过像是状态并发射事件
      onShow(s){
          this.mytest = ! this.mytest;
        this.$emit('event-' + s);
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../assets/styles/mixin'

  header
    width: $design-width + px
    height: $design-title-rect + px
    background: $color-bg-header
    position: fixed
    box-sizing: border-box
    box-shadow: 2px 2px 1px 0px #29b79f
    z-index: 1
    h1
      text-align: center
      width: $design-width + px
      height: $design-title-rect + px
      line-height: $design-title-rect + px
      i
        display: inline-block
        @include rect
    button
      @include rect
      position: absolute
      left: 0
      top: 0
      border: none
      background: none
      outline: none
      color: $color-bg
      text-align: center
      font-size: $font-size-medium * 2 + px
    button.more
      left: 552px
</style>
