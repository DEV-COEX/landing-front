<template>
  <div>
    <div class="flex flex-col items-center w-72 h-96 lg:h-[28.125em] xl:w-80">
      <img
        :src="'https://api.cms.coex.com.co'+imageurl"
        alt=""
        class="h-1/2 w-full"
      />
      <div class="flex flex-col justify-around h-1/2 w-full">
        <h1
          class="
            text-base
            font-bold
            leading-4
            traking-[0.093px]
            text-justify
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            to-[#FF9838]
          "
        >
          {{title}}
        </h1>
        <p class="text-xs font-medium leading-3 text-white text-justify">
          {{introduction}}
        </p>
        <app-btn
          class="
            w-2/5
            bg-gradient-to-r
            from-red-500
            to-red-400
            p-[2px]
            text-white
            hover:from-red-400
            hover:to-red-500
            lg:w-1/2
          "
          @click="onRedirect"
        >
          Leer artículo
        </app-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardBlog',
  props:{
    iditem:{
      type:Number,
      default:0
    },
    imageurl:{
      type:String,
      default:''
    },
    title: {
      type:String,
      default:''
    },
    introduction:{
      type:String,
      default:''
    }
  },
  methods:{
    onRedirect(){
      this.$router.push(`/blogs/${this.iditem}`)
    }
  }
}
</script>
