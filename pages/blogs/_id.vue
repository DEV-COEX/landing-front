<template>
  <div class="bg-[#1C233A] flex justify-center pt-20">
    <div class="w-3/5 h-auto mt-6 md:px-4">
      <h1
        class="lg:text-5xl md:text-3xl lg:leading-relaxed font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
      >
        {{ blog.title }}
      </h1>
      <div class="flex text-white place-content-between mt-4">
        <div class="flex space-x-4">
          <div>{{ blog.blog_created_date }}</div>
          <div>{{ blog.time_reading }} min read</div>
        </div>
        <div class="flex ">
          <div>
            <a
              href=""
              target="_blank"
              ><app-btn
                ><img src="@/static/twitter.svg" alt="TwitterLogo" /></app-btn
            ></a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              ><app-btn
                ><img src="@/static/facebook.svg" alt="FacebookLogo" /></app-btn
            ></a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              ><app-btn
                ><img src="@/static/linkedin.svg" alt="LinkedinLogo" /></app-btn
            ></a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              ><app-btn
                ><img src="@/static/link.svg" alt="LinkLogo" /></app-btn
            ></a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              ><app-btn
                ><img src="@/static/share.svg" alt="ShareLogo" /></app-btn
            ></a>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <img
          class="object-cover bg-fixed h-96 w-full"
          :src="'https://api.cms.coex.com.co' + blog.image?.url"
        />
      </div>
      <div class="flex text-white space-x-4 items-center mt-4">
        <div>
          <img class="object-cover bg-fixed max-h-14 w-full rounded-[50%]" :src="'https://api.cms.coex.com.co'+blog.autor_image?.url">
        </div>
        <div>
          <h3>{{ blog.autor_name }}</h3>
        </div>
      </div>

      <div class="bg-white bg-opacity-10 mt-10 text-white list-none">
        <h6
          class="pl-12 md:text-3xl lg:leading-relaxed font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
        >
          In this article
        </h6>
        <li
          class="mx-12 py-4"
          v-for="(topic, index) in topic_blog"
          :key="topic.id"
        >
          <a :href= "`#${index}`" > {{ index + 1 }}. {{ topic }} </a>
        </li>
      </div>

      <div class="mt-4 font-bold text-white text-xl">
        <h1>{{ blog.introduction_blog }}</h1>
      </div>
      
      <div :id=index v-for="(content, index) in topic_content" :key="content.id" class="mt-4 pb-8 text-white">
        <div v-html="$md.render(content)"></div>
      </div>
      <div class="text-center justify-center">
        <a
          class="pl-12 md:text-3xl lg:leading-relaxed font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
          :href="''"
          >Sigue leyendo
        </a>
        <p class="text-white w-3/4 m-auto">
          Blogs are a great method to increase traffic and generate leads. Make
          a profit. Get compensated for your efforts.
        </p>
      </div>

      <div class="grid grid-cols-3 content-center my-8 mx-8 ">
        <div v-for="item in blogs" :key="item.id">
          <h6
            class="mr-12 items-start border-b-2 border-[rgba(78, 146, 249, 0.2)] text-white"
          >
            {{item.blog_category.name}}
          </h6>
          <h3
            class="lg:leading-relaxed font-medium text-left text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
          >
          {{ item.title }}
          </h3>
          <div class="mt-2 grid grid-rows-3 grid-flow-col gap-0.5">
            <div class="row-span-3 ...">
              <img
                class="object-cover bg-fixed h-4/6 w-3/4 rounded-[50%]"
                :src="'https://api.cms.coex.com.co'+item.autor_image?.url">
            </div>
            <div class="col-span-2 content-center">
              <h3
                class="lg:leading-relaxed font-medium text-left text-transparent bg-clip-text bg-gradient-to-r from-[#87B8FF] via-[#4490F9] to-[#4490F9]"
              >
                {{ item.autor_name }}
              </h3>
            </div>
            <div class="row-span-2 col-span-2 text-white text-sm leading-4">
              <div class="flex space-x-4">
                <div>{{ item.blog_created_date }}</div>
                <div>{{ item.time_reading }} min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <app-btn
          class="bg-gradient-to-r from-blue-500 to-blue-400 p-[2px] text-white hover:from-blue-400 hover:to-blue-500 mb-5"
        >
          Ver todas las entradas
        </app-btn>
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
      blogs: [],
      blog:{},
      topic_blogs: null,
      topic_blog: [],
      topic_content: [],
    }
  },
  async mounted(){
    // await this.getBlogs()
    await this.getBlog()
  },
  methods: {
    // TRAERME TODOS LOS BLOGS
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

    // TRAERME UN BLOG
    async getBlog() {
        const { data } = await this.$axios.get(`blogs`)
        this.blogs = data;
        this.blog = this.blogs.find((e)=>e.id===parseInt(this.$route.params.id))
        const indexBlog = this.blogs.findIndex((e)=>e.id===parseInt(this.$route.params.id))
        this.blogs.splice(indexBlog-1, 1);
        this.blogs.sort(()=> Math.random() - 0.5);
        this.blogs.length=3
        this.topic_blog = this.blog.relevant_topic_blog.split(',')
        this.topic_content = this.blog.content_blog.split('.\n\n')
        console.log(this.topic_content);
      },


  },
}
</script>
