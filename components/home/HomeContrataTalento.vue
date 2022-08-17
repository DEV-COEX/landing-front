<template>
  <div class="grid">
    <div class=" z-10  text-white  flex justify-center items-center ">
      <div >
        <div>
          <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20 ">
            <p class="xl:text-5xl lg:text-4xl md:text-3xl text-xl w-full sm:w-[80%] lg:w-4/6 text-center font-bold px-7"> {{ pageText[0] ? pageText[0].tittle : '' }} </p>
          </div>
          <div class="flex justify-center xl:p-10 lg:p-5 p-5 md:p-6">
            <p class="xl:text-xl  lg:text-xl md:text-xl text-md text-center w-full sm:w-[80%] lg:w-3/6">{{ pageText[0] ? pageText[0].description : '' }}</p>
          </div>

          <div class="flex justify-center ">
            <app-btn
              class="
               bg-gradient-to-r
               from-blue-500
               to-blue-400
               p-1
               mb-5
               text-white
               hover:from-blue-400 hover:to-blue-500"
              @click="goTo">Contrata talentos
            </app-btn>
          </div>
        </div>
        <div class="flex justify-center items-center ">
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/python.svg" alt="Python">
          </div>
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/nosql.svg" alt="noSql">
          </div>
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/js.svg" alt="Js">
          </div>
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/nest.svg" alt="Nest">
          </div>
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/vue.svg" alt="Vue">
          </div>
          <div class="lg:p-2 w-10 sm:w-12 p-1">
            <img src="/tecnologias/laravel.svg" alt="Laravel">
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContrataTalento",
  data() {
    return {
      pageText: {}
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    await this.$store.dispatch("fetchOffers");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "home")
      this.pageText = this.$store.state.text
    },
    goTo() {
      this.$router.push({name: "contrata-talento"})
    }
  }
}
</script>
<style scoped>
.fondo {
  height: 80vh;

}

.background-animate {
  background-size: 150%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {

  0%,
  100% {
    background-position: 0% 100%;
  }

  50% {
    background-position: 100% 30%;
  }
}
</style>
