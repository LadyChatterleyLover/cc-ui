<template>
  <view style="background: #F7F8FA;">
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-tabbar :list="list1" @change="handleChange"></cc-tabbar>
      </view>
    </view>

    <!-- <view class="demo">
       <view class="demo-title demo-title-fixed">固定在底部</view>
       <view class="demo-item">
         <cc-tabbar :list='list1' fixed></cc-tabbar>
       </view>
    </view>-->

    <view class="demo">
      <view class="demo-title">徽标提示</view>
      <view class="demo-item">
        <cc-tabbar :list="list2"></cc-tabbar>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义颜色</view>
      <view class="demo-item">
        <cc-tabbar :list="list1" active-color="#ee0a24" inactive-color="#000"></cc-tabbar>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义背景颜色</view>
      <view class="demo-item">
        <cc-tabbar :list="list1" bgcolor="#ddd"></cc-tabbar>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">路由跳转</view>
      <view class="demo-item">
        <cc-tabbar :list="list3" router></cc-tabbar>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">中间凸起按钮</view>
      <view class="demo-item">
        <cc-tabbar :list="list4">
          <template #plus="{ item }">
            <img
              width="37"
              height="37"
              :src="item.active ? 'https://cdn.uviewui.com/uview/common/min_button_select.png' : 'https://cdn.uviewui.com/uview/common/min_button.png'"
            />
          </template>
        </cc-tabbar>
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
          text: '首页',
          icon: 'home'
        },
        {
          text: '分类',
          icon: 'bars'
        },
        {
          text: '购物车',
          icon: 'cart'
        },
        {
          text: '我的',
          icon: 'person'
        }
      ],
      list2: [
        {
          text: '首页',
          icon: 'home',
          dot: true
        },
        {
          text: '分类',
          icon: 'bars',
          count: 1
        },
        {
          text: '购物车',
          icon: 'cart',
          dot: true
        },
        {
          text: '我的',
          icon: 'person',
          count: 22
        }
      ],
      list3: [
        {
          text: '首页',
          icon: 'home',
          url: '/tabbar'
        },
        {
          text: '分类',
          icon: 'bars',
          url: '/category'
        },
        {
          text: '购物车',
          icon: 'cart',
          url: '/cart'
        },
        {
          text: '我的',
          icon: 'person',
          url: '/my'
        }
      ],
      list4: [
        {
          text: '首页',
          icon: 'home',
          url: '/tabbar'
        },
        {
          text: '分类',
          icon: 'bars',
          url: '/category'
        },
        {
          text: '发布',
          slots: 'plus',
          midButton: true
        },
        {
          text: '购物车',
          icon: 'cart',
          url: '/cart'
        },
        {
          text: '我的',
          icon: 'person',
          url: '/my'
        }
      ]
    }
  },
  methods: {
    handleChange({ item, index }) {
      console.log(item, index)
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
    &-fixed {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 60px;
    }
  }
  &-item {
    margin-bottom: 10px;
  }
}
</style>
