<template>
  <view class="container">
    <view>
      <view class="title">按钮类型</view>
      <view class="item">
        <view class="item-content">
          <cc-button @click="handleClick">暗战</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary">真心英雄</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="success">非常突然</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="warning">枪火</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="info">大只佬</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="error">放逐</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">缕空状态</view>
      <view class="item">
        <view class="item-content">
          <cc-button plain>国产凌凌漆</cc-button>
        </view>
        <view class="item-content">
          <cc-button plain type="primary">唐伯虎点秋香</cc-button>
        </view>
        <view class="item-content">
          <cc-button plain type="success">回魂夜</cc-button>
        </view>
        <view class="item-content">
          <cc-button plain type="warning">赌圣</cc-button>
        </view>
        <view class="item-content">
          <cc-button plain type="info">上海滩赌圣</cc-button>
        </view>
        <view class="item-content">
          <view class="item-content">
            <cc-button plain type="error">功夫</cc-button>
          </view>
        </view>
      </view>
    </view>

    <view>
      <view class="title">圆角按钮</view>
      <view class="item">
        <view class="item-content">
          <cc-button round>大话西游</cc-button>
        </view>
        <view class="item-content">
          <cc-button round type="primary">大圣娶亲</cc-button>
        </view>
        <view class="item-content">
          <cc-button round type="success">少林足球</cc-button>
        </view>
        <view class="item-content">
          <cc-button round type="warning">美人鱼</cc-button>
        </view>
        <view class="item-content">
          <cc-button round type="info">西游降魔篇</cc-button>
        </view>
        <view class="item-content">
          <cc-button round type="error">西游伏妖篇</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">禁用状态</view>
      <view class="item">
        <view class="item-content">
          <cc-button disabled>龙城岁月</cc-button>
        </view>
        <view class="item-content">
          <cc-button disabled type="primary">以和为贵</cc-button>
        </view>
        <view class="item-content">
          <cc-button disabled type="success">神探</cc-button>
        </view>
        <view class="item-content">
          <cc-button disabled type="warning">复仇</cc-button>
        </view>
        <view class="item-content">
          <cc-button disabled type="info">夺命金</cc-button>
        </view>
        <view class="item-content">
          <cc-button disabled type="error">三人行</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view>图标按钮</view>
      <view class="item">
        <view class="item-content">
          <cc-button icon="person">2046</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary" icon="chat"></cc-button>
        </view>
        <view class="item-content">
          <cc-button type="success" plain icon="weibo"></cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">块级按钮</view>
      <view>
        <cc-button block>块级按钮</cc-button>
      </view>
      <view>
        <cc-button style="margin: 20px 0" type="primary" block icon="chat">块级按钮</cc-button>
      </view>
      <view>
        <cc-button type="success" block plain icon="weibo">块级按钮</cc-button>
      </view>
    </view>

    <view>
      <view class="title">加载状态</view>
      <view class="item">
        <view class="item-content">
          <cc-button loading></cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary" loading icon="chat"></cc-button>
        </view>
        <view class="item-content">
          <cc-button type="success" loading>加载中...</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="error" plain loading>加载中...</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">自定义颜色</view>
      <view class="item">
        <view class="item-content">
          <cc-button color="#abc123">大丈夫</cc-button>
        </view>
        <view class="item-content">
          <cc-button color="green" round>破事儿</cc-button>
        </view>
        <view class="item-content">
          <cc-button color="#7232dd" plain>伊莎贝拉</cc-button>
        </view>
        <view class="item-content">
          <cc-button color="linear-gradient(to right, #ff6034, #ee0a24)">维多利亚一号</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">按钮尺寸</view>
      <view class="item">
        <view class="item-content">
          <cc-button type="primary" size="large">堕落天使</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary">东邪西毒</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary" size="small">阿飞正传</cc-button>
        </view>
        <view class="item-content">
          <cc-button type="primary" size="mini">春光乍泄</cc-button>
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
  methods: {
    handleClick() {
      console.log('click')
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
.item {
  margin: 40rpx;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  margin: 20rpx;
}
.container {
  padding-bottom: 40rpx;
}
.item-content {
  margin: 20rpx;
}
</style>
