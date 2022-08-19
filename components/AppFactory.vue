<template>
  <div
    class="
      flex
      items-center
      text-white
      w-full
      pr-5
      md:pr-10
      xl:px-60
      lg:px-32
      pt-10
      sm:pt-12
      md:pt-18
      lg:pt-24
      xl:pt-32
      pb-10
      sm:pb-12
      md:pb-18
      lg:pb-24
    "
  >
    <div
      v-if="ShowPanel"
      class="flex justify-end min-h-[31rem] max-h-screen w-full"
    >
      <div class="flex flex-col justify-evenly w-auto mx-auto">
        <div
          v-for="(desarrollo, index) in desarrollos"
          :key="index"
          class="w-full h-auto"
        >
          <div
            v-if="desarrollo.selected"
            class="flex justify-center w-full h-10 items-center"
          >
            <button
              class="w-full hidden md:block mr-2"
              @click="SetDesarrollo(desarrollo)"
            >
              {{ desarrollo.tittle }}
            </button>

            <div
              class="h-10 w-10 relative flex items-center justify-center"
              @click="SetDesarrollo(desarrollo)"
            >
              <img
                class="cursor-pointer"
                :src="desarrollo.icon.url"
                alt="iconAirplane"
              />
            </div>
          </div>
          <div v-else class="flex justify-center w-full h-10 items-center">
            <button
              class="w-full text-[#6A84A8] mr-2 hidden md:block"
              @click="SetDesarrollo(desarrollo)"
            >
              {{ desarrollo.tittle }}
            </button>
            <div
              class="h-10 w-10 relative flex items-center justify-center"
              @click="SetDesarrollo(desarrollo)"
            >
              <img
                class="cursor-pointer absolute"
                src="/Ellipse.svg"
                alt="iconAirplane"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- card -->
      <transition name="fade" mode="out-in" class="">
        <div
          v-if="isCardShown"
          class="
            w-[80%]
            xl:w-[55%]
            lg:w-[65%]
            md:w-[70%]
            flex flex-col
            items-center
            justify-start
            animate__animated animate__backInDown
          "
        >
          <img
            class="bg-transparent md:h-80 sm:h-60 h-44 w-full rounded-3xl mb-3"
            :src="des?.image.url"
            alt="imgDev"
          />
          <div class="text-center md:text-left w-full font-bold text-2xl py-4">
            {{ des?.tittle }}
          </div>
          <div class="text-left mb-4 w-full">
            {{ des?.description }}
          </div>
          <div class="w-full flex justify-center md:justify-start">
            <app-btn
              class="
                bg-gradient-to-r
                from-red-500
                to-red-400
                p-1
                text-white
                hover:from-red-400 hover:to-red-500
              "
              @click="openModal"
              >Quiero mi {{ des?.tittle }}</app-btn
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
    await this.getServices()
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
      this.showDes = desarrollo
      this.showDes.selected = true
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
      const { data } = await this.$axios.get('services')
      data.forEach((service) => {
        service.image.url = `https://api.cms.coex.com.co${service.image.url}`
        service.icon.url = `https://api.cms.coex.com.co${service.icon.url}`
      })
      this.desarrollos = data
      this.desarrollos[0].selected = true
      this.des = this.desarrollos[0]
    },
    openModal() {
      this.$emit('openModal', true)
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
    closeModal() {
      this.modal = false
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
