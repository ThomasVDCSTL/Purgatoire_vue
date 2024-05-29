<script setup>
import { useFetch } from '@vueuse/core'

const { data: cart } = useFetch('https://fakestoreapi.com/carts/1').json()

</script>

<template>
  <h1 class="text-8xl font-alfa text-center p-52 pb-32">PANIER</h1>
<div class="p-12 flex justify-around gap-14">

  <div class="bg-white3 w-1/2 rounded-3xl">
    <div class="pt-12 flex justify-center flex-wrap h-full">
      <h2 class="text-5xl font-alfa text-center pb-12 w-full">Informations de livraison</h2>
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
      <label class="form-control w-1/2 px-12">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
      </label>
      <label class="form-control w-full px-12">
        <div class="label">
          <span class="label-text">Shipping</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>DLP</option>
          <option>Colissimo</option>
          <option>DPD</option>
          <option>GLS</option>
          <option>Fedex</option>
        </select>
      </label>
      <div class="flex justify-end w-full">
        <div class="form-control">
          <label class="label cursor-pointer gap-14 p-12">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white3 w-1/2 rounded-3xl">
    <div class="overflow-x-auto  pt-12">
      <h2 class="text-5xl font-alfa text-center pb-12">Commande</h2>
      <table class="table">
        <!-- head -->
        <thead>
        <tr class="text-xl font-kanit text-black">
          <th></th>
          <th><strong>Name</strong></th>
          <th><strong>Qty</strong></th>
          <th><strong>PUA</strong></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr v-for="item in cart.products" :key="item.id">
          <td><img src="/src/assets/icone2.png" class="w-20 h-20"/></td>
          <td>MABEAT</td>
          <td>{{item.quantity}}</td>
          <td>1000 €</td>
          <td class="flex justify-center"><button class="btn bg-red text-white">Delete</button></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="text-xl font-kanit"><strong>Total</strong></td>
          <td class="text-xl font-kanit"><strong>1000 €</strong></td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <div class="w-full flex justify-end p-12">
        <button class="btn bg-blue text-white">Valider le panier</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>