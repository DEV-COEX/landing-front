<template>
  <button
    :type="tipo"
    :disabled="disabled"
    class="
      py-2
      px-4
      rounded-md
      btn
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
.btn:hover{
transition-duration: 0.5s;
padding-left: 1.25rem;
padding-right: 1.25rem;
}
</style>