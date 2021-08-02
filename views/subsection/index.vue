<template>
  <view style="background: #f7f7f7;height: 100vh;">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <view class="demo-item-content">
          <cc-subsection :list="list" :value="value"></cc-subsection>
        </view>
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
      value: 0,
      list: [
        {
          name: '待发货'
        },
        {
          name: '待付款'
        },
        {
          name: '待评价'
        }
      ]
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
.demo {
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    margin-bottom: #{topx(30)};
    display: flex;
    justify-content: center;
    &-content {
      width: 500rpx;
    }
  }
}
</style>
