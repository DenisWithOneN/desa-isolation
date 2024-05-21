import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ServiceView from "./views/ServiceView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactView from "./views/ContactView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/services", component: ServiceView },
  { path: "/projects", component: ProjectsView },
  { path: "/contact", component: ContactView },
  { path: "/projects/:id", name: "SingleProjectView", component: SingleProjectView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router).mount("#app");
