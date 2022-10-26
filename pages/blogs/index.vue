<template>
  <div class="bg-[#1C233A] h-screen flex justify-center">
    <div class="w-100 mt-6 md:px-4 ">
      <h1
        class="lg:text-5xl md:text-3xl lg:leading-relaxed font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF8D] via-[#FF9838] to-[#dab255]"
      >
        {{ blogText?.title }}
      </h1>
      <div class="flex text-white place-content-between mt-4">
        <div class="flex space-x-4">
          <div>{{ blogText?.date }}</div>
          <div>{{ blogText?.timeReading }} min read</div>
        </div>
        <div class="flex flex-row-reverse space-x-4 space-x-reverse">
          <div>Twitter</div>
          <div>Facebook</div>
          <div>Linkind</div>
          <div>Copiar link</div>
          <div>Compartir</div>
        </div>
      </div>
      <div class=" mt-4 bg-red-700">
        <img class="object-cover bg-fixed h-96 w-full" v-bind:src="blogText?.imageBlog" alt="blog" >
      </div>
      <div>
        
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
      blogText: {
        title: ' Problemáticas sociales: Una realidad oculta.',
        author: 'George Costanza',
        timeReading: '7',
        date: 'Aug 1, 2021',
        imageAuthor: '',
        imageBlog:
          'https://images.ecestaticos.com/vv0OmTQPBED01Y5IcWY2GzESoMU=/0x37:1415x830/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F82c%2F622%2F6d1%2F82c6226d10694cdab0b1d3d538dfdac2.jpg',
        introduction: '',
        paragrah:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.',
      },
    }
  },
  methods: {},
}
</script>
