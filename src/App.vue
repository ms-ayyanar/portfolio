<script setup>
import NavBar from '@/components/layouts/NavBar.vue';
import Home from './components/layouts/Home.vue';
import About from './components/layouts/About.vue';
</script>

<template>
  <div id="app-container">
    <NavBar />
    <main id="main-container">
      <Home />

      <About />
    </main>
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
}
</style>
