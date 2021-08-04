<template>
  <view class="container">
    <view class="title">
      <view class="title">基础语法</view>
      <view>
        <cc-cell title="单元格" value="内容"></cc-cell>
      </view>
      <view>
        <cc-cell title="单元格" label="描述信息" value="内容"></cc-cell>
      </view>
      <view>
        <cc-cell icon="person" title="单元格" label="描述信息" value="内容"></cc-cell>
      </view>
    </view>

    <view class="title">
      <view class="title">单元格尺寸</view>
      <view>
        <cc-cell size="large" title="单元格" value="内容"></cc-cell>
      </view>
      <view>
        <cc-cell size="large" title="单元格" label="描述信息" value="内容"></cc-cell>
      </view>
    </view>

    <view class="title">
      <view class="title">无边框</view>
      <view>
        <cc-cell title="单元格" value="内容" :border="false"></cc-cell>
      </view>
    </view>

    <view class="title">
      <view class="title">右侧箭头</view>
      <view>
        <cc-cell title="单元格" isLink></cc-cell>
      </view>
      <view>
        <cc-cell title="单元格" value="内容" isLink></cc-cell>
      </view>
      <view>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="left"></cc-cell>
      </view>
      <view>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="up"></cc-cell>
      </view>
      <view>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="down"></cc-cell>
      </view>
    </view>

    <view class="title">
      <view class="title">插槽内容</view>
      <view>
        <cc-cell value="内容">
          <template #title>
            <text class="custom-title">单元格</text>
            <text class="danger">标签</text>
          </template>
        </cc-cell>
      </view>
      <view>
        <cc-cell title="单元格">
          <template #right-icon>
            <cc-icon type="search"></cc-icon>
          </template>
        </cc-cell>
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

<style lang="scss" scoped>
.title {
  margin: 20rpx;
}
.custom-title {
  margin-right: 4rpx;
  vertical-align: middle;
  color: #ee0a24;
}
.danger {
  background-color: #ee0a24;
  padding: 0 4rpx;
  color: #fff;
  font-size: 12px;
  line-height: 64rpx;
  border-radius: 2rpx;
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>
