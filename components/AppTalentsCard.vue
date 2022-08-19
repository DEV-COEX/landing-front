<template>
  <div class="lg:mx-0  flex flex-col rounded-xl p-3 text-white text-center items-center lg:my-6">
      <img class="object-cover h-36 w-36 lg:w-28 lg:h-28 rounded-[40%]" :src="image" alt="imagensita">
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
