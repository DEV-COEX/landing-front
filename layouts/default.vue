<template>
  <div
    class="
      min-h-screen
      w-full
      bg-gradient-to-r
      from-[#321586]
      via-[#4736df]
      to-[#2E1477]
    "
  >
    <!-- navbar mobile -->
    <div
      v-show="show"
      class="
        h-screen
        w-full
        z-30
        bg-[#1719298c]
        fixed
        top-0
        bottom-0
        overflow-hidden
        lg:hidden
      " @click="ChangeShow">
      <!-- pantalla navbvar -->
      <div class="flex h-full w-full flex-col items-center justify-center z-40">
        <div class="w-full h-auto text-white text-center"></div>
        <div v-for="(item, i) in navItems" :key="i">
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
                duration-500
              " @click="item.method">
              {{ item.name }}
            </span>
          </NuxtLink>
        </div>
        <div>
          <app-btn
            class="
              bg-gradient-to-r
              from-red-500
              to-red-400
              p-[2px]
              text-white
              hover:from-red-400 hover:to-red-500
            "
            @click="serTalento"
            >Ser talento Coex
          </app-btn>
        </div>
      </div>
    </div>
    <div :class="[show ? 'blur-sm' : '']" class="lg:p-2 lg:px-14 fixed z-50 w-full bg-clip-padding"
      style="backdrop-filter: blur(5px)">
      <aside class="h-full w-full">
        <div
          class="
            flex
            justify-between
            p-5
            lg:p-0
            w-full
            h-[3.5rem]
            md:h-[5rem]
            z-30
            items-center
          "
        >
          <div class="flex items-center">
            <NuxtLink :to="navItems?.[0].path" class="font-medium text-white"
              ><img
                src="/Nav/Group.svg"
                class="w-[8rem] xl:w-[12rem]"
                alt="LogoCoex"
                @click="parriba"
              />
            </NuxtLink>
          </div>

          <!-- items navbar -->
          <div v-for="(item, i) in navItems" :key="i">
            <NuxtLink
              :to="item.path"
              class="
                lg:flex
                items-center
                p-2
                hidden
                lg:text-sm
                xl:text-lg
                w-full
                text-white
              "
            >
              <span
                class="
                  hover:text-transparent
                  bg-clip-text bg-gradient-to-r
                  from-red-500
                  to-red-400
                  transition
                  ease-in-out
                  delay-150
                  hover:-translate-y-1 hover:scale-110
                  duration-500
                " @click="item.method">
                {{ item.name }}
              </span>
            </NuxtLink>
          </div>
          <app-btn
            class="
              lg:text-sm
              xl:text-base
              bg-gradient-to-r
              from-red-500
              to-red-400
              hidden
              lg:block
              p-1
              text-white
              hover:from-red-400 hover:to-red-500
            "
            @click="serTalento"
            >Ser talento Coex
          </app-btn>
          <div class="text-white lg:hidden" @click="ChangeShow">
            <img src="/Nav/menu.svg" alt="desplegable" />
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
    <app-footer
      :class="[show ? 'blur-sm' : '']"
      class="lg:blur-0"
      :navitems="navItems"
    />
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data() {
    return {
      scroll: 0,
      windowWidth: null,
      show: false,
      navItems: [
        {
          name: 'Inicio',
          path: '/',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
            const estado = true
            const estadoHome = false
            if (this.$route.path === '/') {
              this.$store.dispatch('home', estadoHome)
              this.$store.dispatch('animation', estado)
            } else {
              this.$store.commit('changeHomeState', estadoHome)
              this.$store.commit('changetransitionState', estado)
            }
          },
        },

        {
          name: '¿Quienes somos?',
          path: '/about',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },

        {
          name: 'Educación',
          path: '/educacion',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Fábrica de software',
          path: '/fabrica',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Contrata talentos',
          path: '/contrata-talento',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Fundación',
          path: '/fundacion',
          method: () => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable-next-line */
      if (process.client) {
        this.windowWidth = window.innerWidth
        window.addEventListener('resize', this.onResize)
      }
    })
  },
  beforeDestroy() {
    /* eslint-disable-next-line */
    if (process.client) {
      window.removeEventListener('resize', this.onResize)
    }
  },
  methods: {
    onResize() {
      if (process.client) {
        this.windowWidth = window.innerWidth
        if (this.windowWidth > 991 && this.show) {
          this.ChangeShow()
        }
      }
    },
    parriba() {
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
    serTalento() {
      this.$router.push('/ser-talento')
      if (process.client) {
        window.scrollTo(0, 0)
      }
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

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
