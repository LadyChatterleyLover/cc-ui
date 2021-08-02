<template>
  <cc-button
    @click="clickButton"
    :disabled="disable"
    :type="type"
    :plain="plain"
    :round="round"
    :block="block"
    :size="size"
    :loading="loading"
    :icon="icon"
    :color="color"
    :customStyle="customStyle"
    :hoverClass="hoverClass"
  >
    <span>{{ cloneText }}</span>
  </cc-button>
</template>

<script>
export default {
  name: 'cc-verify-button',
  components: {},
  props: {
    // 按钮文字
    text: {
      type: String,
      default: '发送'
    },
    // 结束文字
    endText: {
      type: String,
      default: '重新发送'
    },
    // 倒计时过程的文字
    countDownText: {
      type: String,
      default: '秒后重新发送'
    },
    // 倒计时事件
    countDown: {
      type: [String, Number],
      default: 60
    },
    // 是否自定义文字
    customText: {
      type: String,
      default: ''
    },
    // 按钮类型
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
      disable: false,
      time: this.countDown,
      cloneText: this.text,
      num: 0,
      timer: null
    }
  },
  methods: {
    clickButton() {
      if (!this.customText) this.time += 1
      this.$emit('start')
      this.timer = setInterval(() => {
        this.time--
        this.disable = true
        this.cloneText = this.customText ? this.customText : this.cloneCountDownText
        if (this.time === 0) {
          this.$emit('end')
          this.disable = false
          this.cloneText = this.endText
          this.time = Number(this.countDown)
          clearInterval(this.timer)
        }
      }, 1000)
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  destroyed() {
    this.timer = null
    clearInterval(this.timer)
  },
  filters: {},
  computed: {
    cloneCountDownText() {
      return `${this.time}${this.countDownText}`
    }
  },
  watch: {
    time: {
      handler(val) {
        this.num++
        if (val <= this.countDown && this.num > 1) this.$emit('change', val)
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
