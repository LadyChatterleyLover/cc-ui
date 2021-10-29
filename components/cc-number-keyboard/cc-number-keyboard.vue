<template>
  <cc-popup mode="bottom" :show.sync="show" :showMask="showMask" ref="popup">
    <view class="cc-number-keyboard cc-number-keyboard__svg">
      <view class="cc-number-keyboard-tooltip" v-if="showTooltip">
        <view class="cc-number-keyboard-tooltip-cancel" v-if="showTooltip && showCancelBtn" @click="cancel">{{ cancelText }}</view>
        <view class="cc-number-keyboard-tooltip-text" v-if="showTooltip && showTips">{{ tips }}</view>
        <view class="cc-number-keyboard-tooltip-confirm" v-if="showTooltip && showConfirmBtn" @click="confirm">{{ confirmText }}</view>
      </view>
      <view class="cc-number-keyboard-wrap">
        <view class="cc-number-keyboard-wrap-content">
          <view class="cc-number-keyboard-wrap-content-item" v-for="(item, index) in keyboardItem" :key="index" @click="clickItem(item, index)">
            <view class="cc-number-keyboard-wrap-content-item-key" v-html="item" v-if="index !== keyboardItem.length - 1"></view>
            <view class="cc-number-keyboard-wrap-content-item-key" v-else><image style="width: 1.5em;height: 1em;" :src="item" mode=""></image></view>
          </view>
        </view>
      </view>
    </view>
  </cc-popup>
</template>

<script>
export default {
  name: 'cc-number-keyboard',
  components: {},
  props: {
    // 控制键盘显示
    value: {
      type: Boolean,
      default: false
    },
    // 键盘模式 数字还是身份证
    mode: {
      type: String,
      default: 'number'
    },
    // 是否打乱键盘顺序
    random: {
      type: Boolean,
      default: false
    },
    // 是否显示工具栏
    showTooltip: {
      type: Boolean,
      default: true
    },
    // 是否中间文字
    showTips: {
      type: Boolean,
      default: true
    },
    // 是否确认按钮
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    // 是否取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    // 确认文字
    confirmText: {
      type: String,
      default: '确认'
    },
    // 取消文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 中间文字
    tips: {
      type: String,
      default: '数字键盘'
    },
    // 是否显示遮罩层
    showMask: {
      type: Boolean,
      default: true
    },
    // 底部.按键
    extraKey: {
      type: String,
      default: '.'
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    // 乱序数组
    randomArr(arr) {
      return arr.sort(() => {
        return Math.random() - 0.5
      })
    },
    closeMask() {
      this.$refs.popup.clickMask()
    },
    cancel() {
      this.$refs.popup.clickMask()
      this.$emit('cancel')
    },
    confirm() {
      this.$refs.popup.clickMask()
      this.$emit('cancel')
    },
    clickItem(item, index) {
      if (index !== this.keyboardItem.length - 1) {
        this.$emit('change', item)
      } else this.$emit('backspace')
    }
  },
  mounted() {
    this.show = this.value
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    keyboardItem() {
      if (this.random) {
        let list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        let l = this.randomArr(list)
        l[10] = l[9]
        l[9] = this.extraKey
        l[11] = require('../../static/cha.png')
        return l
      } else
        return [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          this.extraKey,
          '0',
          require('../../static/cha.png')
        ]
    }
  },
  watch: {
    value(val) {
      this.show = val
      this.$emit('update:value', val)
    },
    show(val) {
      this.$emit('update:value', val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-number-keyboard {
  background: #fff;
  &-tooltip {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 20rpx 0;
    &-cancel,
    &-text,
    &-confirm {
      flex: 1;
      display: flex;
      align-items: center;
    }
    &-cancel {
      padding-left: 14px;
      color: #888;
    }
    &-text {
      justify-content: center;
    }
    &-confirm {
      justify-content: flex-end;
      padding-right: 14px;
      color: #2979ff;
    }
  }
  &-wrap {
    position: relative;
    z-index: 999;
    background: #f2f3f5;
    padding: 12rpx 0 0 12rpx;
    &-content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      &-item {
        box-sizing: border-box;
        padding: 0 12rpx 12rpx 0;
        flex-basis: 33.333333%;
        font-size: 18px;
        color: #333;
        font-weight: 500;
        border-radius: 16rpx;
        &-key {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 96rpx;
          background: #fff;
        }
      }
    }
  }
}
</style>
