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

const password = ref('');

async function onSubmit() {
  const pwd = (password.value || '').trim();
  if (pwd) {
    const formData = new FormData();
    formData.append('password', pwd);
    const postUrl = `${import.meta.env.VITE_KEEP_API}/api/login`; 
    const response = await fetch(postUrl, { method: 'POST', body: formData });
    const result = await response.json();
    console.log(result);
  }
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
