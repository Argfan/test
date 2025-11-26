import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/style.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

