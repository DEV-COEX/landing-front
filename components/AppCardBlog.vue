<template>
  <div>
    <div
      class="
        flex
        flex-col
        items-center
        w-72
        h-96
        lg:h-[27.125em]
        xl:w-80
        hover:bg-white/30
        font-Grotesque
      "
    >
      <img
        :src="'https://api.cms.coex.com.co' + imageurl"
        alt=""
        class="h-3/5 w-full"
      />
      <div class="grid grid-rows-3 h-2/5 w-full py-3 px-3">
        <h1
          class="
            h-10
            text-lg
            font-bold
            leading-[20px]
            traking-[0.093px]
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            to-[#FF9838]
            font-GrotesqueTitle
          "
        >
          {{ title }}
        </h1>
        <p
          class="
            text-sm
            font-medium
            leading-5
            text-white
            h-9
            overflow-hidden
          "
        >
          {{ introduction }}
        </p>
        <app-btn
          class="
            w-max
            h-10
            bg-gradient-to-r
            from-red-500
            to-red-400
            p-[2px]
            text-white
            hover:from-red-400 hover:to-red-500
            sm:text-sm
            lg:w-1/2
            font-Montserrat
          "
          @click="onRedirect"
        >
          Leer artículo
        </app-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardBlog',
  props: {
    iditem: {
      type: Number,
      default: 0,
    },
    imageurl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    introduction: {
      type: String,
      default: '',
    },
  },
  methods: {
    onRedirect() {
      this.$router.push(`/blogs/${this.iditem}`)
    },
  },
}
</script>
