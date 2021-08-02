<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-button @click="show1 = true">打开键盘</cc-button>
        <cc-number-keyboard @backspace="backspace" @change="handleChange" :value.sync="show1"></cc-number-keyboard>
      </view>
      <view>当前输入值: {{ value1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">身份证键盘</view>
      <view class="demo-item">
        <cc-button @click="show2 = true">打开键盘</cc-button>
        <cc-number-keyboard extra-key="x" :value.sync="show2"></cc-number-keyboard>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">随机数字键盘</view>
      <view class="demo-item">
        <cc-button @click="show3 = true">打开键盘</cc-button>
        <cc-number-keyboard random :value.sync="show3"></cc-number-keyboard>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">不显示遮罩层</view>
      <view class="demo-item">
        <cc-button @click="show4 = true">打开键盘</cc-button>
        <cc-number-keyboard :showMask="false" :value.sync="show4"></cc-number-keyboard>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      value1: ''
    }
  },
  methods: {
    handleChange(val) {
      this.value1 += val
    },
    // 退格键被点击
    backspace(){
      // 删除value的最后一个字符
      if (this.value1.length) this.value1 = this.value1.substr(0, this.value1.length - 1)
    }
  },
  mounted() {

  },
  onLoad() {

  },
  onShow() {

  },
  filters: {},
  computed: {},
  watch: {},
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  padding: #{topx(10)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>
