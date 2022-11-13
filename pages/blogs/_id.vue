<template>
  <div class="bg-[#1C233A] flex justify-center pt-20">
    <div class="w-4/6 h-auto mt-6 md:px-4">
      <h1
        class="
          lg:text-5xl
          md:text-3xl
          lg:leading-relaxed
          font-bold
          text-2xl text-center text-transparent
          bg-clip-text bg-gradient-to-r
          from-[#FFDF8D]
          via-[#FF9838]
          to-[#dab255]
        "
      >
        {{ blog.title }}
      </h1>
      <div
        class="
          flex
          text-white
          lg:flex-row lg:place-content-between
          flex-col-reverse
          mt-4
        "
      >
        <div class="flex space-x-4">
          <div>{{ blog.blog_created_date }}</div>
          <div>{{ blog.time_reading }} min read</div>
        </div>
        <div class="flex">
          <div>
            <ShareNetwork
              network="twitter"
              :url="`${myurl}`"
              :title="blog.title"
              :description="blog.introduction_blog"
              quote="Bootcamp en el cual formamos la base del hacer, del ser y el saber de cada talento juvenil que quiere ser desarrollador de software"
              hashtags="coex,bootcamp,desarrollo,web"
            >
              <app-btn
                ><img src="@/static/twitter.svg" alt="TwitterLogo"
              /></app-btn>
            </ShareNetwork>
          </div>
          <div>
            <ShareNetwork
              network="facebook"
              :url="`${myurl}`"
              :title="blog.title"
              :description="blog.introduction_blog"
              quote="Bootcamp en el cual formamos la base del hacer, del ser y el saber de cada talento juvenil que quiere ser desarrollador de software"
              hashtags="coex,bootcamp,desarrollo,web"
            >
              <app-btn
                ><img src="@/static/facebook.svg" alt="FacebookLogo"
              /></app-btn>
            </ShareNetwork>
          </div>
          <div>
            <ShareNetwork
              network="linkedin"
              :url="`${myurl}`"
              :title="blog.title"
              :description="blog.introduction_blog"
              quote="Bootcamp en el cual formamos la base del hacer, del ser y el saber de cada talento juvenil que quiere ser desarrollador de software"
              hashtags="coex,bootcamp,desarrollo,web"
            >
              <app-btn
                ><img src="@/static/linkedin.svg" alt="LinkedinLogo"
              /></app-btn>
            </ShareNetwork>
          </div>
          <div>
            <button v-clipboard="myurl" v-clipboard:success="copied">
              <app-btn><img src="@/static/link.svg" alt="LinkLogo" /></app-btn>
            </button>
          </div>
          <div>
            <button @click="shareContent">
              <app-btn
                ><img src="@/static/share.svg" alt="ShareLogo"
              /></app-btn>
            </button>
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
          <img
            class="object-cover bg-fixed max-h-14 w-full rounded-[50%]"
            :src="'https://api.cms.coex.com.co' + blog.autor_image?.url"
          />
        </div>
        <div>
          <h3>{{ blog.autor_name }}</h3>
        </div>
      </div>

      <div class="bg-white bg-opacity-10 mt-10 text-white list-none">
        <h6
          class="
            pl-12
            md:text-3xl
            lg:leading-relaxed
            font-bold
            text-left text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            via-[#FF9838]
            to-[#dab255]
          "
        >
          In this article
        </h6>
        <ol>
          <li
            v-for="(topic, index) in topic_blog"
            :key="topic.id"
            class="mx-12 py-2"
          >
            {{ index + 1 }}.
            <a
              :href="`#${index}`"
              class="underline decoration-solid"
              @click="moveDown"
              >{{ topic }}
            </a>
          </li>
        </ol>
      </div>

      <div class="my-8 font-bold text-white text-xl">
        <h1>{{ blog.introduction_blog }}</h1>
      </div>

      <div
        v-for="(content, index) in topic_content"
        :id="index"
        :key="index"
        class="pb-8 text-white"
      >
        <div v-html="$md.render(content)"></div>
      </div>
      <div class="text-center justify-center">
        <p
          class="
            lg:pl-12
            md:text-3xl
            lg:leading-relaxed
            font-bold
            text-center text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            via-[#FF9838]
            to-[#dab255]
          "
        >
          Sigue leyendo
        </p>
        <p class="text-white w-3/4 m-auto">
          Blogs are a great method to increase traffic and generate leads. Make
          a profit. Get compensated for your efforts.
        </p>
      </div>

      <div
        class="
          xl:overflow-x-visible xl:justify-center
          flex
          gap-4
          overflow-x-scroll
          w-full
          my-8
        "
      >
        <app-card-blog-single
          v-for="item in blogs"
          :key="item.id"
          :idblog="item.id"
          :category="item.blog_category.name"
          :title="item.title"
          :urlimage="item.autor_image.url"
          :author="item.autor_name"
          :blogcreate="item.blog_created_date"
          :timereading="item.time_reading"
        ></app-card-blog-single>
      </div>
      <div class="text-center">
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
          @click="redirect"
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
      blog: {},
      topic_blogs: null,
      topic_blog: [],
      topic_content: [],
      markdown: null,
    }
  },
  async mounted() {
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
    copied({ value, event }) {
      alert('Copiado!')
    },
    async shareContent(e) {
      e.preventDefault()
      const data = {
        title: this.blog.title,
        text: this.blog.introduction_blog,
        url: this.myurl,
      }
      try {
        await navigator.share(data)
      } catch (err) {
        console.log(err)
      }
      // console.log(this.blog.title)
    },
    moveDown(e) {
      e.preventDefault()
      const url = e.target.href
      document
        .getElementById(url.split('#')[1])
        .scrollIntoView({ block: 'center', behavior: 'smooth' })
    },
    // TRAERME UN BLOG
    async getBlog() {
      const { data } = await this.$axios.get(`blogs`)
      this.blogs = data
      this.blog = this.blogs.find(
        (e) => e.id === parseInt(this.$route.params.id)
      )
      const indexBlog = this.blogs.findIndex(
        (e) => e.id === parseInt(this.$route.params.id)
      )
      this.blogs.splice(indexBlog - 1, 1)
      this.blogs.sort(() => Math.random() - 0.5)
      this.blogs.length = 3
      this.topic_blog = this.blog.relevant_topic_blog.split(',')
      this.topic_content = this.blog.content_blog.split('\n\n')
    },
    redirect() {
      this.$router.push('/blogs/all')
    },
  },
  computed: {
    myurl() {
      if (process.client) {
        const url = window.location.href
        return url
      }
      return false
    },
  },
}
</script>


<style>
.tooltip {
  position: absolute;
  top: 30px;
  left: -30px;
  background: #373737;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  letter-spacing: 1px;
  opacity: 0;
}
.appear {
  animation: appear 1s ease;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  20% {
    transform: translateY(10px);
    opacity: 1;
  }
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
