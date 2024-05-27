<script setup>
import { defineProps } from 'vue'
const { title, description, image, price, category } = defineProps(['title', 'description', 'image', 'price', 'category'])


</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="group"><img :src="image" :alt="title" class="object-contain w-auto h-48" /></figure>
    <div class="card-body flex justify-between p-2">
      <h2 class="card-title text-black">{{ title }}</h2>
      <p class="card-category text-black"><strong>Artisan : </strong>{{ category }}</p>
      <p class="text-limited text-black">{{ description }}</p>
      <div class="card-actions justify-self-end justify-between items-center">
        <p></p>
        <p class="center  text-black"><strong>{{ price }}€</strong></p>
        <button class="btn btn-primary bg-blue border-0 text-white3">Détails</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  height : 413px;
}
.text-limited {
  max-width: 380px; /* Limite la largeur du conteneur à 200px */
  max-height: 101px;
  overflow-y: auto; /* Cache le texte qui dépasse du conteneur */
  text-overflow: ellipsis; /* Ajoute des points de suspension à la fin du texte coupé */
  white-space: wrap; /* Empêche le texte de passer à la ligne */
}

figure.group:hover img {
  transform: scale(1.5);
  transition: transform 0.2s ease-in-out;
}

</style>