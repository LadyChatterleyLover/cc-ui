<template>
  <view>
    <cc-button @click="open1">打开预览</cc-button>
    <cc-image-preview :value.sync="show1" :list="list" :actions="actions"></cc-image-preview>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show1: false,
      list: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
        }
      ],
      actions: [
        {
          name: '选项一'
        },
        {
          name: '选项二'
        },
        {
          name: '选项三'
        }
      ],
    }
  },
  methods: {
    open1() {
      this.show1 = true
    }
  },
  mounted() {

  },
  onLoad() {

  },
  onShow() {

  },
  filters: {},
  computed: {},
  watch: {},
}
</script>

<style scoped lang="scss">
</style>
