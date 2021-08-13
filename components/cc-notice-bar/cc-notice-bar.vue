<template>
  <view class="cc-notify-bar"  :style="{ background: bgColor }">
    <view class="cc-notify-bar-left" @click="clickLeft">
      <view v-if="volume"><cc-icon :color="color" type="sound" size="16"></cc-icon></view>
      <view v-else>
        <slot name="left" v-if="$slots.left"></slot>
        <cc-icon :color="color" v-else :type="leftIcon"></cc-icon>
      </view>
    </view>
    <view class="cc-notify-bar-wrap" @click="onClick">
      <view class="cc-notify-bar-wrap-content" :style="{ color, animationDuration }" v-if="!vertical">
        <template v-if="list.length">
          <view>{{ list.join(',') }}</view>
        </template>
        <template v-else>
          <slot v-if="$slots.default"></slot>
          <view v-else>{{ text }}</view>
        </template>
      </view>
      <view v-else class="cc-notify-bar-wrap-content-vertical" :style="{ color}">
        <swiper class="cc-notify-bar-wrap-content-vertical-swiper" vertical circular :indicator-dots="false" :autoplay="true" :interval="interval" :duration="500">
          <swiper-item v-for="(item, index) in list" :key="index">
            <view class="cc-notify-bar-wrap-content-vertical-swiper-item">{{item}}</view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="cc-notify-bar-right" @click="clickRight">
      <view v-if="closeable || link">
        <cc-icon v-if="closeable" type="closeempty" :color="color" size="16"></cc-icon>
        <cc-icon v-else type="arrowright" :color="color" size="16"></cc-icon>
      </view>
      <view v-else>
        <slot name="right" v-if="$slots.right"></slot>
        <cc-icon v-else :type="$slots.right"></cc-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-notice-bar',
  components: {},
  props: {
    list: {
       type: Array,
       default: () => []
    },
    // 是否显示声音图标
    volume: {
      type: Boolean,
      default: false
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false
    },
    // 是否显示右侧箭头
    link: {
      type: Boolean,
      default: false
    },
    // 通知文字
    text: {
      type: String
    },
    // 是否垂直滚动
    vertical: {
      type: Boolean,
      default: false
    },
    // 滚动间隔时间 仅在垂直模式下生效
    interval: {
      type: [String, Number],
      default: 2000
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fff7cc'
    },
    // 文字颜色
    color: {
      type: String,
      default: '#f60'
    },
    // 左侧图标
    leftIcon: {
      type: String
    },
    // 滚动速度
    speed: {
      type: [Number, String],
      default: 60
    }
  },
  data() {
    return {
      timer: null,
      // 滚动的文字宽度
      textWidth: 0,
      // 动画时长
      animationDuration: '10s'
    }
  },
  methods: {
    // 初始化动画时长
    init() {
      // #ifdef H5
      let content = document.getElementsByClassName('cc-notify-bar-wrap-content')[0]
      this.textWidth = content.clientWidth
      this.animationDuration = this.textWidth / this.speed + 's'
      // #endif
      // #ifndef H5
      let content = uni
        .createSelectorQuery()
        .in(this)
        .select('.cc-notify-bar-wrap-content')
      content.boundingClientRect().exec(res => {
        this.textWidth = res[0].width
        this.animationDuration = this.textWidth / this.speed + 's'
      })
      // #endif
    },
    // 点击通知栏
    onClick() {
      this.$emit('click')
    },
    // 点击左侧图标
    clickLeft() {
      if (this.volume || this.$slots.left) this.$emit('clickLeft')
    },
    // 点击右侧图标
    clickRight() {
      if (this.closeable || this.link || this.$slots.right) this.$emit('clickRight')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-notify-bar {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 32rpx;
  font-size: 14px;
  &-left {
    margin-right: 16rpx;
  }
  &-wrap {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
    &-content {
      white-space: nowrap;
      position: absolute;
      padding-left: 100%;
      animation: loop 10s linear infinite both;
      &-vertical {
        display: flex;
        height: 100%;
        width: 100%;
        &-swiper {
          width: 100%;
          height: 100%;
          &-item {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  &-right {
    position: relative;
    left: 16rpx;
  }
}
@keyframes loop {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
