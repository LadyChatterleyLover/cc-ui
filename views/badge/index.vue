<template>
  <view>
    <view>
      <view class="title">基础语法</view>
      <view>
        <view class="demo">
          <view class="demo-item">
            <cc-badge :content="8">
              <view class="child"></view>
            </cc-badge>
          </view>
          <view class="demo-item">
            <cc-badge :content="50">
              <view class="child"></view>
            </cc-badge>
          </view>
          <view class="demo-item">
            <cc-badge content="hot">
              <view class="child"></view>
            </cc-badge>
          </view>
        </view>
      </view>
    </view>

    <view>
      <view class="title">最大值</view>
      <view class="demo">
        <view class="demo-item">
          <cc-badge :content="8" :max="5">
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge :content="50" :max="20">
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge :content="100" :max="99">
            <view class="child"></view>
          </cc-badge>
        </view>
      </view>
    </view>

    <view>
      <view class="title">自定义颜色</view>
      <view class="demo">
        <view class="demo-item">
          <cc-badge :content="8" bgcolor="#1989fa">
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge :content="50" :max="20" bgcolor="red" color="green">
            <view class="child"></view>
          </cc-badge>
        </view>
      </view>
    </view>

    <view>
      <view class="title">显示圆点</view>
      <view class="demo">
        <view class="demo-item">
          <cc-badge :content="8" dot>
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge :content="50" dot bgcolor="#1989fa">
            <view class="child"></view>
          </cc-badge>
        </view>
      </view>
    </view>

    <view>
      <view class="title">自定义内容</view>
      <view class="demo">
        <view class="demo-item">
          <cc-badge>
            <view class="child"></view>
            <template #content>
              <cc-icon type="person" color="#fff" size="12"></cc-icon>
            </template>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge bgcolor="#1989fa">
            <view class="child"></view>
            <template #content>
              <cc-icon type="search" color="#fff" size="12"></cc-icon>
            </template>
          </cc-badge>
        </view>
      </view>
    </view>

    <view>
      <view class="title">偏移量</view>
      <view class="demo">
        <view class="demo-item">
          <cc-badge content="8" :offset="[20, 20]">
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge dot :offset="[8, 20]">
            <view class="child"></view>
          </cc-badge>
        </view>
        <view class="demo-item">
          <cc-badge bgcolor="#1989fa" content="50" :offset="[-20, -20]">
            <view class="child"></view>
          </cc-badge>
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
.title {
  margin: 20rpx;
}
.demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-item {
    margin-left: 30rpx;
  }
}
.child {
  width: 80rpx;
  height: 80rpx;
  background: #f2f3f5;
  border-radius: 8rpx;
}
</style>
