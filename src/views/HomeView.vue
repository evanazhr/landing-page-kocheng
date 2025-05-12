<script setup>
import cat1 from '@/assets/img/cat-1.jpg'
import cat2 from '@/assets/img/cat-2.jpg'
import cat3 from '@/assets/img/cat-3.jpg'
import cat4 from '@/assets/img/cat-4.jpg'
import cat5 from '@/assets/img/cat-5.jpg'
import cat6 from '@/assets/img/cat-6.jpg'

import BtnOutline from '@/components/button/BtnOutline.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import Card from '@/components/card/Card.vue'
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard.vue'
</script>

<template>
  <div class="min-h-dvh dark:text-white">
    <!-- Hero Section -->
    <section class="w-full flex h-full flex-row pt-24 md:pt-22 justify-center items-center">
      <div class="mx-auto container grid grid-cols-1 gap-8 md:grid-cols-2 w-full p-4">
        <div class="flex justify-center flex-col">
          <h1 class="text-6xl font-bold leading-[1.2] font-worksans">
            Discover The Most Adorable Cat In The World
          </h1>
          <p class="py-6 text-md leading-[1.5]">
            Pernah nggak sih kamu lagi rebahan, terus tiba-tiba mikir: “Kalau kucing bisa ngoding,
            dia pake Tailwind nggak ya?” Nah, kucing di sini bukan cuma lucu, dia bisa teleport,
            nyolong ayam goreng, dan punya SIM C. Jangan tanya kenapa, tanya aja kenapa belum adopsi
            dia!
          </p>
          <button
            class="px-4 py-2.5 w-50 cursor-pointer shadow-md bg-orange-400 font-semibold text-white rounded-2xl"
          >
            <router-link to="/contact"> Get Started </router-link>
          </button>
        </div>
        <div class="gap-4 grid grid-cols-2">
          <div
            class="size-full md:h-fit md:my-auto flex overflow-hidden rounded-2xl justify-center items-center"
          >
            <img
              :src="cat1"
              class="md:h-56 h-full rounded-2xl shadow-md object-cover hover:scale-105 duration-300 bg-left"
              alt="cat1"
            />
          </div>

          <div class="flex gap-4 flex-col">
            <div class="overflow-hidden rounded-2xl">
              <img
                :src="cat2"
                class="w-full shadow-md h-56 object-cover hover:scale-105 duration-300 rounded-2xl bg-left"
                alt="cat2"
              />
            </div>

            <div class="overflow-hidden rounded-3xl">
              <img
                :src="cat3"
                class="w-full shadow-md h-56 object-cover hover:scale-105 duration-300 rounded-2xl bg-left"
                alt="cat3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Cats -->
    <section class="w-full mt-8">
      <div class="justify-center items-start flex flex-col p-4 container mx-auto">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-4xl font-bold">Popular Cats</h2>
          <BtnOutline />
        </div>
        <div
          class="flex flex-row gap-4 my-6 flex-nowrap overflow-scroll w-full pb-4"
          style="scrollbar-width: none"
        >
          <Card title="Kucing Oren" description="Kucing Aktif dan barbar" :img="cat1" />
          <Card
            title="Kucing Mujair / Tabby"
            description="Mirip Oren, kadang lebih bar bar, kadang lebih kalem"
            :img="cat2"
          />
          <Card title="Kucing Siam" description="Kucing motif topeng dan kaos kaki" :img="cat3" />
          <Card title="Maine Coon" description="Gagah Tamvan dan Gentle" :img="cat4" />
          <Card title="British Shorthair" description="Kucing Mahallll" :img="cat5" />
        </div>
      </div>
    </section>

    <!-- Latest Cats Stories -->
    <section class="w-full mt-8">
      <div class="justify-center items-start flex flex-col p-4 container mx-auto">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-4xl font-bold">Latest Cat Stories</h2>
          <BtnOutline class="" />
        </div>
        <div class="grid my-6 grid-cols-1 gap-4 md:grid-cols-2 w-full">
          <div>
            <FeaturedBlogCard
              :img="cat6"
              title="Cebelapa Imut cih aqu?"
              date="7 Mei 2025"
              description="Adop aqu dongg"
            />
          </div>
          <div class="flex flex-col gap-4">
            <BlogCard
              :img="cat1"
              title="7 Alasan Kenapa Kucing Suka Whiskas no 3 bikin kaget"
              date="30 Februari 2023"
              description="udah gak heran"
            />
            <BlogCard
              :img="cat4"
              title="Halo Dek"
              date="1 Februari 2025"
              description="dalam hati : 'Keren banget Gwehh'"
            />
            <BlogCard
              :img="cat3"
              title="Apa lo liat liat?"
              date="5 Januari 2024"
              description="Mana whiskas yang kau janjikan itu, hah?"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- contact Section -->
    <section class="dark:bg-gray-900 bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 class="text-3xl font-semibold mb-4 text-center">Hubungi Kami</h3>
          <p class="mb-6 text-center text-gray-600 dark:text-gray-300">
            Punya pertanyaan atau ingin kerja sama? Kirim pesan melalui form berikut.
          </p>

          <form class="space-y-4">
            <div>
              <label for="name" class="block mb-1 font-medium dark:text-white">Nama</label>
              <input
                type="text"
                id="name"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label for="email" class="block mb-1 font-medium dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Alamat email"
              />
            </div>
            <div>
              <label for="message" class="block mb-1 font-medium dark:text-white">Pesan</label>
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Tulis pesan kamu di sini"
              ></textarea>
            </div>
            <div class="text-center pt-2">
              <button
                type="submit"
                class="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>

          <!-- Optional: info kontak tambahan -->
          <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Email: info@kocheng.com</p>
            <p>Instagram: @kochengverse</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
