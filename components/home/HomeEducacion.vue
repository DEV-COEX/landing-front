<template>
  <div
    id="educacionHome"
    class="background-animatee h-screen w-full flex justify-center items-center"
  >
    <div class="flex justify-center items-center">
      <div class="">
        <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20">
          <p
            class="pb-[10px] xl:text-5xl lg:text-4xl md:text-3xl text-xl w-full sm:w-[80%] lg:w-4/6 px-7 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
          >
            Especialízate en desarrollo de software con nuestra increíble
            metodología en tan solo 10 meses.
          </p>
        </div>

        <div class="flex justify-center pt-10">
          <app-btn
            class="bg-gradient-to-r from-red-500 to-red-400 p-1 mx-6 text-white hover:from-red-400 hover:to-red-500 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200"
            @click="toEducation"
            >¡Conoce como!
          </app-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeEducacion',
  data() {
    return {
      pageText: {},
      btnStar: true,
      isActive: true,
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'educacionHome')
      this.pageText = this.$store.state.text
    },
    btnStarEducacion() {
      this.isActive = !this.isActive
    },
    toEducation() {
      this.$router.push('/educacion')
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>

<style>
.background-animatee {
  background-size: 150%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 6s ease infinite;
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
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.1s;
}
#educacionHome {
  background: url(@/static/HomeEducacion.png) no-repeat;
  background-color: black;
}
</style>
