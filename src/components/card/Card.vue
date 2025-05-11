<template>
  <div class="rounded-3xl shadow-md border border-gray-500 p-4">
    <div class="size-56 overflow-hidden rounded-2xl">
      <img
        :src="imgUrl"
        class="size-full rounded-2xl hover:scale-105 duration-300 cursor-pointer object-cover bg-left"
        alt=""
      />
    </div>
    <h3 class="font-semibold text-xl mt-4">{{ title }}</h3>
    <p class="font-medium text-sm mt-2">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  imgUrl: {
    type: String,
    default: '/src/assets/img/cat-2.jpg',
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

console.log(props.imgUrl)
</script>
