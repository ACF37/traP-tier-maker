<script setup lang="ts">
import { ref } from 'vue'
import { useIconStore } from '@/stores/iconStore';

const userId = ref('')
const store = useIconStore()

async function handleAddUser() {
  await store.addUser(userId.value)
  userId.value = ''
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleAddUser">
      <input type="text" v-model="userId" placeholder="traP IDを入力" />
      <button type="submit">アイコンを追加</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  margin-bottom: 20px;
}
</style>
