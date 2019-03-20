<template>
  <div class="puppy">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe771;</span>39</div>
      </div>
    </div>
    <animation-fade>
      <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="gallaryImgs">
      </common-gallary>
    </animation-fade>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import AnimationFade from '@/common/fade/Fade'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    AnimationFade
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
      // console.log('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 0.6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        font-size: 0.32rem
        padding-left: 0.2rem
      .banner-number
        height: 0.32rem
        line-height: 0.28rem
        margin-top: 0.14rem
        padding: 0 0.4rem
        border-radius: 0.2rem
        background: rgba(0,0,0,0.8)
        font-size: 0.24rem
        .banner-icon
          font-size: 0.24rem
</style>
