export default {
  // 生成id
  genID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
  },
  // 获取dom
  getDom(selector, all) {
    return new Promise(resolve => {
      uni.createSelectorQuery().in(this)[all ? 'selectAll' : 'select'](selector).boundingClientRect().exec(rect => {
        if (all && Array.isArray(rect) && rect.length) {
          resolve(rect)
        }
        if (!all && rect) {
          resolve(rect)
        }
      })
    })
  },
  // 获取属性结构最大层级
  getMaxlevel(treeData, attr = 'children') {
    let level = 0
    let v = this
    let maxLevel = 0

    function loop(data, level) {
      data.forEach(item => {
        item.level = level
        if (level > maxLevel) {
          maxLevel = level
        }
        if (attr in item) {
          if (item.children.length > 0) {
            loop(item.children, level + 1)
          }
        }
      })
    }
    loop(treeData, 1)
    return maxLevel
  },
}
