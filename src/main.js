import { createApp } from "vue";
import { router } from "./router";
//import './style.css'
// Import our custom CSS
import "./styles/general.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
