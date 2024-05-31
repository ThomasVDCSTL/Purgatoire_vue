<script setup>
import { useUserStore } from '@/stores/auth.store.js'
import router from '@/router/index.js'

const store = useUserStore()

if (!store.isAuthenticated) {
  router.push('/login')
}
</script>

<template>
  <div class="p-12 flex justify-center">
    <div class="w-2/3">
      <div class="bg-white3 rounded-3xl collapse collapse-plus px-8 mb-12">
        <input type="radio" name="my-accordion-1" checked="checked">
        <div class="collapse-title text-3xl">
          Profile public informations
        </div>
        <div class="collapse-content flex items-center">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile picture" class="rounded-full size-72 p-12">
          <h2 class="text-3xl font-kanit"><strong>USERNAME</strong></h2>
        </div>
      </div>
      <div class="bg-white3 rounded-3xl collapse collapse-plus px-8 mb-12">
        <input type="radio" name="my-accordion-1">
        <div class="collapse-title text-3xl">
          Profile private informations
        </div>
        <div class="collapse-content ">
          <div class="flex flex-wrap items-center " >
            <h3 class="text-2xl pl-6 w-full"><strong>Delivery Informations</strong></h3>
            <label class="form-control w-1/2 px-12">
              <div class="label">
                <span class="label-text">First Name</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            </label>
            <label class="form-control w-1/2 px-12">
              <div class="label">
                <span class="label-text">Last Name</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            </label>
            <label class="form-control w-full px-12">
              <div class="label">
                <span class="label-text">Adress</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-1/2 px-12">
              <div class="label">
                <span class="label-text">City</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            </label>
            <label class="form-control w-1/2 px-12">
              <div class="label">
                <span class="label-text">ZipCode</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-1/2 px-12">
              <div class="label">
                <span class="label-text">Phone Number</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-1/2 px-12 mb-12">
              <div class="label">
                <span class="label-text">Email</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full" />
            </label>
          </div>
        </div>
      </div>
      <div class="bg-white3 rounded-3xl collapse collapse-plus px-8 mb-12">
        <input type="radio" name="my-accordion-1" >
        <div class="collapse-title text-3xl">
          Espace Artisan
        </div>
        <div class="collapse-content flex items-center">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile picture" class="rounded-full size-72 p-12">
          <h2 class="text-3xl font-kanit"><strong>USERNAME</strong></h2>
        </div>
      </div>
      <div class="bg-white3 rounded-3xl collapse collapse-plus px-8 mb-12">
        <input type="radio" name="my-accordion-1" >
        <div class="collapse-title text-3xl">
          Security and Configuration
        </div>
        <div class="collapse-content flex items-center justify-between">
          <a class="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXk%3D">Conditions générales d'utilisation</a>
          <div class="flex justify-end">
            <button class="btn bg-red text-white text-xl font-normal">DELETE ACCOUNT</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>