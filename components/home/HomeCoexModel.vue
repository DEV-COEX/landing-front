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
            <div class="text-white
                xl:text-xl
                lg:text-xl
                md:text-xl
                text-md text-center
                w-full
                sm:w-[80%]
                lg:w-auto" v-html="textModel">
            </div>
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
            <div
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
              v-html="textFundation"
            >
            </div>
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
              @click="toFundation"
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
      textModel: null,
      textFundation: null
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'coex-model')
      this.pageText = this.$store.state.text
      this.textModel = this.$md.render(this.pageText[0].description)
      this.$store.commit('filterText', 'fundation')
      this.pageText = this.$store.state.text
      this.textFundation = this.$md.render(this.pageText[0].description)
      console.log(this.pageText)
    },
    toAbout() {
      this.$router.push('/about')
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
    toFundation() {
      this.$router.push('/fundacion')
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>

<style>
</style>
