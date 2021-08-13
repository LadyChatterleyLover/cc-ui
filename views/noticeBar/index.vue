<template>
  <view>
    <view class="demo">
      <view class="title">基础用法</view>
      <view class="content">
        <cc-notice-bar
          volume
          closeable
          @click="clickBar"
          @clickLeft="clickLeft"
          @clickRight="clickRight"
        >闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪</cc-notice-bar>
      </view>
      <view class="content">
        <cc-notice-bar volume link>闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪</cc-notice-bar>
      </view>
    </view>
    
    <view class="demo">
      <view class="title">多条数据</view>
      <view class="content">
        <cc-notice-bar volume link :list="list"></cc-notice-bar>
      </view>
    </view>
    
    <view class="demo">
      <view class="title">垂直滚动</view>
      <view class="content">
        <cc-notice-bar volume link vertical :list="list"></cc-notice-bar>
      </view>
    </view>
    
    <view class="demo">
      <view class="title">滚动速度</view>
      <view class="content">
        <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去" speed="160" volume link></cc-notice-bar>
      </view>
    </view>

    <view class="demo">
      <view class="title">无图标</view>
      <view class="content">
        <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去" volume></cc-notice-bar>
      </view>
      <view class="content">
        <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去"></cc-notice-bar>
      </view>
    </view>

    <view class="demo">
      <view class="title">自定义内容</view>
      <view class="content">
        <cc-notice-bar text="当你孤单你会想起谁">
          <template #left>
            <cc-icon type="person"></cc-icon>
          </template>
        </cc-notice-bar>
      </view>
      <view class="content">
        <cc-notice-bar bgcolor="#ecf9ff">
          <template #default>
            <view style="color: #1989fa">你想不想找个人来陪</view>
          </template>
        </cc-notice-bar>
      </view>
      <view class="content">
        <cc-notice-bar text="你的快乐伤悲,只有我能体会">
          <template #right>
            <view class="text">体会</view>
          </template>
        </cc-notice-bar>
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
      list: [
        '一起长大的约定',
        '那样清晰 打过勾的我相信',
        '说好要一起旅行',
        '是你如今 唯一坚持的任性'
      ]
    }
  },
  methods: {
    clickBar() {
      console.log('click')
    },
    clickLeft() {
      console.log('clickLeft')
    },
    clickRight() {
      console.log('clickRight')
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
  margin: #{topx(20)} 0;
}
.title {
  margin: #{topx(10)};
}
.content {
  padding: #{topx(10)};
}
.text {
  height: #{topx(40)};
  line-height: #{topx(40)};
}
</style>
