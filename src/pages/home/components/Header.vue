<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe771;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.stylus'
  .header
    display: flex
    line-height: 0.86rem
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        //background: red
        text-align: center
        font-size: 0.4rem
    .header-input
      flex: 1
      height: 0.64rem
      line-height: 0.64rem
      margin-top: 0.11rem
      padding-left: 0.2rem
      background: #fff
      //border-radius: 0.1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 0.1rem
      float: right
      text-align: center
      color: #fff
      //background: green
      .arrow-icon
        font-size: 0.24rem
        margin-left: -0.04rem
</style>
