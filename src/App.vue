<script setup lang="ts">
import UserInputForm from './components/UserInputForm.vue'
import IconBank from './components/IconBank.vue'
import TierList from './components/TierList.vue'
import ShareButton from './components/ShareButton.vue';
</script>

<template>
  <header>
    <h1>traP Tier Maker</h1>
  </header>
  <main>
    <UserInputForm />
    <IconBank />
    <TierList />
    <ShareButton />
  </main>
</template>
