<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-stepper @minus="minus" @plus="plus" :value.sync="value"></cc-stepper>
      </view>
      <view>当前值: {{ value }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">设置步长</view>
      <view class="demo-item">
        <cc-stepper step="5" :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">最小值和最大值</view>
      <view class="demo-item">
        <cc-stepper min="5" max="15" :value.sync="value1"></cc-stepper>
      </view>
      <view>当前值: {{ value1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-stepper disabled :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用输入框</view>
      <view class="demo-item">
        <cc-stepper disable-input :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">限制输入整数</view>
      <view class="demo-item">
        <cc-stepper integer :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">限制小数位位数</view>
      <view class="demo-item">
        <cc-stepper decimalLength="3" :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义大小</view>
      <view class="demo-item">
        <cc-stepper input-width="40" button-size="32" :value.sync="value"></cc-stepper>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">圆角按钮</view>
      <view class="demo-item">
        <cc-stepper round :value.sync="value"></cc-stepper>
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
      value: 1,
      value1: 8
    }
  },
  methods: {
    minus() {
      console.log('minus')
    },
    plus() {
      console.log('plus')
    }
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
