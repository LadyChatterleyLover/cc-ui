<template>
  <cc-popup ref="popup" :show.sync="flag" height="800" mode="bottom" closeable @close="close">
    <view class="cc-calendar">
      <view class="cc-calendar-title">{{ title }}</view>
      <view class="cc-calendar-text">
        <view class="cc-calendar-text-year" @click="preYear">
          <cc-icon type="arrowleft" size="10"></cc-icon>
          <cc-icon type="arrowleft" size="10" style="position: relative;right: 12rpx;"></cc-icon>
        </view>
        <view class="cc-calendar-text-month" @click="preMonth">
          <cc-icon type="arrowleft" size="10"></cc-icon>
        </view>
        <view class="cc-calendar-text-current">{{ time.year }}年{{ time.month + 1 }}月</view>
        <view class="cc-calendar-text-month" @click="nextMonth">
          <cc-icon type="arrowright" size="10"></cc-icon>
        </view>
        <view class="cc-calendar-text-year" @click="nextYear">
          <cc-icon type="arrowright" size="10"></cc-icon>
          <cc-icon style="position: relative;left: -12rpx;" type="arrowright" size="10"></cc-icon>
        </view>
      </view>
      <view class="cc-calendar-days">
        <view class="cc-calendar-days-item" v-for="(item, index) in days" :key="index">{{ item }}</view>
      </view>
      <view class="cc-calendar-content">
        <view class="cc-calendar-content-item" v-for="i in 6" :key="i">
          <view class="cc-calendar-content-item-text" v-for="j in 7" :key="j">
            <view
              v-if="showDays[(i - 1) * 7 + (j - 1)]"
              @click="chooseDay(showDays[(i - 1) * 7 + (j - 1)])"
              :key="j"
              class="cc-calendar-content-item-text-value"
              :class="{
                'cc-calendar-content-item-text-nocurrent': !isCurrentMonth(showDays[(i - 1) * 7 + (j - 1)]),
                'cc-calendar-content-item-text-today': isToday(showDays[(i - 1) * 7 + (j - 1)])
              }"
              :style="{ background: isToday(showDays[(i - 1) * 7 + (j - 1)]) ? bgColor : '#fff', color: isToday(showDays[(i - 1) * 7 + (j - 1)]) ? '#fff' : '#303133' }"
            >
              <view>{{ showDays[(i - 1) * 7 + (j - 1)].getDate() }}</view>
            </view>
          </view>
        </view>
      </view>
      <view class="cc-calendar-value">{{ formatDate }}</view>
      <view class="cc-calendar-btn" @click="confirm">
        <cc-button block round :color="bgColor">{{ buttonText }}</cc-button>
      </view>
    </view>
  </cc-popup>
</template>

<script>
export default {
  name: 'cc-calendar',
  components: {},
  props: {
    // 是否显示日历
    show: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: '日期选择'
    },
    // 按钮文字
    buttonText: {
      type: String,
      default: '确认'
    },
    // 按钮颜色
    bgColor: {
      type: String,
      default: '#ee0a24'
    },
    // 是否多选
    range: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 显示弹框
      flag: this.show,
      // 当前选中日期 默认今天
      value: new Date(),
      days: ['日', '一', '二', '三', '四', '五', '六'],
      currentDay: '',
      // 选择的时间
      time: { year: this.getYearMonthDay(new Date()).year, month: this.getYearMonthDay(new Date()).month },
      dateValue: null
    }
  },
  methods: {
    // 关闭弹框
    close(val) {
      this.$emit('update:show', val)
    },
    // 获取时间年月日起
    getYearMonthDay(date) {
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      return {
        year,
        month,
        day
      }
    },
    // 获取日期
    getDate(year, month, day) {
      return new Date(year, month, day)
    },
    // 判断是否是当前月份
    isCurrentMonth(date) {
      let { year, month } = this.getYearMonthDay(date)
      let { year: y, month: m } = this.getYearMonthDay(this.getDate(this.time.year, this.time.month, 1))
      return year === y && month === m
    },
    // 判断是否是今天
    isToday(date) {
      let { year, month, day } = this.getYearMonthDay(this.value)
      let { year: y, month: m, day: d } = this.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    // 上一年
    preYear() {
      this.time.year--
    },
    // 下一年
    nextYear() {
      this.time.year++
    },
    // 上一月
    preMonth() {
      let d = this.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() - 1)
      this.time = this.getYearMonthDay(d)
    },
    // 下一月
    nextMonth() {
      let d = this.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + 1)
      this.time = this.getYearMonthDay(d)
    },
    // 选择日期
    chooseDay(item) {
      if (!this.range) {
        this.value = item
        let { year, month, day } = this.getYearMonthDay(item)
        this.$emit('select', {
          year,
          month: month + 1,
          day
        })
        let isToday = year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate() ? true : false
        this.dateValue = {
          year,
          month: month + 1,
          day,
          week: item.getDay(),
          date: year + '-' + (month + 1) + '-' + day,
          isToday
        }
      } else {
        // 多选日期
      }
    },
    // 确认
    confirm() {
      this.$emit('confirm', this.dateValue)
      this.$refs.popup.close()
    }
  },
  mounted() {
    this.$set(this.time, 'year', this.getYearMonthDay(this.value).year)
    this.$set(this.time, 'month', this.getYearMonthDay(this.value).month)
    this.dateValue = {
      year: this.getYearMonthDay(this.value).year,
      month: this.getYearMonthDay(this.value).month + 1,
      day: this.value.getDate(),
      week: this.value.getDay(),
      date: this.getYearMonthDay(this.value).year + '-' + (Number(this.getYearMonthDay(this.value).month) + 1) + '-' + this.value.getDate(),
      isToday: this.isToday(this.value)
    }
  },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {
    // 格式化时间
    formatDate() {
      let { year, month, day } = this.getYearMonthDay(this.value)
      return `${year}-${month + 1}-${day}`
    },
    // 日期显示的日期
    showDays() {
      let { year, month, day } = this.getYearMonthDay(this.getDate(this.time.year, this.time.month, 1))
      // 获取当月第一天
      let firstDay = this.getDate(year, month, 1)
      // 获取当月第一天是星期几
      let week = firstDay.getDay()
      // 开始日期
      let startDay = firstDay - week * 1000 * 60 * 60 * 24
      console.log(new Date(startDay))
      let arr = []
      // 循环42天 因为日历是6 * 7的布局
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 1000 * 60 * 60 * 24))
      }
      return arr
    }
  },
  watch: {
    show(val) {
      this.flag = val
    }
  }
}
</script>

<style scoped lang="scss">
.cc-calendar {
  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    background-color: #fff;
    color: #303133;
    width: 100%;
    height: 88rpx;
  }
  &-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 20rpx;
    margin-bottom: 30rpx;
    &-current {
      margin: 0 16rpx;
      color: #303133;
      font-weight: 700;
    }
    &-year,
    &-month {
      margin: 0 16rpx;
    }
    &-year {
      color: #909399;
    }
    &-month {
      color: #606266;
    }
  }
  &-days {
    display: flex;
    align-items: center;
    padding: 12rpx 0;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
  &-value {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12rpx 0;
    color: #909399;
    font-size: 14px;
  }
  &-content {
    height: 400rpx;
    display: flex;
    flex-direction: column;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      &-text {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border-radius: 8rpx;
        &-nocurrent {
          color: #c8c9cc !important;
        }
        &-value {
          padding: 12rpx 16rpx;
        }
        &-today {
          background: #ee0a24;
          color: #fff;
          border-radius: 8rpx;
        }
      }
    }
  }
  &-btn {
    padding: 0 16rpx;
  }
}
</style>
