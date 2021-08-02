<template>
  <view
    class="cc-mask"
    :class="{ 'cc-mask-show': show, 'cc-mask-hide': !show }"
    :style="{ zIndex, background: bgColor, top, display, animationDuration: duration + 's' }"
    @click="handleClick"
  >
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'cc-mask',
  components: {},
  props: {
    // 是否显示遮罩层
    show: {
      type: Boolean,
      default: false
    },
    // 层级
    zIndex: {
      type: [Number, String],
      default: 1
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.7)'
    },
    // 遮罩是否可点击
    maskClick: {
      type: Boolean,
      default: true
    },
    // 动画时长
    duration: {
      type: [Number, String],
      default: 0.25
    }
  },
  data() {
    return {
      top: 0,
      display: ''
    }
  },
  methods: {
    handleClick() {
      if (this.maskClick) {
        this.$emit('update:show', !this.show)
        this.$emit('click')
      }
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
      if (val) this.display = 'block'
        else {
          setTimeout(() => {
            this.display = 'none'
          }, 200)
        }
    }
  }
}
</script>


<style scoped lang="scss">
.cc-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  &-show {
    animation: show 0.25s linear forwards;
  }
  &-hide {
    animation: hide 0.25s linear forwards;
    &.cc-mask {
      display: none;
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
