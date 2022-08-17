<template>
  <div class="m-2">
    <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>
    <div>

      <div class="sm:flex items-center justify-around ">
        <div v-if="metodo" class="flex justify-center">
          <app-btn type="button">
            <img :src="selected" />
          </app-btn>
        </div>
        <div class="flex justify-center">
          <div v-for="(item, i) in metodos" :key="i" class="flex justify-center">
            <div class="flex">
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
          name: "paypal",
          type: "pse",
          image: "/Metodos/pse-seeklogo.com.svg"
        },
        {
          name: "card",
          type: "card",
          image: "/Metodos/credit-card.svg"
        }
      ],
      selected: "",
      payMethod: "",
      metodo: false
    }
  },
  methods: {
    changeImage(item) {
      this.metodo = true
      this.selected = item.image;
      this.payMethod = item.type;
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
