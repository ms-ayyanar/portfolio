<template class="about-tab">
    <div id="about-tab">
        <div style="text-align: center;">
            <h1>Studies</h1>
        </div>
        <div id="studies-container">
            <div class="card school">
                <p class="heading">School</p>
                <hr style="color: azure;">

                <div class="content">
                    <p>-Finished 10<sup>th</sup> and 12<sup>th</sup> on SHNV Higher secondary school, Sivakasi.</p>
                    <p>-CGPA: 8.8 and 6.0</p>
                    <p>-2017 to 2019</p>
                </div>
            </div>
            <div class="card bachelor">
                <p class="heading">Bachelor</p>
                <hr style="color: azure;">

                <div class="content">
                    <p>-BCA in Ayya Nadar Janaki Ammal College, Sivakasi.</p>
                    <p>-CGPA: 8.0</p>
                    <p>-2019 to 2022</p>
                    <p>-Learned what is programming and How it works.</p>
                    <p>-Skills C, C++, C#, Java, Mysql, PHP, HTML, CSS and JS</p>
                </div>
            </div>
            <div class="card master">
                <p class="heading">Master</p>
                <hr style="color: azure;">

                <div class="content">
                    <p>-MCA in Hindusthan College of Engineering and Technology, Coimbatore.</p>
                    <p>-CGPA: 8.5</p>
                    <p>-2022 to 2024</p>
                    <p>-Learned next level to programming.</p>
                    <p>-Skills Machine Learning and Deep Learning, Networking, MongoDB, Cryptography.</p>
                </div>
            </div>
        </div>

        <div class="work-container">

        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
#studies-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
    border: 3px solid var(--color-purple);
    border-radius: 10px;
    box-shadow: 1px 2px 10px var(--gray-text);
    background-color: rgb(255, 255, 255);
    transition: 0.5s all;
}

.card:hover {
    box-shadow: 1px 2px 20px var(--color-purple);
    transform: scale(1.03);
}

.card .heading {
    font-size: 24px;
    color: var(--color-purple);
}

.card .content>p {
    margin-bottom: 20px;
}

@media screen and (max-width: 1200px) {
    #about-tab {
        padding: 20px;
    }

    #studies-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .master {
        grid-column: 1 / -1;
    }
}

@media screen and (max-width: 600px) {
    #about-tab {
        padding: 20px;
    }

    #studies-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>