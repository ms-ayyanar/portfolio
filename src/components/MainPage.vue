<template>
    <nav class="nav-bar">
        <div class="nav-tabs">
            <router-link :to="`/${route}`" v-for="route in routerNames " :key="route"
                :class="{ active: currentTab === route, 'page-name': true }" @click="currentTab = route">
                {{ route.toUpperCase() }}
            </router-link>
        </div>
    </nav>

    <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref("Home");
const routerNames = ref(["home", "about", "skills", "achievements"]);

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
    border: 2px solid #ddb4ff;
    color: white;
}

.page-name.active {
    background-color: #ddb4ff;
    color: rgb(29, 29, 29);
    transition: all 0.5s;
    font-weight: 600;
}
</style>