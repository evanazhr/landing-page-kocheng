<template>
  <div class="rounded-3xl shadow-md border border-transparent dark:border-gray-500 p-4">
    <div class="size-56 overflow-hidden rounded-2xl">
      <img
        :src="img"
        class="size-full rounded-2xl active:scale-105 hover:scale-105 duration-300 cursor-pointer object-cover bg-left"
        :alt="img"
      />
    </div>
    <h3 class="font-semibold text-xl mt-4">{{ title }}</h3>
    <p class="font-medium text-sm mt-2">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  img: {
    type: String,
    default: 'no image',
  },
  title: {
    type: String,
    default: 'Judul default',
  },
  description: {
    type: String,
    default: 'Deskripsi default',
  },
})
</script>
