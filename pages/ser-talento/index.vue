<template>
  <div class="grid w-screen h-screen">
    <div class="bg-gradient-to-r from-[#1C2365] to-[#163B85] fondo z-10  "
      style="border-bottom-left-radius: 18rem; border-bottom-right-radius: 18rem;">

      <div id="demo" class="pt-80">
        <button v-on:click="show = !show">
          Mostrar/Ocultar
        </button>
        <transition name="fade">
          <p v-if="show">hola</p>
        </transition>
      </div>
    </div>
    <div class=" z-0 flex bg-gradient-to-r from-[#5350F5] to-[#1D11A8] h-screen w-screen " style="position:absolute;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerTalento',
  data() {
    return {
      show: false
    }

  }
}
</script>

<style scoped>
.fondo {
  height: 80vh;

}

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