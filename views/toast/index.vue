<template>
  <view>
    <cc-toast ref="cToast"></cc-toast>
    <view>
      <view class="title">基础语法</view>
      <view class="item">
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'primary', callback })"
            type="primary"
          >primary</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', type: 'success' })" type="success">success</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', type: 'warning' })" type="warning">warning</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', type: 'error' })" type="error">error</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', type: 'info' })" type="info">info</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">不显示图标</view>
      <view class="item">
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'success', icon: false })"
            type="success"
          >success</cc-button>
        </view>
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'warning', icon: false })"
            type="warning"
          >warning</cc-button>
        </view>
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'error', icon: false })"
            type="error"
          >error</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">自定义图标</view>
      <view class="item">
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'primary', customIcon: 'search' })"
            type="primary"
          >success</cc-button>
        </view>
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'success', customIcon: 'weibo' })"
            type="success"
          >success</cc-button>
        </view>
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'warning', customIcon: 'chat' })"
            type="warning"
          >warning</cc-button>
        </view>
        <view>
          <cc-button
            @click="open({ title: '吃鲸鱼的人', type: 'error', customIcon: 'person' })"
            type="error"
          >error</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">加载状态</view>
      <view class="item">
        <view>
          <cc-button
            @click="open({ title: '等待,永久的等待', type: 'primary', loading: true })"
            type="primary"
          >success</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">出现位置</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人' })">center</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', position: 'top' })">top</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', position: 'bottom' })">bottom</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">持续时间</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人' })">默认2000</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', duration: 3000 })">3000</cc-button>
        </view>
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', duration: 500 })">500</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">跳转路径</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', url: '/' })">跳转首页</cc-button>
        </view>
        <!-- <view><cc-button @click="open({ title: '吃鲸鱼的人', url: '/', query: { a: 1, b: 2 } })">query带参数</cc-button></view> -->
        <view>
          <cc-button @click="open({ title: '吃鲸鱼的人', back: true })">返回上一页</cc-button>
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
    callback() {
      console.log('callback')
    },
    open(options) {
      this.$refs.cToast.show({
        // toast类型
        title: options.title,
        type: options.type || 'info',
        // 是否显示图标
        icon: options.icon,
        // 自定义图标
        customIcon: options.customIcon || '',
        // 是否加载状态
        loading: options.loading,
        // 出现位置
        position: options.position || 'center',
        // 持续时间
        duration: options.duration || 2000,
        // 结束跳转url
        url: options.url || '',
        // 跳转传参
        query: options.query || null,
        // toast结束回调
        callback: options.callback || null,
        // 结束后是否返回上一级 优先级高于url
        back: options.back || false
      })
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
  view {
    margin: 20rpx;
  }
}
</style>
