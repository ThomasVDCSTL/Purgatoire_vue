<script setup>
import { useFetch } from '@vueuse/core'
import ArtisanCard from '@/components/ArtisanCard.vue'
const api_url = import.meta.env.VITE_API_URL

const { data: artisans } = useFetch(api_url+'/artisans').json()
</script>

<template>
  <div class="p-12">
    <h1 class="text-8xl font-alfa text-center p-52">ARTISANS</h1>
    <ul role="list" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <li v-for="artisan in artisans" :key="artisan.id"
          class="w-full col-span-1 divide-y divide-gray-200 bg-white shadow rounded-3xl flex">
        <ArtisanCard :artisan="artisan" />
      </li>
    </ul>
  </div>
</template>

<style>

</style>