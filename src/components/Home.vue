<template>
    <div id="me-container">
        <div id="text-container">
            <h1 style="font-size: 50px;">Hello world! <br>I am <span style="color: var(--color-purple)">Ayyanar</span></h1>
            <p style="color: var(--gray-text);">Software Engineer <a
                    style="color: var(--color-purple); text-decoration: none;" target="_blank"
                    href="https://www.srimax.com/">@Srimax</a></p>

            <p style="color: var(--gray-text); font-style: italic;">Front-end, back-end, and API development.</p>
            <p>Web Developer by profession, driven by curiosity for technology, science, and space.</p>
            <!-- <p>I build games, play games, and love understanding how they work.</p> -->

            <div id="button-container">
                <button @click="download()" style="margin-right: 10px;" class="btn btn-purple flex-button">Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10.4a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10.4a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M7.646 11.354a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- <div id="img-container">
            <img class="image-self" src="../assets/images/wallpaper1.jpg" alt="" width="500" height="500">
        </div> -->
    </div>
</template>
<script setup>
const download = () => {
    const link = document.createElement("a");
    link.href = "/pdf/AYYANAR_RESUME_No_IMG.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>
<style scoped>
#me-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
}

#text-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1.4rem;
}

#img-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.image-self {
    border-radius: 10px;
    transition: transform 0.4s ease;
}

.image-self:hover {
    transform: scale(1.05);
}

p {
    font-size: 30px;
}

.btn {
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: whitesmoke;
}

.btn-purple {
    background-color: var(--color-purple);
}

.btn-purple:hover {
    background-color: var(--secondary-color);
    transition: 0.6s ease;
    /* border: 2px solid black; */
}

.flex-button {
    display: inline-flex;
    justify-content: space-between;
    gap: 15px;
}

/* Mobile width */

@media (max-width: 750px) {
    #text-container {
        display: flex;
        gap: 1.5rem;
        width: 100%;
    }
}
</style>