<template>
  <view class="cc-pull-refresh" :style="{ height: `calc(100vh - ${headHeight}px)` }" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <view class="cc-pull-refresh-wrap" :style="{ transitionDuration: duration + 's', transform: `translateY(${moveY}px)` }">
      <view class="cc-pull-refresh-wrap-head" :style="{ height: headHeight + 'px' }">
        <view v-if="end">{{ tips }}</view>
        <template v-else>
          <view v-if="moveY <= 60">{{ pullingText }}</view>
          <view v-if="moveY > 60">{{ loosingText }}</view>
        </template>
      </view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    // 顶部内容高度
    headHeight: {
      type: [Number, String],
      default: 50
    },
    // 下拉过程提示文案
    pullingText: {
      type: String,
      default: '下拉即可刷新...'
    },
    // 释放过程提示文案
    loosingText: {
      type: String,
      default: '释放即可刷新...'
    },
    // 加载过程提示文案
    loadingText: {
      type: String,
      default: '加载中...'
    },
    // 刷新成功提示文案
    successText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      duration: 0.3,
      startY: 0,
      moveY: 0,
      // 下拉结束
      end: false,
      tips: this.loadingText
    }
  },
  methods: {
    touchstart(e) {
      this.duration = 0
      this.startY = e.changedTouches[0].clientY
    },
    touchmove(e) {
      let move = e.changedTouches[0].clientY
      let dis = this.startY - move
      if (dis > 0) return
      this.moveY = -Math.floor(dis)
    },
    touchend(e) {
      this.duration = 0.3
      this.end = true
      this.moveY = Number(this.headHeight)
      if (this.successText) {
        setTimeout(() => {
          this.tips = this.successText
          this.$emit('refresh')
        }, 800)
      }
      setTimeout(() => {
        this.moveY = 0
      }, 1000)
      setTimeout(() => {
        this.end = false
        this.tips = this.loadingText
      }, 1100)
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
.cc-pull-refresh {
  overflow: hidden;
  &-wrap {
    height: 100%;
    position: relative;
    transition-property: transform;
    &-head {
      position: absolute;
      left: 0;
      width: 100%;
      overflow: hidden;
      color: #969799;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-100%);
    }
  }
}
</style>
