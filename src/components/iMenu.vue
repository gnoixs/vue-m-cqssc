<template>
  <div class="imenu" v-if="prop_menu">
    <ul>
      <li :class="{active: !super2000Actived}" @click="switchSuper2000('wuxing',false,0,8)">普通玩法</li>
      <li @click="switchSuper2000('housan_2000',true,8,11)" :class="{active2000: super2000Actived}">超级2000</li>
    </ul>
    <ul class="spbt">
      <li v-for="(item,index) in gameMethods" @click="onChangeListGames(index)">

        <i :class="{ active : item.name === currentMethod }">
          {{ item.title }}
        </i>
      </li>
    </ul>
    <ul class="dul">
      <li v-for="item in currentList.childs">
        <span> {{ item.title + ':' }} </span>
        <ul>
          <li v-for="obj in item.childs" @click="onChangeGameView()"> {{ obj.title }} </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  //import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'menu',
    props: {
      prop_menu: {        //是否显示下拉菜单
        type: Boolean,
        default: false
      }
    },
    components: {
      //swiper,
      //swiperSlide

    },
    created(){
      this.currentList = this.getCurentList();
    },
    data(){
      return {
        gameMethods: gameConfigData.gameMethods.slice(0,8),      // 获取有些玩法，来源于window的方法（list.config.js）
        currentMethod: "wuxing",        // 当前玩法
        currentList: [],             // 当前玩法的子玩法
        super2000Actived: false      // 是否选中了超级2000
      }
    },
    computed:{

    },
    methods: {
      // 从玩法列表中获取当前玩法
      getCurentList(){
        let arr = this.gameMethods.filter((value) => {
          return value.name === this.currentMethod;
        });
        return arr[0];
      },
      // 切换普通玩法和超级2000
      switchSuper2000(curMethod,activeClass,subArrStart,subArrEnd){
        this.super2000Actived = activeClass;
        this.gameMethods = gameConfigData.gameMethods.slice(subArrStart,subArrEnd);
        this.currentMethod = curMethod;
        this.currentList = this.getCurentList();
      },
      //切换子玩法
      onChangeListGames(index){
          this.currentList = this.gameMethods[index];
          this.currentMethod = this.currentList.name;
      },
      // 更新玩法界面
      onChangeGameView(){

      }
    }
  }
</script>

<style lang="sass" scoped>
  div.imenu
    width: 640px
    background: white
    position: absolute
    top: 88px
    box-sizing: border-box
    padding: 0 5px
    border-bottom: 8px solid #088
    border-bottom-left-radius: 12px
    border-bottom-right-radius: 12px
    ul
      display: flex
      border-bottom: 1px solid #e6e6e6
      li
        min-height: 68px
        line-height: 68px
        font-size: 28px
        padding: 0 10px
        color: #666
        &.active
          border-bottom: 4px solid #088
        &.active2000
          border-bottom: 4px solid #0008ff
    .spbt
      justify-content: space-between
      li
        padding: 0 2px
        i
          padding: 0 10px
          font-size: 24px
          font-style: normal
          &.active
            background: #088
            color: #ffffff
            border-radius: 12px
    .dul
      display: block
      border-bottom: none
      li
        display: inline-block
        span
          display: block
          float: left
          width: 90px
          color: #088
          text-align: right
          font-size: 22px
      ul
        float: left
        border-bottom: none
        display: block
        width: 500px
        li
          display: inline-block
          font-size: 24px
          margin: 0 2px
</style>
