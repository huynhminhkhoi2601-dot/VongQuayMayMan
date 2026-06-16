<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Reset css cơ bản cho toàn bộ trang để vòng quay tràn viền mượt mà */
body, html, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #001236; /* Màu nền tối đồng bộ với vòng quay */
  overflow: hidden; /* Ẩn thanh cuộn nếu không cần thiết */
}
</style>