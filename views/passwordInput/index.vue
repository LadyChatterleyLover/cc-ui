<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-button @click="show1 = true">打开键盘</cc-button>
        <cc-password-input :value.sync="show1" @complete="handleComplete" @change="handleChange" @backspace="handleBackspace"></cc-password-input>
      </view>
      <view>当前输入值: {{ value1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义长度</view>
      <view class="demo-item">
        <cc-button @click="show2 = true">打开键盘</cc-button>
        <cc-password-input :value.sync="show2" length="4"></cc-password-input>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义间距</view>
      <view class="demo-item">
        <cc-button @click="show3 = true">打开键盘</cc-button>
        <cc-password-input :value.sync="show3" gutter="0"></cc-password-input>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">明文显示</view>
      <view class="demo-item">
        <cc-button @click="show4 = true">打开键盘</cc-button>
        <cc-password-input :value.sync="show4" :mask="false"></cc-password-input>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">设置初始值</view>
      <view class="demo-item">
        <cc-button @click="show5 = true">打开键盘</cc-button>
        <cc-password-input :value.sync="show5" initValue="1234" :mask="false"></cc-password-input>
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
      show5: false,
      show6: false,
      value1: ''
    }
  },
  methods: {
    handleComplete(val) {
      console.log('complete', val)
    },
    handleChange(val) {
      console.log('change', val)
    },
    handleBackspace(val) {
      console.log('backspace', val)
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
