<script setup lang="ts">
import { ref } from 'vue'

const userId = ref('')
</script>

<template>
  <div class="form-container">
    <input type="text" v-model="userId" placeholder="traP IDを入力" />
    <button>アイコンを追加</button>
  </div>
</template>

<style scoped>
.form-container {
  margin-bottom: 20px;
}
</style>
