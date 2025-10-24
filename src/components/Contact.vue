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
.contact-container {
    max-width: 600px;
    margin: 80px auto;
    padding: 40px;
    border-radius: 12px;
    /* color: white; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.contact-title {
    font-size: 42px;
    text-align: center;
    margin-bottom: 10px;
    color: var(--color-purple, #9b5de5);
}

.contact-subtitle {
    text-align: center;
    color: #ccc;
    margin-bottom: 30px;
    font-size: 18px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 6px;
    font-weight: bold;
}

input,
textarea {
    /* background: #2b2b2b; */
    border: 1px solid #444;
    /* color: white; */
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}

input:focus,
textarea:focus {
    border-color: var(--color-purple, #9b5de5);
}

.btn {
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    color: whitesmoke;
    font-size: 16px;
    transition: 0.3s;
}

.btn-purple {
    background-color: var(--color-purple, #9b5de5);
}

.btn-purple:hover {
    background-color: var(--secondary-color, #7a36c1);
}

.success-msg {
    margin-top: 20px;
    text-align: center;
    color: #4caf50;
    font-weight: bold;
}

#message {
    resize: vertical;
}

@media (max-width: 600px) {
    .contact-container {
        padding: 20px;
        margin: 40px 10px;
    }

    .contact-title {
        font-size: 32px;
    }
}

/* 🌐 Social Links */
.social-container {
    text-align: center;
    margin-top: 40px;
}

.social-container h3 {
    color: var(--color-purple, #9b5de5);
    margin-bottom: 15px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.social-links a img {
    width: 40px;
    height: 40px;
    /* filter: brightness(0) invert(1); */
    /* transition: transform 0.3s ease, filter 0.3s ease; */
}

.social-links a:hover img {
    transform: scale(1.2);
    filter: drop-shadow(0 0 5px var(--color-purple, #9b5de5));
}

@media (max-width: 600px) {
    .contact-container {
        padding: 20px;
        margin: 40px 10px;
    }

    .contact-title {
        font-size: 32px;
    }
}
</style>
