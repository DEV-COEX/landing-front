<template>
  <div>
    <section
      class="
        h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
        relative
      "
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
       {{ pageTexts["coex-model"] ? pageTexts["coex-model"][0].tittle: ' '}}
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        {{ pageTexts["coex-model"] ? pageTexts["coex-model"][0].description: ' ' }}
      </div>
      <div class="absolute bottom-28">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="28"
          viewBox="0 0 33 28"
          fill="none"
        >
          <path d="M16.5 28L32.5215 0.25H0.478531L16.5 28Z" fill="#FFB800" />
        </svg>
      </div>
    </section>
    <section
      class="h-screen bg-[#1C233A] flex flex-col justify-center items-center"
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        {{ pageTexts["historia"] ? pageTexts["historia"][0].tittle: ' '}}
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        {{ pageTexts["historia"] ? pageTexts["historia"][0].description: ' '}}
      </div>
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        {{ pageTexts["mision"] ? pageTexts["mision"][0].tittle: ' '}}
      </div>
      <div class="max-w-[42%] text-center text-3xl text-white py-8 leading-10">
        {{ pageTexts["mision"] ? pageTexts["mision"][0].description: ' '}}
      </div>
    </section>
    <section
      class="
        h-auto
        py-40
        bg-gradient-to-br
        from-[#000A65]
        via-[#321586]
        to-[#474EFF]
      "
    >
      <div class="flex flex-col items-center">
        <div
          class="flex flex-col items-center w-[70%] rounded-[40px] px-10 py-12"
          style="background: rgba(47, 50, 125, 0.2)"
        >
          <div
            class="
              font-extrabold
              text-transparent text-6xl
              leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            "
          >
            Nuestros primeros talentos COEX:
          </div>
          <div class="w-full flex justify-center">
            <app-talents-card
              v-for="talent in talents"
              :key="talent.id"
              :name="talent.name"
              :job="talent.job"
              :image="talent.imagen.url"
            />
          </div>
          <app-btn
            class="
              bg-gradient-to-r
              mt-2
              from-red-500
              to-red-400
              p-1
              mx-6
              text-white
              hover:from-red-400 hover:to-red-500
            "
            >Ser talento COEX</app-btn
          >
        </div>
      </div>

      <div class="flex flex-col items-center mt-14">
        <div class="flex flex-col items-center w-[80%] rounded-[40px] py-12">
          <div
            class="
              font-extrabold
              pb-3
              text-transparent text-6xl
              leading-[68px]
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
            "
          >
            Nuestro Equipo:
          </div>
          <div class="w-full grid grid-cols-3 justify-center h-full">
            <app-talents-card
              v-for="employe in employes"
              :key="employe.id"
              :name="employe.name"
              :job="employe.job"
              :image="employe.image.url"
              :details="employe.description"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="
        min-h-screen
        bg-[#1C233A]
        flex flex-col
        justify-center
        items-center
      "
    >
      <div
        class="
          font-extrabold
          text-transparent text-6xl
          p-4
          mb-8
          leading-[68px]
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
        "
      >
        Founders
      </div>
      <app-founder-card
        v-for="founder in founders"
        :key="founder.id"
        :image="founder.image.url"
        :name="founder.name"
        :job="founder.job"
        :description="`${founder.age} years old, ${founder.country}`"
        :about="founder.description"
        class="mb-[10rem]"/>
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
      pageTexts: {}
    }
  },
  async mounted() {
      await this.getPageText()
      await this.getTalents();
      await this.getEmployes();
      await this.getFounders();
  },
  methods: {
    async getPageText() {
      await this.$store.dispatch("fetchTexts");
      const data = this.$store.state.texts
      data.forEach( (el) => {
        this.$store.commit("filterText", String(el.name))
        this.pageTexts[el.name] = this.$store.state.text
      })
    },
    async getTalents() {
      const { data } = await this.$axios.get('talents');
      this.talents = data;
      this.talents.forEach( (el) => {
        el.imagen.url = `https://api.cms.coex.com.co${el.imagen?.url}`
      });
    },
    async getEmployes() {
      const { data } = await this.$axios.get('employes');
      this.employes = data;
      this.employes.forEach( (el) => {
        el.image.url = `https://api.cms.coex.com.co${el.image?.url}`
      });
    },
    async getFounders() {
      const { data } = await this.$axios.get('founders');
      this.founders = data;
      this.founders.forEach( (el) => {
        el.image.url = `https://api.cms.coex.com.co${el.image?.url}`
      });
    }
  }
}
</script>

<style>
</style>
