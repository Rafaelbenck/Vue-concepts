import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/css/style.css";

import router from "./router/index";

import store from './store'

window.app = createApp(App).use(store).use(router).use(router).mount("#app");
