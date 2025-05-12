<script setup>
import cat1 from '@/assets/img/cat-1.jpg'
import cat2 from '@/assets/img/cat-2.jpg'
import cat3 from '@/assets/img/cat-3.jpg'
import cat4 from '@/assets/img/cat-4.jpg'
import cat5 from '@/assets/img/cat-5.jpg'
import cat6 from '@/assets/img/cat-6.jpg'

import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
</script>

<template>
  <div class="min-h-dvh dark:text-white bg-white dark:bg-gray-900">
    <section class="w-full pt-20">
      <div class="justify-center items-start flex flex-col p-4 container mx-auto">
        <!-- Header Blog -->
        <div
          class="flex justify-between items-center w-full mb-6"
          v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
        >
          <h2 class="text-4xl font-bold">Cerita Kucing Terbaru (Yang Bikin Guling-Guling)</h2>
          <BtnOutline />
        </div>

        <!-- Kategori Blog -->
        <div
          class="mb-10"
          v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
        >
          <h3 class="text-2xl font-semibold mb-4">Kategori Kucing Pilihan:</h3>
          <div class="flex flex-wrap gap-4">
            <span
              class="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Kucing Imut
            </span>
            <span
              class="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Drama Kucing
            </span>
            <span
              class="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Kucing Ngemil
            </span>
            <span
              class="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Kucing Ajaib
            </span>
          </div>
        </div>

        <!-- Artikel Terbaru -->
        <div
          v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
          class="grid my-6 grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <div>
            <FeaturedBlogCard
              :img="cat6"
              title="Cebelapa Imut Cih Aqu?"
              date="7 Mei 2025"
              description="Bingung, ternyata si kucing ngidam minta diadopsi, aduh."
            />
          </div>
          <div class="flex flex-col gap-4">
            <BlogCard
              :img="cat1"
              title="7 Alasan Kenapa Kucing Suka Whiskas: No 3 Bikin Kaget!"
              date="30 Februari 2023"
              description="Ternyata nomor 3 itu rahasia besar. Gak bakal nyangka!"
            />
            <BlogCard
              :img="cat4"
              title="Halo Dek, Lagi Ngapain?"
              date="1 Februari 2025"
              description="Penuh intrik dan drama. Siapa yang bakal menang? Kucing atau kucing?"
            />
            <BlogCard
              :img="cat3"
              title="Apa Lo Liat-Liat?!"
              date="5 Januari 2024"
              description="Mana Whiskas yang kau janjikan, aku udah nunggu 3 hari nih!"
            />
          </div>
        </div>

        <!-- Widget Populer -->
        <div
          class="mt-10"
          v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
        >
          <h3 class="text-3xl font-bold mb-6">Widget Kucing Populer</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
              <h4 class="text-xl font-bold mb-4">Kucing Paling Imut</h4>
              <img
                :src="cat5"
                alt="Kucing Paling Imut"
                class="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <p>Pernah lihat kucing lebih imut dari ini? Kami juga gak yakin sih.</p>
            </div>
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
              <h4 class="text-xl font-bold mb-4">Si Kucing Makan Nasi</h4>
              <img
                :src="cat2"
                alt="Kucing Makan Nasi"
                class="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <p>Kucing ini gak tahu bedanya nasi sama Whiskas. Jadinya ya makan nasi.</p>
            </div>
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
              <h4 class="text-xl font-bold mb-4">Kucing Hobi Nge-Chill</h4>
              <img
                :src="cat3"
                alt="Kucing Hobi Nge-Chill"
                class="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <p>Ini dia kucing yang paham benar arti hidup. Chill terus, gak ada kerjaan.</p>
            </div>
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
              <h4 class="text-xl font-bold mb-4">Kucing Versus Kucing</h4>
              <img
                :src="cat4"
                alt="Kucing Versus Kucing"
                class="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <p>Kucing ini mempertaruhkan nyawanya demi snack. Siapa yang akan menang?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
