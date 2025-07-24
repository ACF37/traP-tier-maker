import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIconStore = defineStore('icon', () => {
  const tierData = ref({
    iconBank: [] as string[],
    S: [] as string[],
    A: [] as string[],
    B: [] as string[],
    C: [] as string[],
    D: [] as string[],
  })

  async function addUser(userId: string) {
    if (!userId || Object.values(tierData.value).flat().includes(userId)) {
      return
    }

    try {
      const response = await fetch(`https://q.trap.jp/api/v3/public/icon/${userId}`)
      if (response.ok) {
        tierData.value.iconBank.push(userId)
      } else {
        alert('ユーザーが見つかりません')
      }
    } catch (error) {
      console.error('Error fetching user icon:', error)
      alert('エラーが発生しました')
    }
  }

  return { tierData, addUser }
})
