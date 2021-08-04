<template>
  <view class="cc-search">
    <view class="cc-search-content" :class="{ 'cc-search-round': round }">
      <view class="cc-search-content-label">
        <view v-if="$slots.label">
          <slot name="label"></slot>
        </view>
        <view v-else>{{ label }}</view>
      </view>
      <view class="cc-search-content-cell">
        <view
          class="cc-search-content-icon"
          :class="{
            'cc-search-content-icon-align-center': iconAlign === 'center',
            'cc-search-content-icon-align-right': iconAlign === 'right'
          }"
        >
          <view v-if="$slots.icon">
            <slot name="icon"></slot>
          </view>
          <view v-else>
            <cc-icon :type="icon" color="#323233" v-if="icon"></cc-icon>
            <cc-icon type="search" color="#323233" v-else></cc-icon>
          </view>
        </view>
        <view
          class="cc-search-content-input"
          :class="{
            'cc-search-content-text-align-center': textAlign === 'center',
            'cc-search-content-text-align-right': textAlign === 'right'
          }"
        >
          <input
            class="cc-search-content-input-wrap"
            placeholder-class="cc-search-content-input-placeholder"
            type="text"
            :placeholder="placeholder"
            :value="value"
            :disabled="disabled"
            :maxlength="maxlength"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @confirm="handleConfirm"
          />
          <view
            class="cc-search-content-input-close"
            v-if="value"
            @click="clear"
            @mousedown="mousedown"
          >
            <cc-icon color="rgb(96, 98, 102)" type="close" size="14"></cc-icon>
          </view>
        </view>
      </view>
    </view>
    <view class="cc-search-action" @click="cancel" v-if="showAction">
      <view v-if="$slots.action">
        <slot name="action"></slot>
      </view>
      <view v-else>{{ actionText }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-search',
  components: {},
  props: {
    value: {
      type: String
    },
    // 左侧内容
    label: {
      type: String,
      default: ''
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否在搜索框右侧显示取消按钮
    showAction: {
      type: Boolean,
      default: true
    },
    // 取消按钮文字
    actionText: {
      type: String,
      default: '取消'
    },
    // 占位符
    placeholder: {
      type: String,
      default: '请搜索'
    },
    // 是否显示清除图标
    clearable: {
      type: Boolean,
      default: true
    },
    // 是否为圆形搜索框
    round: {
      type: Boolean,
      default: false
    },
    // 最大输入字符
    maxlength: {
      type: Number,
      default: -1,
    },
    // 文字对齐方式
    textAlign: {
      type: String,
      defalut: 'left',
    },
    // 图标对齐方式
    iconAlign: {
      type: String,
      defalut: 'left',
    }
  },
  data() {
    return {}
  },
  methods: {
    handleInput(e) {
      this.$emit('update:value', e.detail.value)
      this.$emit('input', e)
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    },
    handleConfirm(e) {
      this.$emit('confirm', e)
    },
    clear(e) {
      this.$emit('update:value', '')
      this.$emit('clear', e)
    },
    cancel() {
      if (!this.disabled) this.$emit('cancel')
    },
    // 清空输入框时不触发失去焦点事件
    mousedown(e) {
      e.preventDefault()
    },
  },
  mounted() { },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-search {
  display: flex;
  align-items: center;
  padding: 20rpx 24rpx;
  background: #fff;
  input {
    outline: none;
    border: none;
  }
  &-round {
    border-radius: 48rpx !important;
  }
  &-content {
    position: relative;
    display: flex;
    flex: 1;
    padding-left: 48rpx;
    background-color: #f7f8fa;
    border-radius: 4rpx;
    &-text-align-center {
      justify-content: center;
      text-align: center;
    }
    &-text-align-right {
      justify-content: right;
      text-align: right;
    }
    &-icon-align-center {
      position: absolute;
      left: 38%;
    }
    &-icon-align-right {
      position: absolute;
      right: 20%;
    }
    &-label {
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #323233;
      padding: 0 10rpx;
    }
    &-cell {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 10rpx 16rpx 10rpx 0;
    }
    &-input {
      position: relative;
      flex: 1;
      margin-left: 12rpx;
      display: flex;
      align-items: center;
      &-wrap {
        flex: 1;
      }
      &-close {
        width: 48rpx;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &-input-placeholder {
      color: #969799;
    }
  }
  &-action {
    width: 66rpx;
    margin-left: 12rpx;
    font-size: 14px;
  }
}
</style>
