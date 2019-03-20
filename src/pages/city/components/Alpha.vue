<template>
  <ul class="list">
    <li class="item" v-for="letter in letters" :key="letter" :ref="letter"
        @click="handleClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{letter}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  },
  data () {
    return {
      touched: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('change', event.target.innerHTML)
    },
    handleTouchStart (event) {
      this.touched = true
    },
    handleTouchMove (event) {
      if (!this.touched) {
        return
      }

      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        const touchY = event.touches[0].clientY - 79
        const index = Math.floor((touchY - this.startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // console.log(event.touches[0].clientY)
        // console.log(this.startY)
        // console.log(index)
      }, 15)
    },
    handleTouchEnd (event) {
      this.touched = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.stylus"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: 0.4rem
    .item
      line-height: 0.4rem
      text-align: center
      color: $bgColor
</style>
