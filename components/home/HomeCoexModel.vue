<template>
  <div>
    <div
      class="
        bg-black
        flex-col flex
        lg:grid lg:grid-cols-2
        justify-center
        items-center
        min-h-screen
      "
    >
      <div class="flex justify-center items-center">
        <div class="">
          <div class="flex justify-center">
            <p
              class="
                xl:text-5xl
                lg:text-4xl
                md:text-3xl
                text-xl
                w-full
                sm:w-[80%]
                lg:w-full
                px-7
                font-bold
                text-center text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#FFDF8D]
                via-[#FF9838]
                to-[#dab255]
              "
            >
              COEX MODEL:
            </p>
          </div>
          <div class="flex justify-center xl:p-10 lg:p-5 p-5 md:p-6">
            <p class="text-white
                xl:text-xl
                lg:text-xl
                md:text-xl
                text-md text-center
                w-full
                sm:w-[80%]
                lg:w-auto">
              Es un Bootcamp en el cual formamos la base del hacer, del ser y el
              saber de cada talento juvenil que quiere ser Talento, provenientes
              de diversos tipos de comunidades de nuestra ciudad, bajo un
              ambiente de alta productividad dónde se entrenan como
              desarrolladores de software.
            </p>
          </div>
          <div class="flex justify-center">
            <app-btn
              class="
                bg-gradient-to-r
                from-red-500
                to-red-400
                p-1
                mx-6
                text-white
                hover:from-red-400 hover:to-red-500
              "
              @click="toAbout"
              >Conoce más
            </app-btn>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="">
          <div class="flex justify-center pt-5 lg:pt-0 md:pt-20">
            <p
              class="
                xl:text-5xl
                lg:text-4xl
                md:text-3xl
                text-xl
                w-full
                sm:w-[80%]
                lg:w-full
                lg:px-10
                font-bold
                text-center text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#FFDF8D]
                via-[#FF9838]
                to-[#dab255]
              "
            >
              ¿Quieres apoyar el talento joven en tecnología?
            </p>
          </div>
          <div class="flex justify-center xl:p-10 lg:p-5 p-5 md:p-6">
            <p
              class="
              text-white
                xl:text-xl
                lg:text-xl
                md:text-xl
                text-md text-center
                w-full
                sm:w-[80%]
                lg:w-full
                lg:px-10
              "
            >
              Contribuye financiando la educación de uno de nuestros talentos COEX. Con un aporte de desde 1 usd puedes cambiar la vida de toda una familia.
            </p>
          </div>
          <div class="flex justify-center">
            <app-btn
              class="
                bg-gradient-to-r
                from-red-500
                to-red-400
                p-1
                mx-6
                text-white
                hover:from-red-400 hover:to-red-500
              "
              >Quiero donar
            </app-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCoexModel',
  data() {
    return {
      pageText: {},
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'fabrica')
      this.pageText = this.$store.state.text
    },
    toAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<style>
</style>
