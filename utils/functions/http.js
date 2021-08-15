const http = ({
  url,
  data,
  header,
  method = 'GET',
  timeout = 60000,
  showLoading = true,
  loadtingText = '加载中...'
}) => {
  if (showLoading) {
    uni.showLoading({
      title: loadtingText
    })
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data,
      header,
      method,
      timeout,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        if (showLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}

export default http
