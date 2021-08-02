<template>
  <view>
    <cc-calendar :show.sync='show' @confirm='confirm'></cc-calendar>
    <cc-button type="primary" size="small" @click='show = true'>打开日历</cc-button>
  </view>

</template>

<script>
  export default {
    components: {},
    props: {
      
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      confirm(val) {
        console.log(val)
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
    watch: {},
  }
</script>

<style scoped lang="scss">

</style>
