<template>
    <div id="mainPage">
        <nav class="nav-bar">
            <div class="nav-tabs">
                <router-link :to="route.path" v-for="route in routes" :key="route.name" class="page-name">
                    {{ route.name }}
                </router-link>
            </div>
        </nav>

        <div id="body-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
    { path: '/', name: 'HOME' },
    { path: '/about', name: 'ABOUT' },
    { path: '/achievements', name: 'ACHIEVEMENTS' },
    { path: '/contact', name: 'CONTACT' }
]);

</script>

<style>
.nav-bar {
    background-color: #890eec;
    color: white;
    font-size: 18px;
}

.nav-tabs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    height: 50px;
    /* min-width: max-content; */
}

.nav-tabs .page-name {
    text-decoration: none;
    cursor: pointer;
    caret-color: transparent;
    margin-right: 20px;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid transparent;
    font-weight: 500;
}

.nav-tabs .page-name:hover:not(.router-link-exact-active) {
    background-color: transparent;
    border: 2px solid var(--border-pink);
    color: white;
}

.page-name.router-link-exact-active {
    background-color: var(--border-pink);
    color: rgb(29, 29, 29);
    transition: all 0.5s;
    font-weight: 600;
}

@media screen and (max-width: 480px) {
    .nav-tabs {
        flex-direction: column;
        height: auto;
        padding: 10px 0;
    }
}
</style>
