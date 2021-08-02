<template>
  <view>
    <view class="demo">
      <view class="demo-title">基本用法</view>
      <view class="demo-item">
        <view>
          <cc-avatar :src="src" size="small"></cc-avatar>
        </view>
        <view>
          <cc-avatar :src="src"></cc-avatar>
        </view>
        <view>
          <cc-avatar :src="src" size="large"></cc-avatar>
        </view>
        <view>
          <cc-avatar :src="src" size="80"></cc-avatar>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">方形头像</view>
      <view class="demo-item">
        <view>
          <cc-avatar :round="false" :src="src" size="small"></cc-avatar>
        </view>
        <view>
          <cc-avatar :round="false" :src="src"></cc-avatar>
        </view>
        <view>
          <cc-avatar :round="false" :src="src" size="large"></cc-avatar>
        </view>
        <view>
          <cc-avatar :round="false" :src="src" size="80"></cc-avatar>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义内容</view>
      <view class="demo-item">
        <view>
          <cc-avatar>user</cc-avatar>
        </view>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">加载失败</view>
      <view class="demo-item">
        <view>
          <cc-avatar size="50" :src="`${src}1`" @error="handleError">
            <image
              style="width: 70rpx;height: 70rpx;"
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </cc-avatar>
        </view>
        <view>
          <cc-avatar size="60" :src="`${src}1`">加载失败</cc-avatar>
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
    return {
      src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  methods: {
    handleError() {
      console.log('error')
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
  &-item {
    display: flex;
    align-items: center;
    margin-left: #{topx(15)};
    view {
      margin-left: #{topx(15)};
    }
  }
}
</style>
