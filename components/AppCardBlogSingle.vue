<template>
<div>
  <div
    class="
      lg:text-base
      w-[23.4375em]
      h-[10em]
      py-2
      box-content
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
        mx-8
        my-2
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
    <p
      class="
        mx-8
        lg:leading-relaxed
        h-[70px]
        leading-none        
        font-medium
        text-left text-transparent text-[22px]
        bg-clip-text bg-gradient-to-r
        from-[#FFDF8D]
        via-[#FF9838]
        to-[#dab255]  
        hover:text-base
      "
    >
      {{ title }}
  </p>
    <div class=" mx-8 flex justify-between items-center w-7/12">
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
      if(window.scrollY){
        window.scroll(0,0)
      }
      this.$router.push(`/blogs/${this.idblog}`)
    }
  }
}
</script>
