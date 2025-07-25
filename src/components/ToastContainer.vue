<script setup lang="ts">
import { useToastStore } from '@/stores/toastStore'

const toastStore = useToastStore()

const getToastClasses = (type: string) => {
  const baseClasses =
    'flex items-center p-4 mb-3 rounded-lg shadow-lg border-l-4 transition-all duration-300 transform'

  switch (type) {
    case 'success':
      return `${baseClasses} bg-green-50 border-green-500 text-green-800`
    case 'error':
      return `${baseClasses} bg-red-50 border-red-500 text-red-800`
    case 'warning':
      return `${baseClasses} bg-yellow-50 border-yellow-500 text-yellow-800`
    case 'info':
      return `${baseClasses} bg-blue-50 border-blue-500 text-blue-800`
    default:
      return `${baseClasses} bg-gray-50 border-gray-500 text-gray-800`
  }
}

const getIconPath = (type: string) => {
  switch (type) {
    case 'success':
      return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'error':
      return 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'warning':
      return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z'
    case 'info':
      return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    default:
      return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
      <TransitionGroup name="toast" tag="div" class="space-y-2">
        <div
          v-for="toast in toastStore.toasts"
          :key="toast.id"
          :class="getToastClasses(toast.type)"
        >
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" :d="getIconPath(toast.type)" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium">{{ toast.message }}</p>
          </div>
          <button
            @click="toastStore.removeToast(toast.id)"
            class="ml-3 flex-shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-70 transition-opacity"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
