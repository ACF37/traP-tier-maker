<script setup lang="ts">
import { useIconStore } from '@/stores/iconStore'

const store = useIconStore()

async function copyTierAsText() {
  try {
    await navigator.clipboard.writeText(store.asMarkdown)
    alert('クリップボードにコピーしました！')
  } catch (error) {
    console.error('コピーに失敗しました', error)
    alert('コピーに失敗しました')
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
    <div class="flex items-center justify-center">
      <button
        @click="copyTierAsText"
        class="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <span class="flex items-center">
          <svg
            class="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          テキストとしてコピー
        </span>
        <div
          class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"
        ></div>
      </button>
    </div>
    <p class="text-center text-gray-500 text-sm mt-3">
      ランキング結果をクリップボードにコピーします
    </p>
  </div>
</template>
