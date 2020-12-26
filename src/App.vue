<template>
  <div id="app">
    <bottom-bar></bottom-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import BottomBar from 'components/content/BottomBar.vue'
export default {
  components: {
    BottomBar
  }
}
</script>

<style>
  @import url("assets/css/base.css");
</style>
