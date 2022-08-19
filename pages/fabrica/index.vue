<template>
  <div  class="bg-[#1C233A] w-full min-h-screen flex justify-center items-center">
    <app-factory id="fabrica" @openModal="openModal"></app-factory>
    <app-modal-contactar v-model="modal" @close="closeModal" />
  </div>
</template>

<script>
export default {
  name: 'FabricaSoftware',
  data() {
    return {
      modal: false
    }
  },
  methods: {
    openModal() {
      this.modal = true
      document.getElementById('fabrica').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')

    },
    closeModal() {
      this.modal = false
      document.getElementById('fabrica').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }
}
</script>

<style>
body::-webkit-scrollbar {
  width: 2px;
  /* width of the entire scrollbar */
}

body::-webkit-scrollbar:hover {
  width: 5px;

  /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);
  /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4A5B95 0%, #90BEFF 100%);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* border: 1px solid rgb(217 70 239);
  /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}
</style>
