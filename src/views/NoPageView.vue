<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4"
  >
    <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
    <p class="text-xl text-gray-700 dark:text-gray-300 mb-8">
      Oops! The page you're looking for does not exist.
    </p>
    <router-link
      to="/"
      class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
    >
      Go to Home
    </router-link>
  </div>
</template>
