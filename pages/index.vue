<template>
  <div class="grid w-full h-screen">
    <div id="contenedor"
      class="bg-gradient-to-r from-[#1C2365]   to-[#163B85] contenedor   text-white  flex justify-center items-center ">
      <div>
        <app-contratra-talento/>
      </div>
    </div>

    <div
      class=" z-0 flex bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477] background-animate  h-screen w-full justify-center  pb-16 items-end"
      style="position:absolute;">
      <div class="btn">
        <button class="btn animate-ping opacity-75" @click="metodoCambio"></button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "AppHome",
  data() {
    return {
      pageText: {},
      contenedor: true
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch("fetchTexts");
    this.getPageText()
  },
  methods: {
    getPageText() {
      this.$store.commit("filterText", "contratar-talento")
      this.pageText = this.$store.state.text
    },
    metodoCambio() {
      this.contenedor = !this.contenedor
      if (this.contenedor === false) {
        document.getElementById("contenedor").style.transition = "2s"
        document.getElementById("contenedor").style.height = "70vh"
        document.getElementById("contenedor").style.background = "linear-gradient(#1A0F5B, #24228A)"

      } else {
        document.getElementById("contenedor").style.transition = "2s"
        document.getElementById("contenedor").style.height = "80vh"
        document.getElementById("contenedor").style.background = "linear-gradient(#1C2365, #163B85)"
      }

    }
  }
}
</script>
<style scoped>
.contenedor {
  height: 80vh;
  z-index: 10;
  border-bottom-left-radius: 18rem;
  border-bottom-right-radius: 18rem;
}

.btn {
  width: 50px;
  height: 50px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #6169ac;
}

.background-animate {
  background-size: 150%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 3s ease infinite;
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
