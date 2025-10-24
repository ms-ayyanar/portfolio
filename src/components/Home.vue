<template>
    <div id="me-container">
        <div id="text-container">
            <h1 style="font-size: 75px;">Hello world! <br>I am <span style="color: var(--color-purple)">Ayyanar</span></h1>
            <p>A curious person on learn new things like Science, Technology and Space. Working on my passion IT.</p>
            <p>Loves to play video games and development on it.</p>
            <p style="color: var(--gray-text);">Softeware Engineer <a
                    style="color: var(--color-purple); text-decoration: none;" target="_blank"
                    href="https://www.srimax.com/">@Srimax</a></p>
            <p style="color: var(--gray-text); font-style: italic;">Build Front end code and API development</p>

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
        <div id="img-container">
            <img class="image-self" src="../assets/images/me.png" alt="" width="500" height="600">
        </div>
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
* {
    overflow: hidden;
}

#me-container>div {
    display: inline-block;
}

#text-container {
    width: 40%;
    height: auto;
    position: absolute;
}

#img-container {
    width: 60%;
    text-align: right;
    position: relative;
    left: 40%;
}

.image-self {
    border-radius: 10px;
    image-resolution: ce;
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
</style>