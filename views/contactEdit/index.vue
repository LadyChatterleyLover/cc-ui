<template>
  <view>
    <cc-contact-edit :contactInfo="editingContact"></cc-contact-edit>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      editingContact: {
        name: '',
        tel: ''
      }
    }
  },
  methods: {},
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
