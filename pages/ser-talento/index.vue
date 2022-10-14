<template>
  <div>
    <div id="serTalento" class="
        bg-gradient-to-r
        from-[#000A65]
        via-[#2c2191]
        to-[#2F00B5]
        background-animate
        w-full
        h-screen
        flex
        justify-center
        items-center
        px-5
      ">
      <div class="grid justify-center items-center">
        <div class="pb-5">
          <div class="flex justify-center pt-5 pb-5 ">
            <p class="
                xl:text-4xl
                lg:text-3xl
                md:text-2xl
                text-xl
                w-full
                sm:w-[80%]
                lg:w-4/6
                text-center text-white

              ">
              Nuestro grupo COEX te da la bienvenida, queremos que seas parte de
              nuestro grupo de <strong>desarrolladores y formadores</strong> para que tengas la
              posibilidad de aprender y crecer profesionalmente.
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <a href="#serTalento">
            <app-btn class="
                bg-gradient-to-r
                from-red-500
                to-red-400
                p-1
                text-sm
                sm:text-base
                md:text-lg md:mx-6
                mx-4
                text-white
                hover:from-red-400 hover:to-red-500
              " @click="OPenDatosPersonales">Inscripción talento
            </app-btn>
          </a>
          <a href="#serTalento">
            <app-btn class="
                bg-gradient-to-r
                from-red-500
                to-red-400
                p-1
                text-sm
                sm:text-base
                md:text-lg md:mx-6
                mx-4
                text-white
                hover:from-red-400 hover:to-red-500
              " @click="OPenDatosPersonalesProfe">
              Inscripción coach
            </app-btn>
          </a>
        </div>
      </div>
    </div>
    <transition name="fade">
      <app-datos-personales id="estudiantes" v-model="DatosPersonales"
        v-bind:class="[quitarclases ? 'animate__animated animate__fadeInUp ' : 'animate__animated animate__fadeOutDown ']" @metodoBoton="metodoBoton" @close="closeModal"/>
    </transition>
    <transition name="fade">
      <app-datos-personales id="profesores" v-model="DatosPersonalesProfesor"
        v-bind:class="[quitarclases ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutDown']" @metodoBoton="metodoBotonprofe"
        @close="closeModal" />
    </transition>
    <transition name="fade">
      <app-modal-registrar-profe v-model="Profesor" @close="closeProfe" @exito="OPenModalexito" />
    </transition>
    <transition name="fade">
      <app-modal-registrar-estudiante v-model="Estudiante" @close="closeEstudents" @exito="OPenModalexito" />
    </transition>
    <transition name="fade">
      <app-donar-exitosa v-model="modalExito"
        v-bind:class="[modalExito ? 'animate__animated animate__heartBeat animate__infinite' : '']"
        p="Registrado con exito" @close="closeModalexito" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'IndexSerTalento',
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
      quitarclases: false,
      modalExito: false

    }
  },
  head() {
    return {
      title: 'Ser Talento',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuestro grupo COEX te da la bienvenida, queremos que seas parte de nuestro grupo de desarrolladores y formadores para que tengas la posibilidad de aprender y crecer profesionalmente.'
        }
      ]
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'educacion')
      this.pageText = this.$store.state.text
    },
    OPenDatosPersonales() {
      this.DatosPersonales = true
      this.quitarclases = true
      document.getElementById('serTalento').style.transition = '.8s'
      document.getElementById('serTalento').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    OPenDatosPersonalesProfe() {
      this.DatosPersonalesProfesor = true
      this.quitarclases = true
      document.getElementById('serTalento').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModal() {
      document.getElementById('serTalento').style.transition = '1s'
      document.getElementById('serTalento').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
      document.querySelector('body').classList.add('overflow-x-hidden')
      this.quitarclases = false
      setTimeout(function () {
        this.DatosPersonales = false;
        this.DatosPersonalesProfesor = false
        document.getElementById('personales').classList.remove('animate__animated', 'animate__fadeOutDown')
        document.getElementById('estudiantes').classList.add('hidden')
        document.getElementById('profesores').classList.add('hidden')
      }, 500);

    },
    OPenModalexito() {
      this.modalExito = true
      document.getElementById('serTalento').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModalexito() {
      this.modalExito = false
      document.getElementById('serTalento').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    closeEstudents() {
      this.Estudiante = false
      document.getElementById('serTalento').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    closeProfe() {
      this.Profesor = false
      document.getElementById('serTalento').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    metodoBoton() {

      this.DatosPersonales = false
      this.Estudiante = true

      document.getElementById('serTalento').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    metodoBotonprofe() {
      this.DatosPersonalesProfesor = false
      this.Profesor = true
      document.getElementById('serTalento').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
  },
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
@media (max-width: 1024px) {
  .modal {
    top: -158px;
  }
}

.cuadrado {
  width: 38rem;
  height: 22rem;
  background: #1c233a;
  border-radius: 26px;
  box-shadow: 0px 0px 20px 0px #c8deff;
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

}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4a5b95 0%, #90beff 100%);
  border-radius: 20px;

}
strong {
  color:transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #ffdf8d, #ff9838);
}
</style>
