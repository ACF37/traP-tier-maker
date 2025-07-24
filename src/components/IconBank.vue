<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore';

const store = useIconStore();
</script>

<template>
  <div class="icon-bank">
    <img 
      v-for="user in store.iconBankUsers"
      :key="user"
      :src="`https://q.trap.jp/api/v3/public/icon/${user}`"
      :alt="user"
      class="user-icon"
    />
  </div>
</template>

<style scoped>
.icon-bank {
  min-height: 100px;
  border: 2px dashed #ccc;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.user-icon {
  width: 60px;
  height: 60px;
}
</style>