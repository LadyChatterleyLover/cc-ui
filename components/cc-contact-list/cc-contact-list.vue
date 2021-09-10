<template>
  <view class="cc-contact-list">
    <view class="cc-contact-list-item" :class="{'cc-contact-list-item-disabled': item.disabled}" v-for="(item, index) in contactList" :key="item.id" @click="clickItem(item, index)">
      <view class="cc-contact-list-item-wrap">
        <view class="cc-contact-list-item-edit" @click.stop="edit(item, index)"><cc-icon type="paperclip" color="#969799"></cc-icon></view>
        <view class="cc-contact-list-item-wrap-name">{{ item.name }},</view>
        <view class="cc-contact-list-item-wrap-tel">{{ item.tel }}</view>
        <view v-if="item.isDefault">
          <cc-tag type="error" round>{{ defaultTagText }}</cc-tag>
        </view>
      </view>
      <view class="cc-contact-list-check" v-if="item.radioList">
        <cc-radio  :value.sync="currentValue" :list="item.radioList"></cc-radio>
      </view>
    </view>
    <view class="cc-contact-list-button" @click='add'>
      <cc-button round block :color="addButtonColor">{{ addText }}</cc-button>
    </view>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-contact-list',
  components: {},
  props: {
    // 当前选中联系人的 id
    value: {
      type: [Number, String],
      default: ''
    },
    // 联系人列表
    list: {
      type: Array,
      required: true
    },
    // 添加按钮文案
    addText: {
      type: String,
      default: '新建联系人'
    },
    // 添加按钮颜色
    addButtonColor: {
      type: String,
      default: '#ee0a24'
    },
    // 默认联系人标签文案
    defaultTagText: {
      type: String,
      default: '默认'
    }
  },
  data() {
    return {
      contactList: cloneDeep(this.list),
      currentValue: '',
      currentIndex: 0
    }
  },
  methods: {
    init() {
      this.contactList.map((item, index) => {
        if (item.disabled) this.$set(item, 'radioList', [{ value: item.id, checkedColor: '#e54d42', disabled: true }])
        else this.$set(item, 'radioList', [{ value: item.id, checkedColor: '#e54d42' }])
        if (this.value === item.id) {
          this.currentIndex = index
          this.currentValue = item.id
        }
        this.$set(item, 'checked', false)
        if (item.id === this.value) item.checked = true
      })
    },
    clickItem(item, index) {
      if (item.disabled) return
      this.currentValue = item.id
      this.$emit('select', {item, index})
    },
    edit(item, index) {
      if (item.disabled) return
      this.$emit('edit', {item, index})
    },
    add() {
      this.$emit('add')
    }
  },
  mounted() {
    this.init()
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-contact-list {
  background: #fff;
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32rpx;
    &-disabled {
      opacity: 0.6;
    }
    &-wrap {
      display: flex;
      align-items: center;
      &-name {
        margin: 0 30rpx;
      }
      &-tel {
        margin-right: 30rpx;
      }
    }
  }
  &-button {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 16rpx 30rpx;
  }
}
</style>
