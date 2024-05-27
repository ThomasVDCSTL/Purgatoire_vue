<template>
  <div class="p-12">
    <h1 class="text-8xl font-alfa text-center p-52">PRODUITS</h1>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <li v-for="product in products" :key="product.id"
          class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow w-fit rounded-3xl flex">
        <product-card :title="product.title" :description="product.description" :image="product.image"
                      :price="product.price" :category="product.category" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetch } from '@vueuse/core'
import ProductCard from '@/components/ProductCard.vue'
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>

