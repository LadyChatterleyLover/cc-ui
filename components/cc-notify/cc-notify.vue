<template>
  <view>
    <view class="cc-notify" :class="{ 'cc-notify-show': showNotify, 'cc-notify-hide': !showNotify, 'cc-notify-radius': radius }" :style="{ background: bgColor, top }">
      <view class="cc-notify-content" :style="{ color: textColor }">{{ text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-notify',
  components: {},
  props: {},
  data() {
    return {
      // 显示通知
      showNotify: false,
      // 通知内容
      text: '',
      // 背景颜色
      bgColor: '',
      // 文字颜色
      textColor: '',
      timer: null,
      // 是否显示圆角
      radius: false,
      top: ''
    }
  },
  methods: {
    show(options) {
      this.showNotify = true
      let { title, type = 'primary', duration = 2000, color = '', background = '', showRadius = false } = options
      this.text = title
      this.radius = showRadius
      if (color) this.textColor = color
      else this.textColor = '#fff'
      if (background) {
        this.bgColor = background
      } else {
        if (type === 'primary') {
          this.bgColor = '#0081ff'
        }
        if (type === 'success') {
          this.bgColor = '#39b54a'
        }
        if (type === 'error') {
          this.bgColor = '#e54d42'
        }
        if (type === 'warning') {
          this.bgColor = '#f37b1d'
        }
        if (type === 'info') {
          this.bgColor = '#909399'
        }
      }
      this.timer = setTimeout(() => {
        this.showNotify = false
      }, duration)
    }
  },
  mounted() {
    // #ifdef H5
    let head = document.getElementsByTagName('uni-page-head')[0]
    if (head) this.top = '88rpx'
    // #endif
  },
  destroyed() {
    this.timer = null
    clearTimeout(this.timer)
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang='scss'>
.cc-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16rpx 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  z-index: 999;
  &-content {
    font-size: 14px;
  }
  &-radius {
    border-radius: 20rpx 20rpx 0 0;
  }
}
.cc-notify-show {
  animation: show 0.35s linear forwards;
}
.cc-notify-hide {
  animation: hide 0.35s linear;
}
@keyframes show {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>