<template>
  <button
    :type="tipo"
    :disabled="disabled"
    class="
      py-2
      px-4
      rounded-md
    "
    @click="metodoBoton"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'AppButton',
   props: {
    tipo: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean
    }
  },
  methods:{
    metodoBoton() {
      this.$emit("metodoBoton")
    }
  }
}
</script>