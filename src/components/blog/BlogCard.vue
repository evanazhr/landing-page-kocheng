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
    class="grid grid-cols-[1fr_2fr] gap-2 hover:bg-black/5 active:bg-black/5 dark:hover:bg-white/5 dark:active:bg-white/5 cursor-pointer shadow-md p-4 border-blue-100 border rounded-3xl"
  >
    <div class="overflow-hidden rounded-2xl">
      <img
        :src="img"
        class="size-50 active:scale-105 hover:scale-105 duration-300 object-cover bg-left"
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
