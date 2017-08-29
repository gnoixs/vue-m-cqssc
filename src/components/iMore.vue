<template>
  <div v-if="prop_more">
    <i>top</i>
    <ul>
      <li v-for="item in data_more"><a :href="item.href ? item.href : '#'"> {{ item.text }}</a></li>
    </ul>
  </div>
</template>

<script>



  export default {
    name: 'more',
    props: {
        //是否显示开关
      prop_more: {
        type: Boolean,
        default: false
      },
      //显示的内容
      data_more: {
        type: Array,
        default: []
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped lang="sass">
  div
    border: 1px solid #2e8c71
    width: 180px
    position: absolute
    padding: 10px
    right: 10px
    top: 98px
    background: #fff
    z-index: 3
    i
      display: block
      position: absolute
      width: 20px
      height: 20px
      background: #fff
      transform: rotate(45deg)
      text-indent: -9999px
      top: -12px
      right: 40px
      border-top: 1px solid #2e8c71
      border-left: 1px solid #2e8c71
    ul li
      text-align: center
      color: #fff
      line-height: 55px
      border-bottom: 4px solid #eeeeee
      &:last-child
        border: none
      a
        color: black
        font-size: 28px


</style>
