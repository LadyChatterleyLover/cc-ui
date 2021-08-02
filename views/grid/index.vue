<template>
  <view class="demo">
    <view class="demo-title">基础用法</view>
    <view class="demo-item">
      <cc-grid @clickItem="clickItem" :list="list1"></cc-grid>
    </view>

    <view class="demo-title">设置列数</view>
    <view class="demo-item">
      <cc-grid :column="3" :list="list2"></cc-grid>
    </view>

    <view class="demo-title">设置间距</view>
    <view class="demo-item">
      <cc-grid :list="list1" :gutter="20"></cc-grid>
    </view>

    <view class="demo-title">自定义样式</view>
    <view class="demo-item">
      <cc-grid :list="list3"></cc-grid>
    </view>

    <view class="demo-title">内容横向排列</view>
    <view class="demo-item">
      <cc-grid :list="list1" vertical></cc-grid>
    </view>

    <view class="demo-title">徽标提示</view>
    <view class="demo-item">
      <cc-grid :list="list4"></cc-grid>
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
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        }
      ],
      list2: [
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        },
        {
          text: '文字',
          icon: 'image'
        }
      ],
      list3: [
        {
          text: '文字',
          icon: 'image',
          textColor: '#1989fa',
          iconColor: 'red',
          textSize: '16'
        },
        {
          text: '文字',
          icon: 'image',
          textColor: '#123456',
          iconColor: 'orange',
          textSize: '16'
        },
        {
          text: '文字',
          icon: 'image',
          textColor: '#654321',
          iconColor: 'green',
          textSize: '16'
        },
        {
          text: '文字',
          icon: 'image',
          textColor: '#123789',
          iconColor: '#946721',
          textSize: '16'
        }
      ],
      list4: [
        {
          text: '文字',
          icon: 'image',
          dot: true
        },
        {
          text: '文字',
          icon: 'image',
          badge: '5'
        },
        {
          text: '文字',
          icon: 'image',
          dot: true
        },
        {
          text: '文字',
          icon: 'image',
          badge: '99+'
        }
      ]
    }
  },
  methods: {
    clickItem(val) {
      console.log('click', val)
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
  background: #f7f8fa;
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
