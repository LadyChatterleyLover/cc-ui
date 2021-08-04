<template>
  <view class="cc-sidebar" :style="{ width: width + 'px' }">
    <view
      class="cc-sidebar-item"
      v-for="(item, index) in list"
      :key="index"
      :style="{
        background: active === index ? (item.bgColor ? item.bgColor : '#fff') : '#f7f8fa',
        fontSize: item.fontSize ? item.fontSize : 14 + 'px'
      }"
      @click="clickItem(item, index)"
    >
      <cc-badge :dot="item.dot" :content="item.badge" v-if="item.dot || item.badge">
        <view class="cc-sidebar-item-title">{{ item.title }}</view>
      </cc-badge>
      <view
        v-else
        class="cc-sidebar-item-title"
        :class="{ 'cc-sidebar-item-weight': active === index, disabled: item.disabled }"
        :style="{ color: active === index ? (item.activeColor ? item.activeColor : '#323233') : item.textColor ? item.textColor : '#323233' }"
      >
        {{ item.title }}
      </view>
      <view
        class="cc-sidebar-item-active"
        :style="{
          background: item.lineColor ? item.lineColor : '#ee0a24',
          width: item.lineWidth ? item.lineWidth + 'rpx' : '8rpx',
          height: item.lineHeight ? item.lineHeight + 'rpx' : '32rpx'
        }"
        v-if="showLine && index === active"
      ></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-sidebar',
  components: {},
  props: {
    // 当前选中项
      current: {
        type: [Number, String],
        default: 0
      },
      // 侧边栏数据
      list: {
        type: Array,
        required: true
      },
      // 侧边栏宽度
      width: {
        type: [Number, String],
        default: 80
      },
      // 显示左侧线条
      showLine: {
        type: Boolean,
        default: true
      }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    clickItem(item, index) {
      if (item.disabled) return 
      this.active = index
      this.$emit('change', {
        item,
        index
      })
    }
  },
  mounted() {
    if (typeof this.current === 'number') {
      this.active = this.current
    } else {
      this.active = this.list.findIndex((item, index) => item.title === this.current || index === Number(this.current))
    }
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-sidebar {
  display: flex;
  flex-direction: column;
  &-item {
    position: relative;
    padding: 40rpx;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    &-active {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    &-weight {
      font-weight: 500;
    }
  }
}
.disabled {
  color: #c8c9cc !important;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
