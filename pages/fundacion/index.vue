<template>
  <div>
    <div id="indexDonar" class="bg-[#1b2233] w-full h-screen flex justify-center items-center">
      <!-- <div class="w-1/5 h-2/6 rounded-full bg-black absolute"></div>-->
      <div class="flex justify-center items-center">

        <div class="">

          <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20 ">
            <p class=" lg:text-5xl md:text-3xl leading-tight text-xl w-full sm:w-[80%] pb-5 lg:w-4/6 px-7  font-bold  text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ pageText[0]?.tittle }}</p>
          </div>
          <div class="flex justify-center xl:p-10 lg:p-5 p-5 md:p-6">
            <div class="xl:text-xl  lg:text-xl text-white  md:text-xl text-md text-center w-full sm:w-[80%] lg:w-3/6" v-html="text">
            </div>
          </div>
          <div class="flex justify-center">
            <a href="#indexDonar">
              <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500
                  " @click="OPenModal">Quiero donar
              </app-btn>
            </a>
          </div>
        </div>
      </div>

    </div>
    <transition name="fade">
      <app-modal-donar v-model="modal" @close="closeModal" @payment="OPenModalsexo" @error="OPenModalError" />

    </transition>
    <transition name="fade">
      <app-donar-exitosa v-model="modalsexo"
        v-bind:class="[modalsexo ? 'animate__animated animate__heartBeat animate__infinite' : '']"
        p="Donación exitosa, gracias por tu colaboración" @close="closeModalsexo" />

    </transition>
    <transition name="fade">
      <app-donar-error v-model="modalerror"
        v-bind:class="[modalerror ? 'animate__animated animate__heartBeat animate__repeat-3' : 'animate__animated animate__rollOut']" @close="closeModalError"/>

    </transition>
  </div>

</template>

<script>
export default {
  name: "IndexFundacion",
  data() {
    return {
      modal: false,
      modalsexo: false,
      modalerror: false,
      pageText: {},
      text: null
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchTexts')
    await this.getPageText()
    await this.$store.dispatch('fetchTexts')
    await this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit('filterText', 'fundation')
      this.pageText = this.$store.state.text
      this.text = this.$md.render(this.pageText[0]?.description)
    },
    OPenModal() {
      this.modal = true
      document.getElementById('indexDonar').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModal() {
      this.modal = false
      //  v-bind:class="[modalsexo ? 'animate__animated animate__heartBeat' : 'animate__animated animate__rollOut']"
      document.getElementById('indexDonar').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    OPenModalsexo() {
      this.modalsexo = true
      // document.querySelector('body').classList.add('animate__animated', 'animate__rollIn')
      document.getElementById('indexDonar').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModalsexo() {
      this.modalsexo = false
      //  document.querySelector('body').classList.add('animate__animated', 'animate__rollOut')
      document.getElementById('indexDonar').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },

    OPenModalError() {
      this.modalerror = true
      document.getElementById('indexDonar').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModalError() {
      this.modalerror = false
      document.getElementById('indexDonar').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },

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
strong {
  color:transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #ffdf8d, #ff9838);
}
</style>
