<template>
  <view class="cc-skeleton" v-if="loading">
    <view
      v-if="avatar"
      class="cc-skeleton-avatar"
      :class="{ 'cc-skeleton-avatar-round': round, 'cc-skeleton-animate': animate }"
      :style="{ width: avatarSize + 'rpx', height: avatarSize + 'rpx', background: bgColor }"
    ></view>
    <view class="cc-skeleton-wrap" :class="{ 'cc-skeleton-wrap-hasavatar': avatar }">
      <view v-if="title" class="cc-skeleton-content cc-skeleton-title" :class="{ 'cc-skeleton-animate': animate }" :style="{ background: bgColor }"></view>
      <template v-if="row > 0">
        <view
          v-for="item in row"
          :key="item"
          class="cc-skeleton-content cc-skeleton-row"
          :class="{ 'cc-skeleton-row-last': item === row, 'cc-skeleton-animate': animate }"
          :style="{ background: bgColor }"
        ></view>
      </template>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-skeleton',
  components: {},
  props: {
    // 段落占位图行数
    row: {
      type: Number,
      default: 0
    },
    // 是否开启动画
    animate: {
      type: Boolean,
      default: false
    },
    // 是否显示标题占位图
    title: {
      type: Boolean,
      default: false
    },
    // 是否显示头像占位图
    avatar: {
      type: Boolean,
      default: false
    },
    // 是否显示骨架屏
    loading: {
      type: Boolean,
      default: true
    },
    // 头像占位图大小
    avatarSize: {
      type: [Number, String],
      default: 64
    },
    // 头像是否圆形
    round: {
      type: Boolean,
      default: true
    },
    // 骨架组件背景颜色
    bgColor: {
      type: String,
      default: '#f2f3f5'
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-skeleton {
  display: flex;
  &-animate {
    animation: skeleton-animate 1.2s ease-in-out infinite;
  }
  &-title {
    width: 750 * 0.4rpx;
  }
  &-wrap {
    flex: 1;
    &-hasavatar {
      padding-top: 16rpx;
    }
  }
  &-content {
    height: 16px;
  }
  &-avatar {
    margin-right: 32rpx;
    &-round {
      border-radius: 100%;
    }
  }
  &-row {
    width: 750rpx;
    margin-top: 40rpx;
    &-last {
      width: 750 * 0.6rpx;
    }
  }
}
@keyframes skeleton-animate {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}
</style>
