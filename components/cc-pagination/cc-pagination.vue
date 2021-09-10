<template>
  <view class="cc-pagination">
    <view class="cc-pagination-pre" :class="{ 'cc-pagination-disabled': activeIndex === 1 }" @click="pre">
      <slot name="pre" v-if="$slots.pre"></slot>
      <view v-else>{{ prevText }}</view>
    </view>
    <view class="cc-pagination-content" v-if="!simple">
      <view
        class="cc-pagination-content-item"
        :class="{ 'cc-pagination-content-item-active': activeIndex === item.value }"
        v-for="(item, index) in showCount"
        :key="index"
        @click="clickItem(item)"
      >
        <slot name="page" v-if="$slots.page" :current="activeIndex" :text="item" :active="activeIndex === item.value"></slot>
        <view v-else>{{ item.text }}</view>
      </view>
    </view>
    <view v-else class="cc-pagination-desc">
      <slot name="page" v-if="$slots.page" :current="activeIndex" :text="item" :active="activeIndex === item.value"></slot>
      <view v-else>{{ activeIndex }} / {{ total }}</view>
    </view>
    <view class="cc-pagination-next" :class="{ 'cc-pagination-disabled': activeIndex === total }" @click="next">
      <slot name="next" v-if="$slots.next"></slot>
      <view v-else>{{ nextText }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-pagination',
  components: {},
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1
    },
    // 是否是简单模式
    simple: {
      type: Boolean,
      default: false
    },
    // 上一页按钮文字
    prevText: {
      type: String,
      default: '上一页'
    },
    // 下一页按钮文字
    nextText: {
      type: String,
      default: '下一页'
    },
    // 总数量
    total: {
      type: [Number, String],
      default: 0
    },
    // 每页记录数
    pageSize: {
      type: [Number, String],
      default: 10
    },
    // 显示的页码个数
    showPageSize: {
      type: [Number, String],
      default: 5
    },
    // 是否显示省略号
    forceEllipses: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: this.current
    }
  },
  methods: {
    pre() {
      if (this.activeIndex === 1) return
      this.activeIndex--
    },
    next() {
      if (this.activeIndex === this.total) return
      this.activeIndex++
    },
    clickItem(item) {
      this.activeIndex = item.value
      this.$emit('change', this.activeIndex)
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    showCount() {
      let arr = []
      for (let i = 1; i <= Number(this.total); i++) {
        arr.push({
          value: i,
          text: i
        })
      }
      if (!this.simple) {
        let total = Number(this.total)
        let showPageSize = Number(this.showPageSize)
        let half = Math.ceil(showPageSize / 2)
        let diff = showPageSize - half 
        
        if (this.activeIndex <= half) return arr.slice(0, showPageSize)
        else if (this.activeIndex > total - diff) {
          return arr.slice(total - showPageSize, total)
        }
        else {
          if (!this.forceEllipses) {
            return arr.slice(this.activeIndex - half, this.activeIndex + diff)
          } else {
            let arr1 = arr.slice(this.activeIndex - half, this.activeIndex + diff)
            arr1[0].text = '...'
            arr1[arr1.length - 1].text = '...'
            return arr1
          }
        }
      }
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-pagination {
  display: flex;
  align-items: center;
  &-desc {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #646566;
  }
  &-pre,
  &-next {
    min-width: 36px;
    height: 40px;
    user-select: none;
    flex: 1;
    background: #fff;
    color: #0081ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
  }
  &-content {
    display: flex;
    align-items: center;
    &-item {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0081ff;
      min-width: 36px;
      height: 40px;
      user-select: none;
      flex: 1;
      background: #fff;
      &-active {
        background: #0081ff;
        color: #fff;
      }
    }
  }
  &-disabled {
    color: #646566;
    background-color: #f7f8fa;
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
