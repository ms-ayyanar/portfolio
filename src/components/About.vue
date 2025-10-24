<template>
    <div class="timeline-container">
        <div class="timeline">

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h2>School</h2>
                    <p>- Finished 10<sup>th</sup> and 12<sup>th</sup> at SHNV Higher Secondary School, Sivakasi.</p>
                    <p>- CGPA: 8.8 and 6.0</p>
                    <p>- 2017 to 2019</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h2>Bachelor</h2>
                    <p>- BCA at Ayya Nadar Janaki Ammal College, Sivakasi.</p>
                    <p>- CGPA: 8.0</p>
                    <p>- 2019 to 2022</p>
                    <p>- Learned what programming is and how it works.</p>
                    <p>- Skills: C, C++, C#, Java, MySQL, PHP, HTML, CSS, JS</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h2>Master</h2>
                    <p>- MCA at Hindusthan College of Engineering and Technology, Coimbatore.</p>
                    <p>- CGPA: 8.5</p>
                    <p>- 2022 to 2024</p>
                    <p>- Learned advanced programming concepts.</p>
                    <p>- Skills: Machine Learning, Deep Learning, Networking, MongoDB, Cryptography</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h2>Work</h2>
                    <p>- Working @ Srimax Software Technology</p>
                    <p>- Software Engineer</p>
                    <p>- SEP 2024 To Present </p>
                    <p>- Working on "OurProperty" - Australia Property management project </p>
                    <p>- Skills: AngularJS, Joomla Framework, MySQL, PHP, Vue, Laravel, API integration.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.timeline {
    position: relative;
    margin: 40px auto;
    padding: 20px 0;
    width: 80%;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    width: 4px;
    height: 100%;
    background: var(--color-purple);
}

.timeline-item {
    position: relative;
    margin: 20px 0 20px 60px;
}

.timeline-dot {
    position: absolute;
    left: -11px;
    top: 10px;
    width: 20px;
    height: 20px;
    background: var(--color-purple);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 2px var(--color-purple);
}

.timeline-content {
    background: #fff;
    border-radius: 8px;
    padding: 15px 20px;
    box-shadow: 1px 2px 8px var(--gray-text);
    transition: transform 0.3s ease;
}

.timeline-content:hover {
    transform: scale(1.02);
    box-shadow: 1px 2px 15px var(--color-purple);
}

.timeline-content h2 {
    margin: 0 0 10px;
    color: var(--color-purple);
}

.timeline-content p {
    margin: 5px 0;
    line-height: 1.5;
}

/* Mobile responsive */
@media (max-width: 600px) {
    .timeline::before {
        left: 10px;
    }

    .timeline-item {
        margin-left: 40px;
    }
}
</style>
