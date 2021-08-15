import dayjs from "dayjs"

const time = {
  // 时间格式化
  timeFormat(time, format = 'YYYY-MM-DD') {
    return dayjs(time).format(format)
  },
  // 获取时间戳
  valueOf(time) {
    return dayjs(time).valueOf()
  }
}

export default time