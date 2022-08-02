import App from "./App.vue";
import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import router from "./router/index";
import Toast from "vue-toastification";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "vue-toastification/dist/index.css";
import "./style.css";

const head = createHead();
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(head);
app.use(pinia);
app.use(router);
app.use(Toast);
app.mount("#app");
