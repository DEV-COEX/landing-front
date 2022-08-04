<template>
  <div id=""
    class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-full h-full flex justify-center items-center pt-[13rem] pb-[8rem]">
    <div class="flex justify-center items-center">
      <div class="">
        <div class="flex justify-center ">
          <p class="text-5xl leading-normal font-bold  w-4/5 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ pageText?.tittle }}</p>
        </div>
        <div class="flex justify-center">
          <p class="text-3xl w-2/5 text-center text-white py-10">{{ pageText?.description }}</p>
        </div>
        <div class="grid justify-center items-center">
          <div class="p-7">
            <app-card-oferta  v-for="offer in offers" :key="offer.id"  :offer="offer"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContrataTalento",
  data() {
    return {
      pageText: {},
      offers: []
    }
  },
  async mounted() {
    await this.getOffers();
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()

  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "contratar-talento")
      this.pageText = this.$store.state.text[0]
    },
    async getOffers() {
      const response = await this.$axios.get("offers");
      this.offers = response.data;
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
