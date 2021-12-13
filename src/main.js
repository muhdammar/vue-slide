import { createApp } from "vue";
import App from "./App.vue";
import BaseLayout from "./components/UI/BaseLayout.vue";
import NavigationButton from "./components/UI/NavigationButton.vue";
import References from "./components/UI/References.vue";
import router from "./router";
import store from "./store";
require("@/assets/main.scss");
const app = createApp(App);
app.component("BaseLayout", BaseLayout);
app.component("NavigationButton", NavigationButton);
app.component("References", References);
app
  .use(store)
  .use(router)
  .mount("#app");
