<template>
  <button
    :type="type"
    :disabled="disabled"
    class="
      py-2
      md:px-4
      px-2
      rounded-md
      disabled:bg-gradient-to-r disabled:from-[#fa645c] disabled:via-[#ff847e] disabled:to-[#fcc5c3]
      bx-shadow
      
      
    "
    @click="click"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.bx-shadow:hover {
  box-shadow: 0px 0px 4px 0px white;
}
</style>
