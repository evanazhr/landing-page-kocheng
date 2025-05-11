<script setup>
import Logo from '@/components/logo/Logo.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="dark:bg-gray-900 bg-white dark:text-white text-black">
    <div class="container p-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <Logo />

        <!-- Contact -->
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
        <!-- ./contact -->
      </div>

      <div>
        <h3 class="font-bold text-lg">About Us</h3>
        <ul class="mt-2">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt</li>
          <li>Ut labore et dolore magna aliqua</li>
          <li>Ut enim ad minim veniam</li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg">Navigation</h3>
        <ul class="mt-2">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
      </div>
    </div>

    <div class="text-white dark:bg-gray-600 bg-gray-900">
      <div class="p-4 container mx-auto text-center">
        <p>evanazhr &copy; 2025</p>
      </div>
    </div>
  </div>
</template>
