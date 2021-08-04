<template>
  <view class="cc-divider">
    <view v-if="!$slots.default" class="cc-divider-nocontent" :style="{ width: width ? width + 'rpx' : '750rpx' }"></view>
    <view v-else class="cc-divider-content">
      <view class="cc-divider-content-left-line" :class="{ 'f-1': position === 'left', 'f-8':  position === 'right' }" :style="{ background: color }"></view>
      <view><slot></slot></view>
      <view class="cc-divider-content-right-line" :class="{ 'f-1': position === 'right', 'f-8':  position === 'left' }" :style="{ background: color }"></view>
    </view> 
  </view>
</template>

<script>
export default {
  name: 'cc-divider',
  components: {},
  props: {
    // 分割线宽度
    width: {
      type: [String, Number],
      default: ''
    },
    // 文字位置
    position: {
      type: String,
      default: 'center'
    },
    // 分割线颜色
    color: {
      type: String,
      default: '#ebedf0'
    }
  },
  data() {
    return {}
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
.cc-divider {
  width: 100%;
  &-nocontent {
    height: 2rpx;
    background: #ebedf0;
    width: 100%;
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &-left-line,
    &-right-line {
      height: 2rpx;
    }
    &-left-line {
      margin-right: 30rpx;
      flex: 1;
    }
    &-right-line {
      margin-left: 30rpx;
      flex: 1;
    }
  }
}
.f-1 {
  flex: 1;
}
.f-8 {
  flex: 8;
}
</style>
