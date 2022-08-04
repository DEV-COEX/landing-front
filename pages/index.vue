<template>
  <div id="home" class="grid w-full h-screen bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477]">

    <div id="contenedor" class="bg-gradient-to-r from-[#1C2365]   to-[#163B85] contenedor   text-white">
      <transition name="fade">
        <div v-if="this.$store.state.transition" id="contrataTalento" class=" h-[80vh] w-full flex justify-center">
          <home-contrata-talento />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="!this.$store.state.transition" class=" h-[70vh] w-full flex justify-center">
          <home-ser-talento />
        </div>
      </transition>

    </div>
    <div
      class="z-0 flex bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477] background-animate  h-screen w-full justify-center  pb-16 items-end"
      style="position:absolute;">
      <div id="next" class="btn">
        <button class="btn animate-ping opacity-75" @click="metodoCambio"></button>
      </div>
      <div id="conoceMas" class="hidden">
        <div
          class=" w-24 h-24  ml-1 rounded-full border-4 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  p-1 flex items-center  justify-center">
          <div class="btnDos bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE] flex items-center  justify-center">
            <span class=" text-blue-400 text-sm font-semibold text-center ">Conoce más</span>
            <button class="btnDos bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE] animate-ping opacity-75 absolute"
              @click="conoceMas"></button>
          </div>

        </div>
      </div>
    </div>
    <transition name="fade" id="conoce">
      <div v-if="this.$store.state.home" class=" pt-[18rem] animate__animated animate__bounceInUp">
        <home-fabrica />
      </div>

    </transition>





  </div>
</template>

<script>

export default {
  name: "AppHome",
  data() {
    return {
      pageText: {},
      isActive: true,
      show: false
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "contratar-talento")
      this.pageText = this.$store.state.text
    },
    gethome(){

    },
    metodoCambio() {
      const estado = false;
      this.$store.dispatch('animation', estado);


    },
    conoceMas() {
     const estadoHome = true;
     this.$store.dispatch('home', estadoHome)
    }

  }
}
</script>
<style scoped>
.contenedor {
  height: 80vh;
  z-index: 10;
  border-bottom-left-radius: 18rem;
  border-bottom-right-radius: 18rem;
}

.btnDos {
  width: 70px;
  height: 70px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;

}

.btn {
  width: 50px;
  height: 50px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #6169ac;
}

.background-animate {
  background-size: 150%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 3s ease infinite;
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
  transition: opacity 5s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transition: opacity .7s
}
</style>
