import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useIconStore = defineStore(
  'icon',
  () => {
    let id = 0
    const tierData = ref([
      { id: id++, name: 'iconBank', users: [] as string[] },
      { id: id++, name: 'S', users: [] as string[] },
      { id: id++, name: 'A', users: [] as string[] },
      { id: id++, name: 'B', users: [] as string[] },
      { id: id++, name: 'C', users: [] as string[] },
      { id: id++, name: 'D', users: [] as string[] },
    ])

    async function addUser(userId: string) {
      if (
        !userId ||
        tierData.value
          .map((tier) => tier.users)
          .flat()
          .includes(userId)
      ) {
        return { success: false, reason: 'already_exists' }
      }

      try {
        const response = await fetch(`https://q.trap.jp/api/v3/public/icon/${userId}`)
        if (response.ok) {
          tierData.value[0].users.push(userId)
          return { success: true }
        } else {
          return { success: false, reason: 'invalid_id' }
        }
      } catch (error) {
        return { success: false, reason: `error_${error instanceof Error ? error.message : 'unknown'}` }
      }
    }

    const asMarkdown = computed(() => {
      let text = '## Tier表\n\n|Tier|Member|\n|-|-|\n'

      for (const tier of tierData.value) {
        const users = tier.users
        const userIcons = users.map((u) => `:@${u}:`).join(' ')
        text += `|${tier.name}| ${userIcons} |\n`
      }
      return text
    })

    return { tierData, addUser, asMarkdown }
  },
  {
    persist: true,
  },
)
