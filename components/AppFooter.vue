<template>
  <div class="h-screen flex flex-col justify-end lg:block lg:h-auto bg-[#171929] text-white z-10 relative text-sm lg:text-base">
    <div class="flex flex-col justify-between lg:grid lg:grid-cols-3 lg:justify-between">
      <div class="flex items-center lg:items-start flex-col lg:p-20 lg:pb-10 px-5 py-8">
        <img
          class="lg:w-[18rem] w-[10rem] pb-5"
          src="/footer/coexGroup.svg"
          alt="CoexLogo"
        />
        <div class="text-justify ">
          Es un Bootcamp en el cual formamos la base del hacer, del ser y el
          saber de cada talento juvenil que quiere ser Talento, provenientes de
          diversos tipos de comunidades de nuestra ciudad, bajo un ambiente de
          alta productividad dónde se entrenan como desarrolladores de software.
        </div>
      </div>
      <div class="lg:flex lg:flex-col lg:items-center justify-between lg:justify-center grid grid-cols-2 p-5 lg:p-0 ">
        <div v-for="(item, i) in navitems" :key="i" class="lg:mt-1 mt-4">
          <NuxtLink :to="item.path" class="font-medium  text-white">
            <span
              class="
                lg:mx-6
                lg:font-bold
                font-normal
                hover:text-transparent
                bg-clip-text bg-gradient-to-r
                from-red-500
                to-red-400
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              "
              @click="item.method"
              >{{ item.name }}</span
            >
          </NuxtLink>
        </div>
      </div>
      <div class="w-full flex justify-center">
      <div class="flex flex-col justify-center w-[70%] pb-5 lg:pb-0 lg:w-4/5">
        <div class="text-2xl text-center pb-3 lg:pb-11">SÍGUENOS</div>
        <div class="flex w-full justify-evenly">
          <app-btn>
            <img src="/footer/instLogo.svg" alt="InstagramLogo" /></app-btn
          ><app-btn><img src="/footer/YouTube.svg" alt="YouTubeLogo" /></app-btn
          ><app-btn
            ><img src="/footer/Facebook.svg" alt="FacebookLogo" /></app-btn
          ><app-btn><img src="/footer/twLogo.svg" alt="TwitterLogo" /></app-btn>
        </div>
      </div></div>
    </div>
    <div class="border-t-[1px] border-white lg:mx-20 flex text-white pb-6">
      <div class="flex flex-col w-full lg:w-[55%]">
        <span class="hidden lg:block">Coex</span>
        <div class="flex lg:flex-row flex-col mt-6 lg:mt-0 items-center justify-between">
          <div>Derechos reservados.</div>
          <div>Desarrollado por COEX</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultFooter',
  props: {
    navitems: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style>
</style>
