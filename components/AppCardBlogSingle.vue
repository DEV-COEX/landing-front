<template>
  <div
    class="
      lg:w-[414px]
      my-3
      p-3
      box-border
      hover:bg-white/30 hover:rounded-md
      transition
      ease-in-out
      hover:duration-1000
      cursor-pointer
    "
    @click="redirectBlog"
  >
    <h6
      class="
        mr-12
        items-start
        border-b-2 border-[rgba(78,
        146,
        249,
        0.2)]
        text-transparent
        bg-clip-text bg-gradient-to-r
        from-[#A6CBFF]
        to-[#C8DEFF]
      "
    >
      {{ category }}
    </h6>
    <h3
      class="
        lg:leading-relaxed
        h-[70px]
        hover:h-auto
        font-medium
        text-left text-transparent text-[22px]
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]
        transition
        ease-in-out
        hover:duration-1000
        hover:-translate-y-1
        hover:scale-y-100
      "
    >
      {{ title }}
    </h3>
    <div class="flex justify-between items-center w-7/12">
      <img
        class="object-cover bg-fixed h-8 w-8 rounded-[50%]"
        :src="'https://api.cms.coex.com.co' + urlimage"
      />
      <div class="flex flex-col">
        <h3
          class="
            lg:leading-relaxed
            font-bold
            text-left text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#87B8FF]
            via-[#4490F9]
            to-[#4490F9]
          "
        >
          {{ author }}
        </h3>
        <div class="flex space-x-4 text-white text-xs">
          <span>{{ blogcreate }}</span>
          <span>{{ timereading }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardBlogsSingle',
  props: {
    idblog:{
      type:Number,
      default: 0,
    },
    category: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    urlimage: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    blogcreate: {
      type: String,
      default: '',
    },
    timereading: {
      type: Number,
      default: 0,
    },
  },
  methods:{
    redirectBlog(){
      this.$router.push(`/blogs/${this.idblog}`)
    }
  }
}
</script>
