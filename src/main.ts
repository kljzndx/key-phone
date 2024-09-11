import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useScreenRouter } from './routers/screenRouter'

const app = createApp(App)

app.use(createPinia())
app.use(useScreenRouter)

app.mount('#app')
