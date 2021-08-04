<template>
  <view>
    <view :class="{ 'cc-dialog-mask-show': show, 'cc-dialog-mask-hide': !show }" 
     class="cc-dialog-mask" :style="{ top, display }" @click="clickMask"></view>
    <view :class="{ 'cc-dialog-show': show, 'cc-dialog-hide': !show }" class="cc-dialog" :style="{ width: width + 'rpx', display }">
      <view class="cc-dialog-content">
        <view :class="{ 'cc-dialog-content-nocontent': !content && !$slots.content }" class="cc-dialog-content-title" v-if="title">{{ title }}</view>
        <view :class="{ 'cc-dialog-content-content-padding': !$slots.content }" class="cc-dialog-content-content" v-if="content || $slots.content">
          <slot v-if="$slots.content" name="content"></slot>
          <view v-else>{{ content }}</view>
        </view>
        <view class="cc-dialog-content-button">
          <view>
            <slot v-if="$slots.button" name="button"></slot>
            <template v-else>
              <view v-if="showCancelButton" class="cc-dialog-content-button-cancel" :style="{ color: cancelColor }" @click="cancel">{{ cancelText }}</view>
              <view v-if="showConfirmButton" class="cc-dialog-content-button-confirm" :style="{ color: confirmColor }" @click="confirm">
                <view class="loading" v-if="loading"><cc-icon type="spinner-cycle" size="16" color="#c8c9cc"></cc-icon></view>
                <view v-else>{{ confirmText }}</view>
              </view>
            </template>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-dialog',
  components: {},
  props: {
    // 是否显示弹框
    show: {
      type: Boolean,
      required: true
    },
    // 弹框标题
    title: {
      type: String
    },
    // 弹框内容
    content: {
      type: String
    },
    // 弹框宽度
    width: {
      type: [Number, String],
      default: 640
    },
    // 是否展示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    // 是否展示取消按钮
    showCancelButton: {
      type: Boolean,
      default: false
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      default: '确认'
    },
    // 取消按钮文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 确认按钮颜色
    confirmColor: {
      type: String,
      default: '#2979ff'
    },
    // 取消按钮颜色
    cancelColor: {
      type: String,
      default: '#000'
    },
    // 点击遮罩层是否关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    // 是否异步关闭
    asyncClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      display: 'none',
      loading: false,
      // 导航栏高度
      top: ''
    }
  },
  methods: {
    // 确认事件
    confirm() {
      if (this.asyncClose) {
        this.loading = true
      } else {
        this.$emit('update:show', !this.show)
         this.loading = false
      }
      this.$emit('confirm')
    },
    // 取消事件
    cancel() {
      this.$emit('update:show', !this.show)
      this.$emit('cancel')
    },
    // 点击遮罩层
    clickMask() {
      if (this.closeOnClickOverlay) this.$emit('update:show', !this.show)
    },
    // 关闭
    close() {
     
      this.$emit('update:show', !this.show)
    }
  },
  mounted() {
    // #ifdef H5
    let head = document.getElementsByTagName('uni-page-head')[0]
    if (head) this.top = '88rpx'
    // #endif
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    show(val) {
      if (val === false) this.loading = false
      if (val) {
        this.display = 'block'
      } else {
        setTimeout(() => {
          this.display = 'none'
        }, 80)
      }
    },
  }
}
</script>

<style scoped lang="scss">
.cc-dialog {
  position: fixed;
  top: 34%;
  left: 6%;
  right: 6%;
  overflow: hidden;
  font-size: 16px;
  background-color: #fff;
  border-radius: 32rpx;
  transform: translate3d(-50%, -50%, 0);
  min-width: 72rpx;
  min-height: 72rpx;
  opacity: 0;
  z-index: -1;
  &-show {
    animation: show 0.2s linear forwards;
  }
  &-hide {
    animation: hide 0.2s linear forwards;
  }
  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    &-show {
      animation: mask-show 0.2s linear forwards;
    }
    &-hide {
      animation: mask-hide 0.2s linear forwards;
    }
  }
  &-content {
    &-title {
      padding-top: 52rpx;
      font-weight: 500;
      line-height: 24rpx;
      text-align: center;
    }
    &-nocontent {
      padding-bottom: 52rpx;
    }
    &-content {
      white-space: pre-wrap;
      text-align: center;
      word-wrap: break-word;
      color: #646566;
      font-size: 14px;
      &-padding {
        padding: 34rpx;
      }
    }
    &-button {
      height: 96rpx;
      border: 1px solid #ebedf0;
      display: flex;
      align-items: center;
      view {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      &-cancel {
        border-right: 1px solid #ebedf0;
      }
    }
  }
}
.loading {
  animation: loading 1.5s linear infinite;
}
@keyframes mask-show {
  from {
    opacity: 0;
    z-index: -1;
  }
  to {
    opacity: 1;
    z-index: 998;
  }
}
@keyframes mask-hide {
  from {
    opacity: 1;
    z-index: 998;
  }
  to {
    opacity: 0;
    z-index: -1;
  }
}
@keyframes show {
  from {
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }
  to {
    transform: scale(1);
    z-index: 999;
    opacity: 1;
  }
}
@keyframes hide {
  from {
    transform: scale(1);
    z-index: 999;
    opacity: 1;
  }
  to {
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }
}
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
