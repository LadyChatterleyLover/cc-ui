<template>
  <canvas :style="{ width: width + 'rpx', height: height + 'rpx' }" :canvas-id="id"></canvas>
</template>

<script>
import drawQrcode from './qrcode.js'
export default {
  components: {},
  props: {
    // 二维码宽度
    width: {
      type: [Number, String],
      default: 400
    },
    // 二维码高度
    height: {
      type: [Number, String],
      default: 400
    },
    // 二维码内容
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // #ifdef H5
      id: 'cc-qrcode-' + this._uid
      // #endif
      // #ifndef H5
      id: 'cc-qrcode-' +  Number( Math.random().toString().substr(3, 20) + Date.now()).toString(36)
      // #endif
    }
  },
  methods: {
  },
  mounted() {
    drawQrcode({
      width: uni.upx2px(Number(this.width)),
      height: uni.upx2px(Number(this.height)),
      canvasId: this.id,
      text: this.text,
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
