<template>
  <view>
    <view class="cc-index-anchor-item" :id="`cc-index-anchor-item-${index}`" @click='clickItem(index)'>{{ index }}</view>
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
    }
  },
  data() {
    return {}
  },
  methods: {
    clickItem(item) {
      this.$emit('click', item)
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
.cc-index-anchor-item {
  padding: 0 16rpx 0 32rpx;
  font-weight: 500;
  font-size: 12px;
  line-height: 36rpx;
  &:hover {
    color: #primary;
  }
}
</style>
