<template>
  <view class="cc-address-list">
    <view class="cc-address-list-item" @click="clickItem(item, index)" v-for="(item, index) in addressList" :key="item.id">
      <view class="cc-address-list-item-content">
        <view class="cc-address-list-item-content-radio" v-if="item.radioList && item.radioList.length">
          <cc-radio :value.sync="currentValue" :list="item.radioList"></cc-radio>
        </view>
        <view class="cc-address-list-item-content-info">
          <view class="cc-address-list-item-content-info-top">
            <view>{{ item.name }}</view>
            <view style="margin-left: 16rpx;">{{ item.tel }}</view>
            <view v-if="currentIndex === index" style="margin-left: 16rpx;">
              <cc-tag round type="error">{{ defaultTagText }}</cc-tag>
            </view>
          </view>
          <view class="cc-address-list-item-content-info-address">{{ item.address }}</view>
        </view>
        <view class="cc-address-list-item-edit" @click.stop="edit(item, index)"><cc-icon type="paperclip" color="#969799"></cc-icon></view>
      </view>
    </view>

    <view class="cc-address-list-disabled-text">{{ disabledText }}</view>

    <view class="cc-address-list-item cc-address-list-item-disabled" @click="clickDisabledItem(item, index)" v-for="(item, index) in disabledList" :key="item.id">
      <view class="cc-address-list-item-content">
        <view class="cc-address-list-item-content-info">
          <view class="cc-address-list-item-content-info-top">
            <view>{{ item.name }}</view>
            <view style="margin-left: 16rpx;">{{ item.tel }}</view>
          </view>
          <view class="cc-address-list-item-content-info-address">{{ item.address }}</view>
        </view>
        <view class="cc-address-list-item-edit" @click.stop="editDisabled(item, index)"><cc-icon type="paperclip" color="#969799"></cc-icon></view>
      </view>
    </view>

    <view class="cc-address-list-btn" @click="add">
      <cc-button :color='addButtonColor' round block>{{ addButtonText }}</cc-button>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  components: {},
  props: {
    // 当前选中地址
    value: {
      type: [Number, String],
      default: ''
    },
    // 地址列表
    list: {
      type: Array,
      default: () => []
    },
    // 不可配送地址列表
    disabledList: {
      type: Array,
      default: () => []
    },
    // 不可配送提示文案
    disabledText: {
      type: String,
      default: ''
    },
    // 是否允许切换地址
    switchable: {
      type: Boolean,
      default: true
    },
    // 底部按钮文字
    addButtonText: {
      type: String,
      default: '新增地址'
    },
    addButtonColor: {
      type: String,
      default: '#e54d42'
    },
    // 默认地址标签文字
    defaultTagText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      addressList: cloneDeep(this.list),
      currentIndex: -1,
      currentValue: ''
    }
  },
  methods: {
    clickItem(item, index) {
      this.$emit('click', { item, index })
      this.currentValue = item.id
      if (this.currentValue === item.id) {
        this.$emit('select', {item, index})
      }
    },
    edit(item, index) {
      this.$emit('edit', { item, index })
    },
    add() {
      this.$emit('add')
    },
    editDisabled(item, index) {
      this.$emit('edit-disabled', {item, index})
    },
    clickDisabledItem(item, index) {
      this.$emit('click', { item, index })
      this.$emit('select-disabled', {item, index})
    }
  },
  mounted() {
    this.addressList.map((item, index) => {
      this.$set(item, 'radioList', [{ value: item.id, checkedColor: '#e54d42' }])
      if (this.value === item.id) {
        this.currentIndex = index
        this.currentValue = item.id
      }
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-address-list {
  &-item {
    position: relative;
    padding: 24rpx;
    background-color: #fff;
    border-radius: 16rpx;
    margin-bottom: 24rpx;
    border-radius: 16rpx;
    &:last-child {
      margin-bottom: 0;
    }
    &-disabled {
      opacity: 0.4;
    }
    &-edit {
      position: absolute;
      right: 60rpx;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 80rpx;
      &-info {
        flex: 1;
        &-top {
          display: flex;
          align-items: center;
        }
        &-address {
          font-size: 12px;
          color: #323233;
          margin-top: 20rpx;
        }
      }
    }
  }
  &-disabled-text {
    padding: 40rpx 0 32rpx;
    color: #969799;
    font-size: 14px;
  }
  &-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx 32rpx;
    background: #fff;
  }
}
</style>
