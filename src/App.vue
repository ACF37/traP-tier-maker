<script setup lang="ts">
import UserInputForm from './components/UserInputForm.vue'
import IconBank from './components/IconBank.vue'
import TierList from './components/TierList.vue'
import ShareButton from './components/ShareButton.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex items-center">
          <div class="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
          <h1
            class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            traP Tier Maker
          </h1>
        </div>
        <p class="text-gray-600 mt-2 text-sm">
          traPメンバーをランク付けして、あなただけのティアリストを作成しよう
        </p>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <UserInputForm />
      <IconBank />
      <TierList />
      <ShareButton />
    </main>

    <footer class="mt-16 py-8 border-t border-gray-200 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>© 2025 traP Tier Maker - ドラッグ&ドロップでお気に入りのメンバーをランク付けしよう！</p>
      </div>
    </footer>
  </div>
</template>
