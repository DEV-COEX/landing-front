<template>
  <div class="bg-[#1C233A] w-full h-screen flex justify-center items-center">
    <app-card-talents></app-card-talents>
  </div>
</template>

<script>
export default {
  name: 'FabricaSoftware',
  data() {
    return {

      desarrollo: {
        selected: false,
      },
      showButton: [],
      ShowPanel: false,
      isCardShown: true,
      pageText: {},
      desarrollos: [
        {
          titulo: 'Landing page',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
        },
        {
          titulo: 'CRM',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=202',
        },
        {
          titulo: 'Bromita',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=230',
        },
        {
          titulo: 'Jhon M',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20',
        },
        {
          titulo: 'Carlos gei',
          descripcion:
            'Desarrollo de aplicaciones para empresas y personas independientes asdasdasd ddddsdasdsd  dsdsds cscascasc asdas dsad.',
          imagen:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=240',
        },
      ],
    }
  },
  async mounted() {
    this.getPageText()
    await this.$store.dispatch('fetchTexts')
    this.getPageText()
    this.MountedDesarrollo()
    setTimeout(() => {
      this.ShowPanel = true
    }, 50)
  },
  methods: {
    MountedDesarrollo() {
      this.desarrollo = this.desarrollos[0]
      this.desarrollo.selected = true
    },
    SetDesarrollo(desarrollo) {
      this.desarrollo.selected = false
      this.desarrollo = desarrollo
      this.desarrollo.selected = true
        this.isCardShown = false
      setTimeout(() => {
        this.isCardShown = true
      }, 100)
    },
    getPageText() {
      this.$store.commit('filterText', 'fabrica')
      this.pageText = this.$store.state.text
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>
