<template>
  <div class="h-screen">
    <div class="p-2 px-14 pt-8 fixed z-50 w-screen " >
      <aside class="h-full">
        <div class="flex w-full h-full p-5 justify-between bg-gradient-to-r from-[#1C2365] to-[#163B85] rounded-lg">
          <div>
            <img src="/Nav/CoexLogo.svg" alt="" />
          </div>
          <div class="flex items-center">
            <div>
              <app-btn class="bg-gradient-to-r from-red-500 to-red-400 p-1 text-white" @metodoBoton="serTalento">Ser
                talento Coex</app-btn>
            </div>
            <div class="flex">



              <div v-for="(item, i) in navItems" :key="i">

                <NuxtLink :to="item.path" class="
                    flex
                    items-center
                    p-2
                    text-base
                    font-medium
                    text-white
                  ">
                  <span class="mx-6 " @click="show = !show" >{{ item.name }}</span>
                </NuxtLink>

              </div>

            </div>
            <div class="px-4">
              <nuxt-link to=""><img src="/Nav/user.svg" alt="" /></nuxt-link>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <div class="">

      <transition name="fade">
        <p v-if="show">
          <Nuxt />
        </p>
      </transition>
    </div>



  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data() {
    return {

      show: true,

      navItems: [
        {
          name: 'Inicio',
          path: '',
        },
        {
          name: 'Fabrica de software',
          path: '',
        },
        {
          name: 'Contrata talentos',
          path: '/contrata-talento',
        },
        {
          name: 'Educacion',
          path: '',
        },
        {
          name: 'Fundacion',
          path: '',
        },
      ],

    }
  },
  methods: {
    serTalento() {
      this.show = !this.show
      this.$router.push('/ser-talento')

    }
  },
}
</script>


<style scoped>


.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0
}
</style>