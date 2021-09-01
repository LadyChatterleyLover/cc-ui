<template>
  <view
    class="cc-fab"
    id="cc-fab"
    :style="{
      width: width + 'rpx',
      height: height + 'rpx',
      background: bgColor,
      top: top + 'rpx',
      right: right + 'rpx'
    }"
  >
    <view class="cc-fab-content"><cc-icon type="plusempty" size="30" color="#fff"></cc-icon></view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    // 按钮宽度
    width: {
      type: [Number, String],
      default: 80
    },
    // 按钮高度
    height: {
      type: [Number, String],
      default: 80
    },
    // 按钮背景颜色
    bgColor: {
      type: String,
      default: '#0081ff'
    },
    // 按钮初始化位置
    top: {
      type: [Number, String],
      default: 40
    },
    right: {
      type: [Number, String],
      default: 40
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
.cc-fab {
  position: absolute;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    transition: all 0.6s;
  }
}
</style>
