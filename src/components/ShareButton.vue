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
  <div class="share-button-container">
    <button @click="copyTierAsText">テキストとしてコピー</button>
  </div>
</template>
