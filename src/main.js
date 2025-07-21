import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import AnimateOnScroll from 'primevue/animateonscroll'
import VueScrollTo from 'vue-scrollto'
import './style.css'
// Garante scroll suave globalmente
import './scroll-smooth.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { ripple: true, inputStyle: 'filled' })
app.directive('animateonscroll', AnimateOnScroll)
app.use(VueScrollTo)
app.mount('#app')


