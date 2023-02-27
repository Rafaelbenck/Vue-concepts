import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/css/style.css";

import router from "./router/index";

window.app = createApp(App).use(router).use(router).mount("#app");
