<script setup>
import {useFetch} from "@vueuse/core";
import {onMounted, ref, watch} from 'vue'

const {  product } = defineProps(['product'])

const { data : artisan, isFetching, error } = await useFetch('http://localhost:8000/api/users/'+product.artisan_uuid).json();
const name = ref('Loading..')
onMounted(() => {
  name.value = artisan.username
})


</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="group"><img :src="product.image" :alt="product.title" class="object-contain w-auto h-48" /></figure>
    <div class="card-body flex justify-between p-2">
      <h2 class="card-title text-black">{{ product.designation }}</h2>
      <suspense>
        <p class="card-category text-black" ><strong>Artisan : </strong>{{ name }}</p>
      </suspense>
      <p class="text-limited text-black">{{ product.description }}</p>
      <div class="card-actions justify-self-end justify-between items-center">
        <p></p>
        <p class="center  text-black"><strong>{{ product.price }}€</strong></p>
        <RouterLink :to="`/products/${product.uuid}`" class="btn btn-primary bg-blue border-0 text-white3">Détails</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  height : 413px;
}
.text-limited {
  max-width: 380px;
  max-height: 101px;
  overflow-y: auto;
  text-overflow: ellipsis;
}

figure.group:hover img {
  transform: scale(1.5);
  transition: transform 0.2s ease-in-out;
}

</style>