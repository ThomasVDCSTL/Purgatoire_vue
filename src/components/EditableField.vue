<script setup>

const { title, value, isEditing, classes} = defineProps(['title', 'value', 'isEditing', 'classes'])

</script>

<template>
  <label class="form-control w-1/2 px-12">
    <div class="label">
      <span class="label-text">{{ title }}</span>

    </div>
    <input v-if="isEditing" type="text" placeholder="Type here" :class="classes" :value=value />
    <span v-else class="w-full text-xl font-kanit rounded p-1 ">{{ value }}</span>
  </label>
</template>

<style scoped>

</style>