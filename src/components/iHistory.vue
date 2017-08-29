<template>
  <div v-if="showHistory">
    <table>
      <thead>
      <tr>
        <th>期号</th>
        <th>开奖结果</th>
        <th>跨度</th>
        <th>和值</th>
        <th>超级2000</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in histories">
        <td> {{ item.term }} </td>
        <td> {{ item.rest }} </td>
        <td> {{ item.kuadu }} </td>
        <td> {{ item.addValue }} </td>
        <td> {{ item.super2000 }} </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import histories from '@/assets/js/history.json'
  export default {
    name: 'history',
    props:{
      showHistory:{
          type: Boolean,
          default: false
      }
    },
    data() {
      return {
        histories
      }
    }
  }
</script>

<style lang="sass" scoped>
  table
    width: 100%
    position: absolute
    top: 88px
    tr
      background: #ededed
      color: #666
      th
        font-size: 26px
        color: #666
        background: #d4d4d4
        height: 60px
        line-height: 60px
      td
        font-size: 24px
        text-align: center
        height: 60px
        line-height: 60px
      &:nth-child(odd)
        background: #e8e8e8

</style>
