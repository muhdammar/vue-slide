import { createApp } from "vue";
import App from "./App.vue";
import BaseLayout from "./components/UI/BaseLayout.vue";
import NavigationButton from "./components/UI/NavigationButton.vue";
import router from "./router";
import store from "./store";

require("@/assets/main.scss");
const app = createApp(App);
app.component("BaseLayout", BaseLayout);
app.component("NavigationButton", NavigationButton);
app
  .use(store)
  .use(router)
  .mount("#app");
