<template>
  <view class="cc-grid" :style="{ paddingLeft: gutter + 'rpx' }">
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <view
        class="cc-grid-item"
        v-for="(item, index) in list"
        @click="clickItem(item, index)"
        :key="index"
        :style="{
          flexBasis: basis,
          paddingRight: gutter + 'rpx',
          marginBottom: gutter + 'rpx'
        }"
      >
        <view>
          <slot v-if="$slots.default"></slot>
          <view v-else :style="{ flexDirection: vertical ? 'row' : 'column' }" class="cc-grid-item-content">
            <view class="cc-grid-item-icon">
              <cc-badge :dot="item.dot" :content="item.badge" v-if="item.dot || item.badge">
                <cc-icon :type="item.icon" :color="item.iconColor" :size="item.iconSize"></cc-icon>
              </cc-badge>
              <cc-icon v-if="!item.dot && !item.badge" :type="item.icon" :color="item.iconColor" :size="item.iconSize"></cc-icon>
            </view>
            <view class="cc-grid-item-text" :class="{ 'cc-grid-item-content': vertical }" :style="{ fontSize: item.textSize + 'px', color: item.textColor }">{{ item.text }}</view>
          </view>
        </view>
        <view class="cc-grid-item-border-right" v-if="!gutter"></view>
        <view class="cc-grid-item-border-bottom" v-if="!gutter"></view>
      </view>
    </template>
  </view>
</template>

<script>
export default {
  name: 'cc-grid',
  components: {},
  props: {
    // 宫格数据
    list: {
      type: Array,
    },
    // 列数
    column: {
      type: Number,
      default: 4
    },
    // 间距
    gutter: {
      type: [Number, String],
      default: 0
    },
    // 内容是否横向排列
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    clickItem(item, index) {
      this.$emit('clickItem', {
        item,
        index
      })
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    basis() {
      return 100 / this.column + '%'
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .cc-grid-item {
    box-sizing: border-box;
    position: relative;
    &-content {
      padding: 32rpx 16rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
    }
    &-content-row {
      margin-left: 16rpx;
    }
    &-border-right {
      position: absolute;
      height: 100%;
      width: 1px;
      background: #ebedf0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    &-border-bottom {
      position: absolute;
      height: 1px;
      width: 100%;
      background: #ebedf0;
      bottom: 0;
    }
  }
}
</style>
