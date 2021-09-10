<template>
  <view class="cc-open-more">
    <view class="cc-open-more-content" :style="{ textIndent: textIndent, height: height }"><slot></slot></view>
    <view class="cc-open-more-btn" @click="toggle">
      <view v-if="!flag" :style="{ color: color }">{{ closeText }}</view>
      <view v-if="flag && showToggle" :style="{ color: color }">{{ openText }}</view>
      <view class="cc-open-more-btn-icon"><cc-icon :type="icon" :color="color" size="12"></cc-icon></view>
    </view>
    <view class="cc-open-more-mask" v-if="mask"></view>
  </view>
</template>

<script>
export default {
  name: 'cc-open-more',
  components: {},
  props: {
    // 文字首行缩进
    textIndent: {
      type: String,
      default: '2em'
    },
    // 内容超出此高度才会显示展开全文按钮
    openHeight: {
      type: [String, Number],
      default: 200
    },
    // 文字颜色
    color: {
      type: String,
      default: '#2979ff'
    },
    // 关闭时的提示文字
    closeText: {
      type: String,
      default: '展开更多'
    },
    // 展开时的提示文字
    openText: {
      type: String,
      default: '收起'
    },
    // 展开后是否显示收起按钮
    showToggle: {
      type: Boolean,
      default: true
    },
    // 显示遮罩层
    showMask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      height: this.openHeight + 'rpx',
      mask: this.showMask,
      icon: 'arrowdown',
      flag: false
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag
      this.mask = !this.mask
      this.height = this.height !== 'auto' ? 'auto' : this.openHeight + 'rpx'
      this.icon = this.icon === 'arrowdown' ? 'arrowup' : 'arrowdown'
      if (this.flag) this.$emit('open')
      else this.$emit('close')
    }
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
.cc-open-more {
  position: relative;
  &-content {
    font-size: 12px;
    overflow: hidden;
    background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%);
    padding-top: 108px;
    margin-top: -108px;
  }
  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-top: 20rpx;
    &-icon {
      margin-left: 6rpx;
    }
  }
  &-mask {
    position: absolute;
    background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%);
    width: 100%;
    height: 100rpx;
    bottom: 32rpx;
  }
}
</style>
