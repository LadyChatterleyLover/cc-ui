<template>
  <view class="cc-count-down">
    <slot v-if="$scopedSlots.default" :timeData='timeData'></slot>
    <template v-else>
      <view v-if="showDays && day > 0">{{dayValue}}</view>
      <view v-if="showDays && day > 0" :style="{fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }">
        {{separator === 'colon' ? ':' : '天'}}
      </view>
      <view v-if="showHours">{{hourValue}}</view>
      <view v-if="showHours"  :style="{fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx`  }">
        {{separator === 'colon' ? ':' : '时'}}
      </view>
      <view v-if="showMinutes">{{minuteValue}}</view>
      <view v-if="showMinutes"  :style="{fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx`  }">
        {{separator === 'colon' ? ':' : '分'}}
      </view>
      <view v-if="showSeconds">{{secondValue}}</view>
    </template>
  </view>
</template>

<script>
export default {
  name: 'cc-count-down',
  components: {},
  props: {
    // 倒计时时间
    time: {
      type: Number,
      default: 0
    },
    // 分隔符 可选择 zh
    separator: {
      type: String,
      default: 'colon'
    },
    // 分隔符大小
    separatorSize: {
      type: [Number, String],
      default: 16
    },
    // 分割符颜色
    separatorColor: {
      type: String,
      default: '#000'
    },
    // 分割符与文字之间的间距
    gutter: {
      type: [Number, String],
      default: 0
    },
    // 是否显示倒计时的天
    showDays: {
      type: Boolean,
      default: true
    },
    // 是否显示倒计时的时
    showHours: {
      type: Boolean,
      default: true
    },
    // 是否显示倒计时的分
    showMinutes: {
      type: Boolean,
      default: true
    },
    // 是否显示倒计时的秒
    showSeconds: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      day: '',
      hour: '',
      minute: '',
      second: '',
      timer: null,
      timeValue: 0,
      timeData: {}
    }
  },
  methods: {
    countDowm() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.hour === 0) {
          if (this.minute !== 0 && this.second === 0) {
            this.second = 59
            this.minute -= 1
          } else if (this.minute === 0 && this.second === 0) {
            this.second = 0
            this.$emit('end')
            clearInterval(this.timer)
          } else {
            this.second -= 1
          }
        } else {
          if (this.minute !== 0 && this.second === 0) {
            this.second = 59
            this.minute -= 1
          } else if (this.minute === 0 && this.second === 0) {
            this.hour -= 1
            this.minute = 59
            this.second = 59
          } else {
            this.second -= 1
          }
        }
        this.timeValue = this.hour * 1000 * 3600 + this.minute * 1000 * 60 + this.second * 1000
        this.$emit('change', this.timeValue)
      }, 1000)
    },
    formatNum(num) {
      return num < 10 ? '0' + num : '' + num
    }
  },
  mounted() {
    if (this.time > 0 && this.time < 1000 * 60 * 60 * 24) {
      this.day = 0
      this.hour = Math.floor((this.time / 3600 / 1000) % 24)
      this.minute = Math.floor((this.time / 60 / 1000) % 60)
      this.second = Math.floor((this.time / 1000) % 60)
    } else {
      // 如果时间大于1天
      // 如果刚好是整数天
      if (this.time % (1000 * 60 * 60 * 24) === 0) {
        this.day = this.time / (1000 * 60 * 60 * 24)
        this.hour = 24 * this.day
        this.minute = 0
        this.second = 0
      } else {
        this.day = Math.floor(this.time / (1000 * 60 * 60 * 24))
        this.hour = this.day * 24 + Math.floor((this.time / 3600 / 1000) % 24)
        this.minute = Math.floor((this.time / 60 / 1000) % 60)
        this.second = Math.floor((this.time / 1000) % 60)
      }
    }
    this.$set(this.timeData, 'days', this.dayValue)
    this.$set(this.timeData, 'hours', this.hourValue)
    this.$set(this.timeData, 'minutes', this.minuteValue)
    this.$set(this.timeData, 'seconds', this.secondValue)
    this.countDowm()
  },
  onLoad() {},
  onShow() {},
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  filters: {},
  computed: {
    dayValue() {
      return this.formatNum(this.day)
    },
    hourValue() {
      return this.formatNum(this.hour)
    },
    minuteValue() {
      return this.formatNum(this.minute)
    },
    secondValue() {
      return this.formatNum(this.second)
    }
  },
  watch: {
    timeValue: {
      handler() {
        this.$set(this.timeData, 'days', this.dayValue)
        this.$set(this.timeData, 'hours', this.hourValue)
        this.$set(this.timeData, 'minutes', this.minuteValue)
        this.$set(this.timeData, 'seconds', this.secondValue)
      },
    }
  }
}
</script>

<style scoped lang="scss">
.cc-count-down {
  display: flex;
  align-items: center;
}
</style>
