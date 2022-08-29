<template>
  <div>
    <div id="FabricaHome" class=" flex justify-center items-center h-screen ">
      <div class="flex justify-center items-center">
        <div class="">
          <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20">
            <p class="xl:text-5xl lg:text-4xl md:text-3xl text-xl w-full sm:w-[80%] lg:w-4/6 text-center font-bold px-7 text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ pageText[0] ? pageText[0].tittle : '' }}</p>
          </div>
          <div class="flex justify-center xl:p-10 lg:p-5 p-5 md:p-6">
            <div class="xl:text-xl text-white lg:text-xl md:text-xl text-md text-center w-full sm:w-[80%] lg:w-3/6" v-html="text">
            </div>
          </div>
          <div class="flex justify-center">
            <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  " @click="toFactory">Necesito un desarrollo
            </app-btn>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: "HomeFabricaSoftware",
  data() {
    return {
      pageText: {},
      text: null
    }
  },
  async mounted() {
    this.getPageText();
    await this.$store.dispatch("fetchTexts");
    this.getPageText();
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "fabrica")
      this.pageText = this.$store.state.text;
      this.text = this.$md.render(this.pageText[0].description)
    },
    toFactory() {
      this.$router.push("/fabrica");
      if (process.client) {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style  scoped>
 #FabricaHome{
    background: url(@/static/HomeFabrica.png) no-repeat;
    background-color: black;
 }
</style>

