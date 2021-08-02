<template>
  <view>
    <cc-form :model.sync="model" :rules="rules" ref="form">
      <cc-form-item leftIcon="person" label="用户名" prop="username"><cc-field :value.sync="model.username" :border="false"></cc-field></cc-form-item>
      <cc-form-item label="密码" prop="password"><cc-field type="password" :value.sync="model.password" :border="false"></cc-field></cc-form-item>
      <cc-form-item label="验证码"><cc-field type="password" :value.sync="model.code" :border="false"></cc-field></cc-form-item>
      <cc-form-item>
        <cc-button type="primary" @click="submit">提交</cc-button>
        <cc-button style="margin-left: 30rpx;" @click="reset">重置</cc-button>
      </cc-form-item>
    </cc-form>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      model: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'change'
          },
          {
            min: 2,
            max: 6,
            message: '用户名2-6位之间',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('success')
        } else {
          console.log('fail')
        }
      })
    },
    reset() {
      this.$refs.form.resetFields()
    },
  },
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
