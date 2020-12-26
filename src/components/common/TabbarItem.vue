<template>
  <div class="TabBaritem">
    <div @click="itemClick">
      <div class="icon">
        <slot v-if="isActive" name="icon1"></slot>
        <slot v-else name="icon2"></slot>
      </div>
      <div class="text" :style="activeStyle">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isactive: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path)
    },
    activeStyle () {
      return this.isActive ? {} : { color: this.activeColor }
    }
  }
}
</script>

<style>
  .TabBaritem{
    flex: 1;
    text-align: center;
    height: 49px;
    padding-top: 1px;
  }
  .TabBaritem img{
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
  }
  .text{
    margin-top: 5px;
  }
</style>
