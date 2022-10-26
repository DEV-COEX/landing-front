<template>
  <div class="bg-[#1C233A] w-full h-screen flex justify-center items-center">
    <h1 class="
                px-2
                md:px-4
                lg:text-5xl
                md:text-3xl
                lg:leading-relaxed
                font-bold
                text-2xl text-center text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#FFDF8D]
                via-[#FF9838]
                to-[#dab255]
              ">
        {{blogText?.title}}
    </h1>
    <div class="grid grid-cols-12 gap-4">
      <div>{{blogText?.date}}</div>
      <div>{{blogText?.timeReading}} min read </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

    </div>

    
    <!-- <img :src="blogText?.image" alt=""> -->
  </div>
</template>x

<script>
export default {
  name: 'EntryBlog',
  layout: 'NavbarDefault',
  data() {
    return {
        blogText: {
            title: " Problemáticas sociales: Una realidad oculta.",
            author: "George Costanza",
            timeReading: "7",
            date: "Aug 1, 2021",
            imageAuthor: "",
            imageBlog: "https://images.ecestaticos.com/vv0OmTQPBED01Y5IcWY2GzESoMU=/0x37:1415x830/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F82c%2F622%2F6d1%2F82c6226d10694cdab0b1d3d538dfdac2.jpg",
            introduction: "",
            paragrah: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.",
        }
    }
  },
  methods: {},
}
</script>
