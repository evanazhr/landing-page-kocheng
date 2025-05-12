<template>
  <div class="min-h-dvh dark:text-white bg-white dark:bg-gray-900">
    <section
      v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
      class="py-24 container mx-auto p-4"
    >
      <h1 class="text-5xl font-bold mb-6 text-center">Hubungi Kami (kalau berani)</h1>
      <p class="text-center max-w-2xl mx-auto mb-10">
        Ada pertanyaan, kritik, saran, atau cuma mau ngasih foto kucing rebahan 12 jam? Kirim aja!
        Tim kami (yang terdiri dari 60% kucing, 40% manusia ngopi) siap membaca setiap pesan...
        kalau mereka bangun.
      </p>

      <!-- Form Kontak -->
      <div
        v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
        class="grid md:grid-cols-2 gap-8"
      >
        <form class="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label class="block mb-1 font-semibold">Nama Kamu</label>
            <input
              type="text"
              placeholder="Contoh: Si Pecinta Oren"
              class="w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="kamu@meongmail.com"
              class="w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-semibold">Pesan (boleh puisi juga)</label>
            <textarea
              rows="5"
              placeholder="Curhatin kucing kamu di sini..."
              class="w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
          >
            Kirim Sekarang 🚀
          </button>
        </form>

        <!-- Info Kontak -->
        <div
          v-scroll-reveal="{ animationClass: 'animate-fade-in-up', threshold: 0.2 }"
          class="flex flex-col justify-center gap-6"
        >
          <div>
            <h2 class="text-xl font-bold mb-2">Markas Besar KochengVerse</h2>
            <p>Di balik lemari, sebelah bantal empuk 🛋️</p>
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">Email</h2>
            <p>
              <a href="#" class="text-orange-500 hover:underline">info@kocheng.com</a>
            </p>
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">Nomor Meow</h2>
            <p>+62 813-1234-MEOW (kalau kucingnya mau angkat)</p>
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">Jam Operasional</h2>
            <p>Setiap hari, kecuali saat kucing tidur. Jadi, random ya 😴</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
