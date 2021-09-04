<template>
  <view class="cc-checkbox">
    <view class="cc-checkbox-item">
      <view
        @click="clickItem(item)"
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
      <view v-else @click="clickText(item)">
        <cc-icon
           @click="clickItem(item)"
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : item.checked ? (item.checkedColor ? item.checkedColor : '#0081ff') : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </view>
      <view @click="clickItem(item)" class="cc-checkbox-item-text" :class="{ 'cc-checkbox-item-text-disabled': item.labelDisabled }">{{ item.label }}</view>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-checkbox',
  components: {},
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      item: {}
    }
  },
  methods: {
    clickItem (item)  {
      if (item.disabled) return
      item.checked = !item.checked
      this.$emit('change', item.checked)
      this.$emit('update:checked', item.checked)
    },
    clickText (item) {
      if (item.labelDisabled) return
      this.$emit('update:checked', item.checked)
      this.$emit('change', item.checked)
    }
  },
  mounted() {
    this.item = cloneDeep(this.option)
    this.$set(this.item, 'checked', this.checked)
    if (!this.item.checkedColor) {
      this.$set(this.item, 'checkedColor', '#0081ff')
    }
    if (!this.item.size) {
      this.$set(this.item, 'size', '20')
    }
    if (this.item.round === undefined) {
      this.$set(this.item, 'round', true)
    }
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    checked(val) {
      this.item.checked = val
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
