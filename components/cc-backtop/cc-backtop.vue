<template>
  <view class="cc-backtop" :style="[{ bottom: bottom + 'rpx', right: right + 'rpx' }, customStyle]" v-if="show" @click="backtop">
    <slot v-if="$slots.default"></slot>
    <view v-else class="cc-backtop-icon"><cc-icon type="arrowthinup" size="14" color="#909399"></cc-icon></view>
  </view>
</template>

<script>
export default {
  name: 'cc-backtop',
  components: {
    
  },
  props: {
    // 滚动距离 父组件传入
    scrollTop: {
      type: [Number, String],
      default: 0
    },
    // 滚动条滑动多少距离时显示
    top: {
      type: [Number, String],
      default: 200
    },
    // 返回顶部过程中的过渡时间
    duration: {
      type: [Number, String],
      default: 100
    },
    // 返回按钮距离底部距离
    bottom: {
      type: [Number, String],
      default: 400
    },
    // 返回按钮距离右侧距离
    right: {
      type: [Number, String],
      default: 40
    },
    // 按钮外层的自定义样式
    customStyle: {
      type: Object
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    backtop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: this.duration
      })
    }
  },
  watch: {
    scrollTop(val) {
      if (Number(val) >= uni.upx2px(Number(this.top))) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cc-backtop {
  width: 66rpx;
  height: 66rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e1e1e1;
  position: fixed;
  border-radius: 100%;
  z-index: 9;
  color: #606266;
  transition: opacity 0.4s;
  &-text {
    font-size: 12px;
    transform: scale(0.8);
    position: relative;
    top: -6rpx;
  }
}
</style>
