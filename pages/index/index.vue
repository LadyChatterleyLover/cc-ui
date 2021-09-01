<template>
  <view class="demo">
    <view class="demo-item" v-for="(item, index) in list" :key="index">
      <view class="demo-title">{{ item.title }}</view>
      <view class="demo-content" v-for="(item1, index1) in item.item" :key="index1" @click="clickItem(item1)">
        <view class="demo-content-left">
          <view class="demo-content-left-label">{{ item1.label }}</view>
          <view class="demo-content-left-title">{{ item1.title }}</view>
        </view>
        <view class="demo-content-icon"><cc-icon type="arrowright" size="22" color="#979797"></cc-icon></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '基础组件',
          item: [
            {
              label: 'Button',
              title: '按钮',
              url: '/views/button/index'
            },
            {
              label: 'Cell',
              title: '单元格',
              url: '/views/cell/index'
            },

            {
              label: 'Layout',
              title: '布局',
              url: '/views/layout/index'
            },
            {
              label: 'Popup',
              title: '弹出层',
              url: '/views/popup/index'
            },
            {
              label: 'Toast',
              title: '轻提示',
              url: '/views/toast/index'
            }
          ]
        },
        {
          title: '表单组件',
          item: [
            {
              title: 'Calendar',
              label: '日历',
              url: '/views/calendar/index'
            },
            {
              title: 'Checkbox',
              label: '复选框',
              url: '/views/checkbox/index'
            },
            {
              title: 'Field',
              label: '输入框',
              url: '/views/field/index'
            },
            {
              title: 'Form',
              label: '表单',
              url: '/views/form/index'
            },
            {
              title: 'NumberKeyboard',
              label: '数字键盘',
              url: '/views/numberKeyboard/index'
            },
            {
              title: 'PasswordInput',
              label: '密码输入框',
              url: '/views/passwordInput/index'
            },
            {
              title: 'Radio',
              label: '单选框',
              url: '/views/radio/index'
            },
            {
              title: 'Rate',
              label: '评分',
              url: '/views/rate/index'
            },
            {
              title: 'Search',
              label: '搜索框',
              url: '/views/search/index'
            },
            {
              title: 'Slider',
              label: '滑块',
              url: '/views/slider/index'
            },
            {
              title: 'Stepper',
              label: '步进器',
              url: '/views/stepper/index'
            },
            {
              title: 'Switch',
              label: '开关',
              url: '/views/switch/index'
            },
            {
              title: 'Checker',
              label: '选择项',
              url: '/views/checker/index'
            },
            {
              title: 'Upload',
              label: '文件上传',
              url: '/views/upload/index'
            }
          ]
        },
        {
          title: '反馈组件',
          item: [
            {
              title: 'ActionSheet',
              label: '动作面板',
              url: '/views/actionSheet/index'
            },
            {
              title: 'Dialog',
              label: '弹出框',
              url: '/views/dialog/index'
            },
            {
              title: 'Alert',
              label: '警告提示',
              url: '/views/alert/index'
            },
            {
              title: 'DropdownMenu',
              label: '下拉菜单',
              url: '/views/dropdown/index'
            },
            {
              title: 'SlideVerify',
              label: '滑动验证码',
              url: '/views/slideVerify/index'
            },
            {
              title: 'rotateVerify',
              label: '旋转验证',
              url: '/views/rotateVerify/index'
            },
            {
              title: 'Loading',
              label: '加载',
              url: '/views/loading/index'
            },
            {
              title: 'Notify',
              label: '消息通知',
              url: '/views/notify/index'
            },
            {
              title: 'Mask',
              label: '遮罩层',
              url: '/views/mask/index'
            },
            {
              title: 'PullRefresh',
              label: '下拉刷新',
              url: '/views/pullRefresh/index'
            },
            {
              title: 'SwipeCell',
              label: '滑动单元格',
              url: '/views/swipeCell/index'
            },
            {
              title: 'Avatar',
              label: '头像',
              url: '/views/avatar/index'
            },
            {
              title: 'Qrcode',
              label: '生成二维码',
              url: '/views/qrcode/index'
            }
          ]
        },
        {
          title: '展示组件',
          item: [
            {
              title: 'Badge',
              label: '徽标',
              url: '/views/badge/index'
            },
            {
              title: 'CircleProgress',
              label: '圆形进度条',
              url: '/views/circleProgress/index'
            },
            {
              title: 'Collapse',
              label: '折叠面板',
              url: '/views/collapse/index'
            },
            {
              title: 'CountDown',
              label: '倒计时',
              url: '/views/countDown/index'
            },
            {
              title: 'Countup',
              label: '数字滚动',
              url: '/views/countup/index'
            },
            {
              title: 'TimeLine',
              label: '时间轴',
              url: '/views/timeLine/index'
            },
            {
              title: 'Divider',
              label: '分割线',
              url: '/views/divider/index'
            },
            {
              title: 'Steps',
              label: '步骤条',
              url: '/views/steps/index'
            },
            {
              title: 'ImagePreview',
              label: '图片预览',
              url: '/views/imagePreview/index'
            },
            {
              title: 'NoticeBar',
              label: '通知栏',
              url: '/views/noticeBar/index'
            },
            {
              title: 'Progress',
              label: '进度条',
              url: '/views/progress/index'
            },
            {
              title: 'Skeleton',
              label: '骨架屏',
              url: '/views/skeleton/index'
            },
            {
              title: 'Subsection',
              label: '分段器',
              url: '/views/subsection/index'
            },
            {
              title: 'Sticky',
              label: '粘性布局',
              url: '/views/sticky/index'
            },
            {
              title: 'Swiper',
              label: '轮播',
              url: '/views/swiper/index'
            },
            {
              title: 'Tag',
              label: '标签',
              url: '/views/tag/index'
            },
            {
              title: 'OpenMore',
              label: '展开更多',
              url: '/views/openMore/index'
            },
            {
              title: 'LoadMore',
              label: '加载更多',
              url: '/views/loadMore/index'
            },
            {
              title: 'Gap',
              label: '间隔槽',
              url: '/views/gap/index'
            },
            {
              title: 'Fab',
              label: '悬浮按钮',
              url: '/views/fab/index'
            }
          ]
        },
        {
          title: '导航组件',
          item: [
            {
              title: 'Grid',
              label: '宫格',
              url: '/views/grid/index'
            },
            {
              title: 'IndexBar',
              label: '索引栏',
              url: '/views/indexBar/index'
            },
            {
              title: 'NavBar',
              label: '导航栏',
              url: '/views/navBar/index'
            },
            {
              title: 'BackTop',
              label: '回到顶部',
              url: '/views/backTop/index'
            },
            {
              title: 'Pagination',
              label: '分页',
              url: '/views/pagination/index'
            },
            {
              title: 'Sidebar',
              label: '侧边导航',
              url: '/views/sidebar/index'
            },
            {
              title: 'Tabs',
              label: '标签页',
              url: '/views/tabs/index'
            },
            {
              title: 'FullTabs',
              label: '全屏选项卡',
              url: '/views/fullTabs/index'
            },
            {
              title: 'Tabbar',
              label: '标签栏',
              url: '/views/tabbar/index'
            },
            {
              title: 'Link',
              label: '超链接',
              url: '/views/link/index'
            },
            {
              title: 'TreeSelect',
              label: '分类选择',
              url: '/views/treeSelect/index'
            }
          ]
        },
        {
          title: '业务组件',
          item: [
            {
              title: 'AddressEdit',
              label: '地址编辑',
              url: '/views/addressEdit/index'
            },
            {
              title: 'AddressList',
              label: '地址列表',
              url: '/views/addressList/index'
            },
            {
              title: 'Area',
              label: '省市区选择',
              url: '/views/area/index'
            },
            {
              title: 'GoodsCard',
              label: '商品卡片',
              url: '/views/goodsCard/index'
            },
            {
              title: 'ContactCard',
              label: '联系人卡片',
              url: '/views/contactCard/index'
            },
            {
              title: 'ContactEdit',
              label: '联系人编辑',
              url: '/views/contactEdit/index'
            },
            {
              title: 'ContactList',
              label: '联系人列表',
              url: '/views/contactList/index'
            },
            {
              title: 'GoodsAction',
              label: '商品导航',
              url: '/views/goodsAction/index'
            },
            {
              title: 'SubmitBar',
              label: '提交订单栏',
              url: '/views/submitBar/index'
            },
            {
              title: 'Coupon',
              label: '优惠券',
              url: '/views/coupon/index'
            },
            {
              title: 'ScrollBar',
              label: '滚动导航',
              url: '/views/scrollBar/index'
            }
          ]
        },
        {
          title: '项目模板',
          item: [
            {
              title: 'ScrollBar',
              label: '滚动导航(左右联动)',
              url: '/views/scrollBarLinkage/index'
            },
            {
              title: 'ScrollBar',
              label: '滚动导航(左右独立)',
              url: '/views/scrollBar/index'
            },
            {
              title: 'ChooseCity',
              label: '城市选择',
              url: '/views/chooseCity/index'
            }
          ]
        }
      ]
      
    }
  },
  onLoad() {
    
  },
  methods: {
    clickItem(item) {
      uni.navigateTo({
        url: item.url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  background: #f7f8fa;
  padding: #{topx(30)} #{topx(25)};
  &-title {
    font-size: 14px;
    color: #909ca4;
    margin-bottom: #{topx(20)};
  }
  &-content {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 #{topx(40)};
    background: #fff;
    height: #{topx(45)};
    background: #fff;
    border-radius: #{topx(22)};
    margin-bottom: #{topx(13)};
    &-left {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: #333;
      &-title {
        margin-left: #{topx(10)};
      }
    }
    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: #{topx(30)};
    }
  }
}
</style>
