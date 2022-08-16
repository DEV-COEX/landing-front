<template>
  <div class="m-2">
    <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>
    <div>

      <div class="flex items-center justify-between">
        <Transition name="fade" mode="out-in">

          <app-btn type="button">
            <img :src="selected" />
          </app-btn>

        </Transition>

        <div class="flex ">
          <div v-for="(item, i) in metodos" :key="i">
            <app-btn type="button" class="m-2" @click="changeImage(item)"><img class="h-10" :src="item.image" />
            </app-btn>
          </div>
        </div>

      </div>
      <div class="flex justify-end">
        <label>seleccione uno de estos metodos</label>
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
          type: "paypal",
          image: "/Metodos/cc-paypal.svg"
        },
        {
          name: "paypal",
          type: "card",
          image: "/Metodos/visa.svg"
        },
        {
          name: "paypal",
          type: "paypal",
          image: "/Metodos/mastercard.svg"
        }
      ],
      selected: "",
      payMethod: ""
    }
  },
  methods: {
    changeImage(item) {
      this.selected = item.image;
      this.payMethod = item.type;
      this.$emit('input', this.payMethod);
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
