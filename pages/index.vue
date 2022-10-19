<template>
  <div
    id="home"
    class=" w-full min-h-screen bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477] bg-black">

    <div id="contenedor-nuevo" class="relative flex content-center h-[100vh]   text-white">
      <div>
        <div class="layer"></div>
        <img class="contenedor-nuevo-image" src="@/static/coding.gif" alt="codingImage">
      </div>
      <!-- <transition name="fade"> -->
        <!-- <div  v-if="this.$store.state.transition"  id="contrataTalento" class=" h-[80vh] w-full flex justify-center"> -->
          <home-contrata-talento />
        <!-- </div> -->
      <!-- </transition> -->
      <!-- <transition name="fade"> -->
        <!-- <div v-if="!this.$store.state.transition" class=" h-[70vh] w-full flex justify-center"> -->
          <!-- </div> -->
          <!-- </transition> -->
          <!-- <contenedor-cris></contenedor-cris> -->
        </div>
    <div id="contenedor-nuevo" class="relative flex content-center justify-center h-[100vh] text-white">
      <div>
        <div class="layer"></div>
        <img class="contenedor-nuevo-image" src="@/static/binarios.gif" alt="binary">
      </div>
      <home-ser-talento />
    </div>

    <!-- <div class=" flex  justify-center py-5 md:py-8 xl:py-24 lg:py-8 "> -->


       <!-- <div id="next" class="btn"> -->
        <!-- <button class="btn animate-ping opacity-75" @click="metodoCambio"></button> -->
      <!-- </div> -->

      <!-- <div id="conoceMas" class="hidden">
        <div
          class=" w-34 h-34  ml-1 rounded-full border-2 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  p-1 flex items-center  justify-center">
          <div class="btnDos bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE] flex items-center  justify-center">
            <span class=" text-blue-400 text-sm font-semibold text-center absolute">Ver más</span>
            <a href="#conoce" class=""><button
                class="btnDos bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  opacity-75 animate-ping"
                @click="conoceMas"></button></a>
          </div>
        </div>
      </div>
    </div> -->
    <transition name="fade" class="animate__animated animate__zoomInUp">
      <div v-if="this.$store.state.home" id="conoce">
        <home />
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
        };
    },
    async mounted() {
        this.getPageText();
        await this.$store.dispatch("fetchTexts");
        this.getPageText();
        //  animacion para el div HomeSerTalento y HomeContrataTalento
        window.addEventListener("scroll", this.showInformation)
        const divHomeContrataTalento = document.getElementById('aparecer1')
        divHomeContrataTalento.style.animation = 'mover .7s ease-out'


    },
    methods: {
        showInformation(){
          const divHomeSerTalento = document.getElementById('aparecer2')
          const positionDiv = divHomeSerTalento.getBoundingClientRect().top
          const elementHeigth = positionDiv - window.innerHeight/3
          if (elementHeigth < 280) {
            divHomeSerTalento.style.animation = 'mover 1s ease-out'
            divHomeSerTalento.style.opacity = '1'
          }

        },
        getPageText() {
            this.$store.commit("filterText", "contratar-talento");
            this.pageText = this.$store.state.text;
        },
        gethome() {
        },
        // metodoCambio() {
        //   const estado = false;
        //   this.$store.dispatch('animation', estado);
        // },
        conoceMas() {
            const estadoHome = true;
            this.$store.dispatch("home", estadoHome);
            // document.querySelector('body').classList.add('overflow-hidden')
        }
    },
}
</script>
<!-- Quite el scoped para poder afectar a los componentes hijos -->
<style >
@keyframes mover {
  from {
    opacity: 0;
    transform: translateY(200%)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
}


.contenedor-nuevo-image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layer {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 1;
}


.contenedor {
  height: 100vh;
  border-bottom-left-radius: 18rem;
  border-bottom-right-radius: 18rem;
}

@media (max-width: 800px) {
  .contenedor {
    border-bottom-left-radius: 14rem;
    border-bottom-right-radius: 14rem;
  }
}

@media (max-width: 600px) {
  .contenedor {
    border-bottom-left-radius: 7rem;
    border-bottom-right-radius: 7rem;
  }
}

@media (max-width: 300px) {
  .contenedor {
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
  }
}

.btnDos {
  width: 80px;
  height: 80px;
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

/* .background-animate {
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
} */

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

body::-webkit-scrollbar {
  width: 2px;
}

body::-webkit-scrollbar:hover {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);

}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4A5B95 0%, #90BEFF 100%);
  border-radius: 20px;
}
</style>
