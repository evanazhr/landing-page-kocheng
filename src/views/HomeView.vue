<script setup>
import BtnOutline from '@/components/button/BtnOutline.vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import Card from '@/components/card/Card.vue'
import FeaturedBlogCard from '@/components/blog/FeaturedBlogCard.vue'
</script>

<template>
  <div class="min-h-dvh dark:text-white">
    <!-- Hero Section -->
    <section class="w-full flex h-full flex-row py-20 justify-center items-center">
      <div class="mx-auto container grid grid-cols-1 gap-8 md:grid-cols-2 w-full p-4">
        <div class="flex justify-center flex-col">
          <h1 class="text-6xl font-bold leading-[1.2] font-worksans">
            Discover The Most Adorable Cat In The World
          </h1>
          <p class="py-6 text-md leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis quidem excepturi!
            Assumenda optio quam numquam distinctio nam eaque, esse, pariatur modi molestias id ipsa
            consequatur culpa recusandae! Quo, ipsa?
          </p>
          <button
            class="px-4 py-2.5 w-50 cursor-pointer shadow-md bg-orange-400 font-semibold text-white rounded-2xl"
          >
            Get Started
          </button>
        </div>
        <div class="gap-4 grid grid-cols-2">
          <div
            class="size-full md:h-fit md:my-auto flex overflow-hidden rounded-2xl justify-center items-center"
          >
            <img
              src="@/assets/img/cat-1.jpg"
              class="md:h-56 h-full rounded-2xl shadow-md object-cover hover:scale-105 duration-300 bg-left"
              alt=""
            />
          </div>

          <div class="flex gap-4 flex-col">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="@/assets/img/cat-2.jpg"
                class="w-full shadow-md h-56 object-cover hover:scale-105 duration-300 rounded-2xl bg-left"
                alt=""
              />
            </div>

            <div class="overflow-hidden rounded-3xl">
              <img
                src="@/assets/img/cat-3.jpg"
                class="w-full shadow-md h-56 object-cover hover:scale-105 duration-300 rounded-2xl bg-left"
                alt=""
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
          <BtnOutline class="" />
        </div>
        <div
          class="flex flex-row gap-4 my-6 flex-nowrap overflow-scroll w-full pb-4"
          style="scrollbar-width: none"
        >
          <Card
            title="Kucing Oren"
            description="Kucing Aktif dan barbar"
            imgUrl="/src/assets/img/cat-1.jpg"
          />
          <Card
            title="Kucing Mujair / Tabby"
            description="Mirip Oren, kadang lebih bar bar, kadang lebih kalem"
            imgUrl="/src/assets/img/cat-2.jpg"
          />
          <Card
            title="Kucing Siam"
            description="Kucing motif topeng dan kaos kaki"
            img-url="/src/assets/img/cat-3.jpg"
          />
          <Card
            title="Maine Coon"
            description="Gagah Tamvan dan Gentle"
            img-url="/src/assets/img/cat-4.jpg"
          />
          <Card
            title="British Shorthair"
            description="Kucing Mahallll"
            img-url="/src/assets/img/cat-5.jpg"
          />
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
            <FeaturedBlogCard />
          </div>
          <div class="flex flex-col gap-4">
            <BlogCard
              imgUrl="/src/assets/img/cat-1.jpg"
              title="7 Alasan Kenapa Kucing Suka Whiskas no 3 bikin kaget"
              date="30 Februari 2023"
              description="No Comment"
            />
            <BlogCard
              imgUrl="/src/assets/img/cat-4.jpg"
              title="Kucing Tamvanss"
              date="1 Februari 2025"
              description="dalam hati : 'Keren banget Gwehh'"
            />
            <BlogCard
              imgUrl="/src/assets/img/cat-3.jpg"
              title="Apa lo liat liat?"
              date="5 Januari 2024"
              description="No canin royale no smile"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="dark:bg-gray-900 text-center">
      <div class="container mx-auto p-4">
        <div class="shadow-md rounded-2xl p-8">
          <h3 class="text-2xl font-semibold mb-4">Ingin tahu lebih banyak?</h3>
          <p class="mb-6">Kunjungi halaman about untuk informasi selengkapnya.</p>
          <router-link
            to="/about"
            class="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
          >
            Pelajari Lebih Lanjut
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
