<template>
  <view>
    <cc-button type="primary" @click='show = true'>选择城市</cc-button>
    <cc-choose-city :show.sync='show' @select='onSelect'></cc-choose-city>
  </view>

</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        show: false
      }
    },
    methods: {
      onSelect(val) {
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
