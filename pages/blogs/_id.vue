<template>
  <div class="bg-[#1C233A] h-screen flex justify-center">
    <div class="w-100 mt-6 md:px-4 ">
      <h1 v-for="blog in blogs" :key="blog.id"
        class="lg:text-5xl md:text-3xl lg:leading-relaxed font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]">
        {{ blog.title }}
      </h1>
      <div class="flex text-white place-content-between mt-4">
        <div class="flex space-x-4">
          <div v-for="blog in blogs" :key="blog.id">{{ blog.blog_created_date }}</div>
          <div v-for="blog in blogs" :key="blog.id">{{ blog.time_reading }} min read</div>
        </div>
        <div class="flex flex-row-reverse space-x-4 space-x-reverse">
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Linkind</div>
          <div>Copiar link</div>
          <div>Compartir</div>
        </div>
      </div>
      <div class=" mt-4 ">
        <img class="object-cover bg-fixed h-96 w-full" v-for="blog in blogs" :key="blog.id" :src="blog.image.url">
      </div>
      <div class=" mt-4 text-white">
        <img v-for="blog in blogs" :key="blog.id" :src="blog.autor_image.url">
        <h3 v-for="blog in blogs" :key="blog.id">{{ blog.autor_name }}</h3>
      </div>

      <div class=" mt-4 text-white">
        <li v-for="(topic,index) in topic_blogs" :key="topic.id">
          {{index+1}}.{{topic}}
        </li>
      </div>

      <div class=" mt-4 text-white">
        <h1 v-for="blog in blogs" :key="blog.id">{{ blog.introduction_blog }}</h1>
      </div>
      <div class=" mt-4 pb-8 text-white">
        <h1 v-for="blog in blogs" :key="blog.id">{{ blog.content_blog }}</h1>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'EntryBlog',
  layout: 'NavbarDefault',
  data() {
    return {
      blogs: null,
      topic_blogs: null,
    }
  },
  async mounted() {
    await this.getBlogs()
  },
  methods: {
    async getBlogs() {
      const { data } = await this.$axios.get('Blogs')
      this.blogs = data
      this.blogs.forEach((el, index) => {
        el.image.url = `https://api.cms.coex.com.co${el.image.formats.large.url}`
        el.autor_image.url = `https://api.cms.coex.com.co${el.autor_image.url}`
        el.relevant_topic_blog = el.relevant_topic_blog.split(',')
        this.topic_blogs = el.relevant_topic_blog
        this.topic_blogs.id = index
      })
    },

  },
}
</script>
