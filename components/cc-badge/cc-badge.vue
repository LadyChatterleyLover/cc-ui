<template>
  <view class="cc-badge">
    <slot></slot>
    <view :style="{ background: bgColor, color, top: offset[0] /2  + 'rpx', right: offset[1] / 2 + 'rpx' }" class="cc-badge-content" v-if="!dot">
      <template v-if="content">
        {{ showContent }}
      </template>
      <slot name="content" v-else></slot>
    </view>
    <view
      v-else
      class="cc-badge-dot"
      :style="{
        background: bgColor,
        top: offset[0] + 'px',
        right: offset[1] + 'px'
      }"
    ></view>
  </view>
</template>

<script>
export default {
  name: 'cc-badge',
  components: {},
  props: {
    // 内容
    content: {
      type: [Number, String]
    },
    // 最大值
    max: {
      type: [Number, String]
    },
    // 显示点
    dot: {
      type: Boolean,
      default: false
    },
    // 自定义背景颜色
    bgColor: {
      type: String
    },
    // 内容颜色
    color: {
      type: String
    },
    // 偏移量
    offset: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    showContent() {
      if (this.max && typeof this.content === 'number') {
        if (this.content < Number(this.max)) return this.content
        else return this.max + '+'
      } else {
        return this.content
      }
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-badge {
  position: relative;
  &-content {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8rpx;
    border-radius: 100%;
    z-index: 99;
    font-size: 12px;
    background: #ee0a24;
    color: #fff;
    transform: translate(50%, -50%);
    transform-origin: 100%;
  }
  &-dot {
    width: 16rpx;
    min-width: 0;
    height: 16rpx;
    background-color: #ee0a24;
    border-radius: 100%;
    position: absolute;
    top: -8rpx;
    right: -8rpx;
    transform: translate(0, 0);
  }
}
</style>
