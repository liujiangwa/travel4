<template>
  <div>
    <city-header></city-header>
    <city-search :cities="allCities"></city-search>
    <city-list :cities="allCities" :hot="hotCities" :letter="letter"></city-list>
    <city-alpha :cities="allCities" @change="handleLetterChange"></city-alpha>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlpha from './components/Alpha'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlpha
  },
  data () {
    return {
      hotCities: [],
      allCities: {},
      letter: 'A'
    }
  },
  methods: {
    getCity () {
      axios.get('/static/mock/cities.json').then(this.getCityResult)
    },
    getCityResult (response) {
      const responseData = response.data
      if (responseData && responseData.ret) {
        var data = responseData.data
        this.hotCities = data.hotCities
        this.allCities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style lang="stylus" scoped>
</style>
