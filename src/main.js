import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//importare il router
import { router } from './router'

//aggiungi .use(router)
createApp(App).use(router).mount('#app')
