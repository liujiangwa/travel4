<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0003',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0004',
          imageUrl: 'http://img1.qunarzz.com/sight/source/1603/cf/762cb38938a093.jpg_r_640x214_e02c18ef.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixin.stylus"
  .title
    line-height: 0.8rem
    background: #eee
    text-indent: 0.2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 38%
    .item-img
      width:100%
  .item-info
    padding: 0.1rem
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
</style>
