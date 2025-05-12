<script setup>
import Logo from '@/components/logo/Logo.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="dark:bg-gray-900 bg-white dark:text-white text-black">
    <div class="container p-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Logo & Social Media -->
      <div>
        <Logo />

        <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          KochengVerse adalah tempat para pecinta kucing berkumpul, curhat, dan tertawa bersama.
          Dari tips grooming sampai meme kucing absurd—semua ada di sini!
        </p>

        <!-- Socials -->
        <div class="mt-4">
          <h3 class="font-bold text-lg">Follow Us</h3>
          <ul class="flex gap-4 mt-2">
            <li>
              <Icon
                icon="lucide:instagram"
                class="size-6 cursor-pointer dark:bg-white dark:hover:border-white dark:text-gray-900 dark:hover:text-white bg-gray-900 rounded-sm p-1 hover:border hover:border-gray-900 hover:bg-transparent hover:text-gray-900 text-white duration-150"
              />
            </li>
            <li>
              <Icon
                icon="lucide:facebook"
                class="size-6 cursor-pointer dark:bg-white dark:hover:border-white dark:text-gray-900 dark:hover:text-white bg-gray-900 rounded-sm p-1 hover:border hover:border-gray-900 hover:bg-transparent hover:text-gray-900 text-white duration-150"
              />
            </li>
            <li>
              <Icon
                icon="lucide:twitter"
                class="size-6 cursor-pointer dark:bg-white dark:hover:border-white dark:text-gray-900 dark:hover:text-white bg-gray-900 rounded-sm p-1 hover:border hover:border-gray-900 hover:bg-transparent hover:text-gray-900 text-white duration-150"
              />
            </li>
            <li>
              <Icon
                icon="lucide:linkedin"
                class="size-6 cursor-pointer dark:bg-white dark:hover:border-white dark:text-gray-900 dark:hover:text-white bg-gray-900 rounded-sm p-1 hover:border hover:border-gray-900 hover:bg-transparent hover:text-gray-900 text-white duration-150"
              />
            </li>
          </ul>
        </div>
      </div>

      <!-- About Us -->
      <div>
        <h3 class="font-bold text-lg">Tentang Kami</h3>
        <ul class="mt-2 text-sm text-gray-700 dark:text-gray-300">
          <li>🐾 Komunitas pecinta kucing sejak tadi (beneran baru tadi)</li>
          <li>😺 Menyediakan info, tips, dan hiburan bertema kucing</li>
          <li>📦 Kolaborasi dengan shelter & brand pet food</li>
          <li>📬 Kontak: info@kocheng.com</li>
        </ul>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="font-bold text-lg">Navigasi</h3>
        <ul class="mt-2 text-sm">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="text-white dark:bg-gray-600 bg-gray-900">
      <div class="p-4 container mx-auto text-center text-sm">
        <p>evanazhr &copy; 2025 KochengVerse — Bukan sekadar meong. Ini gaya hidup 🐱</p>
      </div>
    </div>
  </div>
</template>
