<template>
    <div id="mainPage">
        <nav class="nav-bar">
            <div class="nav-tabs">
                <button class="menu-toggle" @click="menuToggle" v-if="isMobileView">
                    &#9776;
                </button>

                <div v-show="showMenu || !isMobileView" class="nav-links">
                    <router-link @click="menuToggle" v-for="route in routes" :key="route.name" :to="route.path"
                        class="page-name">
                        {{ route.name }}
                    </router-link>
                </div>
            </div>
        </nav>

        <div id="body-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const routes = ref([
    { path: '/', name: 'HOME' },
    { path: '/about', name: 'ABOUT' },
    { path: '/achievements', name: 'ACHIEVEMENTS' },
    { path: '/contact', name: 'CONTACT' }
]);

const showMenu = ref(true);
const isMobileView = ref(false);

onMounted(() => {
    updateMobileView();
});

// Methods
const updateMobileView = () => {
    console.log("resizing");
    isMobileView.value = window.innerWidth <= 750;
    if (isMobileView.value) {
        showMenu.value = true;
    }
};

const menuToggle = () => {
    showMenu.value = !showMenu.value;
}

// Check on every resize screen
window.addEventListener('resize', updateMobileView);
</script>

<style>
.menu-toggle {
    display: none;
    background: none;
    color: white;
    border: none;
    font-size: 30px;
    cursor: pointer;
    padding: 0;
    margin-right: 20px;
}

.menu-toggle:hover {
    /* border: 2px solid var(--border-pink); */
    padding: 0px 8px;
    caret-color: transparent;
}

.nav-links {
    display: flex;
}

.nav-bar {
    background-color: #890eec;
    color: white;
    font-size: 18px;
    padding: 10px;
}

.nav-tabs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* min-width: max-content; */
}

.nav-tabs .page-name {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
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

@media screen and (max-width: 750px) {
    .nav-tabs {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 10px 0;
    }

    .nav-links {
        flex-direction: column;
        width: 100%;
    }

    .menu-toggle {
        display: block;
    }

}
</style>
