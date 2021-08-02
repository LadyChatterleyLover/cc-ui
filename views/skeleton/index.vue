<template>
  <view>
    <view>
      <view class="title">基础用法</view>
      <view class="item">
        <cc-skeleton title :row="3"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">展示头像</view>
      <view class="item">
        <cc-skeleton title avatar :row="3"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">头像大小</view>
      <view class="item">
        <cc-skeleton title avatar avatarSize="40" :row="3"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">方形头像</view>
      <view class="item">
        <cc-skeleton title avatar avatarSize="40" :round="false" :row="3"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">展示动画</view>
      <view class="item">
        <cc-skeleton animate title avatar :row="5"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">自定义颜色</view>
      <view class="item">
        <cc-skeleton bgcolor="red" title avatar :row="5"></cc-skeleton>
      </view>
    </view>

    <view>
      <view class="title">控制显示</view>
      <cc-button size="small" type="primary" @click="handleClick">点击2秒之后骨架屏消失</cc-button>
      <view class="item" v-if="loading">
        <cc-skeleton :loading="loading" title :row="3"></cc-skeleton>
      </view>
      <view v-if="!loading">你的背包,让我走的好缓慢</view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      loading: true 
    }
  },
  methods: {
    handleClick() {
      setTimeout(() => {
        this.loading = false
      }, 2000)
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
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: #{topx(5)};
  }
}
</style>
