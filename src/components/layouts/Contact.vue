<template>
    <div class="contact-container">
        <h1 class="contact-title">Get in Touch</h1>
        <p class="contact-subtitle">
            Have a question, idea, or opportunity? Drop me a message!
        </p>

        <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="form.name" type="text" id="name" placeholder="Your name" required />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="form.email" type="email" id="email" placeholder="Your email" required />
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea v-model="form.message" id="message" rows="5" placeholder="Write your message..."
                    required></textarea>
            </div>

            <button type="submit" class="btn btn-purple" :disabled="loading">
                <span v-if="!loading">Send Message</span>
                <span v-else>Sending...</span>
            </button>
        </form>

        <p v-if="success" class="success-msg">✅ Your message has been sent successfully!</p>

        <!-- 🌐 Social Media Links -->
        <div class="social-container">
            <h3>Connect with me</h3>
            <div class="social-links">
                <a href="https://github.com/ms-ayyanar" target="_blank" aria-label="GitHub">
                    <img src="/icons/github.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ayyanar-s-9a8911223/" target="_blank" aria-label="LinkedIn">
                    <img src="/icons/linkedin.png" alt="LinkedIn" />
                </a>
                <!-- <a href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
                    <img src="/icons/twitter.png" alt="Twitter" />
                </a> -->
                <a href="mailto:senthilayyanar2018@email.com" aria-label="Email">
                    <img src="/icons/gmail.png" alt="Email" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const loading = ref(false)
const success = ref(false)

const handleSubmit = () => {
    loading.value = true
    success.value = false

    // Simulate sending (replace this with your email service or API call)
    setTimeout(() => {
        console.log('Form submitted:', form.value)
        loading.value = false
        success.value = true
        form.value = { name: '', email: '', message: '' }
    }, 1500)
}
</script>

<style scoped>

</style>
