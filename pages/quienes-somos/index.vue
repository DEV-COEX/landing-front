<template>
  <div>
    <section class="
        xl:pt-28
        lg:pt-20
        md:pt-16
        pt-14
        min-h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
        relative
      ">
      <div class="
          font-extrabold
          text-transparent
          xl:text-6xl
          lg:text-5xl
          md:text-4xl
          text-xl
          lg:p-4 lg:leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        ">
        {{ pageTexts['coex-model'] ? pageTexts['coex-model'][0].tittle : ' ' }}
      </div>
      <div class="
          lg:max-w-[42%]
          w-full
          px-5
          text-center text-lg
          xl:text-3xl
          lg:text-2xl
          md:text-xl
          text-white
          py-5
          lg:leading-10
        " v-html="coexModel">

      </div>
    </section>
    <section class="
        min-h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
      ">
      <div class="
          font-extrabold
          text-transparent
          xl:text-6xl
          lg:text-5xl
          md:text-4xl
          text-xl
          lg:p-4 lg:leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        ">
        {{ pageTexts['historia-text'] ? pageTexts['historia-text'][0].tittle : ' ' }}
      </div>
      <div class="
          lg:max-w-[42%]
          w-full
          px-5
          text-center text-lg
          lg:text-2xl
          md:text-xl
          xl:text-3xl
          text-white
          py-5
          lg:leading-10
        " v-html="historia">
      </div>
      <div class="
          mt-10
          font-extrabold
          text-transparent
          xl:text-6xl
          md:text-4xl
          lg:text-5xl
          text-xl
          lg:p-4 lg:leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        ">
        {{ pageTexts['mision-text'] ? pageTexts['mision-text'][0].tittle : ' ' }}
      </div>
      <div class="
          lg:max-w-[42%]
          w-full
          px-5
          text-center text-lg
          lg:text-2xl
          xl:text-3xl
          md:text-xl
          text-white
          py-5
          lg:leading-10
        " v-html="mision">
      </div>
    </section>
    <section class="
        h-auto
        lg:py-40
        py-10
        px-5
        bg-gradient-to-br
        from-[#000A65]
        via-[#321586]
        to-[#474EFF]
      ">
      <div class="flex flex-col items-center">
        <div class="
            flex flex-col
            items-center
            w-full
            lg:w-[70%]
            rounded-[40px]
            px-6
            py-8
          " style="background: rgba(47, 50, 125, 0.2)">
          <div class="
              mb-2
              text-center
              font-extrabold
              text-transparent
              xl:text-6xl
              lg:text-5xl
              md:text-4xl
              text-3xl
              lg:p-4 lg:leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            ">
            Nuestros primeros talentos COEX:
          </div>
          <div class="w-full justify-center lg:hidden">
            <carousel class="w-full justify-center" :per-page-custom="[
              [0, 1],
              [768, 2],
            ]" :pagination-enabled="true" :autoplay="true" :autoplay-hover-pause="true" :loop="true"
              pagination-active-color="#F8CB5A">
              <slide v-for="talent in talents" :key="talent.id">
                <app-talents-card :name="talent.name" :job="talent.job" :image="talent.imagen.url" />
              </slide>
            </carousel>
          </div>
          <div class="w-full flex-wrap justify-center lg:flex hidden">
            <app-talents-card v-for="talent in talents" :key="talent.id" :name="talent.name" :job="talent.job"
              :image="talent.imagen.url" class="lg:w-[12rem]" />
          </div>
          <app-btn class="
              bg-gradient-to-r
              mt-2
              from-red-500
              to-red-400
              p-1
              mx-6
              text-white
              hover:from-red-400 hover:to-red-500
            " @click="goToSerTalento">Ser talento COEX</app-btn>
        </div>
      </div>

      <div class="flex flex-col items-center mt-3 lg:mt-14">
        <div class="
            flex flex-col
            items-center
            w-full
            lg:w-[80%]
            rounded-[40px]
            lg:py-12
            py-3
          ">
          <div class="
              mb-2
              font-extrabold
              text-transparent
              lg:text-6xl
              text-3xl
              lg:p-4 lg:leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            ">
            Nuestro Equipo:
          </div>
          <div class="w-full justify-center lg:hidden">
            <carousel class="w-full justify-center" :per-page-custom="[
              [0, 1],
              [768, 2],
            ]" :pagination-enabled="true" :autoplay="true" :autoplay-hover-pause="true" :loop="true"
              pagination-active-color="#F8CB5A">
              <slide v-for="employe in employes" :key="employe.id">
                <app-talents-card :name="employe.name" :job="employe.job" :image="employe.image.url"
                  :details="employe.description" />
              </slide>
            </carousel>
          </div>
          <div class="w-full flex-wrap justify-center lg:flex hidden">
            <app-talents-card v-for="employe in employes" :key="employe.id" :name="employe.name" :job="employe.job"
              :image="employe.image.url" :details="employe.description" class="lg:w-[20rem] xl:w-[25rem] hoverTarjeta
        " />
          </div>
        </div>
      </div>
    </section>
    <section class="
        min-h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
      ">
      <div class="
          font-extrabold
          text-transparent
          lg:text-6xl
          text-2xl
          mt-8
          lg:mt-0
          p-4
          lg:mb-8 lg:leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        ">
        Founders
      </div>
      <app-founder-card v-for="founder in founders" :key="founder.id" :image="founder.image.url" :name="founder.name"
        :job="founder.job" :description="`${founder.age} years old, ${founder.country}`" :about="founder.description"
        class="lg:mb-[10rem] mb-[7rem] flex flex-col lg:flex-row" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      talents: null,
      employes: null,
      founders: null,
      pageTexts: {},
      coexModel: null,
      historia: null,
      mision: null,
    }
  },
  async mounted() {
    await this.getPageText()
    await this.getTalents()
    await this.getEmployes()
    await this.getFounders()
  },
  methods: {
    async getPageText() {
      await this.$store.dispatch('fetchTexts')
      const data = this.$store.state.texts
      data.forEach((el) => {
        this.$store.commit('filterText', String(el.name))
        this.pageTexts[el.name] = this.$store.state.text
      })
      this.coexModel = this.$md.render(this.pageTexts['coex-model'][0].description)
      this.historia = this.$md.render(this.pageTexts["historia-text"][0].description)
      this.mision = this.$md.render(this.pageTexts["mision-text"][0].description)
    },
    async getTalents() {
      const { data } = await this.$axios.get('talents')
      this.talents = data
      this.talents.forEach((el) => {
        el.imagen.url = `https://api.cms.coex.com.co${el.imagen?.url}`
      })
    },
    goToSerTalento() {
      this.$router.push({ name: 'ser-talento' })
      if (process.client) {
        window.scrollTo(0, 0)
      }
    },
    async getEmployes() {
      const { data } = await this.$axios.get('employes')
      this.employes = data
      this.employes.forEach((el) => {
        el.image.url = `https://api.cms.coex.com.co${el.image?.url}`
      })
    },
    async getFounders() {
      const { data } = await this.$axios.get('founders')
      this.founders = data
      this.founders.forEach((el) => {
        el.image.url = `https://api.cms.coex.com.co${el.image?.url}`
      })
    },
  },
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

}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4a5b95 0%, #90beff 100%);

  border-radius: 20px;

}

strong {
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #ffdf8d, #ff9838);
}

.hoverTarjeta {
  background: rgba(47, 50, 125, 0.2);
  margin: 10px;
}

.hoverTarjeta:hover {
  transition-delay: 150ms;
  transition-duration: 1000ms;
  background: rgba(24, 4, 60, 0.2);
}
</style>
