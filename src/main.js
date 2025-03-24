import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import { createPinia } from 'pinia';

const app = createApp(App);  // Stocke l'application dans une variable
const pinia = createPinia(); 

app.use(pinia); // Utilisation correcte de Pinia
app.use(router); // Utilisation correcte du routeur
app.mount('#app'); // Montage de l'application

