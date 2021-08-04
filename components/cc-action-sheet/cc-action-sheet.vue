<template>
   <cc-popup ref="popup" mode="bottom" :closeable="closeable" :round="round" :show.sync="visible">
      <view class="cc-action-sheet">
        <view v-if="title" class="cc-action-sheet-title">{{ title }}</view>
        <view>
          <slot v-if="$slots.content" name="content"></slot>
          <template v-else>
            <view v-if="description" class="cc-action-sheet-description">
              <view>{{ description }}</view>
              <view class="cc-action-sheet-description-line"></view>
            </view>
            <view
              @click="clickItem(item, index)"
              class="cc-action-sheet-content"
              v-for="(item, index) in list"
              :key="index"
            >
              <view
                :style="{ color: item.color, fontSize: item.fontSize && item.fontSize + 'rpx' }"
                :class="{ disabled: item.disabled }"
              >
                <view class="cc-action-sheet-content-loading" v-if="item.loading">
                  <cc-icon type="spinner-cycle" size="16" color="#c8c9cc"></cc-icon>
                </view>
                <view v-else>{{ item.name }}</view>
              </view>
              <view class="cc-action-sheet-content-subname" v-if="item.subname">{{ item.subname }}</view>
            </view>
            <view v-if="showCancel" class="cc-action-sheet-cancel" @click="cancel">
              <view class="cc-action-sheet-cancel-line"></view>
              <view class="cc-action-sheet-cancel-text">{{ cancelText }}</view>
            </view>
          </template>
        </view>
      </view>
    </cc-popup>

</template>

<script>
  export default {
    name: 'cc-action-sheet',
    components: {},
    props: {
       list: {
          type: Array,
        },
        // 显示菜单
        show: {
          type: Boolean,
          required: true
        },
        // 标题
        title: {
          type: String,
          default: ''
        },
        // 圆角菜单
        round: {
          type: Boolean,
          required: false
        },
        // 描述信息
        description: {
          type: String,
          default: ''
        },
        // 关闭按钮
        closeable: {
          type: Boolean,
          default: false
        },
        // 显示底部取消按钮
        showCancel: {
          type: Boolean,
          default: false
        },
        // 取消文字
        cancelText: {
          type: String,
          default: '取消'
        },
        // 是否在点击选项后关闭
        closeOnClickAction: {
          type: Boolean,
          default: true
        }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      // 取消
      cancel() {
        if (this.closeOnClickAction) {
          this.$refs.popup.clickMask()
        }
      },
      // 点击每一项
      clickItem(item, index) {
        if (!item.disabled) {
          this.$emit('select', {
            item,
            index
          })
          this.$refs.popup.clickMask()
        }
      }
    },
    mounted() {

    },
    onLoad() {

    },
    onShow() {

    },
    filters: {},
    computed: {},
    watch: {
      show(val) {
         this.visible = val
      },
      visible(val) {
        this.$emit('update:show', val)
      }
    },
  }
</script>

<style scoped lang="scss">
.cc-action-sheet {
  &-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 96rpx;
    text-align: center;
  }
  &-description {
    position: relative;
    padding: 40rpx 0 20rpx 0;
    color: #969799;
    font-size: 14px;
    line-height: 20rpx;
    text-align: center;
    &-line {
      width: 92%;
      margin-left: 4%;
      height: 2rpx;
      background: #ebedf0;
      margin-top: 30rpx;
    }
  }
  &-content {
    width: 100%;
    padding: 28rpx 0;
    font-size: 16px;
    background-color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-loading {
      animation: loading 1.5s linear infinite;
    }
    &-subname {
      margin-top: 16rpx;
      color: #969799;
      font-size: 12px;
      line-height: 36rpx;
    }
  }
  &-cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 14rpx 0 28rpx 0;
    font-size: 16px;
    background-color: #fff;
    border: none;
    &-line {
      width: 100%;
      height: 16rpx;
      background-color: #f7f8fa;
    }
    &-text {
      margin-top: 20rpx;
    }
  }
}
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.disabled {
  color: #c8c9cc;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
