<template>
  <div class="mx-auto  flex flex-col rounded-xl p-3 text-white text-center items-center my-6">
    <div class="rounded-[40%] bg-white h-36 w-36 overflow-hidden">
      <img class="object-cover" :src="image" alt="imagensita">
    </div>
    <div
      class="
        py-3
        font-extrabold
        text-transparent text-3xl
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        to-[#FF9838]
      "
    >
      {{name}}
    </div>
    <div class="text-xl pb-3">{{job}}</div>
    <div v-show="details != null" class="text-xl px-5">{{details}}</div>
  </div>
</template>

<script>
export default {
  name: 'TalentCard',
  props: {
    name: {
      type: String,
      default: 'namesito',
    },
    job: {
      type: String,
      default: 'developer',
    },
    details: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  },
}
</script>

<style>
</style>
