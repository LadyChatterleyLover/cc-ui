<template>
  <view class="cc-checker">
    <template v-if="!multiple">
      <view
        class="cc-checker-item"
        :class="{'cc-checker-item-round': item.round, 'cc-checker-item-disabled': item.disabled}"
        v-for="(item, index) in checkList"
        :key="index"
        :style="{ background: currentIndex === index ? item.bgColor : '#f5f5f5', color: currentIndex === index ? item.color : '#333' }"
        @click="clickItem(item, index)"
      >
        <view>{{ item.label }}</view>
        <view class="cc-checker-item-info" v-if="item.info">
          {{item.info}}
        </view>
      </view>
    </template>
    <template v-else>
      <view
        class="cc-checker-item"
        :class="{'cc-checker-item-round': item.round, 'cc-checker-item-disabled': item.disabled}"
        v-for="(item, index) in checkList"
        :key="index"
        :style="{ background: item.checked ? item.bgColor : '#f5f5f5', color: item.checked ? item.color : '#333' }"
        @click="clickItem(item, index)"
      >
        <view>{{ item.label }}</view>
        <view class="cc-item-info" v-if="item.info">
          {{item.info}}
        </view>
        <i class="cc-checker-item-icon" v-if='item.checked' :style="{fill: item.checked ? item.color : '#f5f5f5'}">
          <svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g fill-rule="evenodd">
              <path d="M16 0v12a4 4 0 01-4 4H0L16 0z"></path>
              <path d="M7.854 11.146a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L9.5 12.793l-1.646-1.647z" fill="#FFF" fill-rule="nonzero"></path>
            </g>
          </svg>
        </i>
      </view>
    </template>
  </view>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-checker',
  components: {},
  props: {
    value: {
      type: [Number, String, Array],
      default: ''
    },
    list: {
      type: Array,
      required: true
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: {},
      currentIndex: 0,
      checkList: cloneDeep(this.list),
      multipleList: []
    }
  },
  methods: {
    init() {
      this.checkList.map(item => {
        if (!item.bgColor) this.$set(item, 'bgColor', '#EBF4FF')
        if (!item.color) this.$set(item, 'color', '#0081ff')
      })
      if (Array.isArray(this.value)) {
        this.checkList.map(item => {
          this.$set(item, 'checked', false)
          if (this.value.includes(item.value)) {
            this.multipleList.push(item.value)
            item.checked = true
          }
        })
      } else {
        this.current = this.list.find(item => item.value === this.value)
        this.currentIndex = this.list.findIndex(item => item.value === this.value)
      }
    },
    clickItem(item, index) {
      if (item.disabled || item.readonly) return
      if (!this.multiple) {
        this.currentIndex = index
        this.current = item
        this.$emit('change', item.value)
      } else {
        item.checked = !item.checked
        let checked = this.checkList.filter(item => item.checked).map(item => {
          return {
            label: item.label,
            value: item.value
          }
        })
        this.$emit('change', checked)
      }
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
.cc-checker {
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20rpx;
    font-size: 14px;
    padding: 12rpx 50rpx;
    position: relative;
    &-round {
      border-radius: 48rpx;
    }
    &-disabled {
      opacity: 0.4;
    }
    &-info {
      position: absolute;
      top: -28rpx;
      right: -28rpx;
      background: #e54d42;
      color: #fff;
      border-radius: 100%;
      padding: 6rpx;
      font-size: 12px;
    }
    &-icon {
      width: 24rpx; 
      height: 24rpx;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
