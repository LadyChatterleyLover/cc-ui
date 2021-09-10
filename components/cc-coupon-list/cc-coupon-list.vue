<template>
  <view class="cc-coupon-list">
    <view class="cc-coupon-list-exchange">
      <view class="cc-coupon-list-exchange-search">
        <cc-search round :showAction="false" :placeholder="inputPlaceholder" :value.sync="inputValue"></cc-search>
      </view>
      <view class="cc-coupon-list-exchange-btn">
        <cc-button :disabled="exchangeButtonDisabled || !inputValue || !inputValue.length" :loading="exchangeButtonLoading" :style="{color: exchangeButtonColor}" size="small" @click='exchange'>{{exchangeButtonText}}</cc-button>
      </view>
    </view>
    <view class="cc-coupon-list-tabs">
      <cc-tabs :list="tabs" :current="current"  activeColor='#323233' inactiveColor="#646566" :lineColor="lineColor" @change='changeTab'>
        <view class="cc-coupon-list-content">
          <view v-if="current === 0">
            <view class="cc-coupon-list-content-enable" v-for="(item, index) in cloneCoupons" :key="index" @click="clickItem(item, index)">
              <view class="cc-coupon-list-content-enable-info">
                <view class="cc-coupon-list-content-enable-info-left">
                  <view class="cc-coupon-list-content-enable-info-left-price">{{item.valueDesc}}<text style="font-size: 12px;">{{item.unitDesc}}</text></view>
                  <view class="cc-coupon-list-content-enable-info-left-condition">{{item.condition}}</view>
                </view>
                <view class="cc-coupon-list-content-enable-info-center">
                  <view class="cc-coupon-list-content-enable-info-center-name">
                    {{item.name}}
                  </view>
                  <view class="cc-coupon-list-content-enable-info-center-time">
                    {{item.startTime}} - {{item.endTime}} 
                  </view>
                </view>
                <view class="cc-coupon-list-content-enable-info-right" v-if="item.radioList && item.radioList.length">
                   <cc-radio :value.sync="currentValue" :list="item.radioList"></cc-radio>
                </view>
              </view>
              <view class="cc-coupon-list-content-enable-label">
                {{item.description}}
              </view>
            </view>
          </view>
          <view v-if="current === 1">
            <view class="cc-coupon-list-content-enable" v-for="(item, index) in cloneDisableCoupons" :key="index">
              <view class="cc-coupon-list-content-enable-info">
                <view class="cc-coupon-list-content-enable-info-left" style="color: inherit;">
                  <view class="cc-coupon-list-content-enable-info-left-price">{{item.valueDesc}}<text style="font-size: 12px;">{{item.unitDesc}}</text></view>
                  <view class="cc-coupon-list-content-enable-info-left-condition">{{item.condition}}</view>
                </view>
                <view class="cc-coupon-list-content-enable-info-center">
                  <view class="cc-coupon-list-content-enable-info-center-name">
                    {{item.name}}
                  </view>
                  <view class="cc-coupon-list-content-enable-info-center-time">
                    {{item.startTime}} - {{item.endTime}} 
                  </view>
                </view>
              </view>
              <view class="cc-coupon-list-content-enable-label">
                {{item.reason}}
              </view>
            </view>
          </view>
        </view>
      </cc-tabs>
    </view>
    <view class="cc-coupon-list-btn" @click="close">
      <cc-button round block :color="closeButtonColor">{{ closeButtonText }}</cc-button>
    </view>
  </view>

</template>

<script>
  import dayjs from 'dayjs'
  import cloneDeep from 'lodash/cloneDeep'
  export default {
    name: 'cc-coupon-list',
    components: {},
    props: {
      // 当前输入的兑换码
      value: {
        type: String,
        default: ''
      },
      // 当前选中优惠券的索引
      chosenCoupon: {
        type: Number,
        default: -1
      },
      // 当前选中优惠券的索引
      coupons: {
        type: Array,
        default: () => []
      },
      // 不可用优惠券列表
      disabledCoupons: {
        type: Array,
        default: () => []
      },
      // 可用优惠券列表标题
      enabledTitle: {
        type: String,
        default: '可用'
      },
      // 不可用优惠券列表标题
      disabledTitle: {
        type: String,
        default: '不可用'
      },
      // 兑换按钮颜色
      exchangeButtonColor: {
        type: String,
        default: '#ee0a24'
      },
      // 兑换按钮文字
      exchangeButtonText: {
        type: String,
        default: '兑换'
      },
      // 是否显示兑换按钮加载动画
      exchangeButtonLoading: {
        type: Boolean,
        default: false
      },
      // 是否禁用兑换按钮
      exchangeButtonDisabled: {
        type: Boolean,
        default: false
      },
      // 兑换码最小长度
      exchangeMinLength: {
        type: Number,
        default: 1
      },
      // 是否显示列表底部按钮
      showCloseButton: {
        type: Boolean,
        default: true
      },
      // 列表底部按钮文字	
      closeButtonText: {
        type: String,
        default: '不使用优惠'
      },
      // 列表底部按钮颜色
      closeButtonColor: {
        type: String,
        default: '#ee0a24'
      },
      // 输入框文字提示
      inputPlaceholder: {
        type: String,
        default: '请输入优惠码'
      },
      // 是否展示兑换栏
      showExchangeBar: {
        type: Boolean,
        default: true
      },
      // tabs滑块颜色
      lineColor: {
        type: String,
        default: '#ee0a24'
      }
    },
    data() {
      return {
        current: 0,
        cloneCoupons: cloneDeep(this.coupons),
        cloneDisableCoupons: cloneDeep(this.disabledCoupons),
        currentValue: this.chosenCoupon,
        inputValue: this.value,
      }
    },
    methods: {
      changeTab(val) {
        this.current = val
      },
      // 选中优惠券
      clickItem(item, index) {
        this.currentValue = index
        let parent = null
        // #ifdef H5
        parent = this.$parent.$parent.$parent
        // #endif
        // #ifndef H5
        parent = this.$parent
        // #endif
        parent.close()
        this.$emit('change', {item, index})
        uni.$emit('changeCoupon', item)
      },
      // 点击兑换按钮
      exchange() {
        if (!this.exchangeButtonDisabled || !inputValue || !inputValue.length) return
        this.$emit('exchange', this.inputValue)
      },
      // 点击不使用优惠券按钮
      close() {
        let parent = null
        // #ifdef H5
        parent = this.$parent.$parent.$parent
        // #endif
        // #ifndef H5
        parent = this.$parent
        // #endif
        uni.$emit('changeCoupon', null)
        parent.close()
      }
    },
    mounted() {
      this.cloneCoupons.map((item, index) => {
        this.$set(item, 'startTime', dayjs(item.startAt).format('YYYY.MM.DD'))
        this.$set(item, 'endTime', dayjs(item.endAt).format('YYYY.MM.DD'))
        this.$set(item, 'radioList', [{ value: index, checkedColor: '#e54d42' }])
      })
      this.cloneDisableCoupons.map(item => {
        this.$set(item, 'startTime', dayjs(item.startAt).format('YYYY.MM.DD'))
        this.$set(item, 'endTime', dayjs(item.endAt).format('YYYY.MM.DD'))
      })
    },
    onLoad() {

    },
    onShow() {

    },
    filters: {},
    computed: {
      tabs() {
        let arr = []
        arr.push({
          title: this.enabledTitle
        })
        arr.push({
          title: this.disabledTitle
        })
        return arr
      }
    },
    watch: {},
  }
</script>

<style scoped lang="scss">
 .cc-coupon-list{
   &-exchange {
     display: flex;
     align-items: center;
     height: 88rpx;
     padding: 12rpx 20rpx;
     &-search {
       flex: 1;
     }
   }
   &-content {
     background: #f7f8fa;
     height: 860rpx;
     padding: 20rpx 30rpx;
     &-enable {
       margin: 0 24rpx 24rpx;
       overflow: hidden;
       background: #fff;
       border-radius: 16rpx;
       &-info {
         display: flex;
         align-items: center;
         box-sizing: border-box;
         min-height: 168rpx;
         padding: 28rpx;
         color: #323233;
         position: relative;
         &-left {
           color: #ee0a24;
           min-width: 192rpx;
           display: flex;
           flex-direction: column;
           align-items: center;
           &-price {
             font-weight: 500;
             font-size: 30px;
             overflow: hidden;
             white-space: nowrap;
             text-overflow: ellipsis;
             margin-bottom: 12rpx;
           }
           &-condition {
             text-align: center;
             font-size: 12px;
             line-height: 32rpx;
             white-space: pre-wrap;
             text-overflow: ellipsis;
             overflow: hidden;
           }
         }
         &-center {
           &-name {
             font-weight: 700;
             font-size: 14px;
             margin-bottom: 20rpx;
           }
           &-time {
             font-size: 12px;
           }
         }
         &-right {
           position: absolute;
           top: 70rpx;
           right: 50rpx;
         }
       }
       &-label {
         padding: 16rpx 32rpx;
         font-size: 12px;
         border-top: 1px dashed #ebedf0;
         color: #323233;
       }
     }
   }
   &-btn {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20rpx 30rpx;
   }
 }
 .cc-button {
   border: none;
   background: #fff;
 }
</style>
