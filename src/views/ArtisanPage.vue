<script setup>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'


const { data : artisan }= useFetch('https://fakestoreapi.com/users/'+useRoute().params.id).json();

</script>

<template>
  <div class="p-12">

    <div class="grid grid-cols-2 justify-items-center gap-6 p-12 bg-white3 rounded-3xl">
      <figure class=""><img src="" class="placeholder object-contain rounded-3xl size-fit"/></figure>
      <div class="font-kanit flex flex-col gap-14">
        <div>
          <h1 class="text-5xl ">{{artisan.username}}</h1>
          <div class="flex justify-between items-center text-4xl">
            <h2 class=" p-8">{{artisan.name.firstname}}</h2>
            <p class="text-success p-8">En stock</p>
          </div>
          <p class="text-2xl">{{artisan.email}}</p>
          <p class="text-2xl">{{artisan.phone}}</p>
          <p class="text-2xl">{{artisan.address.number}} {{artisan.address.street}}</p>
          <p class="text-2xl">{{artisan.address.city}} {{artisan.address.zipcode}}</p>

        </div>
        <div class="flex justify-around">
          <button class="btn bg-blue text-white text-xl font-normal">Ajouter au panier</button>
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