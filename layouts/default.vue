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
                <NuxtLink :to="item.path" class="flex items-center p-2 text-base font-medium text-white">
                  <span class="
                      mx-6
                      hover:text-transparent
                      bg-clip-text bg-gradient-to-r
                      from-red-500
                      to-red-400
                      transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300
                    ">{{ item.name }}</span>
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
          name: 'Fábrica de software',
          path: '/fabrica',
        },
        {
          name: 'Contrata talentos',
          path: '/contrata-talento',
        },
        {
          name: 'Educación',
          path: '/educacion',
        },
        {
          name: 'Fundación',
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
