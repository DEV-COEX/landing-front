<template>
  <div class="m-2">
    <div class="flex justify-center sm:px-10  xl:py-5 py-3">
      <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Formas de donar</p>
    </div>
    <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>
    <div>
      <div class="sm:flex items-center justify-around ">
        <div v-show="metodo" class="flex justify-center">
          <app-btn type="button">
            <img :src="selected" />
          </app-btn>
        </div>
        <div class="flex justify-center">
          <div v-for="(item, i) in metodos" :key="i" class="flex justify-center">
            <div class="flex flex-col justify-center items-center">
              <label class="text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2">{{ item.name }}</label>
              <app-btn type="button" class="m-2" @click="changeImage(item)"><img class="h-10 " :src="item.image" />
              </app-btn>
            </div>
          </div>
        </div>
      </div>
      <div id="label" class="flex justify-center">
        <label class="text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2">Seleccione uno de estos metodos</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "metodosDonar",
  props: {
    label: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      metodos: [
        {
          name: "PSE",
          type: "pse",
          image: "/Metodos/pse-seeklogo.com.svg"
        },
        {
          name: "Tarjeta",
          type: "card",
          image: "/Metodos/tarjeta.svg"
        }
      ],
      selected: "",
      payMethod: "",
      metodo: false
    }
  },
  methods: {
    changeImage(item) {
      this.selected = item.image;
      this.payMethod = item.type;
      this.metodo = true
      this.$emit('input', this.payMethod);
      document.getElementById("label").style.justifyContent = "flex-end"
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
