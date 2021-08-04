<template>
  <view class="cc-stepper" :class="{'cc-stepper-disabled': disabled}">
    <view
      class="cc-stepper-button"
      v-if="showMinus"
      :class="{
        disabled: Number(value) <= Number(minValue)   || disableMinus,
        'cc-stepper-button-round': round
      }"
      :style="{
        width: buttonSize + 'rpx',
        height: buttonSize + 'rpx'
      }"
      @click="minus"
    >
      -
    </view>
    <input
      class="cc-stepper-value"
      :class="{
        disabled: disabled || disableInput,
        'cc-stepper-value-round': round
      }"
      :style="{
        width: inputWidth + 'rpx',
        height: buttonSize + 'rpx'
      }"
      type="number"
      v-model="activeValue"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
    />
    <view
      v-if="showPlus"
      class="cc-stepper-button"
      :class="{
        disabled: Number(value) >= Number(maxValue) || disabled  || disablePlus,
        'cc-stepper-button-round': round
      }"
      :style="{
        width: buttonSize + 'rpx',
        height: buttonSize + 'rpx'
      }"
      @click="plus"
    >
      +
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-stepper',
  components: {},
  props: {
    // 当前值
    value: {
      type: Number,
      default: 0
    },
    // 最小值
    min: {
      type: [Number, String],
      default: 1
    },
    // 最大值
    max: {
      type: [Number, String],
      default: ''
    },
    // 步进
    step: {
      type: [Number, String],
      default: 1
    },
    // 加减按钮尺寸
    buttonSize: {
      type: [Number, String],
      default: 56
    },
    // 输入框宽度
    inputWidth: {
      type: [Number, String],
      default: 64
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 禁用输入框
    disableInput: {
      type: Boolean,
      default: false
    },
    // 限制输入整数
    integer: {
      type: Boolean,
      default: false
    },
    // 小数位位数
    decimalLength: {
      type: [String, Number],
      default: Infinity
    },
    // 是否禁用增加按钮
    disablePlus: {
      type: Boolean,
      default: false
    },
    // 是否禁用减少按钮
    disableMinus: {
      type: Boolean,
      default: false
    },
    // 显示增加按钮
    showPlus: {
      type: Boolean,
      default: true
    },
    // 显示减少按钮
    showMinus: {
      type: Boolean,
      default: true
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeValue: 0,
      minValue: 0,
      maxValue: 0
    }
  },
  methods: {
    // 点击减少按钮
    minus() {
      if (this.disabled || this.disableMinus) return
      if (this.step) this.activeValue -= Number(this.step)
      else this.activeValue--
      this.$emit('minus', this.activeValue)
      if (this.activeValue <= this.minValue) {
        this.$emit('update:value', this.minValue)
        this.activeValue = this.minValue
        return
      }
    },
    // 点击增加按钮
    plus() {
      if (this.disabled || this.disablePlus) return
      if (this.step) {
        this.activeValue += Number(this.step)
      }
      else this.activeValue++
      this.$emit('plus', this.activeValue)
      if (Number(this.activeValue) >= this.maxValue) {
        this.$emit('update:value', this.maxValue)
         this.activeValue = this.maxValue
        return
      }
    },
    // 获取焦点事件
    onFocus(e) {
      this.$emit('focus', e)
    },
    // 失去焦点事件
    onBlur(e) {
      if (Number(this.activeValue) <= this.minValue) {
        this.activeValue = this.minValue * 1
      }
      if (Number(this.activeValue) >= this.maxValue) {
        this.activeValue = this.maxValue * 1
      }
      this.$emit('update:value', this.activeValue * 1)
      this.$emit('blur', e)
    },
    // 输入事件
    onInput(e) {
      if (this.integer) {
        let str = '' + this.activeValue
        if (str.indexOf('.') !== -1) {
          let arr = str.split('')
          arr.splice(arr.length - 1)
          let str2 = arr.join('')
          this.activeValue = +str2 * 1
        }
      }
      if (this.decimalLength && this.decimalLength !== Infinity) {
        let num = String(this.activeValue).split('.')[0]
        let str = String(this.activeValue).split('.')[1]
        if (str && str.length > this.decimalLength) {
          this.activeValue = Number(num + '.' + str.substring(0, this.decimalLength))
        }
      }
    }
  },
  mounted() {
    this.activeValue = this.value * 1
    if (this.min === undefined || !this.min) this.minValue = -Infinity
    else this.minValue = Number(this.min)
    if (this.max === undefined || !this.max) this.maxValue = Infinity
    else this.maxValue = Number(this.max)
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    activeValue(val) {
      this.$emit('update:value', val * 1)
      this.$emit('change', val * 1)
    },
    value(val) {
      this.activeValue = val * 1
    }
  }
}
</script>

<style scoped lang="scss">
.cc-stepper {
  display: flex;
  align-items: center;
  &-disabled {
    .cc-stepper-button {
      color: #c8c9cc !important;
      background-color: #f7f8fa !important;
      pointer-events: none;
    }
  }
  &-button {
    background: #f2f3f5;
    color: #323233;
    display: flex;
    align-items: center;
    justify-content: center;
    &-round {
      color: #ee0a24 !important;
      background-color: #fff !important;
      border: 1px solid #ee0a24 !important;
      border-radius: 100% !important;
    }
    &:first-child {
      border-radius: 8rpx 0 0 8rpx;
    }
    &:last-child {
      border-radius: 0 8rpx 8rpx 0;
    }
  }
  &-value {
    margin: 0 4rpx;
    color: #323233;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    &-round {
      background-color: transparent !important;
    }
  }
}
.disabled {
  color: #c8c9cc !important;
  background-color: #f7f8fa !important;
  pointer-events: none;
}
</style>
