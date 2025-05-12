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
    class="h-full flex hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex-col gap-4 p-4 border border-blue-100 rounded-3xl shadow-md"
  >
    <div class="size-full overflow-hidden rounded-2xl">
      <img
        :src="img"
        class="size-full object-cover hover:scale-105 duration-300 bg-left"
        :alt="img"
      />
    </div>
    <div class="pt-2 pb-4">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="font-medium text-sm">{{ date }}</p>
      <p class="text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>
