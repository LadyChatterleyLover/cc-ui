<template>
  <view
    class="cc-tabbar"
    :class="{ 'cc-tabbar-fixed': fixed, 'cc-tabbar-border': border }"
    :style="{
      height: height + 'rpx',
      background: bgColor,
      zIndex: zIndex
    }"
  >
    <view class="cc-tabbar-item" v-for="(item, index) in cloneList" :key="index" @click="clickItem(item, index)">
      <view class="cc-tabbar-item-icon" :class="{ 'cc-tabbar-item-midbtn': item.midButton }">
        <view class="cc-tabbar-item-dot" v-if="item.dot"></view>
        <view class="cc-tabbar-item-count" v-if="Number(item.count) > 0">{{ item.count }}</view>
        <!-- #ifdef H5 -->
         <slot v-if="item.slots" :name="item.slots" :item="item"></slot>
        <!-- #endif -->
        <cc-icon
          v-else
          :type="item.icon"
          :color="router ? (route === item.url ? activeColor : inactiveColor) : currentIndex === index ? activeColor : inactiveColor"
          :size="iconSize"
        ></cc-icon>
      </view>
      <view class="cc-tabbar-item-text" :style="{ color: router ? (route === item.url ? activeColor : inactiveColor) : currentIndex === index ? activeColor : inactiveColor }">
        {{ item.text }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-tabbar',
  components: {},
  props: {
    // 当前激活菜单索引
    value: {
      type:  Number,
      default: 0
    },
    // tabbar配置数组
    list: {
      type: Array,
      required: true
    },
    // 是否固定在底部
    fixed: {
      type: Boolean,
      default: false
    },
    // 是否显示上边框
    border: {
      type: Boolean,
      default: true
    },
    // 开启路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 选中标签的颜色
    activeColor: {
      type: String,
      default: '#0081ff'
    },
    // 未选中标签的颜色
    inactiveColor: {
      type: String,
      default: '#7d7e80'
    },
    // 图标尺寸
    iconSize: {
      type: [String, Number],
      default: 20
    },
    // 导航栏高度
    height: {
      type: [String, Number],
      default: 100
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fff'
    },
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data() {
    return {
      cloneList: this.list,
      currentIndex: this.value,
      route: null
    }
  },
  methods: {
    clickItem(item, index) {
      if (item.url) {
        uni.navigateTo({
          url: item.url
        })
        this.currentIndex = item.url
      }
      this.cloneList.map(i => {
        i.active = false
      })
      item.active = true
      this.currentIndex = index
      this.$emit('change', {
        item,
        index
      })
    }
  },
  mounted() {
    this.cloneList.map((item, index) => {
      if (this.currentIndex === index) {
        this.$set(item, 'active', true)
      } else this.$set(item, 'active', false)
    })
    let routes = getCurrentPages()
    this.route = routes[routes.length - 1].route
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-tabbar {
  display: flex;
  align-items: center;
  width: 100%;
  &-fixed {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  &-border {
    border-top: 1px solid #eee;
  }
  &-item {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 8rpx 0;
    &-midbtn {
      width: 37px;
      height: 37px;
      border-radius: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: #fff;
      top: -16px;
      left: 0;
      z-index: 6;
    }
    &-icon {
      position: relative;
    }
    &-count {
      position: absolute;
      top: 16rpx;
      right: -16rpx;
      box-sizing: border-box;
      min-width: 32rpx;
      padding: 0 6rpx;
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      text-align: center;
      background-color: #ee0a24;
      border: 1px solid #fff;
      border-radius: 32rpx;
      transform: translate(50%, -50%);
      transform-origin: 100%;
    }
    &-dot {
      position: absolute;
      width: 16rpx;
      height: 16rpx;
      background: #ee0a24;
      border-radius: 100%;
      top: 8rpx;
      right: -12rpx;
      transform: translate(50%, -50%);
      transform-origin: 100%;
    }
  }
}
</style>
