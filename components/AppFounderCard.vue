<template>
  <div
    class="
      flex
      w-full
      h-auto
      lg:min-h-[33rem]
      lg:py-10
      py-5
      bg-trasparent
      lg:bg-[#0a033c3b]
      lg:px-28
      lg:text-left
      text-center
      text-white
      justify-center
    "
  >

      <img
        class="rounded-full self-center lg:min-h-[22rem] lg:min-w-[22rem] max-h-[18rem] max-w-[18rem]"
        :src="image"
        alt=""
      />
    <div class=" w-full px-5 lg:max-w-[60%] lg:pl-20 flex-col flex justify-center">
      <div
        class="
          lg:py-3
          pb-1 pt-3
          font-extrabold
          text-transparent text-2xl lg:text-5xl
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        {{ name }}
      </div>
      <div></div>
      <div class="py-1 lg:py-3 text-center lg:text-left font-extrabold text-xl lg:text-3xl">{{ job }}</div>
      <div class="py-1 lg:py-3 mb-2 text-center lg:text-left font-extrabold text-xl lg:text-3xl">{{ description }}</div>
      <div class="text-xl text-left ">
        {{ about }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoundersCard',
  props: {
    image: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: 'anonymous',
    },
    job: {
      type: String,
      default: 'anonymous',
    },
    description: {
      type: String,
      default: 'anonymous',
    },
    about: {
      type: String,
      default: 'anonymous',
    },
  },
}
</script>

<style>
</style>
