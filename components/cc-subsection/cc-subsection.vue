<template>
  <view class="cc-subsection" :style="{ height: height + 'rpx', background: bgColor }">
    <view
      class="cc-subsection-item"
      :id="`cc-subsection-item-${index}`"
      :style="{ color: currentIndex === index ? activeColor : inactiveColor, fontSize: fontSize + 'px' }"
      v-for="(item, index) in list"
      :key="index"
      @click="clickItem(item, index)"
    >
      <view style="z-index: 1;" :style="{ fontWeight: bold && currentIndex === index ? 700 : 400 }">{{ item.name }}</view>
    </view>
    <view class="cc-subsection-mask" :style="{ width: maskWidth + 'px', height: maskHeight + 'px', left: maskLeft + 'px' }"></view>
  </view>
</template>

<script>
export default {
  name: 'cc-subsection',
  components: {},
  props: {
    // 当前激活项
    value: {
      type: [Number, String],
      default: 0
    },
    // 选项数组
    list: {
      type: Array,
      required: true
    },
    // 激活时颜色
    activeColor: {
      type: String,
      default: '#0081ff'
    },
    // 未激活时颜色
    inactiveColor: {
      type: String,
      default: '#606266'
    },
    // 激活选项的字体是否加粗
    bold: {
      type: Boolean,
      default: true
    },
    // 高度
    height: {
      type: [Number, String],
      default: 50
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#eeeeef'
    },
    // 字体大小
    fontSize: {
      type: [Number, String],
      default: 14
    }
  },
  data() {
    return {
      currentIndex: this.value,
      // 遮罩层位置
      maskWidth: 0,
      maskHeight: 0,
      maskLeft: 0
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#cc-subsection-item-${this.currentIndex}`)
          .boundingClientRect()
          .exec(res => {
            this.maskWidth = res[0].width
            this.maskHeight = res[0].height
            this.maskLeft =  res[0].width * this.currentIndex
          })
      })
    },
    clickItem(item, index) {
      this.currentIndex = index
      this.init()
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
    currentIndex(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-subsection {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  &-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rpx;
  }
  &-mask {
    border: 16rpx;
    background: #fff;
    position: absolute;
    z-index: 0;
    transition: all 0.35s ease 0s;
  }
}
</style>
