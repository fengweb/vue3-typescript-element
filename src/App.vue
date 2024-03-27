<template>
  <div>
    <svg-icon name="photo" width="50" height="50"></svg-icon>
    <h2 class="base-font-color">字体颜色</h2>
    <el-button type="primary">123</el-button>
    <Edit />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
