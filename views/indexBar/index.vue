<template>
  <view class="container">
    <cc-index-bar>
      <view class="a" v-for="(item, index) in indexList" :key="index">
        <cc-index-anchor :index="item"></cc-index-anchor>
        <view class="list-item">列表{{ item }}1</view>
        <view class="list-item">列表{{ item }}2</view>
        <view class="list-item">列表{{ item }}3</view>
      </view>
    </cc-index-bar>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.list-item {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 28rpx;
  background: #fff;
}
.container {
  background: #f6f6f6;
  height: 100vh;
}
</style>
