<template>
  <div class="p-12">
    <div class=" gap-16 flex flex-col items-center">
      <img src="/src/assets/iconeBIG.png" alt="logo purgatoire" class="w-72 h-72">
      <h1 class="text-8xl font-alfa text-center ">PURGATOIRE</h1>
      <h3 class="text-4xl font-alfa"><strong>Des produits artisanaux pour meubler votre donjon ou épicer vos soirées</strong></h3>
    </div>
    <div class="p-12 mt-12 rounded-2xl bg-white3">
      <h3 class="text-3xl font-kanit pb-6"><strong>Produits artisanaux</strong></h3>
      <h4 class="text-xl font-kanit pb-6">Découvrez un vaste choix de produits artisanaux du terroir de la Géhenne.</h4>
      <ul role="list" class="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <li v-for="product in products.slice(0,4)"
            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow w-fit flex">
          <img :src="product.image" :alt="product.title" class="object-contain w-100 h-48">
        </li>
      </ul>
      <div class="flex justify-between">
        <router-link to="products/create">
          <button class="btn rounded-full text-xl font-kanit text-white bg-blue w-fit">Créer produit</button>
        </router-link>
        <router-link to="/products">
          <button class="btn rounded-full text-xl font-kanit text-white bg-red w-fit">Voir le catalogue des produits</button>
        </router-link>
      </div>
    </div>
    <div class="p-12 mt-12 rounded-2xl bg-white3">
      <h3 class="text-3xl font-kanit pb-6"><strong>Des artisans dévoués et consciencieux</strong></h3>
      <h4 class="text-xl font-kanit pb-6">Partez à la rencontre d’artisans pour qui le travail bien fait est la priorité.</h4>
      <ul role="list" class="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <li v-for="artisan in artisans.slice(0, 4)" :key="artisan.uuid"
            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow w-fit flex">
          <img :src="artisan.image" :alt="artisan.username" class="object-contain w-100 h-48">
        </li>
      </ul>
      <div class="flex justify-between">
        <button class="btn rounded-full text-xl font-kanit text-white bg-blue w-fit">Devenir artisan</button>
        <router-link to="/artisans">
          <button class="btn rounded-full text-xl font-kanit text-white bg-red w-fit">Découvrir nos artisans</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const api_url = import.meta.env.VITE_API_URL
import { useFetch } from '@vueuse/core'
const { data: products } = useFetch(api_url+'/products').json()
const { data: artisans } = useFetch(api_url+'/artisans').json()
</script>