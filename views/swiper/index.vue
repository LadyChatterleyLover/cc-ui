<template>
  <view class="container">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <cc-swiper @click="handleClick" @change="handleChange" :list="list"></cc-swiper>
    </view>

    <view class="demo">
      <view class="demo-title">指示点位置</view>
      <cc-swiper :list="list" bottom="30" right="100"></cc-swiper>
    </view>

    <view class="demo">
      <view class="demo-title">指示点样式</view>
      <cc-swiper :list="list" :dotStyle="{ width: '30rpx', height: '30rpx' }" activeColor="red" indicatorActiveColor="#fff"></cc-swiper>
    </view>

    <view class="demo">
      <view class="demo-title">指示点模式</view>
      <view style="margin-bottom: 20rpx;"><cc-swiper :list="list" mode="round"></cc-swiper></view>
      <view style="margin-bottom: 20rpx;"><cc-swiper :list="list" mode="rect"></cc-swiper></view>
      <view style="margin-bottom: 20rpx;"><cc-swiper :list="list" mode="number"></cc-swiper></view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义指示点</view>
      <cc-swiper :list="list">
        <template #dot="{current}">
          <view class="demo-custom">第{{ current }}页 / 总共{{ list.length }}页</view>
        </template>
      </cc-swiper>
    </view>

    <view class="demo">
      <view class="demo-title">不显示指示点</view>
      <cc-swiper :list="list" mode="none"></cc-swiper>
    </view>

    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <cc-swiper :list="list">
        <template #default="{item, index}">
          <!-- #ifdef H5 -->
          <view class="custom-img"><image class="custom-img-item" :src="item.image"></image></view>
          <!-- #endif -->
        </template>
        <!-- #ifdef MP-WEIXIN -->
        <template #default>
          <view class="custom-img" v-for="(item, index) in list" :key="index"><image class="custom-img-item" :src="item.image"></image></view>
        </template>
        <!-- #endif -->
      </cc-swiper>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
        },
        {
          image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
        }
      ]
    }
  },
  methods: {
    handleClick(val) {
      console.log(val)
    },
    handleChange(val) {
      console.log(val)
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
.container {
  padding-bottom: 20rpx;
}
.demo {
  &-title {
    margin: 16rpx;
  }
  &-custom {
    position: absolute;
    font-size: 12px;
    color: #fff;
    right: 50rpx;
    bottom: 30rpx;
  }
}
.custom-img {
  width: 90%;
  margin-left: 5%;
  &-item {
    width: 100%;
    height: 300rpx;
    border-radius: 12rpx;
  }
}
</style>
