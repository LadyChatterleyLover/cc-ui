<template>
  <view
    class="cc-image-preview"
    :class="{ 'cc-image-preview-show': value, 'cc-image-preview-hide': !value }"
    :style="{ display, animationDuration: swipeDuration / 1000 + 's' }"
  >
    <view class="cc-image-preview-mask" @click="clickMask"></view>
    <view class="cc-image-preview-content">
      <cc-swiper
        :list="list"
        :autoplay="false"
        :indicator-dots="showIndicators"
        :circular="circular"
        :current="current"
        @change="handleChange"
        @click="clickItem"
        @longpress="longpress"
      ></cc-swiper>
    </view>
    <view
      class="cc-image-preview-dot"
      v-if="showIndex"
    >{{ currentIndex + 1 }} / {{ list.length }}</view>
    <cc-action-sheet @select="handleSelect" :list="actions" :show.sync="showAction"></cc-action-sheet>
  </view>
</template>

<script>
export default {
  name: 'cc-image-preview',
  components: {},
  props: {
    // 是否显示预览图片
    value: {
      type: Boolean,
      default: false
    },
    // 预览图片数组
    list: {
      type: Array,
      required: true
    },
    // 长按菜单
    actions: {
      type: Array,
      required: true
    },
    // 当前图片下标
    current: {
      type: [Number, String],
      default: 0
    },
    // 动画时长
    swipeDuration: {
      type: [Number, String],
      default: 300
    },
    // 是否显示页码
    showIndex: {
      type: Boolean,
      default: true
    },
    // 是否显示轮播指示器
    showIndicators: {
      type: Boolean,
      default: false
    },
    // 指示点模式
    mode: {
      type: String,
      default: 'circle'
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      default: true
    },
    // 图片模式
    imgMode: {
      type: String,
      default: 'aspectFill'
    },
    // 轮播图组件高度
    height: {
      type: [String, Number],
      default: 300
    },
    // 指示点距离底部位置
    bottom: {
      type: [String, Number],
      default: 20
    },
    // 指示点距离右边位置
    right: {
      type: [String, Number],
      default: ''
    },
    // 当前选中的指示点颜色
    indicatorActiveColor: {
      type: String,
      default: '#ccc'
    },
    // 指示点激活时颜色
    activeColor: {
      type: String,
      default: '#fff'
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false
    },
    // 是否在点击遮罩层后关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否在点击图片后关闭
    closeOnImage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      display: 'none',
      currentIndex: -1,
      showAction: false
    }
  },
  methods: {
    // 点击遮罩层
    clickMask() {
      if (this.closeOnClickOverlay) this.$emit('update:value', !this.value)
    },
    // 图标改变时触发
    handleChange(index) {
      this.currentIndex = index
    },
    // 点击图片
    clickItem(val) {
      if (this.closeOnImage) this.$emit('update:value', !this.value)
      this.$emit('click', val)
    },
    // 长按事件
    longpress() {
      if (this.actions && this.actions.length) {
        this.showAction = true
      }
    },
    handleSelect(val) {
      this.$emit('select', val)
      this.$emit('update:value', !this.value)
    }
  },
  mounted() {
    this.currentIndex = this.current
  },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {
    value(val) {
      if (val) this.display = 'block'
      else {
        setTimeout(() => {
          this.display = 'none'
        },100)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cc-image-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  &-show {
    animation: show 1s linear forwards;
  }
  &-hide {
    animation: hide 3s linear forwards;
  }
  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
  }
  &-content {
    z-index: 1000;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
  &-dot {
    color: #fff;
    position: absolute;
    top: 40rpx;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
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
