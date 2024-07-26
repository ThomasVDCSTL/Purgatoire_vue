<template>
  <div class="p-12">
    <h1 class="text-8xl font-alfa text-center pt-52">PRODUITS</h1>
    <div class="join pb-52 pt-16 w-full flex justify-center">
      <div>
        <div>
          <input class="input input-bordered join-item w-72" placeholder="Search"/>
        </div>
      </div>
      <select class="select select-bordered join-item">
        <option disabled selected>Filter</option>
        <option v-for="category in categories" :key="category">{{category}}</option>
      </select>
      <div class="indicator">
        <button class="btn join-item bg-red">Search</button>
      </div>
    </div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <li v-for="product in products" :key="product.id"
          class="col-span-1 divide-y divide-gray-200 bg-white shadow w-fit rounded-3xl flex">
          <product-card :product="product"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'
import ProductCard from '@/components/ProductCard.vue'
const api_url = import.meta.env.VITE_API_URL

const { data: products } = useFetch(api_url+'/products').json()
</script>

