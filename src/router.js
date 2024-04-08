import { createRouter, createWebHistory } from "vue-router"; //webhistory salva browser history in pagina enable back arrow in browser

import HomePage from "./pages/HomePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
});
export { router };
