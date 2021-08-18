<template>
  <view class="cc-tabs cc-tabs-scroll-view">
    <scroll-view scroll-x :scroll-left="scrollLeft" scroll-with-animation>
      <view class="cc-tabs-wrap">
        <view @click="clickItem(item, index)" class="cc-tabs-content" v-for="(item, index) in list" :key="index">
          <view class="cc-tabs-content-title" :style="{ color: active === index ? activeColor : inactiveColor }">
              <view>{{ item.title }}</view>
              <view class="cc-tabs-content-title-badge">{{item.badge}}</view>
          </view>
        </view>
        <view
          class="cc-tabs-content-line"
          :style="{ width: lineWidth + 'rpx', height: lineHeight + 'rpx', background: lineColor, transform: `translateX(${translateX}px)` }"
        ></view>
      </view>
    </scroll-view>
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'cc-tabs',
  components: {},
  props: {
    list: {
      type: Array,
      required: true
    },
    // 当前激活项
    current: {
      type: [String, Number],
      default: ''
    },
    // 底部滑块宽度
    lineWidth: {
      type: [Number, String],
      default: 40
    },
    // 底部滑块高度
    lineHeight: {
      type: [Number, String],
      default: 6
    },
    // 底部滑块颜色
    lineColor: {
      type: String,
      default: '#2979ff'
    },
    // 激活时的文字颜色
    activeColor: {
      type: String,
      default: '#2979ff'
    },
    // 标签栏文字未激活颜色
    inactiveColor: {
      type: String,
      default: '#303133'
    }
  },
  data() {
    return {
      active: 0,
      scrollLeft: 0,
      translateX: 0,
      titleWidth: 0,
      titleLeft: 0,
      lineDomWidth: 0
    }
  },
  methods: {
    init() {
      if (!this.current) this.active = 0
      else {
        let index = this.list.findIndex((item, index) => {
          if (typeof this.current === 'number') return this.current === index
          else return item.title === this.current
        })
        this.active = index
      }
    },
    clickItem(item, index) {
      this.active = index
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.cc-tabs-content')
        .boundingClientRect()
        .exec(res => {
          let width = res[0][this.active].width
          let offsetLeft = res[0][this.active].left
          let left = offsetLeft - (width - this.lineWidth) / 2
          this.scrollLeft = left < 0 ? 0 : left
        })
      this.initLine()
    },
    initLine() {
      console.log(111)
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll('.cc-tabs-content-title')
        .boundingClientRect(res => {
          this.titleLeft = 0
          for (let i = 0; i < this.active; i++) {
            this.titleLeft += res[i].width
          }
          this.titleWidth = res[this.active].width
          uni
            .createSelectorQuery()
            .in(this)
            .select('.cc-tabs-content-line')
            .boundingClientRect(r => {
              this.lineDomWidth = r.width
              this.translateX = this.titleLeft + this.titleWidth / 2 - this.lineDomWidth / 2
            })
            .exec()
        })
        .exec()
    }
  },
  mounted() {
    this.init()
    this.initLine()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    active(val) {
      this.initLine()
      this.$emit('change', val)
    },
    current(val) {
      this.active = val
    }
  }
}
</script>

<style lang="scss">
scroll-view ::v-deep ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
.cc-tabs {
  &-wrap {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1 0 auto;
    position: relative;
    &-title {
      padding: 0px 20rpx;
      font-size: 12px;
      margin-bottom: 20rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      min-height: 50rpx;
      &-badge {
        position: absolute;
        padding: 0 4px;
        border-radius: 100%;
        z-index: 99;
        font-size: 12px;
        background: #ee0a24;
        color: #fff;
        top: 0rpx;
        right: 60rpx;
      }
    }
    &-line {
      position: absolute;
      bottom: 10rpx;
      transition: all 0.6s;
    }
  }
}
</style>
