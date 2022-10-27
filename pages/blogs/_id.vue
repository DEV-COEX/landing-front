<template>
  <div class="bg-[#1C233A] flex justify-center ">
    <div class="w-3/5 h-auto mt-6 md:px-4">
      <h1
        class="lg:text-5xl md:text-3xl lg:leading-relaxed font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]">
        {{ blog.title }}
      </h1>
      <div class="flex text-white place-content-between mt-4">
        <div class="flex space-x-4">
          <div>{{ blog.blog_created_date }}</div>
          <div>{{ blog.time_reading }} min read</div>
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
        <img class="object-cover bg-fixed h-96 w-full" :src="blog.image.url">
      </div>
      <div class="flex text-white space-x-4 items-center mt-4">
        <div>
          <img class="object-cover bg-fixed max-h-14 w-full" :src="blog.autor_image.url">
        </div>
        <div>
          <h3>{{ blog.autor_name }}</h3>
        </div>
      </div>

      <div class=" bg-white bg-opacity-10 mt-10 text-white list-none">
        <h6 
        class="
        pl-12 md:text-3xl
        lg:leading-relaxed 
        font-bold
        text-left text-transparent 
        bg-clip-text bg-gradient-to-r 
        from-[#FFDF8D] 
        via-[#FF9838] 
        to-[#dab255]">In this article </h6>
        <li class="pl-12 py-4" v-for="(topic,index) in topic_blogs" :key="topic.id">
          {{index+1}}. {{topic}}
        </li>
      </div>

      <div class=" mt-4 font-bold text-white text-xl">
        <h1>{{ blog.introduction_blog }}</h1>
      </div>
      <div class=" mt-4 pb-8 text-white">
        <h1>{{ blog.content_blog }}</h1>
      </div>
      <div class="text-center justify-center">
        <a class=" pl-12 md:text-3xl
        lg:leading-relaxed 
        font-bold
        text-left text-transparent 
        bg-clip-text bg-gradient-to-r 
        from-[#FFDF8D] 
        via-[#FF9838] 
        to-[#dab255] 
        " :href="''">Sigue leyendo </a>
        <p class="text-white w-3/4 m-auto">
          Blogs are a great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.
        </p>

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
      blog:{},
      topic_blogs: null,
      topic_blog: null,
      markdown:null,
    }
  },
  async mounted() {
    // await this.getBlogs()
    await this.getBlog()
  },
  methods: {
    //TRAERME TODOS LOS BLOGS
    // async getBlogs() {
    //   const { data } = await this.$axios.get('Blogs')
    //   this.blogs = data
    //   this.blogs.forEach((el, index) => {
    //     el.image.url = `https://api.cms.coex.com.co${el.image.formats.large.url}`
    //     el.autor_image.url = `https://api.cms.coex.com.co${el.autor_image.url}`
    //     el.relevant_topic_blog = el.relevant_topic_blog.split(',')
    //     this.topic_blogs = el.relevant_topic_blog
    //     this.topic_blogs.id = index
    //   })
    // },

    //TRAERME UN BLOG
    async getBlog() {
      const { data } = await this.$axios.get('Blogs/4')
       console.log(data);
        this.blog = data
        this.blog.image.url = `https://api.cms.coex.com.co${this.blog.image.formats.large.url}`
        this.blog.autor_image.url = `https://api.cms.coex.com.co${this.blog.autor_image.url}`
        this.topic_blog = this.blog.relevant_topic_blog.split(',')         
      },
    

  },
}
</script>
