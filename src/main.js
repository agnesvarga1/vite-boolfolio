import { createApp } from "vue";
//import './style.css'
import App from "./App.vue";

// Import our custom CSS
import "./styles/general.scss";

import { router } from "router.js";

// Import all of Bootstrap's JS
//import * as bootstrap from "bootstrap";

createApp(App).mount("#app");
