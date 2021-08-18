<template>
  <view class="container">
    <cc-full-tabs :list='list' :current.sync='current'>
      <view class="content">
        <swiper :indicator-dots="false" :autoplay="false" :current="current" @change="changeSwiper">
          <swiper-item>
            <view style="background: red;">1</view>
          </swiper-item>
          <swiper-item>
            <view style="background: blue;">2</view>
          </swiper-item>
          <swiper-item>
            <view style="background: green;">3</view>
          </swiper-item>
        </swiper>
      </view>
    </cc-full-tabs>
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
            title: '待收货'
          },
          {
            title: '待付款'
          },
          {
            title: '待评价',
            badge: 5
          }
        ],
        current: 0
      }
    },
    methods: {
      changeSwiper(e) {
        this.current = e.detail.current
      },
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
 .content {
   height: calc(100vh - 35px);
   swiper {
     height: 100%;
   }
   view {
     height: 100%;
   }
 }
</style>
