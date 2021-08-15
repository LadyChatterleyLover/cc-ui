<template>
  <view>
    <view class="container">
      我是顶部的内容
    </view>
    <cc-backtop :scrollTop="scrollTop"></cc-backtop>
    <cc-backtop :scrollTop="scrollTop" top="50" bottom="100" right="100"><view class="demo">UP</view></cc-backtop>
  </view>
</template>

<script>
export default {
  components: {
    
  },
  props: {},
  data() {
    return {
      scrollTop: 0
    }
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.container {
  height: 2000rpx;
  background: #f7f7f7;
}
.demo {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>
