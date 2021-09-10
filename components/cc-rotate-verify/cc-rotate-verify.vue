<template>
  <view>
    <cc-popup :show.sync="visible" :closeOnClickOverlay="closeOnClickOverlay" :closeIcon="closeIcon" closeable @close="close" width="500">
      <view class="cc-rotate-verify">
        <view class="cc-rotate-verify-title" :style="{ color: titleColor, fontSize: titleSize }">{{ title }}</view>
        <view class="cc-rotate-verify-desc" :style="{ color: descColor, fontSize: descSize }">{{ desc }}</view>
        <view class="cc-rotate-verify-img" :style="{ transform: `rotate(${rotate}deg)`, transitionDuration }"><image :src="src" class="cc-rotate-verify-img-image"></image></view>
        <view class="cc-rotate-verify-bar" :style="{ width: barWidth + 'rpx', height: barHeight + 'rpx', background: barBgColor }">
          <view
            class="cc-rotate-verify-bar-wrap"
            :style="{ background: barColor, width: barHeight + 'rpx', height: barHeight + 'rpx', transitionDuration, transform: `translateX(${translateX}px)` }"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
          >
            <view class="cc-rotate-verify-bar-wrap-arrow"><cc-icon type="arrowright" size="14" color="#fff"></cc-icon></view>
            <view class="cc-rotate-verify-bar-wrap-arrow"><cc-icon type="arrowright" :size="14" color="#fff"></cc-icon></view>
          </view>
        </view>
      </view>
    </cc-popup>
    <cc-toast ref="toast"></cc-toast>
  </view>
</template>

<script>
export default {
  name: 'cc-rotate-verify',
  components: {},
  props: {
    // 是否显示旋转验证
    show: {
      type: Boolean,
      default: false
    },
    // 验证图片地址
    src: {
      type: String,
      required: true
    },
    // 标题
    title: {
      type: String,
      default: '安全验证'
    },
    // 标题大小
    titleSize: {
      type: [Number, String],
      default: 14
    },
    // 标题颜色
    titleColor: {
      type: String,
      default: '#999'
    },
    // 描述
    desc: {
      type: String,
      default: '拖动滑块使图片角度为正'
    },
    // 描述大小
    descSize: {
      type: [Number, String],
      default: 16
    },
    // 描述颜色
    descColor: {
      type: String,
      default: '#333'
    },
    // 验证弹层背景色
    bgColor: {
      type: String,
      default: '#fff'
    },
    // 关闭图标
    closeIcon: {
      type: String,
      default: 'closeempty'
    },
    // 点击遮罩层是否可关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 滑块宽度
    barWidth: {
      type: [Number, String],
      default: 540
    },
    // 滑块高度
    barHeight: {
      type: [Number, String],
      default: 90
    },
    // 滑块背景颜色
    barBgColor: {
      type: String,
      default: 'rgba(86,119,252,.1)'
    },
    // 滑块颜色
    barColor: {
      type: String,
      default: '#5677fc'
    },
    // 图片默认旋转角度
    // 取值范围： -330deg<angle <-30deg 或 30deg<angle<330deg
    angle: {
      type: Number,
      default: 30
    },
    // 误差范围
    errorRange: {
      type: Number,
      default: 5
    },
    // 验证成功提示
    successMsg: {
      type: String,
      default: '验证成功'
    },
    // 验证失败提示
    errMsg: {
      type: String,
      default: '验证失败, 请重新验证'
    },
    // 弹框消失时间
    duration: {
      type: [Number, String],
      default: 2000
    }
  },
  data() {
    return {
      visible: this.show,
      rotate: this.angle,
      startX: 0,
      transitionDuration: '0s',
      translateX: 0,
      status: 'none'
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    touchstart(e) {
      this.startX = e.changedTouches[0].clientX
      this.transitionDuration = '0s'
    },
    touchmove(e) {
      let move = e.changedTouches[0].clientX
      if (this.startX - move > 0) return
      let dis = uni.upx2px(this.barWidth) - uni.upx2px(this.barHeight)
      this.translateX = -Math.floor(this.startX - move) >= dis ? dis : -Math.floor(this.startX - move)
      this.rotate = Math.floor(360 * (this.translateX / (uni.upx2px(this.barWidth) - this.barHeight))) + this.angle
    },
    touchend(e) {
      let dis = uni.upx2px(this.barWidth) - uni.upx2px(this.barHeight)
      if (this.translateX < dis) {
        this.transitionDuration = '0.6s'
        this.translateX = 0
      } else {
        this.translateX = dis
      }
      if (this.rotate >= 360 - this.errorRange && this.rotate <= 360 + this.errorRange) {
        this.status = 'done'
        this.$refs.toast.show({
          type: 'success',
          title: this.successMsg
        })
        setTimeout(() => {
          this.visible = false
        }, Number(this.duration))
        setTimeout(() => {
          this.rotate = this.angle
        }, Number(this.duration + 500))
      } else {
        this.$refs.toast.show({
          type: 'error',
          title: this.errMsg
        })
        this.transitionDuration = '0.6s'
        this.status = 'none'
        this.rotate = this.angle
      }
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    visible(val) {
      this.$emit('update:show', val)
    },
    show(val) {
      this.visible = val
    },
    status(val) {
      if (val === 'done') this.$emit('success')
    }
  }
}
</script>

<style scoped lang="scss">
.cc-rotate-verify {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title {
    margin-bottom: 20rpx;
  }
  &-img {
    width: 200rpx;
    height: 200rpx;
    margin: 30rpx 0;
    transition: all 0.6s;
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
  &-bar {
    border-radius: 48rpx;
    &-wrap {
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.6s;
      &-arrow {
        &:first-child {
          position: relative;
          left: 6rpx;
        }
      }
    }
  }
}
</style>
