<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础语法</view>
      <cc-sidebar :list="list1" @change="clickItem"></cc-sidebar>
    </view>
    <view class="demo">
      <view class="demo-title">不显示左侧线条</view>
      <cc-sidebar :showLine="false" :list="list1"></cc-sidebar>
    </view>
    <view class="demo">
      <view class="demo-title">禁用选项</view>
      <cc-sidebar :list="list2"></cc-sidebar>
    </view>
    <view class="demo">
      <view class="demo-title">徽标提示</view>
      <cc-sidebar :list="list3"></cc-sidebar>
    </view>
    <view class="demo">
      <view class="demo-title">自定义左侧线条显示</view>
      <cc-sidebar width="120" :list="list4"></cc-sidebar>
    </view>
    <view class="demo">
      <view class="demo-title">自定义样式</view>
      <cc-sidebar width="120" :list="list5"></cc-sidebar>
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
          title: '标签1'
        },
        {
          title: '标签2'
        },
        {
          title: '标签3'
        }
      ],
      list2: [
        {
          title: '标签1'
        },
        {
          title: '标签2',
          disabled: true
        },
        {
          title: '标签3'
        }
      ],
      list3: [
        {
          title: '标签1'
        },
        {
          title: '标签2',
          dot: true
        },
        {
          title: '标签3',
          badge: 5
        }
      ],
      list4: [
        {
          title: '标签1',
          lineColor: '#765489',
          lineWidth: 10,
          lineHeight: 20
        },
        {
          title: '标签2',
          lineColor: '#765489'
        },
        {
          title: '标签3',
          lineColor: '#765489'
        },
        {
          title: '标签4',
          lineColor: '#765489'
        }
      ],
      list5: [
        {
          title: '标签1',
          activeColor: 'red'
        },
        {
          title: '标签2',
          bgColor: '#675232',
          activeColor: '#fff'
        },
        {
          title: '标签3',
          textColor: '#976512'
        },
        {
          title: '标签4',
          fontSize: 30
        }
      ]
    }
  },
  methods: {
    clickItem({ item, index }) {
      console.log(item)
      console.log(index)
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
.demo {
  margin-bottom: #{topx(10)};
  &-title {
    margin: #{topx(10)};
  }
}
</style>
