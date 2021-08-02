<template>
  <view class="cc-slider" :id="`cc-slider-${id}`" :style="{ background: inactiveColor, height: height + 'rpx' }" @click="clickSlider">
    <view class="cc-slider-wrap" :class="{ 'cc-slider-wrap-transition': isTransition }" :style="{ width: move + '%', background: activeColor }">
      <view class="cc-slider-button-wrap" :style="{ right: buttonPosition + '%' }" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot v-if="$slots.button" name="button"></slot>
        <view v-else class="cc-slider-button-wrap-content"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-slider',
  components: {},
  props: {
    value: {
      type: Number,
      default: 0
    },
    // 步进
    step: {
      type: [Number, String],
      default: 1
    },
    // 滑块激活时的颜色
    activeColor: {
      type: String,
      default: '#0081ff'
    },
    // 滑块未激活时的颜色
    inactiveColor: {
      type: String,
      default: '#e5e5e5'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 最小值
    min: {
      type: [Number, String],
      default: 0
    },
    // 最大值
    max: {
      type: [Number, String],
      default: 100
    },
    // 滑动按钮的高度
    height: {
      type: [String, Number],
      default: 2
    }
  },
  data() {
    return {
      id: '',
      sliderValue: 0,
      // 滑块移动占比
      move: 0,
      // 外层滑块宽度
      containerWidth: 0,
      // 是否需要动画
      isTransition: true,
      // 拖动状态
      touchStatus: '',
      // 开始位置
      startX: 0
    }
  },
  methods: {
    // 拖动开始
    touchstart(e) {
      if (this.disabled) return
      this.startX = e.touches[0].pageX
      this.$emit('touchstart')
    },
    // 拖动中
    touchmove(e) {
      if (this.disabled) return
      this.isTransition = false
      let dis = Math.ceil(this.startX - e.touches[0].pageX)
      if (this.step === undefined) {
        this.move = Math.abs(((dis - this.startX) / this.containerWidth).toFixed(2) * 100).toFixed(0)
      } else {
        let d = Math.abs(((dis - this.startX) / this.containerWidth).toFixed(2) * 100).toFixed(0)
        let percent = Math.round((Number(d) + Number(this.step)) / Number(this.step)) * Number(this.step)
        if (percent % Number(this.step) === 0) {
          this.move = percent
        }
      }
      if (this.max) {
        if (Number(this.move) >= Number(this.max)) this.move = Number(this.max)
      } else {
        if (Number(this.move) >= 100) this.move = 100
      }
      if (this.min) {
        if (Number(this.move) <= Number(this.min)) this.move = Number(this.min)
      } else {
        if (Number(this.move) <= 0) this.move = 0
      }
      this.$emit('input', Number(this.move))
    },
    // 拖动结束
    touchend(e) {
      if (this.disabled) return
      this.isTransition = true
      this.touchStatus = 'end'
      this.$emit('touchend')
    },
    // 点击滑块
    clickSlider(e) {
      if (this.disabled) return
      this.isTransition = false
      let dis = e.detail.x
      let d = Math.abs(((Number(dis) - Number(this.startX)) / Number(this.containerWidth)).toFixed(2) * 100).toFixed(0)
      let percent = Math.round((Number(d) + Number(this.step)) / Number(this.step)) * Number(this.step)
      if (percent % Number(this.step) === 0 && percent !== 1) {
        this.move = percent
      }
    }
  },
  mounted() {
    this.id = this._uid
    this.sliderValue = this.value
    this.$nextTick(() => {
      // #ifdef H5
      this.containerWidth = document.getElementById(`cc-slider-${this.id}`).offsetWidth * 1
      // #endif
      // #ifndef H5
      let id = `#cc-slider-${this._uid}`
      uni
        .createSelectorQuery()
        .in(this)
        .select('.cc-slider')
        .boundingClientRect()
        .exec(res => {
          this.containerWidth = res[0].width
        })
      // #endif
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    // 按钮定位位置
    buttonPosition() {
      return 100 - Number(this.move)
    }
  },
  watch: {
    move(val) {
      this.$emit('update:value', val)
    },
    touchStatus(val) {
      if (val === 'end') this.$emit('change', Number(this.move))
    },
    value: {
      handler(val) {
        this.move = val
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
.cc-slider {
  position: relative;
  width: 100%;
  background-color: #ebedf0;
  border-radius: 999px;
  cursor: pointer;
  &-wrap {
    width: 100%;
    height: 100%;
    background-color: #1989fa;
    border-radius: inherit;
    &-transition {
      transition: all 0.2s;
    }
  }
  &-button-wrap {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    &-content {
      height: 20px;
      width: 20px;
      background-color: rgb(255, 255, 255);
      border-radius: 50%;
      box-shadow: 0 1px 2px #fff;
    }
  }
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}
</style>
