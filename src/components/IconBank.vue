<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore'
import draggable from 'vuedraggable'

const store = useIconStore()
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
    <div class="flex items-center mb-4">
      <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
      <h3 class="text-xl font-bold text-gray-800">アイコン置き場</h3>
    </div>
    <div
      class="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-200"
    >
      <draggable
        v-model="store.tierData.iconBank"
        class="min-h-[120px] p-4 flex flex-wrap gap-3"
        group="icons"
        item-key="user"
      >
        <template #item="{ element: user }">
          <img
            :src="`https://q.trap.jp/api/v3/public/icon/${user}`"
            :alt="user"
            class="w-16 h-16 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200 cursor-move hover:scale-105"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>
