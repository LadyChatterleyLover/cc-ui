<template>
  <view class="cc-cell" :class="[{ 'cc-cell-large': size }, { 'cc-cell-border': border }]" @click="onClick">
    <view>
      <view class="cc-cell-title">
        <view v-if="icon" class="cc-cell-left-icon"><cc-icon :size="iconSize" :type="icon" color="#323233"></cc-icon></view>
        <view v-else class="cc-cell-left-icon"><slot name="left-icon"></slot></view>
        <view>
          <slot name="title" v-if="!title"></slot>
          <text v-else>{{ title }}</text>
        </view>
      </view>
      <view class="cc-cell-label">
        <slot name="label" v-if="!label"></slot>
        <text v-else>{{ label }}</text>
      </view>
    </view>
    <view class="cc-cell-value">
      <view class="cc-cell-value-wrap">
        <view v-if="!value" style="width: 100%;display: flex;align-items: center;"><slot name="value"></slot></view>
        <text v-else>{{ value }}</text>
      </view>
      <view class="cc-cell-right-icon">
        <cc-icon color="#969799" v-if="isLink" :type="`arrow${arrowDirection}`" :size="iconSize"></cc-icon>
        <slot name="right-icon"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-cell',
  components: {},
  props: {
    // 标题
    title: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 标题下方描述
    label: {
      type: String
    },
    // 左侧图标
    icon: {
      type: String
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: true
    },
    // 尺寸
    size: {
      type: String
    },
    // 显示右侧箭头
    isLink: {
      type: Boolean,
      default: false
    },
    // 箭头方向
    arrowDirection: {
      type: String,
      default: 'right'
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: '16'
    }
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
  mounted() {
    console.log()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
.cc-cell {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20rpx 32rpx;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  background-color: #fff;
  &-border::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 32rpx;
    bottom: 0;
    left: 32rpx;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(0.5);
  }
  &-left-icon {
    margin-right: 8rpx;
    flex-shrink: 0;
  }
  &-large {
    padding-top: 24rpx;
    padding-bottom: 24rpx;
  }
  &-title,
  &-value {
    flex: 1;
  }
  &-title {
    display: flex;
    align-items: center;
  }
  &-value {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
    &-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .cc-cell-right-icon {
      position: relative;
      top: 2rpx;
      margin-left: 8rpx;
    }
  }
  &-label {
    margin-top: 8rpx;
    color: #969799;
    font-size: 12px;
    line-height: 36rpx;
  }
}
</style>
