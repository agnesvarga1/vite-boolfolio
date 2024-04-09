import { createRouter, createWebHistory } from "vue-router"; //webhistory salva browser history in pagina to enable back arrow in browser

import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import singleProject from "./pages/singleProject.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:slug",
      name: "singleProjectPage",
      component: singleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
export { router };
