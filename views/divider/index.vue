<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view class="item">
        <cc-divider></cc-divider>
      </view>
    </view>

    <view>
      <view class="title">设置宽度</view>
      <view class="item">
        rpx
        <cc-divider width="500"></cc-divider>
      </view>
    </view>

    <view>
      <view class="title">展示文字</view>
      <view class="item">
        <cc-divider>渡日月,穿山水</cc-divider>
      </view>
    </view>

    <view>
      <view class="title">展示文字自定义宽度</view>
      <view class="item">
        <cc-divider width="108">尚在恨那谁</cc-divider>
      </view>
    </view>

    <view>
      <view class="title">内容位置</view>
      <view class="item">
        <cc-divider position="left">谁曾无坚不摧,摧毁的废墟</cc-divider>
      </view>
      <view class="item">
        <cc-divider position="right">一早变作了满山青翠</cc-divider>
      </view>
    </view>

    <view>
      <view class="title">自定义样式</view>
      <view class="item">
        <cc-divider color="#fa3534">
          <view style="color: #1989fa;">带笑归去</view>
        </cc-divider>
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
.title {
  margin: 20rpx;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20rpx;
  div {
    margin: 10rpx;
  }
}
</style>
