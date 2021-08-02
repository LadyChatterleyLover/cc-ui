<template>
  <view>
    <view class="container">
      <view class="item">
        <view>普通进度条</view>
        <cc-progress :percentage="35.5"></cc-progress>
      </view>
      <view class="item">
        <view>普通进度条控制高度</view>
        <cc-progress :percentage="62.3" :stroke-width="24"></cc-progress>
      </view>
      <view class="item">
        <view>文字内显</view>
        <cc-progress :percentage="70" :text-inside="true" :stroke-width="24"></cc-progress>
      </view>
      <view class="item">
        <view>文字内显且控制高度</view>
        <cc-progress :percentage="33.8" :text-inside="true" :stroke-width="32"></cc-progress>
      </view>
      <view class="item">
        <view>自定义底色</view>
        <cc-progress :percentage="66" in-bg-color="#abc123"></cc-progress>
      </view>
      <view class="item">
        <view>自定义颜色</view>
        <cc-progress :percentage="66" bg-color="#f46"></cc-progress>
      </view>
      <view class="item">
        <h2>自定义显示内容</h2>
        <cc-progress :percentage="66" bg-color="#f46" :line-data="true">
          <template v-slot:content>转化率(日同比 66%)</template>
        </cc-progress>
      </view>
      <view class="item">
        <view>不显示进度</view>
        <cc-progress :percentage="66" bg-color="#f46" :noData="true"></cc-progress>
      </view>
      <view class="item">
        <view>进度条加载动画</view>
        <cc-progress :percentage="33.3" bg-color="#f46" :is-animate="true"></cc-progress>
      </view>
      <view class="item">
        <view>设置加载动画时间</view>
        <cc-progress :percentage="50" bg-color="#f46" :is-animate="true" :duration="5000"></cc-progress>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data() {
    return {
      flag: false
    };
  },
  methods: {},
  mounted() { },
  created() { },
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.container {
  view {
    margin-bottom: 10px;
  }
  .item {
    margin: 20px 0;
  }
}
</style>
