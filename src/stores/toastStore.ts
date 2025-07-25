import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])

  function addToast(toast: Omit<Toast, 'id'>) {
    const id = Date.now().toString()
    const newToast: Toast = {
      id,
      message: toast.message,
      type: toast.type,
      duration: toast.duration ?? 3000,
    }

    toasts.value.push(newToast)

    // 自動削除
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }

    return id
  }

  function removeToast(id: string) {
    const index = toasts.value.findIndex((toast) => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  // 便利メソッド
  function showSuccess(message: string, duration?: number) {
    return addToast({ message, type: 'success', duration })
  }

  function showError(message: string, duration?: number) {
    return addToast({ message, type: 'error', duration })
  }

  function showWarning(message: string, duration?: number) {
    return addToast({ message, type: 'warning', duration })
  }

  function showInfo(message: string, duration?: number) {
    return addToast({ message, type: 'info', duration })
  }

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
})
