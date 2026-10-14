<template>
    <div>
        <h1>Achievements</h1>
        <transition-group name="fade" tag="div" class="cards">
            <div v-for="(a, index) in achievements" :key="index" class="card">
                <div class="card-header">
                    <span><img class="icon" :src="a.iconImage"></span>
                    <h3 style="display: inline-block;">{{ a.title }}</h3>
                </div>
                <div class="card-body">
                    <p class="desc">{{ a.desc }}</p>
                </div>
                <div class="card-footer"></div>
            </div>
        </transition-group>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const achievements = ref([
    // {
    //     title: "Centum in Social Science",
    //     desc: "First time get a centum in 10th public exam in Social Science. My school even give me a prize.",
    //     iconImage: "icons/hundred-points.png"
    // },
    {
        title: "Microsoft Azure",
        desc: "Gained hands-on understanding of cloud concepts, services, and deployment basics.",
        iconImage: "icons/microsoft.png"
    },
    {
        title: "Research Publication – IJIRSET",
        desc: "Published a research paper based on PG mini and major projects in the International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET).",
        iconImage: "icons/news.png"
    },
    {
        title: "NPTEL certificates",
        desc: "Successfully completed NPTEL courses focused on human psychology and professional soft skills.",
        iconImage: "icons/diploma.png"
    },
    {
        title: "Online courses",
        desc: "Completed Java Full-Stack development and advanced C programming courses.",
        iconImage: "icons/online-course.png"
    }
]);

</script>
<style scoped>
</style>