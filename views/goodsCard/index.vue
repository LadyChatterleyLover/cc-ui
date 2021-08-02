<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-goods-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        ></cc-goods-card>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">营销信息</view>
      <view class="demo-item">
        <cc-goods-card
          num="2"
          tag="标签"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          origin-price="10.00"
        ></cc-goods-card>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <view class="demo-item">
        <cc-goods-card
          num="2"
          :price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <cc-tag plain type="error" style="margin-right: 10rpx;">标签</cc-tag>
            <cc-tag plain type="error">标签</cc-tag>
          </template>
          <template #footer>
            <cc-tag size="mini" style="margin-right: 10rpx;">按钮</cc-tag>
            <cc-tag size="mini">按钮</cc-tag>
          </template>
        </cc-goods-card>
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
.demo {
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    margin-bottom: #{topx(30)};
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
