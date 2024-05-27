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
        <li v-for="product in products" :key="product.id"
            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow w-fit flex">
          <img :src="product.image" :alt="product.title" class="object-contain w-100 h-48">
        </li>
      </ul>
      <div class="flex justify-between">
        <button class="btn rounded-full text-xl font-kanit text-white bg-blue w-fit">Devenir produit</button>
        <router-link to="/products">
          <button class="btn rounded-full text-xl font-kanit text-white bg-red w-fit">Voir le catalogue des produits</button>
        </router-link>
      </div>
    </div>
    <div class="p-12 mt-12 rounded-2xl bg-white3">
      <h3 class="text-3xl font-kanit pb-6"><strong>Des artisans dévoués et consciencieux</strong></h3>
      <h4 class="text-xl font-kanit pb-6">Partez à la rencontre d’artisans pour qui le travail bien fait est la priorité.</h4>
      <ul role="list" class="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <li v-for="product in products" :key="product.id"
            class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow w-fit flex">
          <img :src="product.image" :alt="product.title" class="object-contain w-100 h-48">
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
import { useFetch } from '@vueuse/core'
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=4').json()
</script>