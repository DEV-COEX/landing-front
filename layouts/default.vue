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
        sticky
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
              " :id="item.path" @click="item.method">
              {{ item.name }}
            </span>
          </NuxtLink>
        </div>

        <div class="flex flex-wrap justify-center max-w-[200px] gap-y-2.5 ">
          <div>
            <app-btn class="
              bg-gradient-to-r
              from-blue-500
              to-blue-400
              p-[2px]
              text-white
              hover:from-blue-400
              hover:to-blue-500"
              @click="contrataTalento">Contratar talento
            </app-btn>
          </div>
          <div>
            <app-btn class="
              bg-gradient-to-r
              from-red-500
              to-red-400
              p-[2px]
              text-white
              hover:from-red-400
              hover:to-red-500"
              @click="serTalento">Ser talento coex
            </app-btn>
          </div>
        </div>

      </div>
    </div>
    <div :class="[show ? 'blur-sm' : '']" class="lg:p-2 fixed top-0 z-40 w-full bg-clip-padding"
      style="backdrop-filter: blur(5px)">
      <aside class="bg-opacity-70 lg:rounded-[50px] lg:px-14 h-full w-full bg-[#25262A]">
        <div class="
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
              " @click.native="changeState">
              <span class="
                  hover:text-transparent
                  bg-clip-text bg-gradient-to-r
                  from-red-500
                  to-red-400
                  transition
                  ease-in-out
                  delay-150
                  hover:-translate-y-1 hover:scale-110
                  duration-500
                " :class="[getUrl == item.path ? 'text-color': '']"
                @click="item.method">
                {{ item.name }}
              </span>
            </NuxtLink>
          </div>
          <app-btn
            class="
              lg:text-sm
              xl:text-base
              bg-gradient-to-r
              from-blue-500
              to-blue-400
              hidden
              lg:block
              p-1
              text-white
              hover:from-blue-400 hover:to-blue-500"
            @click="contrataTalento">Contratar talento
          </app-btn>
          <app-btn class="
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
      windowPath:null,
      windowWidth: null,
      show: false,
      navItems: [
        {
          name: 'Inicio',
          path: '/',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
            // const estado = true
            // const estadoHome = false
            // if (this.$route.path === '/') {
            //   this.$store.dispatch('home', estadoHome)
            //   this.$store.dispatch('animation', estado)
            // } else {
            //   this.$store.commit('changeHomeState', estadoHome)
            //   this.$store.commit('changetransitionState', estado)
            // }
          },
        },

        {
          name: '¿Quienes somos?',
          path: '/quienes-somos',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },

        {
          name: 'Educación',
          path: '/educacion',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Fábrica de software',
          path: '/fabrica',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Oferta de talentos',
          path: '/oferta-de-talento',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
        {
          name: 'Blogs',
          path: '/blogs',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeActive()
            this.changeState(e)
            e.target.classList.add('text-color');
            document.querySelector('body').classList.remove('overflow-hidden')
          }
        },
        {
          name: 'Fundación',
          path: '/fundacion',
          method: (e) => {
            if (process.client) {
              window.scrollTo(0, 0)
            }
            this.changeState(e)
            document.querySelector('body').classList.remove('overflow-hidden')
          },
        },
      ],
    }
  },
  computed:{
    getUrl(){
        if(process.client){
          return window.location.pathname
        }
        return false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable-next-line */
      if (process.client) {
        this.windowWidth = window.innerWidth
        this.currentPath = window.location.pathname
        window.addEventListener('resize', this.onResize)
      }
    })
  },
  beforeDestroy() {
    /* eslint-disable-next-line */
    if (process.client) {
      window.removeEventListener('resize', this.onResize)
      console.log('a');
    }
  },
  methods: {
    changeActive(){
      if(document.querySelector('.text-color') !== null){
        document.querySelector('.text-color').classList.remove('text-color');
      }
    },
    changeState(e){
      this.changeActive()
      e.target.classList.add('text-color');
    },
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
    contrataTalento() {
      this.$router.push('/contrata-talento')
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

.text-color{
  color:hsl(29deg 100% 61%)
}
.fade-leave-active {
  transition: 3s;
}

.fade-enter .fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
