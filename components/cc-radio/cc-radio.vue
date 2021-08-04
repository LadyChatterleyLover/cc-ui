<template>
  <view class="cc-radio" :class="{ 'cc-radio-vertical': vertical }">
    <view class="cc-radio-item" v-for="(item, index) in radioList" :key="index">
      <view
        @click="clickItem(item, index)"
        v-if="!item.icon"
        class="cc-radio-item-icon"
        :class="{ 'cc-radio-item-icon-round': item.round, disabled: item.disabled }"
        :style="{
          background: active === index ? item.checkedColor : item.incheckedColor ? item.incheckedColor : '#fff',
          border: active === index ? `1px solid ${item.checkedColor}` : `1px solid ${item.incheckedColor ? item.incheckedColor : '#c8c9cc'}`,
          width: item.size + 'px',
          height: item.size + 'px'
        }"
      >
        <cc-icon
          v-if="active === index"
          :type="item.icon ? item.icon : 'checkmarkempty'"
          :color="item.disabled ? '#c8c9cc' : '#fff'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </view>
      <view v-else @click="clickText(item, index)">
        <cc-icon
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : active === index ? (item.checkedColor ? item.checkedColor : '#0081ff') : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </view>
      <view @click="clickItem(item, index)" class="cc-radio-item-text" :class="{ 'cc-radio-item-text-disabled': item.labelDisabled }">{{ item.label }}</view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-radio',
  components: {},
  props: {
    // 单选框数据数组
    list: {
      type: Array,
      required: true
    },
    // 初始选中值
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 横向排列
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: 0,
      radioList: cloneDeep(this.list)
    }
  },
  methods: {
    init() {
      this.radioList.map(item => {
        if (!item.checkedColor) {
          this.$set(item, 'checkedColor', '#0081ff')
        }
        if (!item.size) {
          this.$set(item, 'size', '20')
        }
        if (item.round === undefined) {
          this.$set(item, 'round', true)
        }
        this.active = this.list.findIndex(i => i.value === this.value)
      })
    },
    clickItem(item, index) {
      if (item.disabled) return
      this.active = index
      this.$emit('update:value', item.value)
      this.$emit('change', item.value)
    },
    clickText(item, index) {
      if (item.labelDisabled) return
      this.active = index
      this.$emit('update:value', item.value)
      this.$emit('change', item.value)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    value(val) {
      this.active = this.list.findIndex(item => item.value === val)
    }
  }
}
</script>

<style scoped lang="scss">
.cc-radio {
  &-vertical {
    display: flex;
    align-items: center;
    .cc-radio-item {
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
