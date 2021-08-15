<template>
  <view class="container">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item"><cc-pagination :current="current" :pageSize="pageSize" :total="total"></cc-pagination></view>
    </view>
    
    <view class="demo">
      <view class="demo-title">简单模式</view>
      <view class="demo-item"><cc-pagination simple :current="current" :pageSize="pageSize" :total="total"></cc-pagination></view>
    </view>
    
    <view class="demo">
      <view class="demo-title">显示省略号</view>
      <view class="demo-item"><cc-pagination forceEllipses :current="current" :pageSize="pageSize" :total="total"></cc-pagination></view>
    </view>
    
    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <view class="demo-item">
        <cc-pagination :current="current" :pageSize="pageSize" :total="total">
          <template #pre>
            <cc-icon type="arrowleft" color="#0081ff"></cc-icon>
          </template>
          <template #next>
            <cc-icon type="arrowright" color="#0081ff"></cc-icon>
          </template>
          <template #page='{text}'>
            {{text}}
          </template>
        </cc-pagination>
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
      current: 1,
      total: 25,
      pageSize: 5
    }
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

<style scoped lang="scss">
.container {
  background: #f7f7f7;
  height: 100vh;
}
.demo {
  margin: 0 10rpx 60rpx 10rpx;
  &-title {
    margin: 10rpx 0;
  }
}
</style>
