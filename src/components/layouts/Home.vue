<template>
    <div id="home" class="container hero">
        <!-- Content -->
        <div class="content-side">
            <div>
                <!-- Text -->
                <h3 class="section-label"> Hello, I'm</h3>

                <h1 class="section-title" style="font-size: 80px;">Ayy<span
                        style="color: var(--primary-purple);">anar</span></h1>

                <h3>Software Engineer</h3>
                <p class="section-description">
                    I build web applications and practical software, turning ideas into reliable, user-friendly experiences.
                    I'm passionate about solving problems, writing clean code, and continuously learning new technologies.
                </p>
            </div>

            <!-- Buttons -->
            <div class="buttons-container">
                <a href="#projects" class="btn-primary">
                    View Projects
                    <ArrowRight :size="16" />
                </a>
                <a href="/pdf/AYYANAR_RESUME_No_IMG.pdf" class="btn-outline" download="ayyanar_resume.pdf">
                    Download Resume
                    <Download :size="16" />
                </a>
            </div>

            <!-- Experience -->
            <div class="experience-container">
                <div class="experience" v-for="exp in experiences" :key="exp.title">
                    <h3>{{ exp.title }}</h3>
                    <p class="section-description">{{ exp.desc }}</p>
                </div>
            </div>

            <!-- Social Media -->
            <div class="media-container">
                <a class="btn-outline" style="padding: 6px !important;" v-for="media in socialMedia" :key="media.title"
                    :href="media.url" :title="media.title">
                    <component :is="media.icon" color="white" stroke-width="2" size="24" />
                </a>
            </div>
        </div>

        <!-- Image -->
        <div class="image-side">

        </div>
    </div>
</template>

<script setup>
import { Download, ArrowRight, SquareUser } from 'lucide-vue-next';
import { ref } from 'vue';

const socialMedia = ref([
    { icon: SquareUser, title: 'GitHub', url: '#' },
    { icon: SquareUser, title: 'LinkedIn', url: '#' },
    { icon: SquareUser, title: 'Email', url: '#' },
    { icon: SquareUser, title: 'Instagram', url: '#' },
]);

const experiences = ref([
    { title: '2+', desc: 'Years Experience' },
    { title: '10+', desc: 'Projects' },
    { title: 'Always', desc: 'Learning' },
]);

</script>
<style scoped>
.hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    align-items: center;
    gap: 48px;
}

.content-side {
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-width: 0;
}

.image-side {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-lg);
    overflow: hidden;

    background-color: var(--purple-soft);
}

.experience-container {
    display: flex;
    gap: 30px;
}

.buttons-container {
    display: flex;
    gap: 20px;
}

.experience {
    display: flex;
    flex-direction: column;
}

.experience+.experience {
    padding-left: 30px;
    border-left: 1px solid var(--border-light);
}

.media-container {
    display: flex;
    gap: 30px;
    align-items: center;
}

.media {
    /* border: 1px solid var(--border-purple); */
    padding: 2px;
    background-color: var(--purple-soft);
}
</style>