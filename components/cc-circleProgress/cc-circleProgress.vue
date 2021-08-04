<template>
  <view class="cc-circle-progress">
    <view class="cc-circle-progress-box" :style="{ width: width + 'px', height: width + 'px' }">
      <!-- #ifdef H5 -->
      <canvas class="cc-circle-progress-bg" :style="{ width: width + 'px', height: width + 'px' }" :canvas-id="`canvasProgressbg-${_uid}`"></canvas>
      <canvas class="cc-circle-progress-canvas" :style="{ width: width + 'px', height: width + 'px' }" :canvas-id="`canvasProgress-${_uid}`"></canvas>
      <!-- #endif -->
      <!-- #ifndef H5 -->
      <canvas class="cc-circle-progress-bg" :style="{ width: width + 'px', height: width + 'px' }" :canvas-id="`canvasProgressbg-${id}`"></canvas>
      <canvas class="cc-circle-progress-canvas" :style="{ width: width + 'px', height: width + 'px' }" :canvas-id="`canvasProgress-${id}`"></canvas>
      <!-- #endif -->
      <view class="cc-circle-progress-text">
        <slot v-if="$slots.default"></slot>
        <view v-else>{{ percent }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-circleProgress',
  components: {},
  props: {
    // 进度条进度
    percent: {
      type: [Number, String],
      default: 0
    },
    // 进度条宽度
    width: {
      type: [Number, String],
      default: 100
    },
    // 轨道颜色
    layerColor: {
      type: String,
      default: '#fff'
    },
    // 进度条颜色
    fillColor: {
      type: String,
      default: '#0081ff'
    },
    // 进度条宽度	
    strokeWidth: {
      type: [Number, String],
      default: 4
    }
  },
  data() {
    return {
      id: ''
    }
  },
  methods: {
    drawProgressbg() {
      // 使用 wx.createContext 获取绘图上下文 context
      // #ifdef H5
      let ctx = wx.createCanvasContext(`canvasProgressbg-${this._uid}`, this)
      // #endif
      // #ifndef H5
      let ctx = wx.createCanvasContext(`canvasProgressbg-${this.id}`, this)
      // #endif
      ctx.setLineWidth(Number(this.strokeWidth)) // 设置圆环的宽度
      ctx.setStrokeStyle(this.layerColor) // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath() //开始一个新的路径
      ctx.arc(Number(this.width) / 2, Number(this.width) / 2, Number(this.width) / 2 - 10, 0, 2 * Math.PI, false)
      ctx.stroke() //对当前路径进行描边
      ctx.draw()
    },
    drawCircle(step) {
      // #ifdef H5
      let context = wx.createCanvasContext(`canvasProgress-${this._uid}`, this)
      // #endif
      // #ifndef H5
      let context = wx.createCanvasContext(`canvasProgress-${this.id}`, this)
      // #endif
      // 设置渐变
      let gradient = context.createLinearGradient(200, 100, 100, 200)
      gradient.addColorStop('0', this.fillColor)
      gradient.addColorStop('0.5', this.fillColor)
      gradient.addColorStop('1.0', this.fillColor)

      context.setLineWidth(Number(this.strokeWidth))
      context.setStrokeStyle(gradient)
      context.setLineCap('round')
      context.beginPath()
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(Number(this.width) / 2, Number(this.width) / 2, Number(this.width) / 2 - 10, -Math.PI / 2, step * Math.PI - Math.PI / 2, false)
      context.stroke()
      context.draw()
    },
    // 生成id
    genID(length) {
      return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
    },
  },
  mounted() {
    this.drawProgressbg()
    this.drawCircle(Number(this.percent)/ 50)
    // #ifndef H5
    this.id = this.genID(20)
    // #endif
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
// wxss
.cc-circle-progress {
  &-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-bg {
    position: absolute;
  }
  &-text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
