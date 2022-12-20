<template>
  <div>
    <loader-component v-if="loader" />
    <div
      v-if="!loader"
      id="home"
      class=" w-full min-h-screen bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477] bg-black">

      <div id="contenedor-nuevo" class="relative flex content-center h-[100vh]   text-white">
        <div>
          <div class="layer"></div>
          <img class="contenedor-nuevo-image" src="@/static/coding.gif" alt="codingImage">
        </div>
        <home-contrata-talento />
      </div>
      <div id="contenedor-nuevo" class="relative flex content-center justify-center h-[100vh] text-white">
        <div>
          <div class="layer"></div>
          <img class="contenedor-nuevo-image" src="@/static/binarios.gif" alt="binary">
        </div>
        <home-ser-talento />
      </div>

      <div id="3" class="elemento">
        <!-- <lazy-home-fabrica v-if="showElements" /> -->
      </div>
      <div id="4" class="elemento">
        <lazy-home-educacion v-if="showElements" />
      </div>
      <div id="5" class="elemento">
        <lazy-home-coex-model v-if="showElements" />
      </div>
      <div id="6" class="elemento">
        <lazy-home-aliados v-if="showElements" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppHome",
  data() {
    return {
      pageText: {},
      isActive: true,
      show: false,
      loader: true,
      showElements: false,
    };
  },
  mounted() {
    this.getPageText();
    this.$store.dispatch("fetchTexts");
    this.getPageText();
    //  animacion para el div HomeSerTalento y HomeContrataTalento
    window.addEventListener("scroll", this.lazyLoading)
    this.loader = false

  },
  methods: {
    lazyLoading() {
      const elemento3 = document.getElementById('3')
      if (elemento3.getBoundingClientRect().top < 700 && elemento3.getBoundingClientRect().top > 600) this.showElements = true
    },
    getPageText() {
      this.$store.commit("filterText", "contratar-talento");
      this.pageText = this.$store.state.text;
    },
  },
}
</script>


<style >
@keyframes mover {
  from {
    opacity: 0;
    transform: translateY(200%);
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.contenedor-nuevo-image {
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
