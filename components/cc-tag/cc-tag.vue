<template>
  <view
    class="cc-tag"
    @click="handleClick"
    :class="[
      `cc-tag-${type}`,
      `${isPlain}`,
      `cc-tag-${size}`,
      { 'cc-tag-plain': plain },
      { 'cc-tag-round': round },
      { 'cc-tag-circle-left': circleLeft },
      { 'cc-tag-circle-right': circleRight }
    ]"
    :style="{ background: color, customColor }"
  >
    <text :style="{ color: textColor }"><slot></slot></text>
    <text v-if="closeable" class="cc-tag-close" @click="close"><cc-icon type="closeempty" :color="iconColor" size="12"></cc-icon></text>
  </view>
</template>

<script>
export default {
  name: 'cc-tag',
  components: {},
  props: {
    // 标签主题类型
    type: {
      type: String,
      default: 'primary'
    },
    // 朴素标签
    plain: {
      type: Boolean,
      defalut: false
    },
    // 圆角标签
    round: {
      type: Boolean,
      defalut: false
    },
    // 左圆角
    circleLeft: {
      type: Boolean,
      defalut: false
    },
    // 右圆角
    circleRight: {
      type: Boolean,
      defalut: false
    },
    // 尺寸
    size: {
      type: String,
      default: ''
    },
    // 自定义颜色
    color: {
      type: String,
      default: ''
    },
    // 自定义文字颜色
    textColor: {
      type: String,
      default: ''
    },
    // 是否可关闭
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      customColor: '',
      colorList: [
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
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleClick() {
      this.$emit('click')
    }
  },
  mounted() {
    // 自定义颜色情况
    if (this.color) {
      this.customColor = {
        color: '#fff',
        border: `none`
      }
      if (this.plain) {
        this.customColor = {
          color: this.color,
          background: '#fff'
        }
      }
    }
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    isPlain() {
      if (this.plain) return `cc-tag-${this.type}-plain`
      else return ''
    },
    iconColor() {
      if (this.type) {
        if (!this.plain) return '#fff'
        else {
          let item = this.colorList.find(item => item.type === this.type)
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

<style scoped lang="scss">
.cc-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: #{topx(6)};
  color: #fff;
  font-size: 12px;
  line-height: #{topx(8)};
  border-radius: 2px;
  &-close {
    z-index: 999;
  }
  &-plain::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid;
    border-color: inherit;
    border-radius: inherit;
    content: '';
    pointer-events: none;
  }
  &-round {
    border-radius: #{topx(24)};
  }
  &-circle-left {
    border-radius: #{topx(24)} 0 0 #{topx(24)};
  }
  &-circle-right {
    border-radius: 0 #{topx(24)} #{topx(24)} 0;
  }
  &-medium {
    padding: #{topx(8)};
  }
  &-large {
    padding: #{topx(10)};
    font-size: 14px;
  }
  &-primary {
    background: $primary;
    color: #fff;
  }
  &-primary-plain {
    background: #fff;
    color: $primary;
  }
  &-success {
    background: $success;
    color: #fff;
  }
  &-success-plain {
    background: #fff;
    border-color: $success;
    color: $success;
  }
  &-warning {
    background: $warning;
    color: #fff;
  }
  &-warning-plain {
    background: #fff;
    border-color: $warning;
    color: $warning;
  }
  &-info {
    background: $info;
    color: #fff;
  }
  &-info-plain {
    background: #fff;
    border-color: $info;
    color: $info;
  }
  &-error {
    background: $error;
    color: #fff;
  }
  &-error-plain {
    background: #fff;
    border-color: $error;
    color: $error;
  }
}
</style>
