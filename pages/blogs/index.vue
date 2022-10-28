<template>
  <div class="flex flex-col items-center pt-24">
    <div
      class="
        flex flex-col
        items-center
        justify-around
        w-11/12
        h-[34.375em]
        xl:w-9/12
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
          :src="'https://api.cms.coex.com.co' + lastBlog.image?.url"
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
            {{ lastBlog.title }}
          </h1>
          <p class="text-xs text-white lg:text-2xl">
            {{ lastBlog.introduction_blog }}
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
        lg:h-auto lg:gap-7
        xl:w-9/12
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
        v-if="lastsBlogs.length > 0"
        :class="
          lastsBlogs.length < 3
            ? 'lg:justify-center'
            : 'lg:justify-between'
        "
        class="
          flex
          gap-4
          w-full
          h-auto
          overflow-x-scroll
          lg:gap-9 lg:overflow-x-visible lg:h-[28.125em]
        "
      >
        <app-card-blog
          v-for="item in lastsBlogs"
          :key="item.id"
          :image_url="item.image?.url"
          :title="item.title"
          :introduction="item.introduction_blog"
        ></app-card-blog>
      </div>
      <div v-else class="flex w-full justify-center">
        <h1 class="font-bold text-2xl leading-8 text-white">No hay entradas</h1>
      </div>
      <app-btn
        class="
          bg-gradient-to-r
          from-blue-500
          to-blue-400
          p-[2px]
          text-white
          hover:from-blue-400 hover:to-blue-500
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
    return {
      blogsHighlights: [],
      lastsBlogs:[],
      lastBlog: {},
    }
  },
  created() {
    this.getBlogs()
  },
  methods: {
    async getBlogs() {
      const { data } = await this.$axios.get('Blogs')
      this.blogsHighlights = data.filter((e) => e.Isdestacated === true)
      this.lastsBlogs = this.blogsHighlights.splice(this.blogsHighlights.length-4, this.blogsHighlights.length)
      this.lastBlog = this.lastsBlogs[this.lastsBlogs.length - 1]
      this.lastsBlogs.pop()
      console.log(this.lastsBlogs)
    },
  },
}
</script>
