// 正则验证
const test = {
  // 是否是数组
  isArray(arr = []) {
    return Array.isArray(arr)
  },
  // 是否是邮箱
  isEmail(eamil) {
    let rule  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let reg = new RegExp(rule)
    return reg.test(email)
  },
  // 是否是手机号
  isMobile(mobile) {
    let rule = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
    let reg = new RegExp(rule)
    return reg.test(mobile)
  },
  // 是否是网址
  isUrl(url) {
    let rule = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
    let reg = new RegExp(rule)
    return reg.test(url)
  },
  // 是否是日期
  isDate(date) {
    let rule = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/
    let reg = new RegExp(rule)
    return reg.test(date)
  },
  // 是否是身份证号 支持1 2代身份证
  isIdCard(idCard) {
    let rule = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
    let reg = new RegExp(rule)
    return reg.test(idCard) 
  },
  // 是否是车牌号 包含新能源车
  isCarNo(carNo) {
    let rule = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/
    let reg = new RegExp(rule)
    return reg.test(carNo) 
  },
  // 是否是中文
  isCn(str) {
    let rule = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
    let reg = new RegExp(rule)
    return reg.test(str) 
  },
  // 是否是英文
  isEn(str) {
    let rule = /^[a-zA-Z]+$/
    let reg = new RegExp(rule)
    return reg.test(str) 
  },
  // 是否是数字
  isNum(num) {
    let rule = /^\d{1,}$/
    let reg = new RegExp(rule)
    return reg.test(num) 
  },
  // 是否是小数
  isDecimal(num) {
    let rule = /^\d+\.\d+$/
    let reg = new RegExp(rule)
    return reg.test(num) 
  },
  // 是否是中文或者英文
  isCnOrEn(str) {
    let rule = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
    let reg = new RegExp(rule)
    return reg.test(str) 
  },
  // 是否是qq号
  isQq(qq) {
    let rule = /^[1-9][0-9]{4,10}$/
    let reg = new RegExp(rule)
    return reg.test(qq)
  },
  // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  passwordRule(password) {
    let rule = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    let reg = new RegExp(rule)
    return reg.test(password)
  },
  // 是否是16进制颜色
  isColor(color) {
    let rule = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
    let reg = new RegExp(rule)
    return reg.test(color)
  },
  // 是否是邮编
  isPostalCode(postalCode) {
    let rule = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
    let reg = new RegExp(rule)
    return reg.test(postalCode)
  },
  // 数字/货币金额（支持负数、千分位分隔符）
  isNumOrCurrency(num) {
    let rule = /^-?\d+(,\d{3})*(\.\d{1,2})?$/
    let reg = new RegExp(rule)
    return reg.test(num)
  }
}

export default test