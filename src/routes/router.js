import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Achievements from "../components/Achievements.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/achievements", component: Achievements },
    { path: "/contact", component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;