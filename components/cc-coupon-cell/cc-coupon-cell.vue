<template>
  <view class="cc-coupon-cell">
    <cc-cell :title="cellTitle" :value="cellValue" isLink @click='clickCell'></cc-cell>
    <slot></slot>
  </view>

</template>

<script>
  export default {
    name: 'cc-coupon-cell',
    components: {},
    props: {
      // 单元格标题
      title: {
        type: String,
        default: '优惠券'
      },
      // 当前选中优惠券的索引
      chosenCoupon: {
        type: [Number, String],
        default: -1
      },
      coupons: {
        type: Array,
        default: () => []
      },
      // 货币符号
      currency: {
        type: String,
        default: '￥'
      }
    },
    data() {
      return {
        cellTitle: this.title,
        cellValue: ''
      }
    },
    methods: {
      clickCell() {
        this.$emit('click')
      }
    },
    mounted() {
      this.cellValue = `${this.coupons.length}张可用`
      uni.$on('changeCoupon', val => {
        if (val) this.cellValue = `-${this.currency} ${(val.value / 100).toFixed(2)}`
        else  this.cellValue = `${this.coupons.length}张可用`
      })
    },
    onLoad() {

    },
    onShow() {

    },
    filters: {},
    computed: {
    },
    watch: {},
  }
</script>

<style scoped lang="scss">
 .cc-coupon-cell {
   
 }
</style>
