<template>
  <view class="cc-field cc-filed-cell-left-icon" :class="{ 'cc-field-start': !$slots.rightIcon }">
    <cc-cell :border="border" :icon="leftIcon">
      <template #title>
        <view v-if="label" @click="clickLeft" class="cc-field-label" :class="{ 'cc-field-label-disabled': disabled }">
          <view v-if="required" class="cc-field-label-required">*</view>
          <view>{{ label }}</view>
        </view>
      </template>
      <template #value>
        <view style="width: 100%;display: flex;align-items: center;">
          <textarea v-model="inputValue" class="cc-field-input" v-if="type === 'textarea'" :style="{ height: 24 * Number(rows) + 'px' }" :maxlength="maxlength"></textarea>
          <input
            v-else
            class="cc-field-input"
            :class="{
              'cc-field-input-disabled': disabled,
              'cc-field-input-error': error
            }"
            v-model="inputValue"
            :placeholder="placeholder"
            :type="type"
            :readonly="readonly"
            :disabled="disabled"
            :maxlength="Number(maxlength)"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @click="handleClick"
          />
          <view style="width: 100%;" v-if="$slots.button"><slot name="button"></slot></view>
        </view>
      </template>
      <template #right-icon>
        <view style="z-index: 999;">
          <cc-icon @click="clear" v-if="inputValue" type="close" size="16" color="#969799"></cc-icon>
          <cc-icon @click="clickRight" :type="rightIcon" size="16" color="#969799"></cc-icon>
        </view>
      </template>
    </cc-cell>
    <view class="cc-field-error-message">{{ errorMessage }}</view>
    <view v-if="maxlength && showWordLimit" class="cc-field-word-limit">{{ inputValue.length }} / {{ maxlength }}</view>
  </view>
</template>

<script>
export default {
  name: 'cc-field',
  components: {},
  props: {
    // 输入框值
    value: {
      type: String,
      default: ''
    },
    // 左侧文字
    label: {
      type: String,
      default: ''
    },
    // 输入框占位符
    placeholder: {
      type: String,
      default: '请输入'
    },
    // 是否有边框
    border: {
      type: Boolean,
      default: true
    },
    // 是否可清除
    clearable: {
      type: Boolean,
      default: false
    },
    // 输入框类型
    type: {
      type: String,
      default: 'text'
    },
    // 输入框只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 输入框禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: ''
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: ''
    },
    // 是否必填
    required: {
      type: Boolean,
      default: false
    },
    // 是否将输入内容标红
    error: {
      type: Boolean,
      default: false
    },
    // 底部错误提示文案，为空时不展示
    errorMessage: {
      type: String,
      default: ''
    },
    // 输入最大长度
    maxlength: {
      type: Number,
      default: -1
    },
    // 是否显示字数统计，需要设置maxlength属性
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 文本域高度
    rows: {
      type: [String, Number],
      default: 1
    },
    // 输入时是否触发表单的校验
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    clear() {
      this.inputValue = ''
      this.$emit('clear')
    },
    handleInput() {
      if (this.validateEvent) {
        // 父组件分发事件
        let parent = null
        // #ifdef H5
        parent = this.$parent.$parent
        if (parent.$parent.isValidate) parent.$emit('validate-change', this.inputValue)
        // #endif
        // #ifndef H5
        parent = this.$parent
        if (parent.isValidate) parent.$emit('validate-change', this.inputValue)
        // #endif
      }
      this.$emit('input', this.inputValue)
    },
    handleChange() {
      this.$emit('change', this.inputValue)
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleClick(e) {
      this.$emit('click', e)
    },
    handleBlur(e) {
      if (this.validateEvent) {
        // 父组件分发事件
        let parent = null
        // #ifdef H5
        parent = this.$parent.$parent
        if (parent.$parent.isValidate) parent.$emit('validate-blur', this.inputValue)
        // #endif
        // #ifndef H5
        parent = this.$parent
        if (parent.isValidate) parent.$emit('validate-blur', this.inputValue)
        // #endif
      }
      this.$emit('blur', e)
    },
    clickLeft(e) {
      this.$emit('clicLeft', e)
    },
    clickRight(e) {
      this.$emit('clickRight', e)
    }
  },
  mounted() {
    this.inputValue = this.value
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    inputValue(val) {
      this.$emit('update:value', val)
    },
    value(val) {
      this.inputValue = val
    }
  }
}
</script>

<style scoped lang="scss">
.cc-field {
  position: relative;
  width: 100%;
  textarea {
    position: relative;
    top: 8rpx;
  }
  &-icon {
    position: relative;
    top: 4rpx;
  }
  &-error-message {
    position: absolute;
    color: #ee0a24;
    font-size: 12px;
    bottom: -40rpx;
    left: 164rpx;
  }
  &-word-limit {
    position: absolute;
    color: #646566;
    font-size: 12px;
    bottom: -36rpx;
    right: 0;
  }
  &-start {
    .cc-cell-value {
      justify-content: flex-start;
    }
  }
  &-label {
    min-width: 108rpx;
    margin-right: 24rpx;
    position: relative;
    top: 4rpx;
    &-disabled {
      color: #c8c9cc;
    }
    &-required {
      position: absolute;
      left: -16rpx;
      top: -4rpx;
      color: #ee0a24;
      font-size: 14px;
    }
  }
  &-input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    border: 0;
    resize: none;
    outline: none;
    &-error {
      color: #ee0a24;
    }
    &-disabled {
      color: #c8c9cc;
      cursor: not-allowed;
      opacity: 1;
    }
  }
}
</style>
