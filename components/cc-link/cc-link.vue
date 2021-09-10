<template>
  <view>
    <view @click="goto" class="cc-link" :style="{ fontSize: fontSize + 'px', color, borderBottom: underLine ? `1px solid ${lineColor}` : 'none' }"><slot></slot></view>
    <cc-toast ref="toast"></cc-toast>
  </view>
</template>

<script>
export default {
  name: 'cc-link',
  components: {},
  props: {
    // 链接地址
    href: {
      type: String,
      required: true
    },
    // 文字颜色
    color: {
      type: String,
      default: '#0081ff'
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: '14'
    },
    // 是否显示下划线
    underLine: {
      type: Boolean,
      default: true
    },
    // 下划线颜色
    lineColor: {
      type: String,
      default: '#0081ff'
    },
    // 小程序平台复制提示
    mpTips: {
      type: String,
      default: '链接已复制, 请在浏览器打开'
    }
  },
  data() {
    return {}
  },
  methods: {
    goto() {
      // #ifdef APP-PLUS
      plus.runtime.openURL(this.href)
      // #endif
      // #ifdef H5
      window.open(this.href)
      // #endif
      // #ifdef MP
      uni.setClipboardData({
        data: this.href,
        success: () => {
          uni.hideToast()
          this.$nextTick(() => {
            this.$refs.toast.show({title: this.mpTips})
          })
        }
      })
      // #endif
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
.cc-link {
  width: fit-content;
}
</style>
