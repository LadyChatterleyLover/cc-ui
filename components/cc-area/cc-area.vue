<template>
  <view class="cc-area">
    <view class="cc-area-btn">
      <view class="cc-area-btn-cancel" @click="cancel">{{ cancelText }}</view>
      <view class="cc-area-btn-title">{{ title }}</view>
      <view class="cc-area-btn-confirm" @click="confirm">{{ confirmText }}</view>
    </view>
    <picker-view :value="region" @change="bindChange">
      <picker-view-column v-if="columnsNum >= 1">
        <view class="cc-area-item" v-for="(item, index) in regionList" :key="index">{{ item.name }}</view>
      </picker-view-column>
      <picker-view-column v-if="regionList[region[0]] && columnsNum >= 2">
        <view class="cc-area-item" v-for="(item, index) in regionList[region[0]].city" :key="index">{{ item.name }}</view>
      </picker-view-column>
      <picker-view-column v-if="regionList[region[0]] && columnsNum === 3">
        <view class="cc-area-item" v-for="(item, index) in regionList[region[0]].city[region[1]].area" :key="index">{{ item.name }}</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import data from './area.js'
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'cc-area',
  props: {
    // 标题
    title: {
      type: String,
      default: '标题'
    },
    // 取消文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 确认文字
    confirmText: {
      type: String,
      default: '确认'
    },
    // 显示列数，3-省市区，2-省市，1-省
    columnsNum: {
      type: Number,
      default: 3
    },
    // 列占位提示文字
    columnsPlaceholder: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      region: [0, 0, 0],
      regionList: [], //地址数据，格式为 三级地址全返回
      area: []
    }
  },
  methods: {
    //选择值改变事件
    bindChange(e) {
      let val = e.detail.value
      if (this.region[0] !== val[0]) {
        this.region = [val[0], 0, 0]
      } else if (this.region[1] !== val[1]) {
        this.region = [val[0], val[1], 0]
      } else {
        this.region = e.detail.value
      }

      this.$emit('change', this.region)
    },
    //确定按钮操作
    confirm() {
      if (this.columnsNum === 3) {
        this.area = [
          {
            code: this.regionList[this.region[0]].code,
            name: this.regionList[this.region[0]].name
          },
          {
            code: this.regionList[this.region[0]].city[this.region[1]].code,
            name: this.regionList[this.region[0]].city[this.region[1]].name
          },
          {
            code: this.regionList[this.region[0]].city[this.region[1]].area[this.region[2]].code,
            name: this.regionList[this.region[0]].city[this.region[1]].area[this.region[2]].name
          }
        ]
      } else if (this.columnsNum === 2) {
        this.area = [
          {
            code: this.regionList[this.region[0]].code,
            name: this.regionList[this.region[0]].name
          },
          {
            code: this.regionList[this.region[0]].city[this.region[1]].code,
            name: this.regionList[this.region[0]].city[this.region[1]].name
          }
        ]
      } else {
        this.area = [
          {
            code: this.regionList[this.region[0]].code,
            name: this.regionList[this.region[0]].name
          }
        ]
      }
      this.$emit('confirm', this.area)
    },
    cancel() {
      this.region = [0, 0, 0]
      this.$emit('cancel')
    }
  },
  mounted() {
    if (this.columnsPlaceholder && this.columnsPlaceholder.length) {
      let arr = cloneDeep(data)
      let obj = {}
      if (this.columnsPlaceholder[0] && this.columnsPlaceholder[1] && this.columnsPlaceholder[2]) {
        obj = {
          name: this.columnsPlaceholder[0],
          code: '',
          city: [
            {
              name: this.columnsPlaceholder[1],
              code: '',
              area: [
                {
                  name: this.columnsPlaceholder[2],
                  code: '',
                }
              ]
            }
          ]
        }
      }
      if (this.columnsPlaceholder[0] && this.columnsPlaceholder[1] && !this.columnsPlaceholder[2]) {
        obj = {
          name: this.columnsPlaceholder[0],
          code: '',
          city: [
            {
              name: this.columnsPlaceholder[1],
              code: ''
            }
          ]
        }
      }
      arr.unshift(obj)
      this.regionList = arr
    } else {
     this.regionList = data 
    }
  }
}
</script>

<style lang="scss" scoped>
.cc-area {
  background-color: #ffffff;
  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;
    height: 88rpx;
    &-cancel {
      font-size: 14px;
      color: #969799;
    }
    &-title {
      font-weight: 500;
    }
    &-confirm {
      font-size: 14px;
      color: #576b95;
    }
  }
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picker-view {
    width: 100%;
    height: 600rpx;
  }
}
</style>
