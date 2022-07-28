<template>
  <button
    :type="tipo"
    :disabled="disabled"
    class="
      py-2
      px-4
      rounded-md
      transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300
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

<style>

</style>