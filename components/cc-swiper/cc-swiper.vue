<template>
  <view class="cc-swiper" :style="{ height: height + 'rpx' }">
    <swiper
      class="cc-swiper-wrap"
      :autoplay="autoplay"
      :duration="duration"
      :indicator-dots="false"
      :circular="circular"
      :vertical="vertical"
      :current="current"
      :interval="interval"
      :disable-touch="disableTouch"
      @change="handleChange"
    >
      <swiper-item @longpress.prevent='longpress(item, index, $event)' @click="clickItem(item, index)" class="cc-swiper-item" v-for="(item, index) in list" :key="index">
        <view class="cc-swiper-item-img">
          <!-- #ifdef H5 -->
          <view v-if="$scopedSlots.default"><slot :current="currentIndex" :item="item" :index="index"></slot></view>
          <!-- #endif -->
          <!-- #ifdef MP-WEIXIN -->
          <slot v-if="$slots.default"></slot>
          <!-- #endif -->
          <image v-else class="cc-swiper-item-img-content" :src="item.image" :mode="imgMode"></image>
        </view>
      </swiper-item>
    </swiper>
    <view v-if="$scopedSlots.dot"><slot name="dot" :current="currentIndex + 1"></slot></view>
    <view v-else>
      <view class="cc-swiper-dot" :class="{ 'cc-swiper-dot-translate': !right }" :style="{ bottom: bottom + 'rpx', right: right + 'rpx' }" v-if="showDot && mode !== 'number'">
        <view
          class="cc-swiper-dot-item"
          :class="{
            'cc-swiper-dot-item-round': currentIndex === index && mode === 'round',
            'cc-swiper-dot-item-rect': mode === 'rect'
          }"
          :style="{
            background: currentIndex === index ? activeColor : indicatorActiveColor,
            dotStyle
          }"
          v-for="(item, index) in list.length"
          :key="index"
        ></view>
      </view>
      <text v-if="mode === 'number'" class="cc-swiper-dot-number">
        <text>{{ currentIndex + 1 }} / {{ list.length }}</text>
      </text>
    </view>
  </view>
</template>

<script>
  
export default {
  name: 'cc-swiper',
  components: {},
  props: {
    // 轮播图数据
    list: {
      type: Array,
      required: true
    },
    // 指示点模式
    mode: {
      type: String,
      default: 'circle'
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true
    },
    // 当前轮播图
    current: {
      type: [String, Number],
      default: 0
    },
    // 自动切换时间间隔
    interval: {
      type: [String, Number],
      default: 5000
    },
    // 滑动动画时长
    duration: {
      type: [String, Number],
      default: 500
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      default: true
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      default: false
    },
    // 图片模式
    imgMode: {
      type: String,
      default: 'aspectFill'
    },
    // 轮播图组件高度
    height: {
      type: [String, Number],
      default: 300
    },
    // 指示点距离底部位置
    bottom: {
      type: [String, Number],
      default: 20
    },
      // 指示点距离右边位置
    right: {
      type: [String, Number],
      default: ''
    },
    // 当前未选中的指示点颜色
    indicatorActiveColor: {
      type: String,
      default: '#ccc'
    },
    // 当前选中指示点颜色
    activeColor: {
      type: String,
      default: '#fff'
    },
    // 指示点样式
    dotStyle: {
      type: Object
    },
    // 禁止用户滑动
    disableTouch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 是否显示面板指示点
      showDot: true,
      currentIndex: 0
    }
  },
  methods: {
    handleChange(e) {
      this.currentIndex = e.detail.current
      this.$emit('change', e.detail.current)
    },
    clickItem(item, index) {
      this.$emit('click', {
        item,
        index,
      })
    },
    // 长按事件
    longpress(item, index, e) {
      e.preventDefault()
      this.$emit('longpress', {
        item,
        index,
      })
    }
  },
  mounted() {
    if (this.mode === 'none') this.showDot = false
    this.currentIndex = this.current
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-swiper {
  width: 100%;
  position: relative;
  &-wrap {
    width: 100%;
    height: 100%;
  }
  &-item {
    width: 100%;
    height: 100%;
    &-img {
      width: 100%;
      height: 100%;
      &-content {
        width: 100%;
        height: 100%;
      }
    }
  }
  &-dot {
    display: flex;
    align-items: center;
    position: absolute;
    &-translate {
      left: 50%;
      transform: translateX(-50%);
    }
    &-number {
      padding: 4rpx 12rpx;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 48rpx;
      font-size: 12px;
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20rpx;
    }
    &-item {
      margin: 0 4rpx;
      border-radius: 16rpx;
      transition: all 0.3s;
      width: 12rpx;
      height: 12rpx;
      &-round {
        width: 28rpx;
      }
      &-rect {
        width: 20rpx;
        height: 6rpx;
      }
    }
  }
}
</style>
