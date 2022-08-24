<template>
  <div
    class="
      bg-gradient-to-r
      from-[#1C233A]
      to-[#1C233A]
      w-full
      sm:w-[25rem]
      lg:w-[40rem]
      md:w-[30rem]
      rounded-2xl
      px-4 py-3
      lg:p-6
      lg:px-10
      flex-col
      mb-4
      lg:mb-3
    "
  >
    <p
      class="
        text-xl
        leading-normal
        font-bold
        text-transparent
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]
      "
    >
      {{ offer.tittle }}
    </p>

    <div class="lg:text-xl font-medium md:text-xl text-lg text-white py-3" v-html="description"></div>

  </div>
</template>

<script>
export default {
  name: 'CardOferta',
  props: {
    offer: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style>
strong {
  color:transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #ffdf8d, #ff9838);
}
</style>
