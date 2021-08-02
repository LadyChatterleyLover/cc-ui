<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item"><cc-verify-button @start="start" @end="end" @change="change"></cc-verify-button></view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义文字和时间</view>
      <view class="demo-item"><cc-verify-button text="发送验证码" countDownText="s后重新获取" countDown="5" endText="再次发送"></cc-verify-button></view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <view class="demo-item"><cc-verify-button @change="handleChange" :customText="text"></cc-verify-button></view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义按钮</view>
      <view class="demo-item"><cc-verify-button type="primary"></cc-verify-button></view>
      <view class="demo-item"><cc-verify-button type="primary" size="mini"></cc-verify-button></view>
      <view class="demo-item"><cc-verify-button type="success" plain></cc-verify-button></view>
      <view class="demo-item"><cc-verify-button type="warning" round></cc-verify-button></view>
      <view class="demo-item"><cc-verify-button type="primary" icon="phone"></cc-verify-button></view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      text: '',
      time: 0
    }
  },
  methods: {
    start() {
      console.log('start')
    },
    end() {
      console.log('end')
    },
    change(val) {
      console.log('change', val)
    },
    handleChange(val) {
      this.time = val
      this.text = `时间的沙漏开始走了${this.time}s`
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
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
