<script setup>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart.store.js'
import {onMounted, ref, watch} from "vue";
const api_url = import.meta.env.VITE_API_URL

  const { data, isFetching }= useFetch(api_url+'/products/'+useRoute().params.id).json();
  const product = ref(null)

watch(isFetching,()=>{ product.value = data.value } )




const store = useCartStore()




</script>

<template>
  <div class="p-12">

    <div class="grid grid-cols-2 justify-items-center gap-6 p-12 bg-white3 rounded-3xl">
      <figure class=""><img :src="product.image" class="object-contain rounded-3xl size-fit"/></figure>
      <div class="font-kanit flex flex-col gap-14">
        <div>
          <h1 class="text-5xl ">{{product.designation}}</h1>
          <div class="flex justify-between items-center text-4xl">
            <h2 class=" p-8">{{product.price}}€</h2>
            <p class="text-success p-8">En stock</p>
          </div>
          <p class="text-2xl">{{product.description}}</p>
        </div>
        <div class="flex justify-around">
          <button class="btn bg-blue text-white text-xl font-normal" v-on:click="store.addToCart(product,1)">Ajouter au panier</button>
          <button class="btn bg-red text-white text-xl font-normal">Achat rapide</button>
        </div>
      </div>
    </div>
    <div class="p-12">

    </div>
  </div>
</template>

<style>

</style>