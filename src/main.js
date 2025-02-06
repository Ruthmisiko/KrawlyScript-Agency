import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import "./assets/css/main.css";
import VueSmoothScroll from 'vue3-smooth-scroll';
import router from './router'; 
import 'font-awesome/css/font-awesome.min.css';


const app = createApp(App)
app.use(router);
app.use(VueSmoothScroll)
app.mount('#app')
