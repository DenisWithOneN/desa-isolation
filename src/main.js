import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ServiceView from "./views/ServiceView.vue";
import ProjectView from "./views/ProjectView.vue";
import ContactView from "./views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/services", component: ServiceView },
  { path: "/projects", component: ProjectView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router).mount("#app");
