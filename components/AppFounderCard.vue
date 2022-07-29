<template>
  <div
    class="
      flex
      w-full
      h-[33rem]
      py-10
      bg-[#0A033C]
      px-28
      text-white
      justify-center
    "
  >
    <div
      class="
        rounded-full
        overflow-hidden
        flex
        items-center
        justify-center
        min-h-[22rem] min-w-[22rem]
        mr-[2rem]
      "
    >
      <img
        class="rounded-full min-h-[22rem] min-w-[22rem]"
        :src="image"
        alt=""
      />
    </div>
    <div class="max-w-[60%] pl-20 flex-col flex justify-center">
      <div
        class="
          py-3
          font-extrabold
          text-transparent text-5xl
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        {{name}}
      </div>
      <div></div>
      <div class="py-3 font-extrabold text-3xl">{{job}}</div>
      <div class="py-3 font-extrabold text-3xl">{{descript}}</div>
      <div class="text-xl">
        {{about}}
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
    descript: {
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
