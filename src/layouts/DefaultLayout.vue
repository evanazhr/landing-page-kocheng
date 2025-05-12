<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header class="fixed w-full z-50 top-4 left-1/2 -translate-x-1/2 px-4">
    <Navbar />
  </header>
  <main class="dark:bg-gray-900">
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
