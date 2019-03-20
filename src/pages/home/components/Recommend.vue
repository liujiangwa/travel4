<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="item in list" :key="item.id" :to="'/detail/'+item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imageUrl: 'http://img1.qunarzz.com/sight/p0/1812/b9/b9cc3ab2fbe4f0e7a3.img.jpg_200x200_f2d629eb.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0002',
          imageUrl: 'http://img1.qunarzz.com/sight/p0/1812/b9/b9cc3ab2fbe4f0e7a3.img.jpg_200x200_f2d629eb.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0003',
          imageUrl: 'http://img1.qunarzz.com/sight/p0/1812/b9/b9cc3ab2fbe4f0e7a3.img.jpg_200x200_f2d629eb.jpg',
          title: '上海动物园',
          desc: '上海动物园-最好看的动物园-动物品种最齐全的动物园'
        }, {
          id: '0004',
          imageUrl: 'http://img1.qunarzz.com/sight/p0/1812/b9/b9cc3ab2fbe4f0e7a3.img.jpg_200x200_f2d629eb.jpg',
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
    margin-top: 0.2rem
    line-height: 0.8rem
    background: #eee
    text-indent: 0.2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: 0.1rem
    .item-info
      flex: 1
      padding: 0.1rem
      min-width: 0
      .item-title
        line-height: 0.54rem
        font-size: 0.32rem
        ellipsis()
      .item-desc
        line-height: 0.4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: 0.44rem
        margin-top: 0.16rem
        background: #ff9300
        padding: 0 0.1rem
        border-radius: 0.1rem
        color: #fff
</style>
