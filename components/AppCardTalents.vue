<template>

    <div class="flex items-center text-white w-full px-60">
      <div v-if="ShowPanel" class="flex justify-end h-[31rem] w-full">
        <div class="flex flex-col justify-evenly w-auto mx-auto">
          <div
            v-for="(des, index) in desarrollos"
            :key="index"
            class=" w-full h-auto "
          >
          <div v-if="des.selected" class="flex justify-center w-full h-10 items-center" >
            <button @click="SetDesarrollo(des)" class="w-full mr-2">
              {{ des.titulo }}
            </button>

            <div  @click="SetDesarrollo(des)" class="h-10 w-10 relative flex items-center justify-center "> <img class="cursor-pointer " src="/iconPlane.svg" alt="iconAirplane"></div>
           </div>
           <div v-else class="flex justify-center w-full h-10 items-center" >
            <button @click="SetDesarrollo(des)" class="w-full  text-[#6A84A8] mr-2">
              {{ des.titulo }}
            </button>
            <div  @click="SetDesarrollo(des)" class=" h-10 w-10  relative flex items-center justify-center "><img class="cursor-pointer absolute" src="/Ellipse.svg" alt="iconAirplane"></div>
           </div>
          </div>
        </div>
        <!-- card -->
        <transition name="fade" mode="out-in">
          <div
            v-if="isCardShown"
            class="w-1/2 flex flex-col items-center justify-start"
          >
            <img
              class="bg-transparent h-80 w-full rounded-3xl mb-3"
              :src="showDes?.imagen"
              alt="imgDev"
            />
            <div class="text-left w-full font-bold text-2xl py-4">
              {{ showDes?.titulo }}
            </div>
            <div class="text-left mb-4 w-full">
              {{ showDes?.descripcion }}
            </div>
            <div class="w-full">
              <app-btn
                class="
                  bg-gradient-to-r
                  from-red-500
                  to-red-400
                  p-1
                  text-white
                  hover:from-red-400 hover:to-red-500
                "
                >Quiero mi Landing</app-btn
              >
            </div>
          </div>
        </transition>
        <!-- fin Card -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'FabricaSoftware',
  data() {
    return {
      showDes: {},
      showButton: [],
      ShowPanel: false,
      isCardShown: true,
      pageText: {},
      desarrollos: [
        {
          titulo: 'Landing page',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
            selected: false,
        },
        {
          titulo: 'CRM',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=202',
            selected: false,

        },
        {
          titulo: 'Bromita',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=230',
            selected: false,

        },
        {
          titulo: 'Jhon M',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20',
            selected: false,

        },
        {
          titulo: 'Carlos gei',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=240',
            selected: false,

        },
      ],
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
    this.MountedDesarrollo()
    setTimeout(() => {
      this.ShowPanel = true
    }, 50)
  },
  methods: {
    MountedDesarrollo() {
      this.desarrollos[0].selected = true
    },
    SetDesarrollo(desarrollo) {
      this.showDes = desarrollo;
        this.isCardShown = false
      setTimeout(() => {
        this.isCardShown = true
      }, 100)
    },
    getPageText() {
      this.$store.commit('filterText', 'fabrica')
      this.pageText = this.$store.state.text
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>
