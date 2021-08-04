<template>
  <view>
    <view :class="{ 'cc-nav-bar-fixed': fixed }" class="cc-nav-bar" :style="{ background, zIndex: Number(zIndex) }">
      <view class="cc-nav-bar-left" @click="clickLeft">
        <view>
          <slot v-if="$slots.left" name="left"></slot>
          <view v-else class="cc-nav-bar-left-content">
            <view class="cc-nav-bar-left-content-icon" v-if="leftArrow"><cc-icon :color="background ? '#fff' : leftIconColor" :type="leftIcon"></cc-icon></view>
            <view :style="{ color: background ? '#fff' : leftTextColor }" class="cc-nav-bar-left-content-text">{{ leftText }}</view>
          </view>
        </view>
      </view>
      <view  @click="clickTitle">
        <slot v-if="$slots.default"></slot>
        <view class="cc-nav-bar-title" v-else :style="{ color: background ? '#fff' : titleColor }">{{ title }}</view>
      </view>
      <view class="cc-nav-bar-right" @click="clickRight">
        <view>
          <slot name="right" v-if="$slots.right"></slot>
          <view :style="{ color: background ? '#fff' : rightColor, fontSize: titleSize + 'px' }" v-else>{{ rightText }}</view>
        </view>
      </view>
    </view>
    <view v-if="fixed && placeholder" class="cc-nav-bar-placeholder"></view>
  </view>
</template>

<script>
export default {
  name: 'cc-nav-bar',
  components: {},
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 标题颜色
    titleColor: {
      type: String,
      default: '#606266'
    },
    // 标题尺寸
    titleSize: {
      type: [String, Number],
      default: '14'
    },
    // 左侧文字
    leftText: {
      type: String,
      default: ''
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: 'arrowleft'
    },
    // 左侧图标颜色
    leftIconColor: {
      type: String,
      default: '#606266'
    },
    // 左侧文字颜色
    leftTextColor: {
      type: String,
      default: '#606266'
    },
    // 右侧标题
    rightText: {
      type: String,
      default: ''
    },
    // 右侧文字颜色
    rightColor: {
      type: String,
      default: '#606266'
    },
    // 导航栏背景颜色
    background: {
      type: String,
      default: ''
    },
    // 是否显示左侧箭头
    leftArrow: {
      type: Boolean,
      default: false
    },
    // 是否固定在顶部
    fixed: {
      type: Boolean,
      default: false
    },
    // 固定在顶部时，是否在标签位置生成一个等高的占位元素
    placeholder: {
      type: Boolean,
      default: false
    },
    // 固定在顶部的层级
    zIndex: {
      type: [String, Number],
      default: 999
    }
  },
  data() {
    return {}
  },
  methods: {
    clickLeft() {
      this.$emit('clickLeft')
    },
    clickTitle() {
      this.$emit('clickTitle')
    },
    clickRight() {
      this.$emit('clickRight')
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-nav-bar {
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  padding: 0 40rpx;
  background: #fff;
  &-placeholder {
    height: 44px;
  }
  &-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  &-title {
    width: 400rpx;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &-left,
  &-right {
    font-size: 14px;
    height: 44px;
    display: flex;
    align-items: center;
  }
  &-left {
    &-content {
      display: flex;
      align-items: center;
      &-icon {
        height: 44px;
        display: flex;
        align-items: center;
      }
      &-text {
        margin-left: 8rpx;
      }
    }
  }
}
</style>
