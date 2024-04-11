import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import Home from "./components/views/HomeView.vue";
import AboutView from "./components/views/AboutView.vue";
import ServiceView from "./components/views/ServiceView.vue";
import ProjectView from "./components/views/ProjectView.vue";
import ContactView from "./components/views/ContactView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutView },
  { path: "/services", component: ServiceView },
  { path: "/projects", component: ProjectView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

createApp(App).use(router).mount("#app");
