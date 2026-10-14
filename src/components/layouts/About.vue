<template>
    <div id="about" class="container">
        <!-- Image -->
        <div class="image-side">

        </div>

        <!-- Content side -->
        <div class="content-side">
            <h3 class="section-label">About Me</h3>
            <h3 class="section-title">A bit about me</h3>

            <p class="section-description">
                I'm a Software Engineer who enjoys turning ideas into practical, user-friendly applications. I work across
                frontend and backend development, with a focus on building clean, maintainable, and reliable software.
            </p>

            <p class="section-description">
                I enjoy exploring new technologies, solving problems, and continuously improving my development skills. For
                me, every project is an opportunity to learn something new and build something useful.
            </p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#about {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 7fr);
    gap: 20px;
}

.content-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.image-side {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: var(--radius-lg);
    overflow: hidden;

    background-color: var(--purple-soft);

}
</style>
