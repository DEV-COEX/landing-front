<template>
  <div class="flex flex-col items-center">
    <div
      class="
        flex flex-col
        items-center
        justify-around
        w-11/12
        h-[34.375em]
        xl:w-5/6
      "
    >
      <h1
        class="
          text-2xl
          font-bold
          leading-8
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
          lg:text-5xl
        "
      >
        BLOGS
      </h1>
      <div
        class="
          flex flex-col
          items-center
          rounded-md
          bg-white/30
          box-content
          h-[28.125em]
          lg:flex-row
        "
      >
        <img
          src="https://www.nationalgeographic.com.es/medio/2022/10/24/muy-alta-resolucion_dc6e619a_960x620.jpg"
          alt=""
          class="h-1/2 rounded-md w-full lg:h-full lg:w-1/2"
        />
        <div
          class="
            flex flex-col
            justify-around
            h-1/2
            w-11/12
            lg:h-full lg:w-1/2 lg:px-6 lg:box-border
          "
        >
          <p class="text-[8px] text-white lg:text-sm">Artículo Destacado</p>
          <h1
            class="
              text-transparent
              bg-clip-text bg-gradient-to-r
              from-[#FFDF8D]
              to-[#FF9838]
              text-2xl
              font-medium
              lg:text-5xl
            "
          >
            Problematicas sociales: Una realidad oculta
          </h1>
          <p class="text-xs text-white lg:text-2xl">
            Algunos de los problemas sociales en Colombia son la corrupción, la
            pobreza, desempleo, discriminación, adicción a las drogas o
            desigualdad de clases.
          </p>
          <app-btn
            class="
              w-1/3
              bg-gradient-to-r
              from-red-500
              to-red-400
              p-[2px]
              text-white
              hover:from-red-400 hover:to-red-500
            "
            >Leer artículo</app-btn
          >
        </div>
      </div>
    </div>
    <div
      class="
        flex flex-col
        items-center
        justify-around
        w-11/12
        h-[31.125em]
        lg:h-auto
        lg:gap-7
        xl:w-5/6
      "
    >
      <h2
        class="
          font-bold
          text-2xl
          leading-8
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          to-[#FF9838]
          lg:text-5xl
        "
      >
        Entradas destacadas
      </h2>
      <div
        class="
          flex
          gap-4
          w-full
          h-auto
          overflow-x-scroll
          lg:gap-9
          lg:overflow-x-visible
          lg:h-[28.125em]
          lg:justify-between
        "
      >
        <app-card-blog v-for="i in 3" :key="i"></app-card-blog>
      </div>
      <app-btn
        class="
          bg-gradient-to-r
          from-blue-500
          to-blue-400
          p-[2px]
          text-white
          hover:from-blue-400
          hover:to-blue-500
          mb-5
        "
        >
        Ver todas las entradas
        </app-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexBlog',
  layout: 'NavbarDefault',
  data() {
    return {}
  },
  methods: {},
}
</script>
