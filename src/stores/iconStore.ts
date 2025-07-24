import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIconStore = defineStore('icon', () => {
    const iconBankUsers = ref<string[]>([])

    async function addUser(userId: string) {
        if (!userId || iconBankUsers.value.includes(userId)) {
            return
        }

        try {
            const response = await fetch(`https://q.trap.jp/api/v3/public/icon/${userId}`)
            if (response.ok) {
                iconBankUsers.value.push(userId)
            } else {
                alert('ユーザーが見つかりません')
            }
        } catch (error) {
            console.error('Error fetching user icon:', error)
            alert('エラーが発生しました')
        }
    }

    return { iconBankUsers, addUser }
})