<template>
  <div class="grid w-full h-screen">
    <div class="bg-gradient-to-r from-[#1A0F5B] to-[#24228A] fondo z-10  text-white  flex justify-center items-center"
      style="border-bottom-left-radius: 18rem; border-bottom-right-radius: 18rem;">
      <div class="">
        <div class="flex-col justify-center items-center pt-28 ">
          <div class="flex justify-center">
            <p class="text-5xl"> {{pageText[0] ? pageText[0].tittle:''}} </p>
          </div>
          <div class="flex justify-center p-10" >
            <p class="text-xl  text-center w-3/6"> {{pageText[0] ? pageText[0].description:'' }} </p>
          </div>
          <div class="flex justify-center ">
            <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                    hover:from-red-400 hover:to-red-500

                  ">Quiero ser talento Coex</app-btn>
          </div>
        </div>
        <div>

        </div>
      </div>


    </div>
    <div class=" z-0 flex bg-gradient-to-r from-[#000A65] via-[#4736df] to-[#2F00B5] background-animate h-screen w-full " style="position:absolute;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSerTalento',
  data() {
    return {
      show: false,
      pageText: {}
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "talento-coex")
      this.pageText = this.$store.state.text
    }
  }
}
</script>

<style scoped>
.fondo {
  height: 70vh;

}
.background-animate {
    background-size: 200%;
    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 8s ease infinite;
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
</style>




