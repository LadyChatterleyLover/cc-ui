<template>
  <view ref="cToast" class="cc-toast" v-if="showToast">
    <view class="cc-toast-content" :style="{ background: bgColor, top }">
      <view class="cc-toast-icon" v-if="iconValue" :class="{ loading: isLoading }"><cc-icon :type="iconValue" color="#fff" size="14"></cc-icon></view>
      <view>{{ text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-toast',
  components: {},
  props: {},
  data() {
    return {
      // 显示toast
      showToast: false,
      // toast内容
      text: '',
      // toast背景颜色
      bgColor: '',
      // 销毁toast定时器
      timer: null,
      // 图标
      iconValue: '',
      // toast出现位置
      top: '',
      // 是否加载状态
      isLoading: false
    }
  },
  methods: {
    show(options) {
      this.showToast = true
      let { title, type = 'info', icon = true, customIcon = '', loading = false, duration = 2000, position = 'center', url = '', back = false, query = {}, callback } = options
      if (position === 'top') {
        this.top = '30%'
      }
      if (position === 'bottom') {
        this.top = '70%'
      }
      if (position === 'center') {
        this.top = '50%'
      }
      if (type === 'primary') {
        this.bgColor = '#0081ff'
        if (customIcon) this.iconValue = customIcon
        else if (loading) {
          this.iconValue = 'spinner-cycle'
          this.isLoading = true
        }
        else this.iconValue = ''
      }
      if (type === 'success') {
        this.bgColor = '#39b54a'
        if (customIcon) this.iconValue = customIcon
        else if (loading) {
          this.iconValue = 'spinner-cycle'
          this.isLoading = true
        }
        else {
          if (icon) this.iconValue = 'checkbox'
          else this.iconValue = ''
        }
      }
      if (type === 'error') {
        this.bgColor = '#e54d42'
        if (customIcon) this.iconValue = customIcon
        else if (loading) {
          this.iconValue = 'spinner-cycle'
          this.isLoading = true
        }
        else {
          if (icon) this.iconValue = 'close'
          else this.iconValue = ''
        }
      }
      if (type === 'warning') {
        this.bgColor = '#f37b1d'
        if (customIcon) this.iconValue = customIcon
        else if (loading) {
          this.iconValue = 'spinner-cycle'
          this.isLoading = true
        }
        else {
          if (icon) this.iconValue = 'info'
          else this.iconValue = ''
        }
      }
      if (type === 'info') {
        this.bgColor = '#333'
        if (customIcon) this.iconValue = customIcon
        else if (loading) {
          this.iconValue = 'spinner-cycle'
          this.isLoading = true
        }
        else this.iconValue = ''
      }
      this.text = title
      this.timer= setTimeout(() => {
        this.showToast = false
        if (back) {
          uni.navigateBack()
        } else {
          if (url) {
            uni.navigateTo({
              url: `${url}`
            })
          }
        }
        if (callback) callback()
        this.isLoading = false
      }, duration)
    }
  },
  mounted() {

  },
  destroyed() {
    this.timer = null
    clearTimeout(this.timer)
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
.cc-toast {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  .cc-toast-content {
    position: absolute;
    font-size: 14px;
    padding: 20rpx 50rpx;
    border-radius: 4rpx;
    color: #fff;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    .cc-toast-icon {
      margin-right: 8rpx;
      position: relative;
      top: 2rpx;
    }
  }
}
.loading {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
