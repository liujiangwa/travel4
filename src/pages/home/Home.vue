<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icon :list="iconList"></home-icon>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      const city = this.$store.state.city
      axios.get('/static/mock/index.json?city=' + city).then(this.getHomeInfoSuc).catch(this.catchError)
    },
    getHomeInfoSuc (response) {
      const responseData = response.data
      if (responseData && responseData.ret && responseData.data) {
        const data = responseData.data
        this.swiperList = data.swiperList
        // console.log(data)
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    catchError (error) {
      console.log('error occurred when fetching data' + error)
    }
  },
  mounted () {
    const city = this.$store.state.city
    this.getHomeInfo()
    this.lastCity = city
  },
  activated () {
    const city = this.$store.state.city
    if (city !== this.lastCity) {
      this.lastCity = city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
