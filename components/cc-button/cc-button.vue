<template>
  <button
    class="cc-button"
    :hover-class="hoverClassName"
    :loading="loading"
    :class="[`${typeClass}`, `${sizeClass}`, `${isPlain}`, { 'cc-button-block': block }, { 'cc-button-disabled': disabled }, { 'cc-button-round': round }]"
    :style="[{ background: color, customColor }, customStyle]"
    @click="handleClick"
  >
    <view class="cc-button-content">
      <cc-icon v-if="icon" class="cc-button-icon" :color="iconColor" :type="icon" :size="iconSize"></cc-icon>
      <text :class="{ 'cc-button-text': icon, 'cc-button-text-white': color && !plain }"><slot></slot></text>
    </view>
  </button>
</template>

<script>
let colorList = [
  {
    type: 'primary',
    color: '#0081ff'
  },
  {
    type: 'success',
    color: '#39b54a'
  },
  {
    type: 'error',
    color: '#e54d42'
  },
  {
    type: 'warning',
    color: '#f37b1d'
  },
  {
    type: 'info',
    color: '#909399'
  }
]

export default {
  name: 'cc-button',
  components: {},
  props: {
    type: {
      type: String,
      default: ''
    },
    // 是否是朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 圆形按钮
    round: {
      type: Boolean,
      default: false
    },
    // 块级按钮
    block: {
      type: Boolean,
      default: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 尺寸
    size: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    // 图标 和uni-icon一致
    icon: {
      type: String
    },
    // 自定义颜色
    color: {
      type: String,
      default: ''
    },
    // 自定义样式
    customStyle: {
      type: Object
    },
    // 按钮点击时的样式
    hoverClass: {
      type: String
    }
  },
  data() {
    return {
      // 自定义颜色时的朴素状态下边框和背景颜色
      customColor: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
  mounted() {
    // 自定义颜色情况
    if (this.color) {
      this.customColor = {
        color: '#fff'
      }
      if (this.plain) {
        this.customColor = {
          color: this.color,
          border: `1px solid ${this.color}`,
          background: '#fff'
        }
      }
    }
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    // 是否是朴素按钮
    isPlain() {
      if (this.plain) return `cc-button-${this.type}-plain`
      else return ''
    },
    // 按钮类型
    typeClass() {
      if (this.type) return `cc-button-${this.type}`
      else return ''
    },
    // 尺寸
    sizeClass() {
      if (this.size) return `cc-button-${this.size}`
      else return ''
    },
    // hoverclass
    hoverClassName() {
      if (this.hoverClass) return this.hoverClass
      else {
        if (!this.plain) {
          return `cc-button-hover`
        } else {
          return `cc-button-${this.type}-hover`
        }
      }
    },
    // 图标大小
    iconSize() {
      if (this.size === 'large') {
        return 28
      } else if (this.size === '') {
        return 24
      } else if (this.size === 'small') {
        return 20
      } else {
        return 16
      }
    },
    // 图标颜色
    iconColor() {
      if (this.type) {
        if (!this.plain) return '#fff'
        else {
          let item = colorList.find(item => item.type === this.type)
          return item && item.color
        }
      } else {
        return '#000'
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.cc-button {
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  height: 88rpx;
  margin: 0;
  padding: 0;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0 30rpx;
  background: #fff;
  color: #000;
  border: 1px solid #ebedf0;
  &-text-white {
    color: #fff;
  }
  .cc-button-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    view {
      height: 100%;
    }
    .cc-button-text {
      margin-left: 8rpx;
    }
    .cc-button-icon {
      margin-left: 12rpx;
    }
  }
  &-block {
    width: 100%;
  }
  &-hover {
    opacity: 0.8;
  }
  &-large {
    height: 100rpx;
  }
  &-small {
    height: 64rpx;
  }
  &-mini {
    height: 48rpx;
  }
  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
  &-round {
    border-radius: 48rpx;
  }
  &-primary {
    background: #0081ff;
    border: 1px solid #0081ff;
    color: #fff;
  }
  &-primary-plain {
    background: #fff;
    border: 1px solid #0081ff;
    color: #0081ff;
  }
  &-primary-hover {
    background: #0081ff;
    color: #fff;
  }
  &-success {
    background: #39b54a;
    border: 1px solid #39b54a;
    color: #fff;
  }
  &-success-plain {
    background: #fff;
    border: 1px solid #39b54a;
    color: #39b54a;
  }
  &-success-hover {
    background: #39b54a;
    color: #fff;
  }
  &-warning {
    background: #f37b1d;
    border: 1px solid #f37b1d;
    color: #fff;
  }
  &-warning-plain {
    background: #fff;
    border: 1px solid #f37b1d;
    color: #f37b1d;
  }
  &-warning-hover {
    background: #f37b1d;
    color: #fff;
  }
  &-info {
    background: #909399;
    border: 1px solid #909399;
    color: #fff;
  }
  &-info-plain {
    background: #fff;
    border: 1px solid #909399;
    color: #909399;
  }
  &-info-hover {
    background: #909399;
    color: #fff;
  }
  &-error {
    background: #e54d42;
    border: 1px solid #e54d42;
    color: #fff;
  }
  &-error-plain {
    background: #fff;
    border: 1px solid #e54d42;
    color: #e54d42;
  }
  &-error-hover {
    background: #e54d42;
    color: #fff;
  }
}

</style>
