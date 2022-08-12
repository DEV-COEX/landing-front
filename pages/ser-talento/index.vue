<template>
  <div >
    <div id="serTalento"
      class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-full h-screen flex justify-center items-center">
      <div class="grid justify-center items-center">
        <div class="">
          <div class="flex justify-center">
            <p class="text-3xl font-bold  w-3/6 text-center text-white py-10">Nuestro grupo COEX te da la
              bienvenida,
              queremos que seas parte de nuestro grupo de desarrolladores y formadores para que tengas la
              posibilidad de aprender y crecer profesionalmente.
            </p>
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

                  " @click="OPenDatosPersonales"><a href="#serTalento">Inscripción estudiante</a>
          </app-btn>
          <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:from-red-400 hover:to-red-500

                  " @click="OPenDatosPersonalesProfe"><a href="#serTalento"> Inscripción profesor</a>
          </app-btn>
        </div>
      </div>
    </div>
    <transition name="fade">
      <app-datos-personales v-model="DatosPersonales" @metodoBoton=metodoBoton @close="closeModal" />
    </transition>
    <transition name="fade">
      <app-datos-personales v-model="DatosPersonalesProfesor" @metodoBoton=metodoBotonprofe @close="closeModal" />
    </transition>
    <transition name="fade">
      <app-modal-registrar-profe v-model="Profesor" @close="closeProfe" />
    </transition>
    <transition name="fade">
      <app-modal-registrar-estudiante @close="closeEstudents" v-model="Estudiante" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "IndexSerTalento",
  data() {
    return {
      pageText: {},
      btnStar: true,
      isActive: true,
      show: false,
      DatosPersonales: false,
      Estudiante: false,
      Profesor: false,
      DatosPersonalesProfesor: false,
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "educacion")
      this.pageText = this.$store.state.text
    },
    OPenDatosPersonales() {
      this.DatosPersonales = true
      document.getElementById("serTalento").style.filter = "blur(5px)"
      document.querySelector('body').classList.add('overflow-hidden')
    },
    OPenDatosPersonalesProfe() {
      this.DatosPersonalesProfesor = true
      document.getElementById("serTalento").style.filter = "blur(5px)"
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModal() {
      this.DatosPersonales = false
      this.DatosPersonalesProfesor = false
      document.getElementById("serTalento").style.filter = "blur(0)"
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    closeEstudents() {
      this.Estudiante = false
      document.getElementById("serTalento").style.filter = "blur(0)"
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    closeProfe() {
      this.Profesor = false
      document.getElementById("serTalento").style.filter = "blur(0)"
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    metodoBoton() {
      this.DatosPersonales = false
      this.Estudiante = true
      document.getElementById("serTalento").style.filter = "blur(5px)"
      document.querySelector('body').classList.add('overflow-hidden')
    },
    metodoBotonprofe() {
      this.DatosPersonalesProfesor = false
      this.Profesor = true
      document.getElementById("serTalento").style.filter = "blur(5px)"
      document.querySelector('body').classList.add('overflow-hidden')
    }
  }
}
</script>

<style>
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

.cuadrado {
  width: 38rem;
  height: 22rem;
  background: #1C233A;
  border-radius: 26px;
  box-shadow: 0px 0px 20px 0px #C8DEFF;
  display: flex;
  justify-content: center;
  align-items: center;

}

.img {
  width: 35.5rem;
  height: 19.5rem;
  background-color: azure;
  border-radius: 12px;


}

.linea {
  width: 1px;
  height: 15rem;
  box-shadow: 0px 0px 3px 0px white;
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
