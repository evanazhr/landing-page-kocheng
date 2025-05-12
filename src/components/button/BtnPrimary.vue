<template>
  <button
    :type="type"
    class="px-4 py-2.5 w-50 cursor-pointer shadow-md bg-orange-400 font-semibold text-white hover:bg-orange-700 active:bg-orange-700 rounded-2xl"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'button primary',
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>
