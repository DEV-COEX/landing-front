<template>
  <div class="h-screen">
    <div class="p-2 px-14 pt-8 bg-fixed">
      <aside class="h-full">
        <div class="flex w-full h-full p-5 justify-between bg-color rounded-lg">
          <div>
            <img src="/Nav/CoexLogo.svg" alt="" />
          </div>
          <div class="flex items-center">
            <div>
              <app-btn
                class="bg-gradient-to-r from-red-500 to-red-400 p-1 text-white"
                @metodoBoton="$router.push('/ser-talento')"
                >Ser talento Coex</app-btn
              >
            </div>
            <div class="flex text-white">
              <div v-for="(item, i) in navItems" :key="i">
                <NuxtLink
                  :to="item.path"
                  class="
                    flex
                    items-center
                    p-2
                    text-base
                    font-medium
                    text-[#424242]
                  "
                >
                  <span class="mx-6">{{ item.name }}</span>
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
          name: 'Fabrica de software',
          path: '',
        },
        {
          name: 'Contrata talentos',
          path: '',
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
    
  },
}
</script>


<style scoped>
.bg-color {
  background-color: #1c2365;
}
</style>