<template>
  <view style="padding-bottom: 30px">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view>当前选中值: {{ value.join(',') }}</view>
      <view class="demo-item">
        <cc-dropdown :list="list1" @change="onChange" @open="open" @close="close"></cc-dropdown>
      </view>
    </view>
    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-dropdown :list="list1" disabled></cc-dropdown>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义选中颜色</view>
      <view class="demo-item">
        <cc-dropdown :list="list3" activeColor="#0081ff"></cc-dropdown>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义菜单内容</view>
      <view class="demo-item">
        <cc-dropdown :list="list4" activeColor="#0081ff">
          <template #choose>
            <cc-cell center title="包邮">
              <template #right-icon>
                <cc-switch :value.sync="switch1" size="24" active-color="#ee0a24" />
              </template>
            </cc-cell>
            <cc-cell center title="团购">
              <template #right-icon>
                <cc-switch :value.sync="switch2" size="24" active-color="#ee0a24" />
              </template>
            </cc-cell>
            <view style="padding: 5px 16px;">
              <cc-button type="pimary" block round>确认</cc-button>
            </view>
          </template>
        </cc-dropdown>
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
      list1: [
        {
          value: 1,
          options: [{ label: '全部商品', value: 0 }, { label: '新款商品', value: 1 }, { label: '活动商品', value: 2 }]
        },
        {
          value: 'a',
          options: [{ label: '默认排序', value: 'a' }, { label: '好评排序', value: 'b' }, { label: '销量排序', value: 'c', disabled: true }]
        }
      ],
      list2: [
        {
          value: 'a',
          options: [{ label: '默认排序', value: 'a' }, { label: '好评排序', value: 'b' }, { label: '销量排序', value: 'c', disabled: true }]
        }
      ],
      list3: [
        {
          value: 1,
          options: [{ label: '全部商品', value: 0 }, { label: '新款商品', value: 1 }, { label: '活动商品', value: 2 }]
        }
      ],
      list4: [
        {
          value: 1,
          options: [{ label: '全部商品', value: 0 }, { label: '新款商品', value: 1 }, { label: '活动商品', value: 2 }]
        },
        {
          slots: 'choose',
          title: '筛选'
        }
      ],
      value: [],
      switch1: false,
      switch2: false
    }
  },
  methods: {
    onChange(val) {
      this.value = val
    },
    open() {
      console.log('open')
    },
    close(val) {
      console.log('close')
    },
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
.demo {
  margin-bottom: 200rpx;
  &-title {
    padding: 20rpx;
  }
  &-item {
    margin-bottom: 10px;
  }
}
</style>
