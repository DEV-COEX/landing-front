<template>
  <div class="bg-black w-screen h-screen flex justify-center items-center">
    <div class="flex justify-center items-center">
      <div class="">
        <div class="flex justify-center">
          <p class="text-5xl font-bold  text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ pageText[0]?.tittle }}</p>
        </div>
        <div class="flex justify-center">
          <p class="text-3xl w-3/6 text-center text-white py-10">{{ pageText[0]?.description }}</p>
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

                  ">Necesito un desarrollo
          </app-btn>
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
      pageText: {}
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
    }
  }
}
</script>

<style>
</style>
