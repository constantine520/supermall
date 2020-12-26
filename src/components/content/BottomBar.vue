<template>
  <tab-bar>
    <tabbar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="icon1">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="icon2">
      <div slot="text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="icon1">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="icon2">
      <div slot="text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="icon1">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="icon2">
      <div slot="text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="icon1">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="icon2">
      <div slot="text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../common/TabBar.vue'
import TabbarItem from '../common/TabbarItem.vue'
export default {
  name: 'BottomBar',
  data () {
    return {}
  },
  components: {
    TabBar,
    TabbarItem
  }
}
</script>

<style>
</style>
