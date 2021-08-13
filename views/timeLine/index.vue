<template>
  <view class="demo">
    <cc-time-line>
      <cc-time-line-item>
        <template #node>
          <view class="node" style="background: #19be6b;"><cc-icon color="#fff"  type="paperplane"></cc-icon></view>
        </template>
        <template #content>
          <view>
            <view class="order-title">待取件</view>
            <view class="order-desc">[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
            <view class="order-time">2019-05-08 12:12</view>
          </view>
        </template>
      </cc-time-line-item>

      <cc-time-line-item  node-top="4">
        <template #content>
          <view>
            <view class="order-title">待取件</view>
            <view class="order-desc">[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
            <view class="order-time">2019-05-08 12:12</view>
          </view>
        </template>
      </cc-time-line-item>
      
    </cc-time-line>
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
  margin: 10px;
}
.node {
  width: 44rpx;
  height: 44rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0;
}

.order-title {
  color: #333333;
  font-weight: bold;
  font-size: 32rpx;
}

.order-desc {
  color: rgb(150, 150, 150);
  font-size: 28rpx;
  margin-bottom: 6rpx;
}

.order-time {
  color: rgb(200, 200, 200);
  font-size: 26rpx;
}
</style>
