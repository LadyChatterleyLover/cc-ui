// 存储记录(浏览历史(browse) 搜索历史(search)...)
// key: 存储的名字
// attr: 判断元素是否存在的属性名

const history = {
  saveHistory({
    key,
    data,
    attr
  }) {
    // 拼接一个名字
    let name = key
    let history = uni.getStorageSync(name)
    if (history) {
      // 之前已经存储过了
      let arr = JSON.parse(uni.getStorageSync(name))
      // 检测数据是否已经存在
      let item = null
      if (typeof data === 'string') {
        item = arr.find(i => {
          return i[attr] === data
        })
      } else {
        item = arr.find(i => {
          return i[attr] === data[attr]
        })
      }
      // 数组当中没有当前数据
      if (!item) {
        if (typeof data === 'string') {
          let obj = {
            [attr]: data
          }
          arr.push(obj)
        } else {
          arr.push(data)
        }
        uni.setStorageSync(name, JSON.stringify(arr))
      }
    } else {
      // 第一次存储
      // 把存储的数据都转换成对象
      let arr = []
      if (typeof data === 'string') {
        let obj = {
          name: data
        }
        arr.push(obj)
      } else {
        arr.push(data)
      }
      uni.setStorageSync(name, JSON.stringify(arr))
    }
  },
  // 获取存储记录
  getHistory({key}) {
    let name = key
    let arr = uni.getStorageSync(name)
    if (arr) return JSON.parse(arr)
    else return null
  }
}

export default history
