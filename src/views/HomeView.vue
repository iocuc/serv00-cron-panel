<template>
  <main class="home-page">
    <button @click="onRunScript">运行</button>
  </main>
</template>

<script setup>
import { useKeepHttp } from '@/composables/useHttp';

async function onRunScript() {
  useKeepHttp('post', '/api/run');
}
</script>

<style>
.home-page {
  margin: 20px auto;
  max-width: 1280px;
}
</style>
