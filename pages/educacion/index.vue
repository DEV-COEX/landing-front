<template>
  <div
    class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-screen h-screen flex justify-center items-center">
    <div class="flex justify-center items-center">
      <div class="">
        <div class="flex justify-center">
          <p class="text-5xl font-bold  w-3/6 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ pageText[0]?.tittle }}</p>
        </div>
        <div class="flex justify-center">
          <p class="text-3xl w-3/6 text-center text-white py-10"> {{ pageText[0]?.description }} </p>
        </div>
        <div class="flex justify-center">
          <div v-if="btnStar"
               class="w-24 h-24 rounded-full border-2 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  animate-bounce p-1 flex items-center justify-center">
            <button class="
                        bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]
                        m-0
                         text-blue-400   p-2 w-20 h-20 ring-1   rounded-full  text-xl font-semibold"
                    @click="btnStarEducacion">Star
            </button>
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
      btnStar: true
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
      console.log(this.pageText)
    },
    btnStarEducacion() {
      this.btnStar = !this.btnStar
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
</style>
