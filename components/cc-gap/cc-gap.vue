<template>
  <view class="cc-gap" :style="{background: bgColor, height: height + 'rpx', marginTop: marginTop + 'rpx', marginBottom: marginBottom + 'rpx'}"></view>

</template>

<script>
  export default {
    name: 'cc-gap',
    components: {},
    props: {
      // 背景颜色
      bgColor: {
        type: String,
        default: 'transparent'
      },
      // 间隔槽高度
      height: {
        type: [String, Number],
        default: 30
      },
      // 与前一个元素的距离
      marginTop: {
        type: [String, Number],
        default: 0
      },
      // 与后一个元素的距离
      marginBottom: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {}
    },
    methods: {},
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
