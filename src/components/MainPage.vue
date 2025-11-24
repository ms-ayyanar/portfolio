<template>
    <div id="mainPage">
        <nav class="nav-bar">
            <div class="nav-tabs">
                <router-link :to="`/${route}`" v-for="route in routerNames " :key="route"
                    :class="{ active: currentTab === route, 'page-name': true }" @click="currentTab = route">
                    {{ route.toUpperCase() || "HOME" }}
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

const currentTab = ref("");
const routerNames = ref(["", "about", "achievements", "contact"]);
// const routerNames = ref([
//     { name: "", active: true },
//     { name: "about", active: false },
//     { name: "skills", active: false },
//     { name: "achievements", active: false },
// ]);

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

.nav-tabs .page-name:hover:not(.active) {
    background-color: transparent;
    border: 2px solid var(--border-pink);
    color: white;
}

.page-name.active {
    background-color: var(--border-pink);
    color: rgb(29, 29, 29);
    transition: all 0.5s;
    font-weight: 600;
}

@media screen and (max-width: 1000px) {
    
}
</style>