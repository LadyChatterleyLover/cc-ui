<template>
  <view class="cc-swipe-cell">
    <view class="cc-swipe-cell-wrap" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove" :style="{ transform: `translateX(${slideX}px)`, transitionDuration }">
      <view class="cc-swipe-cell-wrap-left"><slot name="left"></slot></view>
      <view class="cc-swipe-cell-wrap-content" @click="handleClick"><slot></slot></view>
      <view class="cc-swipe-cell-wrap-right"><slot name="right"></slot></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-swipe-cell',
  props: {},
  data() {
    return {
      slideX: 0,
      startSlideX: 0,
      btnWidth: 0,
      startX: 0,
      lastX: 0,
      startTime: 0,
      transitionDuration: '0.6s'
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        uni
          .createSelectorQuery()
          .in(this)
          .select('.cc-swipe-cell-wrap-right')
          .boundingClientRect()
          .exec(res => {
            this.btnWidth = res[0].width * -1
          })
      })
    },
    // 滑动开始
    touchStart(e) {
      //记录手指放上去的时间
      this.startTime = e.timeStamp
      //记录滑块的初始位置
      this.startSlideX = this.slideX
      this.startX = e.touches[0].pageX
      this.lastX = this.startX
      this.transitionDuration = '0s'
    },
    // 滑动中
    touchMove(e) {
      const endX = e.touches[0].pageX
      const distance = endX - this.lastX
      const dis = this.slideX + distance
      if (dis <= 0 && dis >= this.btnWidth) {
        this.slideX = dis
      }
      this.lastX = endX
      this.transitionDuration = '0s'
    },
    // 滑动结束
    touchEnd(e) {
      let distance = 10
      const endTime = e.timeStamp
      const endX = this.startX - this.lastX
      if (Math.abs(endTime - this.startTime) > 200) {
        distance = this.btnWidth / -2
      }
      if (endX > distance) {
        this.slideX = this.btnWidth
      } else if (endX < distance * -1) {
        this.slideX = 0
      } else {
        this.slideX = this.startSlideX
      }
      this.transitionDuration = '0.6s'
    },
    handleClick() {
      this.$emit('click')
      this.slideX = 0
    }
  },
  mounted() {
    this.init()
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.cc-swipe-cell {
  position: relative;
  overflow: hidden;
  &-wrap {
    display: flex;
    align-items: center;
    position: relative;
    &-content {
      flex: 1;
    }
    &-left {
      position: absolute;
      left: 0;
      transform: translateX(-100%);
      display: flex;
      align-items: center;
    }
    &-right {
      position: absolute;
      right: 0;
      transform: translateX(100%);
      display: flex;
      align-items: center;
    }
  }
}
</style>
