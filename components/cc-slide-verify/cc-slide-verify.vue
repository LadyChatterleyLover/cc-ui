<template>
  <view class="cc-slide-verify" :style="{ width: slideWidth + 'rpx', height: slideHeight + 'rpx', fontSize, background: bgColor }">
    <view class="cc-slide-verify-content" :style="{ background: activeBgColor, width: activeBarWidth + 'px', transitionDuration }">
      <view class="cc-slide-verify-content" :style="{ width: slideWidth + 'rpx', height: slideHeight + 'rpx', fontSize }">{{ tip }}</view>
    </view>
    <view
      class="cc-slide-verify-drag"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="{ transitionDuration, transform: `translateX(${activeBarWidth}px)` }"
    >
      <template v-if="status === 'none'">
        <view class="cc-slide-verify-drag-arrow"><cc-icon type="arrowright" :size="iconSize" :color="iconColor"></cc-icon></view>
        <view class="cc-slide-verify-drag-arrow"><cc-icon type="arrowright" :size="iconSize" :color="iconColor"></cc-icon></view>
      </template>
      <view class="cc-slide-verify-drag-check" v-else><cc-icon :type="succeccIcon" :size="iconSize" :color="activeIconColor"></cc-icon></view>
    </view>
    <view>{{ tip }}</view>
  </view>
</template>

<script>
export default {
  name: 'cc-slide-verify',
  components: {},
  props: {
    // 提示文字
    tip: {
      type: String,
      default: '拖动滑块验证'
    },
    // 滑块条宽度
    slideWidth: {
      type: [Number, String],
      default: 600
    },
    // 滑块条高度
    slideHeight: {
      type: [Number, String],
      default: 60
    },
    // 滑块背景颜色
    bgColor: {
      type: String,
      default: '#E9E9E9'
    },
    // 验证之后的滑块背景颜色
    activeBgColor: {
      type: String,
      default: '#19be6b'
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: '#cbcbcb'
    },
    // 验证成功之后图标颜色
    activeIconColor: {
      type: String,
      default: '#19be6b'
    },
    // 图标大小
    iconSize: {
      type: [Number, String],
      default: 14
    },
    // 字体大小
    fontSize: {
      type: [Number, String],
      default: 14
    },
    // 成功图标
    succeccIcon: {
      type: String,
      default: 'checkbox'
    }
  },
  data() {
    return {
      // 验证之后滑块宽度
      activeBarWidth: 0,
      status: 'none',
      transitionDuration: '0.6s',
      startX: 0
    }
  },
  methods: {
    touchstart(e) {
      this.startX = e.changedTouches[0].clientX
      this.transitionDuration = '0s'
    },
    touchmove(e) {
      let move = e.changedTouches[0].clientX
      if (this.startX - move > 0) return
      let dis = uni.upx2px(this.slideWidth) - uni.upx2px(80)
      this.activeBarWidth = -Math.floor(this.startX - move) >= dis ? dis : -Math.floor(this.startX - move)
    },
    touchend(e) {
      let dis = uni.upx2px(this.slideWidth) - uni.upx2px(80)
      if (this.activeBarWidth < dis) {
        this.transitionDuration = '0.6s'
        this.activeBarWidth = 0
      } else {
        this.activeBarWidth = dis
        this.status = 'done'
        return
      }
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    status(val) {
      if (val === 'done') this.$emit('success')
    }
  }
}
</script>

<style scoped lang="scss">
.cc-slide-verify {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &-drag {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80rpx;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    transition: all;
    &-arrow {
      &:first-child {
        position: relative;
        left: 6rpx;
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    transition: all;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
</style>
