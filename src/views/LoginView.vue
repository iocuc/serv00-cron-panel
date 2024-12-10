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
import useHttp from '@/composables/useHttp';

const password = ref('');
const router = useRouter();

async function onSubmit() {
  const pwd = (password.value || '').trim();
  if (!pwd) return;
  const postUrl = `${import.meta.env.VITE_KEEP_API}/api/login`;
  const result = await useHttp('post', postUrl, { password: pwd });
  if (result.code || !result.data) return;
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
