<template>
  <view class="contanier">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-circleProgress :percent="50"></cc-circleProgress>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-circleProgress fillColor="#39b54a" :percent="60"></cc-circleProgress>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义宽度</view>
      <view class="demo-item">
        <cc-circleProgress strokeWidth="10" :percent="70"></cc-circleProgress>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <view class="demo-item" style="font-size: 12px;">
        <cc-circleProgress :percent="80">
          <view>营业额</view>
        </cc-circleProgress>
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
.contanier {
  background: #fafafa;
  height: 100vh;
}
.demo {
}
</style>
