<template>
  <view style="background: #f7f7f7;height: 100vh;">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-tree-select
          @clickNav="clickNav"
          @clickItem="clickItem"
          :items="items1"
          :active-id="activeId1"
          :main-active-index="activeIndex1"
        ></cc-tree-select>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">多选模式</view>
      <view class="demo-item">
        <cc-tree-select
          @clickNav="clickNav"
          @clickItem="clickItem"
          :items="items1"
          :active-id="activeId2"
          :main-active-index="activeIndex2"
        ></cc-tree-select>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">徽标提示</view>
      <view class="demo-item">
        <cc-tree-select :items="items2" :active-id="activeId1" :main-active-index="activeIndex1"></cc-tree-select>
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
      activeId1: 1,
      activeIndex1: 0,
      activeId2: [1, 2],
      activeIndex2: 0,
      items1: [
        {
          text: '浙江',
          children: [
            {
              id: 1,
              text: '杭州'
            },
            {
              id: 2,
              text: '温州'
            },
            {
              id: 3,
              text: '宁波',
              disabled: true
            },
            {
              id: 4,
              text: '义务'
            }
          ]
        },
        {
          text: '江苏',
          children: [
            {
              id: 11,
              text: '南京'
            },
            {
              id: 12,
              text: '无锡'
            },
            {
              id: 13,
              text: '徐州'
            },
            {
              id: 14,
              text: '苏州'
            }
          ]
        },
        {
          text: '福建',
          disabled: true
        }
      ],
      
      items2: [
        {
          text: '浙江',
          dot: true,
          children: [
            {
              id: 1,
              text: '杭州'
            },
            {
              id: 2,
              text: '温州'
            },
            {
              id: 3,
              text: '宁波',
              disabled: true
            },
            {
              id: 4,
              text: '义务'
            }
          ]
        },
        {
          text: '江苏',
          badge: 5,
          children: [
            {
              id: 1,
              text: '南京'
            },
            {
              id: 2,
              text: '无锡'
            },
            {
              id: 3,
              text: '徐州'
            },
            {
              id: 4,
              text: '苏州'
            }
          ]
        },
        {
          text: '福建',
          disabled: true
        }
      ]
    }
  },
  methods: {
    clickNav(val) {
      console.log(val)
    },
    clickItem(val) {
      console.log(val)
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
  margin-bottom: #{topx(20)};
  &-title {
    padding: #{topx(10)};
  }
}
</style>
