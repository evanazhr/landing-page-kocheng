import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vScrollReveal from './directives/v-scroll-reveal'

const app = createApp(App)

app.use(router)
app.directive('scroll-reveal', vScrollReveal)
app.mount('#app')
