<script setup>
const { artisan } = defineProps(['artisan'])
</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl size-full">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
    <div class="card-body font-kanit">
      <h2 class="card-title text-4xl">{{ artisan.username }}</h2>
      <p class="text-xl">{{ artisan.email }}</p>
      <div class="card-actions justify-end">
        <router-link :to="`artisans/${ artisan.id }`" >
          <button class="btn bg-blue text-white">Watch</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>