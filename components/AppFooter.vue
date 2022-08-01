<template>
  <div class="h-auto bg-[#171929] text-white ">
    <div class="grid grid-cols-3 justify-between">
      <div class="flex flex-col p-20 pb-10">
        <img
          class="w-[18rem] pb-5"
          src="/footer/coexGroup.svg"
          alt="CoexLogo"
        />
        <div>
          Es un Bootcamp en el cual formamos la base del hacer, del ser y el
          saber de cada talento juvenil que quiere ser Talento, provenientes de
          diversos tipos de comunidades de nuestra ciudad, bajo un ambiente de
          alta productividad dónde se entrenan como desarrolladores de software.
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div v-for="(item, i) in navitems" :key="i" class="mt-1 p-2">
          <NuxtLink :to="item.path" class="font-medium text-white">
            <span
              class="
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
              "
              >{{ item.name }}</span
            >
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col justify-center justify bg-center w-4/5">
        <div class="text-2xl text-center pb-11">SÍGUENOS</div>
        <div class="flex w-full justify-evenly">
          <app-btn>
            <img src="/footer/instLogo.svg" alt="InstagramLogo" /></app-btn
          ><app-btn><img src="/footer/YouTube.svg" alt="YouTubeLogo" /></app-btn
          ><app-btn
            ><img src="/footer/Facebook.svg" alt="FacebookLogo" /></app-btn
          ><app-btn><img src="/footer/twLogo.svg" alt="TwitterLogo" /></app-btn>
        </div>
      </div>
    </div>
    <div class="border-t-[1px] border-white mx-20 text-white pb-6">
      <div class="flex flex-col w-[55%]">
        <span>Coex</span>
        <div class="flex justify-between">
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
