<template>
  <view>
    <view class="demo">
      <view class="demo-title">基础用法</view>
      <view class="demo-item">
        <cc-slider
          :value.sync="sliderValue1"
          @touchstart="touchstart"
          @touchend="touchend"
          @change="onChange"
          @input="onInput"
        ></cc-slider>
      </view>
      <view>当前滑块值: {{ sliderValue1 }}</view>
    </view>

    <view class="demo">
      <view class="demo-title">禁用状态</view>
      <view class="demo-item">
        <cc-slider :value.sync="sliderValue2" disabled></cc-slider>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义样式</view>
      <view class="demo-item">
        <cc-slider :value.sync="sliderValue3" activeColor="#ee0a24" inactiveColor="#abc123"></cc-slider>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义按钮</view>
      <view class="demo-item">
        <cc-slider :value.sync="sliderValue4">
          <template #button>
            <view class="custom-button">{{ sliderValue4 }}</view>
          </template>
        </cc-slider>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">最大值和最小值</view>
      <view class="demo-item">
        <cc-slider min="10" max="80" :value.sync="sliderValue6"></cc-slider>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">步进</view>
      <view class="demo-item">
        <cc-slider step="5" :value.sync="sliderValue7"></cc-slider>
      </view>
    </view>

    <view class="demo">
      <view class="demo-title">自定义高度</view>
      <view class="demo-item">
        <cc-slider height="6" :value.sync="sliderValue8"></cc-slider>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      sliderValue1: 20,
      sliderValue2: 20,
      sliderValue3: 20,
      sliderValue4: 20,
      sliderValue5: 20,
      sliderValue6: 20,
      sliderValue7: 20,
      sliderValue8: 20,
    }
  },
  methods: {
    touchstart() {
      console.log('touchstart')
    },
    touchend() {
      console.log('touchend')
    },
    onInput(val) {
      console.log('input', val)
    },
    onChange(val) {
      console.log('change', val)
    }
  },
  mounted() { },
  onLoad() { },
  onShow() { },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>
