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
    {
        title: "Centum in Social Science",
        desc: "First time get a centum in 10th public exam in Social Science. My school even give me a prize.",
        iconImage: "icons/hundred-points.png"
    },
    {
        title: "NPTEL certificates",
        desc: "Got a certificate for Psychology and Soft skills after pass the NPTEL exam. I like human Psychology and learning a new thing.",
        iconImage: "icons/diploma.png"
    },
    {
        title: "Microsoft Azure",
        desc: "Certified by Microsoft Azure for Cloud Computing. Learned basics of Cloud computing and how it works.",
        iconImage: "icons/microsoft.png"
    },
    {
        title: "Journal Publication",
        desc: "Did a mini project and major project in my PG. Publish the paper on International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET).",
        iconImage: "icons/news.png"
    },
    {
        title: "Online courses",
        desc: "Cleared an online course on Java full stack and Master in C. It helps me on my career goals on programming.",
        iconImage: "icons/online-course.png"
    }
]);

</script>
<style scoped>
h1 {
    text-align: center;
    color: var(--color-purple);
    font-size: 48px;
    margin-bottom: 40px;
}


.icon {
    width: 30px;
    height: 30px;
    /* background-color: rgb(206, 206, 206); */
    padding: 2px;
}

.cards {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 20px; */

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 0 20px;
}

.card {
    box-shadow: 0px 1px 10px rgb(185, 185, 185);
    border-radius: 5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.card-body {
    height: 70%;
    padding: 10px 15px;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--color-purple);
    color: white;
    padding: 10px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.desc {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
}


.card-header,
.card-footer {
    height: 15%;
    background-color: var(--color-purple);
    color: white;
    padding: 10px;
}

.card-footer {
    background-color: rgb(247, 247, 247);
    border-top: 2px solid rgb(230, 230, 230);
}

@media (max-width: 900px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .cards {
        grid-template-columns: 1fr;
    }
}

.fade-enter-active {
    transition: all 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
</style>