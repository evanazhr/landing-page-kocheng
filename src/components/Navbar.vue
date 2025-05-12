<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Logo from '@/components/logo/Logo.vue'

const currentTheme = ref(localStorage.getItem('theme') || 'light')
const navMenu = ref(null)

onMounted(() => {
  console.log(navMenu.value)
  document.body.setAttribute('class', localStorage.getItem('theme'))
})

// Function to toggle theme
const onToggleTheme = () => {
  const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark'
  currentTheme.value = newTheme
  localStorage.setItem('theme', newTheme)
  document.body.setAttribute('class', newTheme)
}

const toggleNavMenu = () => {
  console.log(navMenu.value)
  navMenu.value.classList.toggle('flex')
  navMenu.value.classList.toggle('hidden')
}

document.addEventListener('click', (e) => {
  if (e.target !== navMenu.value && e.target !== document.getElementById('toggle-navMenu')) {
    navMenu.value.classList.add('hidden')
    navMenu.value.classList.remove('flex')
  }
})
</script>

<template>
  <nav
    class="flex flex-row justify-between dark:text-white px-4 container mx-auto py-2.5 items-center border border-gray-500 rounded-2xl backdrop-blur-lg font-semibold md:w-full md:static transition-colors duration-500"
  >
    <div>
      <router-link to="/" class="size-8">
        <Logo class="w-full h-full object-contain" />
      </router-link>
    </div>
    <ul
      ref="navMenu"
      id="navMenu"
      class="md:border-none bg-white/80 dark:bg-gray-900/80 md:dark:bg-transparent md:p-0 dark:text-white absolute md:flex md:static border-gray-500 md:border-transparent border z-50 md:z-0 md:bg-transparent top-20 right-0 rounded-2xl flex-col w-50 md:w-auto md:translate-none hidden p-4 md:flex-row gap-4 duration-300"
    >
      <li class="w-full group">
        <router-link
          to="/"
          class="dark:group-hover:text-white border border-transparent hover:border-gray-500 hover:border py-2 px-4 rounded-2xl block transition-colors duration-300"
          >Home</router-link
        >
      </li>
      <li class="w-full group">
        <router-link
          to="/about"
          class="dark:group-hover:text-white border border-transparent rounded-2xl hover:border-gray-500 hover:border w-full py-2 block px-4 transition-colors duration-300"
          >About</router-link
        >
      </li>
      <li class="w-full group">
        <router-link
          to="/blog"
          class="dark:group-hover:text-white rounded-2xl border border-transparent hover:border-gray-500 hover:border w-full py-2 block px-4 transition-colors duration-300"
          >Blog</router-link
        >
      </li>
      <li class="w-full group">
        <router-link
          to="/services"
          class="dark:group-hover:text-white rounded-2xl border border-transparent hover:border-gray-500 hover:border w-full py-2 block px-4 transition-colors duration-300"
          >Services</router-link
        >
      </li>
      <li class="w-full group">
        <router-link
          to="/contact"
          class="dark:group-hover:text-white rounded-2xl border border-transparent hover:border-gray-500 hover:border w-full py-2 block px-4 transition-colors duration-300"
          >Contact</router-link
        >
      </li>
    </ul>

    <!-- Button to toggle theme -->
    <button
      class="cursor-pointer justify-end md:justify-normal md:flex-grow-0 flex-grow px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
      type="button"
    >
      <div @click="onToggleTheme">
        <span class="animate-spin" v-if="currentTheme === 'light'"
          ><Icon class="size-6" icon="lucide:sun"></Icon
        ></span>
        <span v-else><Icon icon="lucide:moon" class="size-6"></Icon></span>
      </div>
    </button>
    <button @click="toggleNavMenu" class="cursor-pointer md:hidden">
      <Icon class="size-6" id="toggle-navMenu" icon="material-symbols:menu" />
    </button>
  </nav>
</template>
