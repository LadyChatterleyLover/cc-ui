<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item"><cc-alert type="primary" title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="success" title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="error" title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="info" title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
    </view>

    <view class="demo">
      <view class="demo-title">左侧图标</view>
      <view class="demo-item"><cc-alert type="primary" showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="success" showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="error" showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert title="说好的幸福呢" showIcon description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="info" showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
    </view>

    <view class="demo">
      <view class="demo-title">可关闭</view>
      <view class="demo-item"><cc-alert type="primary" closeable showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="success" showIcon closeable title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="error" showIcon closeable title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert title="说好的幸福呢" showIcon closeable description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
      <view class="demo-item"><cc-alert type="info" showIcon closeable title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
    </view>

    <view class="demo">
      <view class="demo-title">手动控制显示隐藏</view>
      <cc-button @click="show = true" size="small" type="primary">{{ show ? '隐藏' : '显示' }}</cc-button>
      <view class="demo-item"><cc-alert type="primary" :show.sync="show" closeable showIcon title="说好的幸福呢" description="怎么了,你累了,说好的,幸福呢"></cc-alert></view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false
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
  margin: 10px;
  &-title {
    margin: 5px;
  }
  &-item {
    margin: 10px 0;
  }
}
</style>
