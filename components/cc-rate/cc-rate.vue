<template>
  <view class="cc-rate">
    <!-- #ifdef MP-WEIXIN -->
    <view v-for="(item, index) in weappActiveConut" :key="index" :style="{ marginRight: gutter + 'px' }" class="cc-rate-active" @click="clickActive(item, index)">
      <cc-icon :class="{ disabled }" :type="activeIcon" :color="disabled ? '#c8c9cc' : activeColor"></cc-icon>
    </view>
    <view v-for="(item, index) in weappInactiveConut" :key="index" :style="{ marginRight: gutter + 'px' }" class="cc-rate-inactive" @click="clickInActive(item, index)">
      <cc-icon :type="inactiveIcon" :color="disabled ? '#c8c9cc' : inactiveColor"></cc-icon>
    </view>
    <!-- #endif -->
    <!-- #ifndef MP-WEIXIN -->
    <view v-for="(item, index) in activeConut" :style="{ marginRight: gutter + 'px' }" class="cc-rate-active" @click="clickActive(item)">
      <cc-icon :class="{ disabled }" :type="activeIcon" :color="disabled ? '#c8c9cc' : activeColor"></cc-icon>
    </view>
    <view v-for="(item, index) in count - activeConut"  :style="{ marginRight: gutter + 'px' }" class="cc-rate-inactive" @click="clickInActive(item)">
      <cc-icon :type="inactiveIcon" :color="disabled ? '#c8c9cc' : inactiveColor"></cc-icon>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  name: 'cc-rate',
  components: {},
  props: {
    // 当前分值
    value: {
      type: Number,
      default: 1
    },
    // 星星总数
    count: {
      type: Number,
      default: 5
    },
    // 选中时的图标名称
    activeIcon: {
      type: String,
      default: 'star-filled'
    },
    // 未选中时的图标名称
    inactiveIcon: {
      type: String,
      default: 'star'
    },
    // 选中时的颜色
    activeColor: {
      type: String,
      default: '#ffd21e'
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: '#c8c9cc'
    },
    // 星星之间的距离
    gutter: {
      type: [String, Number],
      default: '4'
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读状态
    readonly: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    // 最小选择数
    minCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeConut: 0
    }
  },
  methods: {
    // #ifdef H5
    clickActive(item) {
      if (this.disabled || this.readonly) return
      if (this.activeConut === 1) {
        if (this.activeConut == 1) {
          this.activeConut = 0
        } else {
          this.activeConut = 1
        }
      } else {
        this.activeConut = item
      }
      if (this.minCount && this.activeConut < this.minCount) this.activeConut = this.minCount
    },
    clickInActive(item) {
      if (this.disabled || this.readonly) return
      this.activeConut += item
      if (this.activeConut === this.count) this.activeConut = this.count
    }
    // #endif
    // #ifndef H5
    clickActive(item, index) {
      if (this.disabled || this.readonly) return
      if (this.activeConut === 1) {
        if (this.activeConut == 1) {
          this.activeConut = 0
        } else {
          this.activeConut = 1
        }
      } else {
        this.activeConut = index + 1
      }
      if (this.minCount && this.activeConut < this.minCount) this.activeConut = this.minCount
    },
    clickInActive(item, index) {
      if (this.disabled || this.readonly) return
      this.activeConut += index + 1
      if (this.activeConut === this.count) this.activeConut = this.count
    }
    // #endif
  },
  mounted() {
    this.activeConut = this.value
    if (this.minCount && this.value <= this.minCount) this.activeConut = this.minCount
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    weappActiveConut() {
      let arr = new Array(this.activeConut)
      return arr
    },
    weappInactiveConut() {
      let arr = new Array(this.count - this.activeConut)
      return arr
    }
  },
  watch: {
    activeConut(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-rate {
  display: flex;
  align-items: center;
}
</style>
