<template>
  <div>
    <div
      class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-full h-full flex justify-center items-center pt-[13rem] pb-[8rem]">
      <div class="flex justify-center items-center" id="indexContrata">
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
              <app-card-oferta v-for="offer in offers" :key="offer.id" :offer="offer" />
            </div>

          </div>
          <div class="flex justify-center ">
            <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:from-red-400 hover:to-red-500

                  " @click="OPenModal">Contrata talento</app-btn>
          </div>
        </div>
      </div>

    </div>
    <transition name="fade" >
      <app-modal-contactar v-model="modal" @close="closeModal" />
    </transition>

  </div>

</template>

<script>
export default {
  name: "ContrataTalento",

  data() {
    return {
      pageText: {},
      offers: [],
      modal: false
    }
  },
  async mounted() {
    this.getOffers();
    this.getPageText()
    await this.$store.dispatch("fetchOffers");
    await this.$store.dispatch("fetchTexts");
    this.getOffers();
    this.getPageText()

  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "contratar-talento")
      this.pageText = this.$store.state.text[0]
    },
    getOffers() {
      this.offers = this.$store.state.offers;
    },
    OPenModal() {
      this.modal = true
      document.getElementById("indexContrata").style.filter="blur(5px)"
      
    },
    closeModal() {
      this.modal = false
      document.getElementById("indexContrata").style.filter="blur(0)"
  
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transition: opacity .7s
}
</style>
