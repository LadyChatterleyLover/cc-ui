<template>
  <view class="container">
    <view>2002年的第一场雪</view>
    <cc-sticky><view class="sticky">比以往时候来的更晚一些</view></cc-sticky>
    <cc-sticky :offset-top="50"><view class="sticky" style="margin-left: 330rpx;">停靠在8楼的2路汽车</view></cc-sticky>
     <view>带走了最后一片飘落的黄叶</view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    toJSON(){}
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.container {
  height: 200vh;
  margin-top: 150rpx;
}

.sticky {
  width: 200rpx;
  background-color: #2979ff;
  color: #fff;
  padding: 24rpx;
  text-align: center;
}
</style>
