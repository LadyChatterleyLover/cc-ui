<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-gap bg-color="#ccc"></cc-gap>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">上下间距</view>
      <view class="demo-item">
        <cc-gap bg-color="#ccc" marginBottom="30" marginTop="30"></cc-gap>
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
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
