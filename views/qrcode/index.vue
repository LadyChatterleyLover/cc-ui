<template>
  <view>
    <cc-qrcode :text='text'></cc-qrcode>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: '',
      text: 'https://static-df19c143-c147-44fa-84a0-61752f5834cc.bspapp.com/cc-ui/#/'
    }
  },
  methods: {
    qrcode() {}
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
