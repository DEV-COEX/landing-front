<template>
    <div
        class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-ful h-screen flex justify-center items-center">
        <div class="flex justify-center items-center">
            <div class="">
                <div class="flex justify-center">
                    <p class="text-5xl font-bold  w-3/6 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Especialízate en desarrollo de software con nuestra increíble metodología en tan
                        solo 10 meses.</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-3xl w-3/6 text-center text-white py-10">¡Conoce como!

                    </p>
                    <h1 class="animate__animated animate__bounce">An animated element</h1>
                </div>
                <div class="grid justify-center">
                    <div v-bind:class="[isActive ? 'animate-bounce' : '']"
                        class="w-32 h-32  ml-1 rounded-full border-4 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  p-1 flex items-center justify-center">
                        <button class="
                        bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]
                        m-0
                         text-blue-400   p-2 w-24 h-24   rounded-full  text-xl font-semibold"
                            @click="btnStarEducacion">Star</button>
                    </div>
                    <div class="grid items-center justify-center">
                        <div class="flex  justify-center">
                            <div class="linea bg-gradient-to-r from-[#4A5B95]  to-[#90BEFF] bx-shadow"></div>
                        </div>

                        <div class="cuadrado"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "FabricaSoftware",
  data() {
    return {
      pageText: {},
      btnStar: true,
      isActive: true,
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "educacion")
      this.pageText = this.$store.state.text
    },
    btnStarEducacion() {
        this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.background-animate {
    background-size: 150%;
    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {

    0%,
    100% {
        background-position: 0% 100%;
    }

    50% {
        background-position: 100% 30%;
    }

}

.cuadrado {
    width: 100px;
    height: 100px;
    background: #428bca;
}

.linea {
    width: 3px;
    height: 170px;
}

.bx-shadow {
    box-shadow: 0px 0px 4px 0px white;
}
</style>
