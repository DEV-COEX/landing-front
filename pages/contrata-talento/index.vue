<template>
  <div>
    <div id="indexContrata" class="
        pt-[5rem]
        lg:pt-[6rem]
        min-h-screen
        lg:bg-gradient-to-r
        lg:from-[#000A65]
        lg:via-[#2c2191]
        lg:to-[#2F00B5]
        bg-[#171929]
        background-animate
        w-full
        flex
        justify-center
        items-center
        px-5 lg:px-0
      ">
      <div class="flex justify-center items-center">
        <div>
          <div class="flex justify-center w-full">
            <p class="
                px-2
                md:px-4
                lg:text-5xl
                md:text-3xl
                lg:leading-relaxed
                font-bold
                text-2xl text-center text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#FFDF8D]
                via-[#FF9838]
                to-[#dab255]
              ">
              {{ pageText?.tittle }}
            </p>
          </div>
          <div class="flex justify-center">
            <p class="lg:text-3xl w-full md:text-xl text-lg px-2 lg:w-2/5 text-center text-white pb-5 pt-1 lg:py-10">
              {{ pageText?.description }}
            </p>
          </div>
          <div class="grid justify-center items-center">
            <div class="lg:p-7">
              <app-card-oferta v-for="offer in offers" :key="offer.id" :offer="offer" :description="offer.description"/>
            </div>
          </div>
          <div class="flex justify-center ">
            <a href="#indexContrata">
              <app-btn class="

                bg-gradient-to-r
                from-red-500
                to-red-400
                mx-6
                md:mb-6
                sm:mb-3
                mb-2
                text-white
                hover:from-red-400 hover:to-red-500
              " @click="OPenModal">Contactar</app-btn>
            </a>

          </div>
        </div>
      </div>
    </div>
    <transition name="fade" >
      <app-modal-contactar v-model="modal" @close="closeModal"  class="xlchikito:top-0  lg:top-[-158px]  top-0"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContrataTalento',

  data() {
    return {
      pageText: {},
      offers: [],
      modal: false,
    }
  },
  async mounted() {
    this.getOffers()
    this.getPageText()
    await this.$store.dispatch('fetchOffers')
    await this.$store.dispatch('fetchTexts')
    this.getOffers()
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'contratar-talento')
      this.pageText = this.$store.state.text[0]
    },
    getOffers() {
      this.offers = this.$store.state.offers
    },
    OPenModal() {
      this.modal = true
      document.getElementById('indexContrata').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModal() {
      this.modal = false
      document.getElementById('indexContrata').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
  },
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
.modal{
  top: 0px;
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
@media (max-width: 1024px) {
  .modal {
    top: -158px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transition: opacity 0.7s;
}

body::-webkit-scrollbar {
  width: 2px;
  /* width of the entire scrollbar */
}

body::-webkit-scrollbar:hover {
  width: 5px;

  /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);
  /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4A5B95 0%, #90BEFF 100%);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* border: 1px solid rgb(217 70 239);
  /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}
</style>
