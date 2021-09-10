<template>
  <view class="cc-scroll-bar">
    <view class="cc-scroll-bar-left" :style="{ width: leftWidth + 'rpx' }">
      <scroll-view  class="cc-scroll-bar-left-scroll" scroll-y scroll-with-animation>
        <view
          v-for="(item, index) in cloneList"
          :key="index"
          class="cc-scroll-bar-left-scroll-item"
          :class="{ 'cc-scroll-bar-left-scroll-item-active': activeIndex === index }"
          :style="{ height: leftHeight + 'rpx', background: leftBgColor }"
          @click="clickLeft(item, index)"
        >
          <view
            class="cc-scroll-bar-left-scroll-item-line"
            :style="{ width: lineWidth + 'rpx', height: lineHeight + 'rpx', background: lineBgColor }"
            v-if="activeIndex === index"
          ></view>
          <view class="cc-scroll-bar-left-scroll-item-name">{{ item.name }}</view>
        </view>
      </scroll-view>
    </view>

    <view class="cc-scroll-bar-right" :style="{ left: leftWidth + 'rpx', width: `calc(100% - ${leftWidth}rpx)`}">
      <scroll-view :scroll-into-view="scrollTop" scroll-with-animation scroll-y  class="cc-scroll-bar-right-scroll" @scroll='scroll'>
        <view
          v-for="(item, index) in cloneList"
          :key="index"
          class="cc-scroll-bar-right-scroll-wrap"
          :id='item.id'
          :style="{ height: 74 * Math.ceil(item.goods.length / 3) + 32 + 'px' }"
        >
          <view class="cc-scroll-bar-right-scroll-name" :key="index">{{ item.name }}</view>
          <view class="cc-scroll-bar-right-scroll-content">
            <view class="cc-scroll-bar-right-scroll-content-item" v-for="(item1, index1) in item.goods" :key="index1">
              <view class="cc-scroll-bar-right-scroll-content-item-img"><image :src="item1.img" style="width: 100%;height: 100%;"></image></view>
              <view class="cc-scroll-bar-right-scroll-content-item-name">{{ item1.name }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-scroll-bar',
  components: {},
  props: {
    // 导航数据
    list: {
      type: Array,
      default: () => []
    },
    // 左侧宽度
    leftWidth: {
      type: [Number, String],
      default: 120
    },
    // 左侧宽度
    leftHeight: {
      type: [Number, String],
      default: 80
    },
    // 左侧背景颜色
    leftBgColor: {
      type: String,
      default: '#f6f6f6'
    },
    // 左侧滑块宽度
    lineWidth: {
      type: [Number, String],
      default: 8
    },
    // 左侧滑块高度
    lineHeight: {
      type: [Number, String],
      default: 24
    },
    // 左侧背景颜色
    lineBgColor: {
      type: String,
      default: '#0081ff'
    }
  },
  data() {
    return {
      activeIndex: 0,
      scrollHeight: 0,
      scrollTop: '',
      cloneList: cloneDeep(this.list)
    }
  },
  methods: {
    clickLeft(item, index) {
      this.activeIndex = index
      this.scrollTop = 'cc-scroll-bar-right-scroll-wrap-' + index
    },
    scroll() {
      let offset = 0
      // #ifdef H5
      if (document.getElementsByClassName('uni-page-head')[0]) {
        offset = 44
      }
      // #endif
      let query = uni.createSelectorQuery().in(this)
      this.cloneList.map((item, index) => {
        query.select(`#${item.id}`).boundingClientRect(({
          top,
          height
        }) => {
          if (top + offset < 0 && Math.abs(top + offset) < height) {
            this.activeIndex = index
          }
        }).exec()
      })
    }
  },
  mounted() {
    this.cloneList.map((item, index) => {
      this.$set(item, 'id', `cc-scroll-bar-right-scroll-wrap-${index}`)
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
  }
}
</script>

<style scoped lang="scss">
.cc-scroll-bar {
  display: flex;
  background: #f6f6f6;
  &-left {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    &-scroll {
      height: 100%;
      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 12px;
        color: #444;
        &-line {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &-active {
          font-weight: 500;
          color: #000;
          background: #fff !important;
        }
      }
    }
  }
  &-right {
    position: relative;
    padding: 12rpx;
    &-scroll {
      height: 100vh;
      &-wrap {
        margin-bottom: 14rpx;
      }
      &-name {
        font-size: 14px;
        font-weight: 500;
        background: #fff;
        padding: 12rpx;
      }
      &-content {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background: #fff;
        &-item {
          width: 33.3333%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          margin-top: 14rpx;
          &-img {
            width: 100rpx;
            height: 100rpx;
          }
        }
      }
    }
  }
}
</style>
