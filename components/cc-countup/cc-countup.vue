<template>
 <view>
   <!-- #ifdef H5 -->
   <view :id="id" class="cc-countup"></view>
   <!-- #endif -->
   <!-- #ifndef H5 -->
   <view>{{number}}</view>
   <!-- #endif -->
 </view>
</template>

<script>
// #ifdef H5
import { CountUp } from 'countup.js'
// #endif

// #ifndef H5
import WxCountUp from './wxCountup.js'
// #endif

export default {
  name: 'cc-countup',
  components: {},
  props: {
    // 是否自动滚动
    autoplay: {
      type: Boolean,
      default: true
    },
    // 滚动开始值
    startVal: {
      type: Number
    },
    // 滚动结束值
    endVal: {
      type: Number
    },
    // 滚动持续时长
    duration: {
      type: Number,
      default: 2
    },
    // 使用过渡动画
    useEasing: {
      type: Boolean,
      default: true
    },
    // 千分位分隔符
    useGrouping: {
      type: Boolean,
      default: true
    },
    // 千分位分割符号
    separator: {
      type: String,
      default: ','
    },
    // 小数位数
    decimalPlaces: {
      type: Number,
      default: 0
    },
    // 小数位分割符号
    decimal: {
      type: String,
      default: '.'
    },
    // 前缀内容
    prefix: {
      type: String,
      default: ''
    },
    // 后缀内容
    suffix: {
      type: String,
      default: ''
    },
    // 结束时回调
    end: {
      type: Function
    }
  },
  data() {
    return {
      countup: null,
      number: 0
    }
  },
  methods: {
    toJSON(){}
  },
  mounted() {
    let options = {
      startVal: this.startVal,
      duration: this.duration,
      useEasing: this.useEasing,
      useGrouping: this.useGrouping,
      separator: this.separator,
      decimalPlaces: this.decimalPlaces,
      decimal: this.decimal,
      prefix: this.prefix,
      suffix: this.suffix
    }
    // #ifdef H5
    this.countup = new CountUp(this.id, this.endVal, options)
    if (!this.countup.error) {
      if (this.autoplay) this.countup.start(this.end)
    } else {
      console.error(this.countup.error)
    }
    // #endif
    // #ifndef H5
     this.countup = new WxCountUp('number', this.endVal, options, this)
     if (!this.countup.error) {
       if (this.autoplay) {
         this.countup.start(this.end)
       }
     } else {
       console.error(this.countup.error)
     }
    // #endif
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    id() {
      return 'cc-countup-' + this._uid
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss"></style>
