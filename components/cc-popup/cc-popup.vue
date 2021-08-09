<template>
  <view class="cc-popup" :class="{ show: show, hide: !show }" :style="{display, top }" @touchmove.stop.prevent='moveStop'>
    <view
      class="cc-popup-mask"
      ref="mask"
      @click="clickMask"
      :style="{ top: maskTop, opacity: showMask ? 1 : 0, zIndex: showMask ? 999 : -1 }"
    ></view>
    <view
      class="cc-popup-content"
      :style="{ width: widthValue, height: heightValue, top }"
      :class="[
        'cc-popup-content-' + mode,
        show ? 'show-' + mode : '',
        !show ? 'hide-' + mode : '',
        { 'cc-popup-content-padding': !mode },
        { 'cc-popup-content-center': !mode },
        { 'cc-popup-content-round': round && mode === 'bottom' },
      ]"
    >
      <slot></slot>
      <view v-if="closeable" @click="close" class="cc-popup-content-close">
        <cc-icon :type="closeIcon" v-if="closeIcon" size="18" color="#909399"></cc-icon>
        <cc-icon v-else type="closeempty" size="18" color="#909399"></cc-icon>
      </view>
    </view>
  </view>
  

</template>

<script>
  export default {
    name: 'cc-popup',
    components: {},
    props: {
      // 显示弹框
      show: {
        type: Boolean,
        default: false
      },
      // 弹框出现位置
      mode: {
        type: String
      },
      // 显示关闭按钮
      closeable: {
        type: Boolean,
        default: false
      },
      // 自定义关闭图标
      closeIcon: {
        type: String,
        default: ''
      },
      // 宽度
      width: {
        type: [Number, String]
      },
      // 高度
      height: {
        type: [Number, String]
      },
      // 是否圆角按钮
      round: {
        type: Boolean,
        default: false
      },
      // 是否显示遮罩层
      showMask: {
        type: Boolean,
        default: true
      },
      // 点击遮罩层可关闭
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        num: 0,
        top: '',
        maskTop: 0,
        display: 'none',
      }
    },
    methods: {
      moveStop() {},
      clickMask() {
        if (!this.closeOnClickOverlay) return
        this.$emit('update:show', !this.show)
        this.$emit('clickMask')
      },
      close(){
        this.$emit('click-close-icon')
        this.$emit('update:show', !this.show)
      }
    },
    mounted() {
      let head = null
      // #ifdef H5
      head = document.getElementsByTagName('uni-page-head')[0]
      if (head) {
        if (this.mode === 'top' || this.mode === 'left' || this.mode === 'right') {
          this.top = '88rpx'
          this.maskTop = '88rpx'
        }
        else if (this.mode === 'bottom') {
          this.top = ''
          this.maskTop = '88rpx'
        }
        else {
          this.maskTop = '88rpx'
          this.top = '50%'
        }
      }
      // #endif
    },
    onLoad() {

    },
    onShow() {

    },
    filters: {},
    computed: {
      showClassName() {
        return 'show-' + this.mode
      },
      hideClassName() {
        return 'hide-' + this.mode
      },
      widthValue() {
        if (this.mode === 'left' || !this.mode || this.mode === 'right') {
          return this.width + 'rpx'
        } else return ''
      },
      heightValue() {
        if (this.mode === 'top' || !this.mode || this.mode === 'bottom') {
          return this.height + 'rpx'
        } else return ''
      }
    },
    watch: {
      show(val) {
        if (val) {
          this.$emit('open')
          this.display = 'block'
        }
        else {
          this.$emit('close')
          setTimeout(() => {
            this.display = 'none'
          }, 100)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
.cc-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  &-content {
    background: #fff;
    z-index: 1000;
    position: fixed;
    overflow: auto;
    &-round {
      border-radius: 48rpx 48rpx 0 0;
    }
    &-padding {
      padding: 80rpx 60rpx;
    }
    &-close {
      position: absolute;
      top: 28rpx;
      right: 10rpx;
      z-index: 1000;
    }
    &-center {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &-top {
      top: 0;
      right: 0;
      left: 0;
    }
    &-bottom {
      bottom: 0;
      right: 0;
      left: 0;
    }
    &-left {
      top: 0;
      left: 0;
      bottom: 0;
    }
    &-right {
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  &-mode {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
    transform: translateX(-100%);
  }
}
.show {
  animation: show 0.3s linear forwards;
  &.cc-popup {
    z-index: 1000;
  }
}
.hide {
  animation: hide 0.3s linear forwards;
  &.cc-popup {
    z-index: -1;
  }
}
@keyframes show {
  from {
    opacity: 0;
    z-index: -1;
  }
  to {
    opacity: 1;
    z-index: 999;
  }
}
@keyframes hide {
  from {
    opacity: 1;
    z-index: 999;
  }
  to {
    opacity: 0;
    z-index: -1;
  }
}

.show-top {
  animation: show-top 0.3s linear forwards;
}
.hide-top {
  animation: hide-top 0.3s linear forwards;
}
@keyframes show-top {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide-top {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.show-bottom {
  animation: show-bottom 0.3s linear forwards;
}
.hide-bottom {
  animation: hide-bottom 0.3s linear forwards;
}
@keyframes show-bottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide-bottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

.show-left {
  animation: show-left 0.3s linear forwards;
}
.hide-left {
  animation: hide-left 0.3s linear forwards;
}
@keyframes show-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes hide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.show-right {
  animation: show-right 0.3s linear forwards;
}
.hide-right {
  animation: hide-right 0.3s linear forwards;
}
@keyframes show-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes hide-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
