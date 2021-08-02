<template>
  <view class="cc-tabs cc-tabs-scroll-view">
    <scroll-view scroll-x :scroll-left="scrollLeft" scroll-with-animation>
      <view class="cc-tabs-wrap">
        <view 
        @click="clickItem(item, index)" 
        class="cc-tabs-content" 
        v-for="(item, index) in list" :key="index">
          <view class="cc-tabs-content-title" 
          :style="{ color: active === index ? activeColor : inactiveColor}">{{ item.title }}</view>
          <view v-if="active === index" class="cc-tabs-content-line" :style="{width: lineWidth + 'rpx', height: lineHeight + 'rpx', background: lineColor}"></view>
        </view>
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
      scrollLeft: 0
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
    }
  },
  mounted() {
    this.init()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    active(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style  lang="scss">
scroll-view ::v-deep ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
.cc-tabs {
  position: relative;

  &-wrap {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    &-title {
      padding: 0px 20rpx;
      font-size: 12px;
      margin-bottom: 20rpx;
    }
    &-line {
      position: absolute;
      bottom: 0;
    }
  }
}

</style>
