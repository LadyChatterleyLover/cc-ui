<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <view>
          <cc-loading></cc-loading>
        </view>
        <view>
          <cc-loading type="spinner"></cc-loading>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <view>
          <cc-loading color="#0081ff"></cc-loading>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义大小</view>
      <view class="demo-item">
        <view>
          <cc-loading size="30"></cc-loading>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">加载文案</view>
      <view class="demo-item">
        <view>
          <cc-loading>加载中...</cc-loading>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">垂直排列</view>
      <view class="demo-item">
        <view>
          <cc-loading vertical>加载中...</cc-loading>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义文本颜色和大小</view>
      <view class="demo-item">
        <view>
          <cc-loading textColor="#0081ff" textSize="20">加载中...</cc-loading>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
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
    display: flex;
    div {
      margin-right: 10px;
    }
  }
}
</style>
