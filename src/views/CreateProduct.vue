<script setup>

import EditableField from '@/components/EditableField.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.store.js'
import { useProductStore } from '@/stores/product.store.js'
const img = ref("https://picsum.photos/200/300")
const title = ref("")
const price = ref("")
const description = ref("")

const prodStore = useProductStore()
const userStore = useUserStore()


function addProduct(){
  prodStore.addProduct({
    designation: title.value,
    description: description.value,
    price: price.value,
    image: img.value,
    category: "oui",
    materials : "oui",
    artisan_uuid: userStore.user.uuid
  }, userStore.token)
  title.value = ""
  price.value = ""
  description.value = ""
  img.value = "https://picsum.photos/200/300"
}

</script>

<template>
  <div class="p-12">
    <h1 class="text-8xl font-alfa text-center p-52">Creation de Produit</h1>
    <div class="bg-white3 rounded-3xl p-12 flex">
      <div class="w-1/2 flex flex-wrap ">
        <label class="form-control w-full px-12">
          <div class="label">
            <span class="label-text">Designation</span>
          </div>
          <input type="text" placeholder="Type here" class="input input-bordered w-full " v-model="title" />
        </label>
        <label class="form-control w-full px-12">
          <div class="label">
            <span class="label-text">Prix</span>
          </div>
          <input  type="text" placeholder="Type here" class="input input-bordered w-full " v-model="price" />
        </label>
        <label class="form-control w-full px-12">
          <div class="label">
            <span class="label-text">Image</span>
          </div>
          <input  type="text" placeholder="Type here" class="input input-bordered w-full " v-model="img" />
        </label>
        <label class="form-control w-full px-12">
          <div class="label">
            <span class="label-text">Description</span>
          </div>
          <textarea placeholder="Type here" class="textarea input-bordered w-full h-56" v-model="description" />
        </label>
        <button class="btn btn-primary m-12 mb-0" @click="addProduct">Ajouter</button>

      </div>
      <div class="w-1/2 flex justify-center">

      <img :src=img alt="article picture" >
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>