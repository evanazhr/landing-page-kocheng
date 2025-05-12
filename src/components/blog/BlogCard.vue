<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  img: {
    type: String,
    default: 'no image',
  },
  title: {
    type: String,
    default: 'Title default',
  },
  date: {
    type: String,
    default: 'Date default',
  },
  description: {
    type: String,
    default: 'Description',
  },
})
</script>

<template>
  <div
    class="flex gap-4 h-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer shadow-md p-4 border-blue-100 border rounded-3xl"
  >
    <div class="size-50 overflow-hidden rounded-2xl">
      <img
        :src="img"
        class="size-full hover:scale-105 duration-300 object-cover bg-left"
        :alt="img"
      />
    </div>
    <div>
      <h3 class="font-semibold text-xl mt-4">{{ title }}</h3>
      <p class="font-medium text-md mt-2">{{ date }}</p>
      <p class="font-medium text-sm mt-2">{{ description }}</p>
    </div>
  </div>
</template>
