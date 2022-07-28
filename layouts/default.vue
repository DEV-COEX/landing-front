<template>
  <div class="h-screen">
    <div class="p-2 px-14 pt-8 fixed z-50 w-screen">
      <aside class="h-full">
        <div class="flex w-full h-full p-5 justify-between">
          <div class="flex items-center">
            <img src="/Nav/CoexLogo.svg" alt="" />
          </div>
          <div class="flex items-center">
            <div class="flex">
              <div v-for="(item, i) in navItems" :key="i">
                <NuxtLink
                  :to="item.path"
                  class="flex items-center p-2 text-base font-medium text-white"
                >
                  <span
                    class="
                      mx-6
                      hover:text-transparent
                      bg-clip-text bg-gradient-to-r
                      from-red-500
                      to-red-400
                    "
                    >{{ item.name }}</span
                  >
                </NuxtLink>
              </div>
              <div>
                <app-btn
                  class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:bg-gradient-to-r
                    from-red-300
                    to-red-500
                  "
                  @metodoBoton="serTalento"
                  >Ser talento Coex</app-btn
                >
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
      <Nuxt />
    </div>
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
          path: '',
        },
        {
          name: '¿Quienes somos?',
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
      this.$router.push('/ser-talento')
    },
  },
}
</script>


<style scoped>
</style>