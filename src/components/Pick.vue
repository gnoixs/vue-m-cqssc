<template>
  <div class="pick">
    <!-- 导航栏组建 p-inpick--->
    <i-header
      @event-more="onEventMore"
      @event-menu="onEventMenu">
    </i-header>
    <!-- 历史记录 -->
    <i-history :showHistory="showHistory">

    </i-history>

    <!-- 计时显示 -->
    <i-timer-bar :showHistory="showHistory" @event-history="onEventHistory">

    </i-timer-bar>
    <!-- 右侧显示更多组件-->
    <transition name="fade" mode="out-in">
      <i-more
        :data_more="data_more"
        :prop_more="flag_more"
      >
      </i-more>
    </transition>


    <!-- 菜单选项 -->
    <i-menu :prop_menu="flag_menu"></i-menu>
  </div>
</template>

<script>
  import IHeader from "./iHeader"
  import IMore from "./iMore"
  import IMenu from "./iMenu"
  import ITimerBar from './iTimerBar'
  import IHistory from './iHistory'

  import menus from "@/assets/js/menus.json"

  export default {
    components: {
      IHeader,
      IMore,
      IMenu,
      ITimerBar,
      IHistory
    },
    name: 'pick',
    data () {
      return {
        flag_more: false,   // 右侧框
        flag_menu: false,    // 下拉菜单
        data_more: menus,    // 右侧框数据
        showHistory: false
      }
    },
    methods: {
      onEventHistory(){
        this.showHistory = !this.showHistory;
      },
      onEventMore(){
        this.flag_more = !this.flag_more;
      },
      onEventMenu(){
        this.flag_menu = !this.flag_menu;
      }/*,
      onEventSwitchShow(arg){
          this[arg] = ! this[arg];
      }*/

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '../assets/styles/mixin.sass'
  .pick
    @include page
    overflow: hidden

  .fade-enter-active,.fade-leave-active
    transition: all 0.5s ease
  .fade-enter,.fade-leave-to
    opacity: 0

</style>
