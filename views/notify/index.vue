<template>
  <view>
    <cc-notify ref="notify"></cc-notify>
    <view>
      <view class="title">基础语法</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '最佳损友' })">primary</cc-button>
        </view>
        <view>
          <cc-button type="success" @click="open({ title: '红玫瑰', type: 'success' })">success</cc-button>
        </view>
        <view>
          <cc-button type="warning" @click="open({ title: '白玫瑰', type: 'warning' })">warning</cc-button>
        </view>
        <view>
          <cc-button type="error" @click="open({ title: '人来人往', type: 'error' })">error</cc-button>
        </view>
        <view>
          <cc-button type="info" @click="open({ title: '一丝不挂', type: 'info' })">info</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">显示时间</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '内疚' })">默认2000</cc-button>
        </view>
        <view>
          <cc-button
            type="success"
            @click="open({ title: 'last order', type: 'success', duration: 5000 })"
          >5000</cc-button>
        </view>
        <view>
          <cc-button
            type="warning"
            @click="open({ title: '阿牛', type: 'warning', duration: 300 })"
          >300</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">自定义颜色</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: '富士山下', color: '#ad0000', background: '#ffe1e1' })">自定义颜色</cc-button>
        </view>
      </view>
    </view>

    <view>
      <view class="title">显示圆角</view>
      <view class="item">
        <view>
          <cc-button @click="open({ title: 'k歌之王', showRadius: true })">显示圆角</cc-button>
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
    open(options) {
      this.$refs.notify.show({
        // 标题
        title: options.title,
        // 类型
        type: options.type || 'primary',
        // 持续时间
        duration: options.duration || 2000,
        // 自定义背景颜色和文字颜色
        background: options.background,
        color: options.color,
        showRadius: options.showRadius
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
  div {
    margin: #{topx(5)};
  }
}
</style>
