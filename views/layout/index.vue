<template>
  <view class="cc-layout-demo">
    <view>
      <view class="title">基础用法</view>
      <view class="demo">
        <cc-row>
          <cc-col span="8">span: 8</cc-col>
          <cc-col span="8">span: 8</cc-col>
          <cc-col span="8">span: 8</cc-col>
        </cc-row>
      </view>

      <view class="demo">
        <cc-row>
          <cc-col span="4">span: 4</cc-col>
          <cc-col span="10" offset="4">offset: 4, span: 10</cc-col>
        </cc-row>
      </view>

      <view class="demo">
        <cc-row><cc-col offset="12" span="12">offset: 12, span: 12</cc-col></cc-row>
      </view>
    </view>

    <view>
      <view class="title">列元素间距</view>
      <view class="demo">
        <cc-row gutter="20">
          <cc-col span="8">span: 8</cc-col>
          <cc-col span="8">span: 8</cc-col>
          <cc-col span="8">span: 8</cc-col>
        </cc-row>
      </view>
    </view>

    <view>
      <view class="title">flex布局</view>
      <view>左对齐</view>
      <view class="demo">
        <cc-row>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
        </cc-row>
      </view>

      <view>居中</view>
      <view class="demo">
        <cc-row justify="center">
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
        </cc-row>
      </view>

      <view>右对齐</view>
      <view class="demo">
        <cc-row justify="end">
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
        </cc-row>
      </view>

      <view>两端对齐</view>
      <view class="demo">
        <cc-row justify="space-between">
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
        </cc-row>
      </view>

      <view>每个元素的两侧间隔相等</view>
      <view class="demo">
        <cc-row justify="space-around">
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
          <cc-col span="6">span: 6</cc-col>
        </cc-row>
      </view>
    </view>
  
  </view>
</template>

<script>
import ccRow from '../../components/cc-row/cc-row.vue'
import ccCol from '../../components/cc-col/cc-col.vue'

export default {
  components: {
    ccRow,
    ccCol
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
.title {
  margin: 40rpx;
}
.demo {
  width: 100%;
  height: 80rpx;
  margin: 20rpx 0;
}
.cc-col {
  margin-bottom: 20rpx;
  color: #fff;
  font-size: 26rpx;
  text-align: center;
  background-clip: content-box;
}
.cc-col:nth-child(odd) {
  background-color: #39a9ed;
}
.cc-col:nth-child(even) {
  background-color: #66c6f2;
}
</style>
