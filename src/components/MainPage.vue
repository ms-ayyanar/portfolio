<template>
    <nav class="nav-bar">
        <ul class="nav-tabs">
            <li class="page-name active">Home</li>
            <li class="page-name">About</li>
            <li class="page-name">Skills</li>
            <li class="page-name">Achievements</li>
        </ul>
    </nav>
</template>

<script setup>
    // const pages = ref(["Home", "About", "Skills", "Achievements"]);
</script>

<style>
    .nav-bar{
        background-color: #890eec;
        color: white;
        font-size: 18px;
    }

    .nav-tabs{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        height: 50px;
    }

    .nav-tabs .page-name{
        list-style: none;
        cursor: pointer;
    }

    .page-name.active{
        background-color: #c694ee;
        padding: 5px;
    }
</style>