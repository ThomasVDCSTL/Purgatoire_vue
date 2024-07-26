<script setup>
import { useUserStore } from '@/stores/user.store.js'
import router from '@/router/index.js'
import EditableField from '@/components/EditableField.vue'
import { ref } from 'vue'

const store = useUserStore()

const truc = ref("truc")
const editingPrivateInfos = ref(false)

if (!store.isAuthenticated) {
  router.push('/login')
}
const user = store.user

function editPrivateInfos() {
  editingPrivateInfos.value = !editingPrivateInfos.value
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
          <img :src=user.image alt="profile picture" class="rounded-full size-72 p-12">
          <h2 class="text-3xl font-kanit"><strong>{{ user.username }}</strong></h2>
        </div>
      </div>
      <div class="bg-white3 rounded-3xl collapse collapse-plus px-8 mb-12">
        <input type="radio" name="my-accordion-1">
        <div class="collapse-title text-3xl">
          Profile private informations
        </div>
        {{ truc }}
        <div class="collapse-content ">
          <div class="flex flex-wrap items-center " >
            <h3 class="text-2xl pl-6 w-full"><strong>Delivery Informations</strong></h3>
            <EditableField
              :isEditing=editingPrivateInfos
              title="First Name"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="Last Name"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="Adress"
              :value="truc"
              classes="input input-bordered w-full" class="w-full"></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="City"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="ZipCode"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="Phone Number"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>
            <EditableField
              :isEditing=editingPrivateInfos
              title="Email"
              :value="truc"
              classes="input input-bordered w-full "></EditableField>

            <button v-if="editingPrivateInfos" class="btn bg-blue text-white text-xl font-normal" @click="editPrivateInfos">SAVE CHANGES</button>
            <button v-else class="btn bg-blue text-white text-xl font-normal" @click="editPrivateInfos">EDIT</button>
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