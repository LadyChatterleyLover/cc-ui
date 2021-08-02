<template>
  <view class="demo">
    <view class="demo-title">基础用法</view>
    <view class="demo-item">
      <view>
        <cc-switch :value.sync="checked"></cc-switch>
      </view>
    </view>

    <view class="demo-title">禁用状态</view>
    <view class="demo-item">
      <view>
        <cc-switch disabled :value.sync="checked"></cc-switch>
      </view>
    </view>

    <view class="demo-title">自定义颜色</view>
    <view class="demo-item">
      <view>
        <cc-switch activeColor="#ee0a24" inactiveColor="#abc123" :value.sync="checked"></cc-switch>
      </view>
    </view>

    <view class="demo-title">自定义尺寸</view>
    <view class="demo-item">
      <view>
        <cc-switch size="16" :value.sync="checked"></cc-switch>
      </view>
      <view>
        <cc-switch size="36" :value.sync="checked"></cc-switch>
      </view>
    </view>

    <view class="demo-title">文字显示</view>
    <view class="demo-item">
      <view>
        <cc-switch :value.sync="checked" activeText="搁浅"></cc-switch>
      </view>
      <view>
        <cc-switch :value.sync="checked" activeText="威廉古堡" inactiveText="双节棍"></cc-switch>
      </view>
      <view>
        <cc-switch
          :value.sync="checked"
          activeTextColor="#ee0a24"
          inactiveTextColor="#abc123"
          activeText="黑色幽默"
        ></cc-switch>
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
      checked: false
    }
  },
  methods: {
    onChange(val) {
      this.checked = val
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
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    display: flex;
    align-items: center;
    margin-left: #{topx(2)};
    view {
      margin-left: #{topx(15)};
    }
  }
}
</style>
