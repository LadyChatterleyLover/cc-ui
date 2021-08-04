<template>
  <view class="cc-password-input">
    <view class="cc-password-input-content" :class="{ 'cc-password-input-content-show': value, 'cc-password-input-content-hide': !value }" :style="{ display: contentDisplay }">
      <view
        class="cc-password-input-content-item"
        :class="{ 'cc-password-input-content-item-noborder': Number(gutter) === 0 && index < list.length - 1 }"
        v-for="(item, index) in list"
        :key="index"
        :style="{ marginRight: gutter + 'rpx' }"
      >
        <view class="cc-password-input-content-item-content" :class="{ 'cc-password-input-content-item-content-mask': mask }" v-if="item">
          <view class="cc-password-input-content-item-content-nomask" v-if="!mask">{{ item }}</view>
        </view>
      </view>
      <view @click="close" class="cc-password-input-content-close" v-if="closeable"><cc-icon type="closeempty" size="22"></cc-icon></view>
    </view>
    <cc-number-keyboard :showTooltip="false" :value.sync="show" extra-key=" " @change="handleChange" @backspace="backspace" ref="keyboard"></cc-number-keyboard>
  </view>
</template>

<script>
export default {
  name: 'cc-password-input',
  components: {},
  props: {
    // 是否显示密码输入框
    value: {
      type: Boolean,
      default: false
    },
    // 自定义长度
    length: {
      type: [String, Number],
      default: 6
    },
    // 显示关闭按钮
    closeable: {
      type: Boolean,
      default: true
    },
    // 格子间距
    gutter: {
      type: [String, Number],
      default: 20
    },
    // 是否明文显示
    mask: {
      type: Boolean,
      default: true
    },
    // 初始值
    initValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list: [],
      display: 'none',
      contentDisplay: 'none',
      // 键盘点击次数
      clickNum: -1,
      show: false
    }
  },
  methods: {
    // 输入值的时候
    handleChange(val) {
      this.clickNum++
      this.$set(this.list, this.clickNum, val)
      if (this.clickNum >= 5) {
        this.clickNum = -1
        this.$emit('update:value', !this.value)
        this.$emit('complete', this.list.join(''))
      }
    },
    // 点后退按钮
    backspace() {
      this.$set(this.list, this.clickNum, '')
      this.clickNum--
      if (this.list !== []) this.$emit('backspace', this.list.join(''))
      if (this.clickNum <= -1) {
        this.clickNum = -1
      }
    },
    // 点击关闭按钮
    close() {
      this.list = this.list = Array(Number(this.length)).fill('')
      this.$refs.keyboard.closeMask()
      this.clickNum = -1
    },
    // 点击遮罩层
    clickMask() {
      this.list = this.list = Array(Number(this.length)).fill('')
      this.emit('update:value', !this.value)
    }
  },
  mounted() {
    if (!this.initValue) this.list = Array(Number(this.length)).fill('')
    else {
      let strArr = this.initValue.split('')
      this.list = [...strArr, ...Array(Number(Number(this.length) - this.initValue.length)).fill('')]
      this.clickNum = this.initValue.length - 1
    }
    this.show = this.value
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    list: {
      handler(val) {
        let valArr = Object.values(val)
        let list = Array(Number(this.length)).fill('')
        if (this.value && JSON.stringify(valArr) !== JSON.stringify(list)) this.$emit('change', val.join(''))
      },
      deep: true
    },
    show(val) {
      this.$emit('update:value', val)
    },
    value(val) {
      this.show = val
      if (val) {
        this.display = 'block'
        this.contentDisplay = 'flex'
      } else {
        setTimeout(() => {
          this.display = 'none'
          this.contentDisplay = 'none'
          this.list = Array(Number(this.length)).fill('')
        }, 80)
      }
      this.$emit('update:value', val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-password-input {
  &-content {
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: flex;
    align-items: center;
    padding: 56rpx 48rpx;
    opacity: 0;
    z-index: 2000;
    &-close {
      position: absolute;
      right: 8rpx;
      top: 8rpx;
      z-index: 99;
    }
    &-show {
      animation: show-content 0.3s linear forwards;
    }
    &-hide {
      animation: hide-content 0.3s linear forwards;
    }
    &-item {
      width: 80rpx;
      height: 80rpx;
      background: #fff;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      &-noborder {
        border-right: 0;
      }
      &-content {
        width: 20rpx;
        height: 20rpx;
        &-mask {
          background: #000;
          border-radius: 100%;
        }
        &-nomask {
          position: relative;
          top: -8rpx;
          left: 2rpx;
        }
      }
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: 444rpx;
  }
}
@keyframes hide {
  from {
    opacity: 1;
    bottom: 444rpx;
  }
  to {
    opacity: 0;
    bottom: 0;
  }
}
@keyframes show-content {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide-content {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
