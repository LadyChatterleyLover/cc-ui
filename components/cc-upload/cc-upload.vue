<template>
  <view>
    <view class="cc-upload" v-if="imgList.length">
      <view class="cc-upload-list-item" v-for="(item, index) in imgList" :key="index">
        <image @click="preview(item, index)" class="cc-upload-list-item-img" :src="item.url" :mode="imageMode"></image>
        <view @click="del(item, index)" class="cc-upload-list-item-delete" v-if="deletable">
          <cc-icon class="cc-upload-list-item-delete-icon" type="closeempty" size="12" color="#fff"></cc-icon>
        </view>
      </view>
    </view>
    <view class="cc-upload-btn" @click="upload">
      <slot v-if="$slots.default"></slot>
      <view class="cc-upload-add" v-else>
        <cc-icon :type="uploadButtonIcon" :size="uploadButtonSize"></cc-icon>
        <view class="cc-upload-add-text" v-if="uploadButtonText">{{ uploadButtonText }}</view>
      </view>
    </view>
    <cc-toast ref="toast"></cc-toast>
  </view>
</template>

<script>
export default {
  name: 'cc-upload',
  components: {},
  props: {
    // 服务器地址
    action: {
      type: String,
      default: ''
    },
    // 最大选择图片的数量
    maxCount: {
      type: [Number, String],
      default: 99
    },
    // 预览图片显示模式
    imageMode: {
      type: String,
      default: 'aspectFill'
    },
    // 上传请求头信息
    header: {
      type: Object,
      default: () => {}
    },
    // 上传文件的字段名，供后端获取使用
    name: {
      type: String,
      default: 'file'
    },
    // original 原图，compressed 压缩图，默认二者都有，H5无效
    sizeType: {
      type: Array,
      default: () => ['original', 'compressed']
    },
    // 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有
    sourceType: {
      type: Array,
      default: () => ['album', 'camera']
    },
    // 是否开启图片预览
    isPreview: {
      type: Boolean,
      default: true
    },
    // 是否显示删除按钮
    deletable: {
      type: Boolean,
      default: true
    },
    // 单个图片上传大小
    maxSize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    // 默认显示的图片列表
    fileList: {
      type: Array,
      default: () => []
    },
    // 允许的图片后缀
    limitType: {
      type: Array,
      default: () => ['png', 'jpg', 'jpeg', 'webp', 'gif']
    },
    // 上传时携带的参数
    formData: {
      type: Object,
      default: () => {}
    },
    // 上传按钮文字
    uploadButtonText: {
      type: String,
      default: '选择图片'
    },
    // 上传按钮图标
    uploadButtonIcon: {
      type: String,
      default: 'plusempty'
    },
    // 上传按钮图标尺寸
    uploadButtonSize: {
      type: [Number, String],
      default: '16'
    }
  },
  data() {
    return {
      // 显示默认的图片列表或者已上传的图片列表
      imgList: this.fileList,
      // 上传进度
      percent: 0,
      // 上传任务
      uploadTask: null
    }
  },
  methods: {
    // 上传图片
    upload() {
      uni.chooseImage({
        count: this.maxCount,
        sizeType: this.sizeType,
        sourceType: this.sourceType,
        success: res => {
          // 选择图片成功
          if (res.errMsg === 'chooseImage:ok') {
            let files = res.tempFiles
            let filePaths = res.tempFilePaths
            // 检验文件大小
            if (files.some(file => file.size > this.maxSize)) {
              this.$refs.toast.show({
                title: `上传图片最大尺寸为${this.maxSize}kb`,
                type: 'error'
              })
              files.map(file => {
                if (file.size > this.maxSize) {
                  this.$emit('oversize', {
                    file,
                    fileList: this.imgList
                  })
                }
              })
              return
            }
            // 检验文件格式
            // #ifdef H5
            files.map(file => {
              if (!this.limitType.includes(file.type.split('/')[1])) {
                this.$refs.toast.show({
                  title: `上传图片只支持${this.limitType.join(',')}格式`,
                  type: 'error'
                })
                return
              }
            })
            // #endif
            // #ifndef H5
            files.map(file => {
              if (!this.limitType.includes(file.path.split('.')[1])) {
                this.$refs.toast.show({
                  title: `上传图片只支持${this.limitType.join(',')}格式`,
                  type: 'error'
                })
                return
              }
            })
            // #endif
            filePaths.map(path => {
              uni.showLoading({
                title: '上传中...'
              })
              let obj = {
                url: ''
              }
              this.imgList.push(obj)
              // 开始上传
              this.uploadTask = uni.uploadFile({
                url: this.action,
                filePath: path,
                name: this.name,
                formData: this.formData,
                header: this.header,
                success: result => {
                  if (result.errMsg === 'uploadFile:ok') {
                    this.$emit('uplpadSuccess', {
                      data: JSON.parse(result.data),
                      statusCode: result.statusCode
                    })
                  }
                  obj.url = path
                },
                fail: err => {
                  this.$refs.toast.show({
                    title: '上传失败',
                    type: 'error'
                  })
                  this.$emit('uploadError', err)
                  console.log(err)
                },
                complete: r => {
                  this.$emit('change', {
                    data: JSON.parse(r.data),
                    statusCode: r.statusCode
                  })
                  uni.hideLoading()
                }
              })
            })
          } else {
            this.$refs.toast.show({
              title: '选择图片失败,请重新选择',
              type: 'warning'
            })
            this.$emit('chooseFail', err)
          }
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    // 预览图片
    preview(item, index) {
      if (!this.isPreview) return
      uni.previewImage({
        current: index,
        urls: this.imgList.map(file => file.url)
      })
      this.$emit('preview', { item, index })
    },
    // 删除预览图片
    del(item, index) {
      this.imgList.splice(index, 1)
      this.$emit('delete', { item, index })
    },
    // 清空文件列表
    clear() {
      this.imgList = []
    },
    // 取消上传
    abort() {
      this.uploadTask.abort()
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
    imgList: {
      handler(val) {
        this.$emit('listChange', val)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
.cc-upload {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &-list-item {
    width: 160rpx;
    height: 160rpx;
    background: #f7f7f7;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20rpx 20rpx 20rpx;
    position: relative;
    &-img {
      width: 120rpx;
      height: 120rpx;
    }
    &-delete {
      position: absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 14px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 0 12px;
      z-index: 999;
      &-icon {
        position: relative;
        /* #ifdef H5 */
        top: -2rpx;
        /* #endif */
        /* #ifndef H5 */
        top: -12rpx;
        /* #endif */
        left: 4rpx;
      }
    }
  }
  &-add {
    width: 160rpx;
    height: 160rpx;
    background: #f7f7f7;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    margin: 0 20rpx 20rpx 20rpx;
    &-text {
      margin-top: 10rpx;
    }
  }
}
</style>
