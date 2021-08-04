<template>
  <view class="cc-checkbox" :class="{ 'cc-checkbox-vertical': vertical }">
    <view class="cc-checkbox-item" v-for="(item, index) in cloneList" :key="index">
      <view
        @click="clickItem(item, index)"
        v-if="!item.icon"
        class="cc-checkbox-item-icon"
        :class="{ 'cc-checkbox-item-icon-round': item.round, disabled: item.disabled }"
        :style="{
          background: item.checked ? item.checkedColor : item.incheckedColor ? item.incheckedColor : '#fff',
          border: item.checked ? `1px solid ${item.checkedColor}` : `1px solid ${item.incheckedColor ? item.incheckedColor : '#c8c9cc'}`,
          width: item.size + 'px',
          height: item.size + 'px'
        }"
      >
        <cc-icon v-if="item.checked" :type="item.icon ? item.icon : 'checkmarkempty'" :color="item.disabled ? '#c8c9cc' : '#fff'" :size="item.size ? item.size : '14'"></cc-icon>
      </view>
      <view v-else @click="clickText(item, index)">
        <cc-icon
          @click="clickItem(item, index)"
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : item.checked ? (item.checkedColor ? item.checkedColor : '#0081ff') : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </view>
      <view @click="clickItem(item, index)" class="cc-checkbox-item-text" :class="{ 'cc-checkbox-item-text-disabled': item.labelDisabled }">{{ item.label }}</view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-checkbox-group',
  components: {},
  props: {
    // 单选框数据数组
    list: {
      type: Array,
      required: true
    },
    // 初始选中值
    checked: {
      type: Array,
      default: () => []
    },
    // 横向排列
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneList: [],
      active: []
    }
  },
  methods: {
    // 初始化数据
    init() {
      // 初始化数据
      this.cloneList.map(item => {
        this.$set(item, 'checked', false)
        if (!item.checkedColor) {
          this.$set(item, 'checkedColor', '#0081ff')
        }
        if (!item.size) {
          this.$set(item, 'size', '20')
        }
        if (item.round === undefined) {
          this.$set(item, 'round', true)
        }
        this.checked.map(val => {
          if (item.value === val) item.checked = true
        })
      })
    },
    clickItem(item, index) {
      if (item.disabled) return
      item.checked = !item.checked
      if (item.checked) {
        this.active.push(item.value)
      } else this.active = this.active.filter(i => i !== item.value)
      this.$emit('change', this.active)
    },
    clickText(item, index) {
      if (item.labelDisabled) return
      this.$emit('update:checked', item.value)
      this.$emit('change', item.value)
    }
  },
  mounted() {
    this.cloneList = cloneDeep(this.list)
    this.init()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    cloneList(val) {
      val.map(item => {
        if (item.checked) {
          this.active.push(item.value)
        }
      })
    },
    active(val) {
      this.$emit('update:checked', val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-checkbox {
  &-vertical {
    display: flex;
    align-items: center;
    .cc-checkbox-item {
      margin-bottom: 0;
      height: 100%;
      margin-left: 24rpx;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 12rpx;
    &:last-child {
      margin-bottom: 0;
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      &-round {
        border-radius: 100%;
      }
    }
    &-text {
      margin-left: 20rpx;
      &-disabled {
        pointer-events: none;
      }
    }
  }
}
.disabled {
  background: #ebedf0 !important;
  border-color: #c8c9cc !important;
  pointer-events: none;
}
</style>
