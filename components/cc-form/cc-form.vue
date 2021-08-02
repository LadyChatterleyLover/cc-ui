<template>
  <view><slot></slot></view>
</template>

<script>
export default {
  name: 'cc-form',
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: [],
    }
  },
  methods: {
    toJSON() {},
    // 验证表单值
    validate(callback) {
      // 所有需要验证表单项的结果
      if (this.fields && this.fields.length) {
        let tasks = this.fields.map(item => item.validate(this.model[item.prop]))
        Promise.all(tasks)
          .then(res => {
            let result = res.every(item => item === true)
            callback(result)
          })
          .catch(() => callback(false))
      }
    },
    // 重置表单值
    resetFields() {
      if (this.fields && this.fields.length) {
        this.fields.map(item => {
          item.resetField()
        })
      }
    }
  },
  mounted() {
     uni.$emit('formModel', this.model)
     uni.$emit('formRules', this.rules)
  },
  // 因为子组件mounted比父组件mounted先执行 所以这要用created
  created() {
    // 需要检验的表单项
    uni.$on('formFieldAdd', field => {
      this.fields.push(field)
    })
    uni.$on('formReset', val => {
      this.$emit('update:model', val)
    })
  },
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {
  }
}
</script>

<style scoped lang="scss"></style>
