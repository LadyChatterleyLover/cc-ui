<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-count-down :time="time"></cc-count-down>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">分隔符为中文</view>
      <view class="demo-item">
        <cc-count-down separator="zh" :time="time"></cc-count-down>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义样式</view>
      <view class="demo-item">
        <cc-count-down :time="time">
          <template #default="{ timeData }">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </cc-count-down>
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
      time: 1000 * 60 * 60 * 3
    }
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
  &-title {
    padding: #{topx(10)};
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
