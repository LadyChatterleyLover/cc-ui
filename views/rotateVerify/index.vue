<template>
  <view>
    <cc-button type="primary" @click="show = true">开始验证</cc-button>
    <cc-rotate-verify :show.sync="show" :src='src'></cc-rotate-verify>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
      src: require('../../static/logo.png')
    }
  },
  methods: {},
  mounted() {},
  onLoad() {},
  onShow() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss"></style>
