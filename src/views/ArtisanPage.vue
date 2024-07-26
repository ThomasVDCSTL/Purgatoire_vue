<script setup>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import ProductCard from "@/components/ProductCard.vue";
const api_url = import.meta.env.VITE_API_URL


const { data : artisan }= useFetch(api_url+'/users/'+useRoute().params.id).json();
const { data : products } = useFetch(api_url+'/artisan_products/'+useRoute().params.id).json();

</script>

<template>
  <div class="p-12">

    <div class="grid grid-cols-2 justify-items-center gap-6 p-12 bg-white3 rounded-3xl">
      <figure class="w-72"><img :src=artisan.image class="placeholder object-contain rounded-3xl size-fit"/></figure>
      <div class="font-kanit flex flex-col gap-14">
        <div>
          <h1 class="text-5xl ">{{artisan.username}}</h1>

          <p class="text-2xl">{{artisan.email}}</p>
          <p class="text-2xl">{{artisan.phone}}</p>
          <p class="text-2xl">{{artisan.address}}</p>

        </div>
        <div class="flex justify-around">
          <button class="btn bg-blue text-white text-xl font-normal">Ajouter au panier</button>
          <button class="btn bg-red text-white text-xl font-normal">Achat rapide</button>
        </div>
      </div>
    </div>
    <div class="p-12">
      <h2 class="text-3xl font-kanit font-bold">Produits :</h2>


      <ul class="flex gap-5">
        <li v-for="product in products" :key="product.id"
            class="col-span-1 divide-y divide-gray-200 bg-white shadow w-fit rounded-3xl flex mt-10">
          <product-card :product="product"/>
        </li>
      </ul>

    </div>
  </div>
</template>

<style>

</style>