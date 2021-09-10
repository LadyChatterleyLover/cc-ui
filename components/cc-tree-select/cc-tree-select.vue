<template>
  <view class="cc-tree-select">
    <template v-if="isMultiple">
      <view class="cc-tree-select-index">
        <view
          @click="clickNav(item, index)"
          v-for="(item, index) in list"
          :key="index"
          class="cc-tree-select-index-container"
          :class="{ 'cc-tree-select-index-active': currentIndex === index, 'cc-tree-select-disabled': item.disabled }"
        >
          <cc-badge v-if="item.dot || item.badge" :dot="item.dot" :content="item.badge">{{ item.text }}</cc-badge>
          <text v-else>{{ item.text }}</text>
        </view>
      </view>
      <view class="cc-tree-select-content" v-if="currentItem && currentItem.children">
        <view class="cc-tree-select-content-item" v-for="(item, index) in currentItem.children" :key="index" @click="clickItem(item, index)">
          <view class="cc-tree-select-content-item-text" :class="{ 'cc-tree-select-disabled': item.disabled }" :style="{ color: item.checked ? activeColor : '#000' }">
            {{ item.text }}
          </view>
          <view v-if="item.checked"><cc-icon :type="selectedIcon" :color="activeColor" size="16"></cc-icon></view>
        </view>
      </view>
    </template>
    <template v-else>
      <view class="cc-tree-select-index">
        <view
          @click="clickNav(item, index)"
          v-for="(item, index) in list"
          :key="index"
          class="cc-tree-select-index-container"
          :class="{ 'cc-tree-select-index-active': currentIndex === index, 'cc-tree-select-disabled': item.disabled }"
        >
          <cc-badge v-if="item.dot || item.badge" :dot="item.dot" :content="item.badge">{{ item.text }}</cc-badge>
          <text v-else>{{ item.text }}</text>
        </view>
      </view>
      <view class="cc-tree-select-content" v-if="currentItem && currentItem.children">
        <view class="cc-tree-select-content-item" v-for="(item, index) in currentItem.children" :key="index" @click="clickItem(item, index)">
          <view
            class="cc-tree-select-content-item-text"
            :class="{ 'cc-tree-select-disabled': item.disabled }"
            :style="{ color: currentItem.currentChildIndex === index ? activeColor : '#000' }"
          >
            {{ item.text }}
          </view>
          <view v-if="currentItem.currentChildIndex === index"><cc-icon :type="selectedIcon" :color="activeColor" size="16"></cc-icon></view>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-tree-select',
  components: {},
  props: {
    // 分类数据
    items: {
      type: Array,
      default: () => []
    },
    // 左侧选中项的索引
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    // 右侧选中项的 id，支持传入数组
    activeId: {
      type: [Number, String, Array],
      default: 0
    },
    // 选中时的图标
    selectedIcon: {
      type: String,
      default: 'checkmarkempty'
    },
    // 激活时颜色
    activeColor: {
      type: String,
      default: '#ee0a24'
    }
  },
  data() {
    return {
      currentIndex: null,
      currentItem: null,
      list: cloneDeep(this.items)
    }
  },
  methods: {
    clickNav(item, index) {
      if (item.disabled) return
      if (this.isMultiple) {
        this.currentIndex = index
        this.currentItem = this.list[this.currentIndex]
        this.list.map(item => {
          if (this.activeId.includes(item.id)) {
            item.checked = true
          } else {
            item.checked = false
          }
        })
      } else {
        this.currentIndex = index
        this.currentItem = this.list[this.currentIndex]
        this.currentItem.index = index
      }
      this.$emit('clickNav', this.list)
    },
    clickItem(item, index) {
      if (item.disabled) return
      if (this.isMultiple) {
        this.list.map(item1 => {
          item1.children &&
            item1.children &&
            item1.children.map(item2 => {
              if (item1.index !== this.currentIndex) {
                item2.checked = false
              }
            })
        })
        item.checked = !item.checked
        this.$emit('clickItem', this.list)
      } else {
        this.list.map(item => {
          if (item.index !== this.currentIndex) {
            this.$set(item, 'currentChildIndex', -1)
          } else {
            this.$set(item, 'currentChildIndex', index)
          }
        })
        this.$emit('clickItem', item)
      }
    }
  },
  mounted() {
    if (this.isMultiple) {
      this.list.map((item, index) => {
        this.$set(item, 'index', index)
        if (item.children && item.children.length) {
          item.children.map(item1 => {
            this.$set(item1, 'checked', false)
            this.$set(item1, 'index', index)
            if (this.activeId.includes(item1.id)) this.$set(item1, 'checked', true)
          })
        }
      })
      this.currentIndex = this.mainActiveIndex
      this.currentItem = this.list[this.mainActiveIndex]
    } else {
      this.list.map((item, index) => {
        this.$set(item, 'index', index)
      })
      this.currentIndex = this.mainActiveIndex
      this.currentItem = this.list[this.mainActiveIndex]
      this.$set(this.currentItem, 'currentChildIndex', this.activeId)
    }
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    // 是否多选
    isMultiple() {
      return Array.isArray(this.activeId)
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-tree-select {
  width: 100%;
  display: flex;
  &-disabled {
    color: #c8c9cc !important;
    cursor: not-allowed;
  }
  &-index {
    flex: 1;
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 96rpx;
      background-color: #f7f8fa;
    }
    &-active {
      background: #fff;
    }
  }
  &-content {
    flex: 2;
    background: #fff;
    &-item {
      height: 96rpx;
      padding: 0 64rpx 0 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
