<template>
  <view class="cc-dropdown">
    <view class="cc-dropdown-item" v-for="(item, index) in cloneList" :key="index">
      <view
        class="cc-dropdown-item-mask"
        :class="{ 'cc-dropdown-item-mask-active': item.activeItem && item.activeItem.actived }"
        :style="{ display: item.activeItem && item.activeItem.display }"
        @click="clickMask(item)"
      ></view>
      <view class="cc-dropdown-item-header" :class="{ 'cc-dropdown-item-header-active': zIndex }" @click="clickHeader(item)">
        <view class="cc-dropdown-item-header-title" :class="{ disabled }" :style="{ color: item.activeItem && item.activeItem.actived ? activeColor : '#323233' }">
          {{ item.title ? item.title : item.activeItem && item.activeItem.label }}
        </view>
        <view class="cc-dropdown-item-header-icon" :class="{ 'cc-dropdown-item-header-icon-active': item.activeItem && item.activeItem.actived }">
          <cc-icon type="arrowdown" :color="item.activeItem && item.activeItem.actived ? activeColor : '#c0c4cc'" size="14"></cc-icon>
        </view>
      </view>
      <view class="cc-dropdown-item-wrap" :class="{ 'cc-dropdown-item-wrap-active': item.activeItem && item.activeItem.actived }">
        <!-- #ifdef H5 || APP-PLUS -->
         <slot v-if="item.slots && item.activeItem && item.activeItem.actived" :name="item.slots"></slot>
        <!-- #endif -->
        <template v-if="!item.slots">
          <view class="cc-dropdown-item-wrap-content" v-for="(item1, index1) in item.options" :key="index1" :style="{ display: item.activeItem.display }">
            <cc-cell @click="clickItem(item, item1, index, index1)">
              <template #title>
                <view :class="{disabled: item1.disabled}" :style="{ color: item.activeIndex === index1 ? activeColor : '#323233' }">{{ item1.label }}</view>
              </template>
              <template #right-icon>
                <cc-icon v-if="item.activeIndex === index1" type="checkmarkempty" size="16" :color="item.activeIndex === index1 ? activeColor : '#323233'"></cc-icon>
              </template>
            </cc-cell>
          </view>
        </template>
      </view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-dropdown',
  components: {},
  props: {
    list: {
      type: Array,
      required: true
    },
    // 文字激活颜色
    activeColor: {
      type: String,
      default: '#ee0a24'
    },
    // 是否在点击遮罩层后关闭菜单
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 拷贝数据
      cloneList: [],
      // 选择的值
      checked: [],
      // 点击加上层级
      zIndex: false
    }
  },
  methods: {
    // 初始化数据
    init() {
      this.cloneList = cloneDeep(this.list)
      this.cloneList.map(item => {
        if (item.options && item.options.length) {
          item.options.map((item1, index1) => {
            if (item1.value === item.value) {
              this.$set(item, 'activeIndex', index1)
              this.$set(item, 'activeItem', item1)
              this.$set(item.activeItem, 'actived', false)
              this.$set(item.activeItem, 'display', 'none')
              this.checked.push(item1.value)
            }
          })
        } else {
          let activeItem = {
            value: '',
            label: '',
            disabled: false,
            actived: false,
            display: 'none'
          }
          this.$set(item, 'activeItem', activeItem)
        }
      })
    },
    // 点击头部
    clickHeader(item) {
      if (this.disabled) return
      item.activeItem.actived = !item.activeItem.actived
      item.activeItem.display === 'none'
        ? (item.activeItem.display = 'block')
        : setTimeout(() => {
            item.activeItem.display = 'none'
          }, 80)
      this.cloneList.map(i => {
        if (item !== i) {
          i.activeItem.actived = false
          i.activeItem.display = 'none'
        }
      })
      if (item.activeItem.actived) {
        this.$emit('open')
        this.zIndex = true
      } else {
        this.$emit('close')
        this.zIndex = false
      }
    },
    // 点击菜单
    clickItem(item, item1, index, index1) {
      if (item1.disabled) return
      item.activeItem = item1
      item.activeItem.actived = false
      item.activeIndex = index1
      setTimeout(() => {
          this.$set(item.activeItem, 'display', 'none')
        }, 80)
      if (item.value !== item1.value) {
        item.value = item1.value
        this.$set(this.checked, index, item1.value)
        this.$emit('change', this.checked)
      }
      this.$emit('close')
      this.zIndex = false
    },
    // 点击遮罩层
    clickMask(item) {
      if (this.closeOnClickOverlay) this.clickHeader(item)
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
    checked: {
      handler(val) {
        this.$emit('change', val)
      },
      deep: true, 
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
.cc-dropdown {
  display: flex;
  .cc-dropdown-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    position: relative;
    &-mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      transition: all 0.3s;
      opacity: 0;
      z-index: 100;
      &-active {
        opacity: 1;
      }
    }
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: #fff;
      box-shadow: 0 2px 12px #fff;
      height: 96rpx;
      &-active {
        z-index: 999;
      }
      &-title {
        height: 100%;
        display: flex;
        align-items: center;
      }
      &-icon {
        transition: all 0.3s;
        margin-left: 12rpx;
        &-active {
          transform: rotate(180deg);
        }
      }
    }
    &-wrap {
      width: 100%;
      position: absolute;
      top: 0;
      transition: all 0.3s;
      z-index: 999;
      background: #fff;
      &-active {
        top: 96rpx;
      }
    }
  }
}
.disabled {
  color: #969799 !important;
  pointer-events: none;
}
</style>
