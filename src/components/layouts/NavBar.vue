<template>
    <section id="nav-bar">
        <!-- Logo -->
        <div>
            <img class="logo" src="../../assets/images/ayyanar-logo.png" alt="Logo">
        </div>

        <!-- Links -->
        <div class="nav-links-container">
            <a class="nav-links" v-for="link in links" :key="link.title" :href="link.url">
                {{ link.title }}
            </a>
        </div>

        <!-- Buttons -->
        <div>
            <a href="#contact" class="btn-primary">
                Contact Me
                <ArrowRight size="16" stroke-width="2" />
            </a>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

const links = ref([
    { title: 'Home', url: '#home' },
    { title: 'About', url: '#about' },
    { title: 'Skills', url: '#skills' },
    { title: 'Projects', url: '#projects' },
    { title: 'Experience', url: '#experience' },
    { title: 'Achievements', url: '#achievements' },
    { title: 'Contact', url: '#contact' }
]);
</script>
<style scoped>
#nav-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-height: 200px;
    align-items: center;

    /* border-bottom: 1px solid var(--border-light); */
    box-shadow: 2px 1px 5px var(--purple-dark);
    border-radius: 5px;

    background-color: var(--bg-primary);

    position: sticky;
    top: 0;
    overflow: hidden;
    padding: 5px 20px;

    z-index: 1000;
}

.logo {
    width: 64px;
    height: 64px;
}

.logo:hover {
    cursor: pointer;
    transform: scale(1.25);

    transition: transform 0.4s ease-in-out;
}

.nav-links-container {
    display: flex;
    gap: 20px;
}

.nav-links {
    position: relative;

    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;

    transition: color 0.3s ease;
}

/* Hover underline */
.nav-links::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -6px;

    width: 100%;
    height: 2px;

    background: var(--primary-purple);

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 0.3s ease;
}

.nav-links:hover {
    color: var(--accent-color);
    /* font-weight: 600; */
}

.nav-links:hover::after {
    transform: scaleX(1);
}
</style>