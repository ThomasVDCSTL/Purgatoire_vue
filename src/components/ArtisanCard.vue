<script setup>
const { artisan } = defineProps(['artisan'])
</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl size-full">
    <figure class="h-48 w-48"><img :src=artisan.image alt="foto" class="h-48"/></figure>
    <div class="card-body font-kanit">
      <h2 class="card-title text-4xl">{{ artisan.username }}</h2>
      <p class="text-xl">{{ artisan.email }}</p>
      <div class="card-actions justify-end">
        <router-link :to="`artisans/${ artisan.uuid }`" >
          <button class="btn bg-blue text-white">Watch</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>