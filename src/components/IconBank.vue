<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore'
import draggable from 'vuedraggable'

const store = useIconStore()
</script>

<template>
  <div class="icon-bank-container">
    <h3>アイコン置き場</h3>
    <draggable v-model="store.tierData.iconBank" class="icon-bank" group="icons" item-key="user">
      <template #item="{ element: user }">
        <img :src="`https://q.trap.jp/api/v3/public/icon/${user}`" :alt="user" class="user-icon" />
      </template>
    </draggable>
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
