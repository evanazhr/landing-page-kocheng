<script setup>
import cat1 from '@/assets/img/cat-1.jpg'
import cat2 from '@/assets/img/cat-2.jpg'
import cat3 from '@/assets/img/cat-3.jpg'
import cat4 from '@/assets/img/cat-4.jpg'
import cat5 from '@/assets/img/cat-5.jpg'
import cat6 from '@/assets/img/cat-6.jpg'
</script>

<template>
  <div class="min-h-dvh dark:text-white bg-white dark:bg-gray-900">
    <section class="w-full pt-20">
      <div class="justify-center items-start flex flex-col p-4 container mx-auto">
        <!-- Judul dan Deskripsi Layanan -->
        <div class="flex flex-col gap-4 mb-6">
          <h2 class="text-4xl font-bold">Layanan Kucing Super Gaul Kami</h2>
          <p class="text-lg">
            Tidak hanya manusia yang butuh layanan, kucing juga butuh layanan! Kami menawarkan
            berbagai layanan keren buat kucingmu yang pasti bikin mereka ngerasa kaya dan terkenal.
            Yuk, lihat apa saja yang kami tawarkan di *KochengVerse*.
          </p>
        </div>

        <!-- Layanan -->
        <div class="grid my-6 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Layanan 1 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img :src="cat1" alt="Layanan Mewah" class="rounded-lg w-full h-56 object-cover mb-4" />
            <h3 class="text-2xl font-semibold">Spa Kucing Mewah</h3>
            <p class="text-md">
              Kucingmu butuh relaksasi? Bawa dia ke *Spa Kucing Mewah*, tempat terbaik untuk pijat
              punggung dan tidur siang yang tidak bisa ditemukan di tempat lain. Bonus: Kucingmu
              bakal lebih mewah dari kamu!
            </p>
          </div>

          <!-- Layanan 2 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img
              :src="cat2"
              alt="Layanan Kucing Fitness"
              class="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 class="text-2xl font-semibold">Kucing Fitness Club</h3>
            <p class="text-md">
              Siapa bilang kucing gak perlu olahraga? Di Kucing Fitness Club, kita ajarkan mereka
              nge-gym, lari-lari di treadmill, dan bahkan yoga kucing! Kucing sehat, hati senang!
            </p>
          </div>

          <!-- Layanan 3 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img
              :src="cat3"
              alt="Layanan Kucing Model"
              class="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 class="text-2xl font-semibold">Jasa Model Kucing</h3>
            <p class="text-md">
              Siapa yang nggak ingin kucingnya jadi model? Kami bantu kucingmu jadi bintang
              Instagram dengan foto-foto kece dan gaya fotogenic yang gak kalah dari selebgram!
            </p>
          </div>

          <!-- Layanan 4 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img
              :src="cat4"
              alt="Layanan Makanan Kucing Eksklusif"
              class="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 class="text-2xl font-semibold">Makanan Kucing Eksklusif</h3>
            <p class="text-md">
              Hanya yang terbaik untuk si kucing! Kami sajikan makanan kucing gourmet dari
              bahan-bahan langka yang bahkan selebriti pun belum tentu bisa beli. Siap-siap kucingmu
              jadi pemakan kuliner kelas dunia!
            </p>
          </div>

          <!-- Layanan 5 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img
              :src="cat5"
              alt="Layanan Kucing Adventure"
              class="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 class="text-2xl font-semibold">Kucing Adventure Park</h3>
            <p class="text-md">
              Tidak hanya manusia yang butuh petualangan! Di Kucing Adventure Park, kucing bisa naik
              roller coaster, berayun di jembatan gantung, dan mengejar laser sampai puas. Tidak ada
              kata bosan di sini!
            </p>
          </div>

          <!-- Layanan 6 -->
          <div
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform hover:scale-105"
          >
            <img
              :src="cat6"
              alt="Layanan Penerjemah Kucing"
              class="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 class="text-2xl font-semibold">Penerjemah Kucing Profesional</h3>
            <p class="text-md">
              Kucingmu sering ngomong bahasa kucing yang susah dimengerti? Tenang, kami punya
              penerjemah kucing yang dapat mengartikan "meong" jadi "saya lapar" atau "meong" jadi
              "saya ingin tidur". Komunikasi lancar!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-800 dark:bg-gray-900 text-center text-white py-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-4">Hubungi Kami Untuk Layanan Lainnya!</h2>
        <p class="text-lg mb-6">
          Kami siap memberikan layanan terbaik untuk kucingmu. Jangan ragu untuk menghubungi kami
          kalau ada layanan kucing yang ketinggalan!
        </p>
        <router-link
          to="/contact"
          class="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
        >
          Hubungi Kami
        </router-link>
      </div>
    </section>
  </div>
</template>
