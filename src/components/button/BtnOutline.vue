<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'default content',
  },
})
</script>

<template>
  <button
    class="border-1 rounded-2xl px-4 p-2.5 uppercase text-sm font-semibold hover:bg-orange-400 active:bg-orange-400 hover:text-white cursor-pointer shadow-md text-orange-400 border-orange-400"
  >
    {{ text }}
  </button>
</template>
