<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view class="item">
        <cc-rate @change="change" :value.sync="value1"></cc-rate>
      </view>
    </view>

    <view>
      <view class="title">星星总数</view>
      <view class="item">
        <cc-rate :count="10" :value.sync="value2"></cc-rate>
      </view>
    </view>

    <view>
      <view class="title">自定义图标</view>
      <view class="item">
        <cc-rate activeIcon="heart-filled" inactiveIcon="heart" :value.sync="value1"></cc-rate>
      </view>
    </view>

    <view>
      <view class="title">禁用状态</view>
      <view class="item">
        <cc-rate disabled :value.sync="value1"></cc-rate>
      </view>
    </view>

    <view>
      <view class="title">只读状态</view>
      <view class="item">
        <cc-rate readonly :value.sync="value1"></cc-rate>
      </view>
    </view>

    <view>
      <view class="title">最小选择数</view>
      <view class="item">
        <cc-rate :min-count="5" :count="10" :value.sync="value1"></cc-rate>
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
      value1: 3,
      value2: 6
    }
  },
  methods: {
    change(val) {
      // console.log('change', val)
    }
  },
  mounted() { },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: #{topx(5)};
  }
}
</style>
