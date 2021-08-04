<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-load-more text="点击或上拉加载更多"></cc-load-more>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义样式</view>
      <view class="demo-item">
        <cc-load-more lineWidth="120" color="red" fontSize="20" text="点击或上拉加载更多"></cc-load-more>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">加载更多</view>
      <view class="demo-item">
        <cc-load-more loading text="加载中"></cc-load-more>
        <cc-load-more loading text="加载中" loadingType="spinner"></cc-load-more>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">显示点</view>
      <view class="demo-item">
        <cc-load-more dot></cc-load-more>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
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
.demo {
  &-title {
    padding: 20rpx;
  }
  &-item {
    margin-bottom: 60rpx;
  }
}
</style>
