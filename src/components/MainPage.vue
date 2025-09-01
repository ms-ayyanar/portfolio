<template>
    <nav class="nav-bar">
        <ul class="nav-tabs">
            <li v-for="page in  pages " :key="page" :class="{ active: currentTab === page, 'page-name': true }"
                @click="currentTab = page">
                {{ page }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const currentTab = ref("Home");
const pages = ref(["Home", "About", "Skills", "Achievements"]);

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
    gap: 20px;
    height: 50px;
}

.nav-tabs .page-name {
    list-style: none;
    cursor: pointer;
    caret-color: transparent;
    margin-right: 20px;
}

.page-name.active {
    background-color: #ddb4ff;
    padding: 5px 15px;
    border-radius: 5px;
    color: rgb(29, 29, 29);
    transition: background-color 0.5s;
    font-weight: 600;
}
</style>