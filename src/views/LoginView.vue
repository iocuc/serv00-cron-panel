<template>
  <div class="login-page">
    <form class="login-form" @keyup.enter="onSubmit" @submit.prevent>
      <input v-model="password" type="password" >
      <button type="button" @click="onSubmit">确定</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useKeepHttp } from '@/composables/useHttp';

const password = ref('');
const loading = ref(false);

const router = useRouter();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function onSubmit() {
  const pwd = (password.value || '').trim();
  if (!pwd) return;
  loading.value = true;
  const res = await useKeepHttp('post', '/api/login', { password: pwd });
  await delay(2000);
  loading.value = false;
  if (loading.value || res.code || !res.data) return;
  router.push({ name: 'home' });
}
</script>

<style>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.login-form {
  height: 100px;
}
</style>
