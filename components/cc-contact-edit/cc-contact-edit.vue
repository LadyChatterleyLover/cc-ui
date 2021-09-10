<template>
  <view class="cc-contact-edit">
    <view class="cc-contact-edit-field">
      <cc-form :model="contactInfo" :rules="rules">
        <cc-form-item prop="name">
          <cc-field :border="false" style="width: 100%;" clearable label="姓名" :placeholder="userPlaceholder" :value.sync="info.name"></cc-field></cc-form-item>

        <cc-form-item prop="tel"><cc-field :border="false" style="width: 100%;" clearable label="电话" :placeholder="telPlaceholder" :value.sync="info.tel"></cc-field></cc-form-item>
      </cc-form>
    </view>
    <view class="cc-contact-edit-default" v-if="showSetDefault">
      <view class="cc-contact-edit-default-title">{{setDefaultLabel}}</view>
      <view class="cc-contact-edit-default-check"><cc-switch :value.sync="info.isDefault"></cc-switch></view>
    </view>
    <view class="cc-contact-edit-button-save" @click="save">
      <cc-button :loading='isSaving' round block :color="saveButtonColor">{{ saveButtonText }}</cc-button>
    </view>
    <view class="cc-contact-edit-button-del" @click="del">
      <cc-button :loading='isDeleting' round block :color="deleteButtonColor">{{ deleteButtonText }}</cc-button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'cc-contact-edit',
  components: {},
  props: {
    // 联系人信息
    contactInfo: {
      type: Object,
      required: true
    },
    // 联系人姓名占位符
    userPlaceholder: {
      type: String,
      default: '请输入姓名'
    },
    // 联系人电话占位符
    telPlaceholder: {
      type: String,
      default: '请输入电话'
    },
    // 是否显示默认联系人栏
    showSetDefault: {
      type: Boolean,
      default: true
    },
    // 默认联系人栏文案
    setDefaultLabel: {
      type: String,
      default: '设为默认联系人'
    },
    // 是否显示保存按钮加载动画
    isSaving: {
      type: Boolean,
      default: false
    },
    // 是否显示删除按钮加载动画
    isDeleting: {
      type: Boolean,
      default: false
    },
    // 保存按钮颜色
    saveButtonColor: {
      type: String,
      default: '#ee0a24'
    },
    // 删除按钮颜色
    deleteButtonColor: {
      type: String,
      default: ''
    },
    // 是否显示删除按钮
    showDelete: {
      type: Boolean,
      default: true
    },
    // 保存按钮文字
    saveButtonText: {
      type: String,
      default: '保存'
    },
    // 删除按钮文字
    deleteButtonText: {
      type: String,
      default: '删除'
    }
  },
  data() {
    return {
      info: {...this.addressInfo, isDefault: false},
      rules: {
        name: [
          {
            required: true,
            message: '联系人姓名不能为空',
            trigger: 'blur'
          }
        ],
        tel: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('联系人电话不能为空'))
              } else if (!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(value)) {
                callback(new Error('请输入正确的手机号码'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    save() {
      this.$emit('save', this.info)
    },
    del() {
      this.$emit('delete', this.info)
    },
  },
  mounted() {
    
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.cc-contact-edit {
  padding: 24rpx;
  &-field {
    border-radius: 16rpx;
    &-item {
      width: 100%;
    }
  }
  &-default {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24rpx;
    overflow: hidden;
    border-radius: 16rpx;
    background: #fff;
    padding: 20rpx 32rpx;
  }
  &-button {
    &-save {
      margin-top: 60rpx;
      margin-bottom: 30rpx;
    }
  }
}
</style>
