const checkLogin = ({
  key,
  next,
  item = null,
  title = '检测到您未登录',
  content = '是否立即跳转到登录页面',
  loginPath,
  cancel,
  confirmColor,
  cancelColor,
  confirmText,
  cancelText,
}) => {
  // 检测本地有没有用户信息
  let user = uni.getStorageSync(key)
  if (user) {
    // 已经登录
    // 继续下一步操作
    next(item)
  } else {
    uni.showModal({
      title,
      content,
      confirmColor,
      cancelColor,
      confirmText,
      cancelText,
      success: (res) => {
        if (res.confirm) {
          uni.navigateTo({
            url: loginPath
          })
        } else {
          cancel && cancel()
        }
      }
    })
  }
}

export default checkLogin