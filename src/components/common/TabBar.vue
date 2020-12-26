<template>
  <div>
    <div class="TabBar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  .TabBar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>
