<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore'
import draggable from 'vuedraggable'

const store = useIconStore()
const tiers = Object.keys(store.tierData).filter(
  (key) => key !== 'iconBank',
) as (keyof typeof store.tierData)[]
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div class="space-y-3">
      <div v-for="tier in tiers" :key="tier" class="group">
        <div
          class="flex items-stretch bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-200"
        >
          <div
            class="w-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex justify-center items-center font-bold text-lg shadow-inner"
          >
            {{ tier }}
          </div>
          <div class="flex-grow bg-white border-l border-gray-200">
            <draggable
              v-model="store.tierData[tier]"
              class="min-h-[100px] p-4 flex flex-wrap gap-3 hover:bg-gray-50 transition-colors duration-200"
              group="icons"
              :item-key="tier"
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
      </div>
    </div>
  </div>
</template>
