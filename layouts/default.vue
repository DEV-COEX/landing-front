<template>
  <div class="h-screen w-full bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477]">
    <div class="p-2 px-14 pt-8 fixed z-50 w-full ">
      <aside class="h-full ">
        <div class="flex w-full h-full p-5 justify-between">
          <div class="flex items-center">
            <img src="/Nav/CoexLogo.svg" alt="" />
          </div>
          <div class="flex items-center">
            <div class="flex">
              <div v-for="(item, i) in navItems" :key="i">
                <NuxtLink :to="item.path" id="sexo" class="flex items-center p-2 text-base font-medium text-white">
                  <span class=" mx-6
                      hover:text-transparent
                      bg-clip-text bg-gradient-to-r
                      from-red-500
                      to-red-400
                      transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300
                    " @click="item.method">
                    {{ item.name }}
                  </span>
                </NuxtLink>
              </div>
              <div class="w-56 ">

                <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:from-red-400 hover:to-red-500


                  " @click="serTalento">Ser talento Coex</app-btn>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <div class="">
      <transition name="fade">
        <Nuxt ref="home" />
      </transition>
    </div>
    <app-footer :navitems="navItems" />
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data() {
    return {
      navItems: [
        {
          name: 'Inicio',
          path: '/',
          method: () => {
            if (this.$route.path === '/') {
             const estado = true
             this.$store.dispatch('animation', estado);
            }
          }
        },
        {
          name: '¿Quienes somos?',
          path: '/about',
          method: () => {

          }
        },
        {
          name: 'Fábrica de software',
          path: '/fabrica',
          method: () => {

          }
        },
        {
          name: 'Contrata talentos',
          path: '/contrata-talento',
          method: () => {

          }
        },
        {
          name: 'Educación',
          path: '/educacion',
          method: () => {

          }
        },
        {
          name: 'Fundación',
          path: '/fundacion',
          method: () => {

          }
        },
      ],
    }
  },
  methods: {
    serTalento() {
      // this.$router.push('/ser-talento')
      const estado = false
      this.$store.dispatch('animation', estado);
    },
  },



}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 3s;

}

.fade-enter .fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
