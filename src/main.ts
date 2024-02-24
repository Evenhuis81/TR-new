import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import initiateStore from './tr/store';

initiateStore();

createApp(App).mount('#app');
