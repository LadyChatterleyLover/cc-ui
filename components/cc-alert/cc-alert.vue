<template>
  <view class="cc-alert" :style="{ borderColor, background }" v-if="visible">
    <view class="cc-alert-icon" v-if="showIcon"><cc-icon :type="icon" :color="iconColor" size="14"></cc-icon></view>
    <view class="cc-alert-content">
      <view class="cc-alert-content-title" v-if="title">{{ title }}</view>
      <view class="cc-alert-content-description" v-if="description">{{ description }}</view>
    </view>
    <view class="cc-alert-close" @click="close" v-if="closeable"><cc-icon type="closeempty" size="14" color="#c0c4cc"></cc-icon></view>
  </view>
</template>

<script>
export default {
  name: 'cc-alert',
  components: {},
  props: {
    // 是否显示警告提示
    show: {
      type: Boolean,
      default: true
    },
    // 类型
    type: {
      type: String,
      default: 'warning',
      validator(val) {
        return ['primary', 'success', 'warning', 'error', 'info'].includes(val)
      }
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 描述
    description: {
      type: String,
      default: ''
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.show,
      // 图标数组
      iconList: [
        {
          type: 'primary',
          icon: 'checkbox'
        },
        {
          type: 'success',
          icon: 'info'
        },
        {
          type: 'error',
          icon: 'close'
        },
        {
          type: 'warning',
          icon: 'info'
        },
        {
          type: 'info',
          icon: 'info'
        }
      ],
      // 颜色数组
      colorList: [
        {
          type: 'primary',
          borderColor: '#a0cfff',
          background: '#ecf5ff'
        },
        {
          type: 'success',
          borderColor: '#71d5a1',
          background: '#dbf1e1'
        },
        {
          type: 'error',
          borderColor: '#a0cfff',
          background: '#fef0f0'
        },
        {
          type: 'warning',
          borderColor: '#fcbd71',
          background: '#fdf6ec'
        },
        {
          type: 'info',
          borderColor: '#c8c9cc',
          background: '#f4f4f5'
        }
      ],
      // 图标颜色数组
      iconColorList: [
        {
          type: 'primary',
          color: '#2979ff'
        },
        {
          type: 'success',
          color: '#19be6b'
        },
        {
          type: 'error',
          color: '#fa3534'
        },
        {
          type: 'warning',
          color: '#f90'
        },
        {
          type: 'info',
          color: '#909399'
        }
      ]
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.visible = false
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {
    // 图标类型
    icon() {
      return this.iconList.find(item => this.type === item.type).icon
    },
    // 图标颜色
    iconColor() {
      return this.iconColorList.find(item => this.type === item.type).color
    },
    borderColor() {
      return this.colorList.find(item => this.type === item.type).borderColor
    },
    background() {
      return this.colorList.find(item => this.type === item.type).background
    }
  },
  watch: {
    visible(val) {
      this.$emit('update:show', val)
    },
    show(val) {
      this.visible = val
    }
  }
}
</script>

<style scoped lang="scss">
.cc-alert {
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  border: 1px solid;
  padding: 6px 12px;
  border-radius: 2px;
  &-icon {
    margin-right: 6px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title {
      font-size: 13px;
      color: #303133;
      font-weight: 500;
    }
    &-description {
      font-size: 12px;
      text-align: left;
      color: #606266;
    }
  }
  &-close {
    position: absolute;
    top: 6px;
    right: 6px;
    z-index: 99;
  }
}
</style>
