<template>

    <div class="flex items-center text-white w-full px-60">
      <div v-if="ShowPanel" class="flex justify-end h-[31rem] w-full">
        <div class="flex flex-col justify-evenly w-auto mx-auto">
          <div
            v-for="(desarrollo, index) in desarrollos"
            :key="index"
            class=" w-full h-auto "
          >
          <div v-if="desarrollo.selected" class="flex justify-center w-full h-10 items-center" >
            <button @click="SetDesarrollo(desarrollo)" class="w-full mr-2">
              {{ desarrollo.tittle }}
            </button>

            <div  @click="SetDesarrollo(desarrollo)" class="h-10 w-10 relative flex items-center justify-center "> <img class="cursor-pointer " :src="desarrollo.icon.url" alt="iconAirplane"></div>
           </div>
           <div v-else class="flex justify-center w-full h-10 items-center" >
            <button @click="SetDesarrollo(desarrollo)" class="w-full  text-[#6A84A8] mr-2">
              {{ desarrollo.tittle }}
            </button>
            <div  @click="SetDesarrollo(desarrollo)" class=" h-10 w-10  relative flex items-center justify-center "><img class="cursor-pointer absolute" src="/Ellipse.svg" alt="iconAirplane"></div>
           </div>
          </div>
        </div>
        <!-- card -->
        <transition name="fade" mode="out-in" class="">
          <div
            v-if="isCardShown"
            class="w-1/2 flex flex-col items-center justify-start animate__animated animate__backInDown"
          >
            <img
              class="bg-transparent h-80 w-full rounded-3xl mb-3"
              :src="des?.image.url"
              alt="imgDev"
            />
            <div class="text-left w-full font-bold text-2xl py-4">
              {{ des?.tittle }}
            </div>
            <div class="text-left mb-4 w-full">
              {{ des?.description }}
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
  name: 'FactoryComponent',
  data() {
    return {
      des: {},
      ShowPanel: false,
      isCardShown: true,
      pageText: {},
      desarrollos: [],
    }
  },
  async mounted() {
    await this.getServices();
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
    setTimeout(() => {
      this.ShowPanel = true
    }, 50)
  },
  methods: {
    SetDesarrollo(desarrollo) {
      this.des.selected = false
      this.des = desarrollo
      this.des.selected = true
      this.showDes = desarrollo;
      this.showDes.selected = true;
        this.isCardShown = false
      setTimeout(() => {
        this.isCardShown = true
      }, 100)
    },
    getPageText() {
      this.$store.commit('filterText', 'fabrica')
      this.pageText = this.$store.state.text
    },
    async getServices() {
      const { data } = await this.$axios.get('services');
      data.forEach(service => {
        service.image.url =`https://api.cms.coex.com.co${service.image.url}`
        service.icon.url =`https://api.cms.coex.com.co${service.icon.url}`
      })
      this.desarrollos = data;
      this.desarrollos[0].selected = true
      this.des = this.desarrollos[0]
    }
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
