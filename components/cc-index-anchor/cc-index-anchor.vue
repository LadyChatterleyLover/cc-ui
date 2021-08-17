<template>
  <view class="cc-index-anchor">
    <view class="cc-index-anchor-item"  :id="`cc-index-anchor-item-${index}`" @click="clickItem(index)">
      {{ index }}
    </view>
    <view class="cc-index-anchor-tip" @click="showTip" v-if="show">{{ currentItem }}</view>
  </view>
</template>

<script>
export default {
  name: 'cc-index-anchor',
  components: {},
  props: {
    index: {
      type: [Number, String],
      default: ''
    },
    currentIndex: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      currentItem: '',
    }
  },
  methods: {
    clickItem(item) {
      this.currentItem = item
      this.$emit('click', item)
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 200)
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-index-anchor {
  &-item {
    padding: 0 16rpx 0 32rpx;
    font-weight: 500;
    font-size: 12px;
    line-height: 40rpx;
    &:hover {
      color: #primary;
    }
  }
  &-tip {
    position: absolute;
    background: #666;
    width: 80rpx;
    height: 80rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8rpx;
    left: -100rpx;
    top: 40%;
    color: #fff;
  }
  &-active {
    color: #0081ff;
  }
}
</style>
