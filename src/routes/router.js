import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Achievements from "../components/Achievements.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/skills", component: Skills },
    { path: "/achievements", component: Achievements }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;