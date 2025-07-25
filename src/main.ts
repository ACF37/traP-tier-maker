import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './index.css'

const CURRENT_VERSION = '1.1.0'
const VERSION_KEY = 'app-version'
const PINIA_KEY = 'icon'

function checkVersion() {
  const savedVersion = localStorage.getItem(VERSION_KEY)
  if (savedVersion !== CURRENT_VERSION) {
    localStorage.removeItem(PINIA_KEY)

    localStorage.setItem(VERSION_KEY, CURRENT_VERSION)
  }
}

checkVersion()

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState())

app.use(pinia)

app.mount('#app')
