<script setup lang="ts">
import { ref } from 'vue'

const tiers = ref<string[]>(['S', 'A', 'B', 'C', 'D'])
</script>

<template>
  <div class="tier-list-container">
    <div v-for="tier in tiers" :key="tier" class="tier-row">
      <div class="tier-label">{{ tier }}</div>
      <div class="tier-dropzone"></div>
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
}
</style>
