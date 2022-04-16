import { createApp } from 'vue'
import router from './router'
import './router/promission'
import 'nprogress/nprogress.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
