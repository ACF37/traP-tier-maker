<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore'
import draggable from 'vuedraggable'

const store = useIconStore()
const tiers = Object.keys(store.tierData).filter(
  (key) => key !== 'iconBank',
) as (keyof typeof store.tierData)[]
</script>

<template>
  <div class="tier-list-container">
    <div v-for="tier in tiers" :key="tier" class="tier-row">
      <div class="tier-label">{{ tier }}</div>
      <draggable
        v-model="store.tierData[tier]"
        class="tier-dropzone"
        group="icons"
        :item-key="tier"
      >
        <template #item="{ element: user }">
          <img
            :src="`https://q.trap.jp/api/v3/public/icon/${user}`"
            :alt="user"
            class="user-icon"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.tier-row {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.tier-label {
  width: 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #eee;
  border: 1px solid #ccc;
}

.tier-dropzone {
  flex-grow: 1;
  border: 1px solid #ccc;
  min-height: 80px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.user-icon {
  width: 60px;
  height: 60px;
  cursor: move;
}
</style>
