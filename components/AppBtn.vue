<template>
  <button
    :type="type"
    :disabled="disabled"
    class="
      py-2
      px-4
      rounded-md
      disabled:bg-gradient-to-r disabled:from-[#fa645c] disabled:via-[#ff847e] disabled:to-[#fcc5c3]
      bx-shadow
      transition
      ease-in-out
      delay-150
      hover:-translate-y-1 hover:scale-110
      duration-1000
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
