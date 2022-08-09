<template>
  <div class="
      min-h-screen
      w-full
      bg-gradient-to-r
      from-[#321586]
      via-[#4736df]
      to-[#2E1477]
    ">
    <!-- navbar mobile -->
    <div v-show="show" class="
        h-screen
        w-full
        z-30
        bg-[#1719298c]
        fixed
        top-0
        bottom-0
        overflow-hidden
        lg:hidden
      ">
      <div class="flex h-full w-full flex-col items-center justify-center z-50">
        <div class="w-full h-auto text-white text-center" @click="ChangeShow">
          Sexo Cerrador de navbars 🥵 🥵 🥵 🥵 🥵
        </div>
        <div v-for="(item, i) in navItems" :key="i" @click="ChangeShow">
          <NuxtLink
            :to="item.path"
            class="flex my-1 text-base font-normal text-white"
          >
            <span
              class="
                p-1
                my-3
                hover:text-transparent
                bg-clip-text bg-gradient-to-r
                from-red-500
                to-red-400
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              " @click="item.method">
              {{ item.name }}
            </span>
          </NuxtLink>
        </div>
        <div @click="ChangeShow">
          <app-btn
            class="
              bg-gradient-to-r
              from-red-500
              to-red-400
              p-[2px]
              text-white
              hover:from-red-400 hover:to-red-500
            " @click="serTalento">Ser talento Coex
          </app-btn>
        </div>
      </div>
    </div>
    <div
      :class="[show ? 'blur-sm' : '']"
      class="lg:p-2 lg:px-14 pt-8 fixed z-50 w-full bg-clip-padding " style="backdrop-filter: blur(10px);"
    >
      <aside class="h-full w-full">
        <div class="
            flex
            w-full
            h-full
            px-5
            Z-40
            lg:p-5
            justify-between
            items-center
          ">
          <div class="flex items-center">
            <img src="/Nav/CoexLogo.svg" class="w-[8rem]" alt="LogoCoex" />
          </div>
          <div class="text-white lg:hidden" @click="ChangeShow">
            <img src="/Nav/menu.svg" alt="desplegable" />
          </div>
          <!-- navbar mobile -->
          <!-- items navbar -->
          <div class="hidden lg:flex items-center">
            <div class="flex">
              <div v-for="(item, i) in navItems" :key="i">
                <NuxtLink :to="item.path" class="flex items-center p-2 text-base font-medium text-white">
                  <span class="
                      mx-6
                      hover:text-transparent
                      bg-clip-text bg-gradient-to-r
                      from-red-500
                      to-red-400
                      transition
                      ease-in-out
                      delay-150
                      hover:-translate-y-1 hover:scale-110
                      duration-300
                    " @click="item.method">
                    {{ item.name }}
                  </span>
                </NuxtLink>
              </div>
              <div class="w-56">
                <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:from-red-400 hover:to-red-500
                  " @click="serTalento">Ser talento Coex
                </app-btn>
              </div>
            </div>
          </div>
          <!-- fin items -->
        </div>
      </aside>
    </div>
    <div class="">
      <transition name="fade">
        <Nuxt ref="home" :class="[show ? 'blur-sm' : '']" class="lg:blur-0" />
      </transition>
    </div>
    <app-footer :class="[show ? 'blur-sm' : '']" class="lg:blur-0" :navitems="navItems" />
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data() {
    return {
      show: false,
      navItems: [
        {
          name: 'Inicio',
          path: '/',
          method: () => {
            if (this.$route.path === '/') {
              const estado = true
              const estadoHome = false
              this.$store.dispatch('home', estadoHome)
              this.$store.dispatch('animation', estado)
            }
          },
        },
        {
          name: '¿Quienes somos?',
          path: '/about',
          method: () => { },
        },
        {
          name: 'Fábrica de software',
          path: '/fabrica',
          method: () => { },
        },
        {
          name: 'Contrata talentos',
          path: '/contrata-talento',
          method: () => { },
        },
        {
          name: 'Educación',
          path: '/educacion',
          method: () => { },
        },
        {
          name: 'Fundación',
          path: '/fundacion',
          method: () => { },
        },
      ],
    }
  },
  methods: {
    serTalento() {
      this.$router.push('/ser-talento')
    },
    ChangeShow() {
      this.show = !this.show
      if (this.show) {
        document.querySelector('body').classList.add('overflow-hidden')
      } else {
        document.querySelector('body').classList.remove('overflow-hidden')
      }
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
