<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-5">
    <h1
      class="
        xl:text-5xl
        lg:text-4xl
        md:text-3xl
        text-xl
        w-full
        p-2
        font-bold
        text-center text-transparent
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]
      "
      v-if="error.statusCode === 404"
    >
      Página no encontrada
    </h1>
    <h1
      class="
        xl:text-5xl
        lg:text-4xl
        md:text-3xl
        text-xl
        w-full
        p-2
        font-bold
        text-center text-transparent
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]
      "
      v-else
    >
      Ocurrió un error
    </h1>
    <h1
      class="
        xl:text-5xl
        lg:text-4xl
        md:text-3xl
        text-xl
        w-full
        p-2
        font-bold
        text-center text-transparent
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]
      "
    >
      En breve será redireccionado al Inicio
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppError',
  props: ['error'],
  mounted() {
    this.timeoutHome()
  },
  methods: {
    timeoutHome() {
      setTimeout(() => {
        this.$router.push('/')
      }, 4000)
    },
  },
}
</script>
