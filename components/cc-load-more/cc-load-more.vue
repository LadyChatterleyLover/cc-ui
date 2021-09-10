<template>
  <view class="cc-load-more" :style="{ marginTop: marginTop + 'rpx', marginBottom: marginBottom + 'rpx' }">
    <cc-divider :width="lineWidth">
      <view v-if="dot" class="cc-load-more-dot"></view>
      <view class="cc-load-more-content" v-else>
        <view v-if="loading">
          <cc-loading :size="loadingType === 'circle' ? '12' : '20'" :type="loadingType"></cc-loading>
        </view>
        <view :style="{ color, fontSize: fontSize + 'px' }">{{ text }}</view>
      </view>
    </cc-divider>
  </view>
</template>

<script>
export default {
  name: 'cc-load-more',
  components: {},
  props: {
    // 加载文案
    text: {
      type: String,
      default: ''
    },
    // 线条宽度
    lineWidth: {
      type: [Number, String],
      default: 80
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 文字颜色
    color: {
      type: String,
      default: '#606266'
    },
    // 文字大小
    fontSize: {
      type: [Number, String],
      default: 14
    },
    // 与前一个元素的距离
    marginTop: {
      type: [Number, String],
      default: 14
    },
    // 与后一个元素的距离
    marginBottom: {
      type: [String, Number],
      default: 0
    },
    // 加载图标类型
    loadingType: {
      type: String,
      default: 'circle'
    },
    // 是否显示点的模式
    dot: {
      type: Boolean,
      default: false
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
  .cc-load-more {
    &-dot {
      height: 20rpx;
      width: 20rpx;
      background: #606266;
      border-radius: 100%;
    }
    &-content {
      display: flex;
      align-items: center;
    }
  }
</style>
