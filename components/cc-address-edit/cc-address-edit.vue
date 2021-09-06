<template>
  <view class="cc-address-edit">
    <view class="cc-address-edit-field">
      <cc-form :model="addressInfo" :rules="rules">
        <cc-form-item prop="name">
          <cc-field
            style="width: 100%;"
            :border="false"
            clearable
            label="姓名"
            :placeholder="userPlaceholder"
            :value.sync="info.name"
          ></cc-field>
        </cc-form-item>

        <cc-form-item prop="tel">
          <cc-field
            :border="false"
            style="width: 100%;"
            clearable
            label="电话"
            :placeholder="telPlaceholder"
            :value.sync="info.tel"
          ></cc-field>
        </cc-form-item>

        <cc-form-item>
          <cc-field
            style="width: 100%;"
            :border="false"
            label="地区"
            readonly
            :placeholder="areaPlaceholder"
            rightIcon="arrowright"
            :value.sync="area"
            @click="clickArea"
          ></cc-field>
        </cc-form-item>

        <cc-form-item>
          <cc-field
            style="width: 100%;"
            :border="false"
            label="详细地址"
            clearable
            :placeholder="detailAddressPlaceholder"
            :value.sync="info.addressDetail"
          ></cc-field>
        </cc-form-item>
        <cc-form-item v-if="showPostal">
          <cc-field
            style="width: 100%;"
            clearable
            :border="false"
            label="邮政编码"
            :placeholder="postalPlaceholder"
            :value.sync="info.postalCode"
          ></cc-field>
        </cc-form-item>
      </cc-form>
    </view>
    <view class="cc-address-edit-default">
      <view class="cc-address-edit-default-title">设置为默认地址</view>
      <view class="cc-address-edit-default-check">
        <cc-switch :value.sync="info.isDefault"></cc-switch>
      </view>
    </view>
    <view class="cc-address-edit-button-save" @click="save">
      <cc-button round block :color="saveButtonColor">{{ saveButtonText }}</cc-button>
    </view>
    <view class="cc-address-edit-button-del" @click="del" v-if="showDelete">
      <cc-button round block :color="deleteButtonColor">{{ deleteButtonText }}</cc-button>
    </view>

    <cc-popup @ mode="bottom" :show.sync="visible" height="600rpx">
      <cc-area title=" " @confirm="confirm" @cancel="cancel"></cc-area>
    </cc-popup>
  </view>
</template>

<script>
export default {
  name: 'cc-address-edit',
  components: {},
  props: {
    // 收货人信息
    addressInfo: {
      type: Object,
      default: () => {
        return {
          id: '',
          name: '',
          tel: '',
          province: '',
          city: '',
          county: '',
          addressDetail: '',
          areaCode: '',
          postalCode: '',
          isDefault: false
        }
      }
    },
    // 收货人姓名占位符
    userPlaceholder: {
      type: String,
      default: '收货人姓名'
    },
    // 收货人电话占位符
    telPlaceholder: {
      type: String,
      default: '收货人电话'
    },
    // 地区占位符
    areaPlaceholder: {
      type: String,
      default: '请选择省 / 市 / 区'
    },
    // 详细地址占位符
    detailAddressPlaceholder: {
      type: String,
      default: '街道门牌、楼层房间号等信息'
    },
    // 邮政编码占位符
    postalPlaceholder: {
      type: String,
      default: '邮政编码'
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
    // 是否显示邮政编码
    showPostal: {
      type: Boolean,
      default: true
    },
    // 是否显示默认地址栏
    showSetDefault: {
      type: Boolean,
      default: true
    },
    // 是否显示删除按钮
    showDelete: {
      type: Boolean,
      default: true
    },
    // 是否显示地区
    showArea: {
      type: Boolean,
      default: true
    },
    // 是否显示详细地址
    showDetail: {
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
      info: this.addressInfo,
      rules: {
        name: [
          {
            required: true,
            message: '收货人姓名不能为空',
            trigger: 'blur'
          }
        ],
        tel: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('收货人电话不能为空'))
              } else if (!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(value)) {
                callback(new Error('请输入正确的手机号码'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      },
      visible: false
    }
  },
  methods: {
    save() {
      this.$emit('save', this.info)
    },
    del() {
      this.$emit('delete', this.info)
    },
    clickArea() {
      this.visible = true
    },
    confirm(val) {
      this.info.province = val[0].name
      this.info.city = val[1].name
      this.info.county = val[2].name
      this.info.areaCode = val[2].code
      this.visible = false
    },
    cancel() {
      this.visible = false
    },
    // 生成id
    genID(length) {
      return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
    },
  },
  mounted() {
    this.info.id = this.genID(20)
  },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {
    area: {
      get() {
        {
          if (this.info.province !== '' && this.info.city !== '' && this.info.county !== '') {
            return this.info.province + '/' + this.info.city + '/' + this.info.county
          } else {
            return ''
          }
        }
      },
      set() { }
    }
  },
  watch: {
    addressInfo: {
      handler(val) {
        this.info = val
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
.cc-address-edit {
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
