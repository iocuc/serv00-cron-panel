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

function onSubmit() {
  const pwd = (password.value || '').trim();
  if (pwd) {
    console.log(pwd)
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
