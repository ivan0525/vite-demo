import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import 'github-markdown-css/github-markdown.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
