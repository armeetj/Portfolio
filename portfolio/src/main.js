import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");

Vue.use(Vuesax, {
  // options here
})