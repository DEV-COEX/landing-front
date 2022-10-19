<template>

        <div class="relative w-full flex justify-center items-center h-[100vh] gap-10">
            <div>
                <div class="layer"></div>
                <img class="contenedor-nuevo-image" src="@/static/background-contrata.jpg" alt="contrata-image">
            </div>
            <div class="w-[30%] p-5 flex flex-col gap-5">
                <div>
                    <p class="
                        px-2
                        md:px-4
                        lg:text-1xl
                        md:text-4xl
                        lg:leading-relaxed
                        font-bold
                        text-4xl text-center text-transparent
                        bg-clip-text bg-gradient-to-r
                        from-[#FFDF8D]
                        via-[#FF9838]
                        to-[#dab255]
                    ">¿Necesitas Talento tecnológico para tu empresa?</p>
                </div>
                <div>
                <p class="
                    text-white
                    font-bold
                    lg:text-lg
                    md:text-lg
                    text-center
                ">
                    En coex, formamos el mejor talento para tu empresa, aplicando las tecnologías mas utilizadas en la industria
                </p>
                </div >
                <div class="flex flex-row justify-center ">
                    <img src="/tecnologias/python.svg" alt="">
                    <img src="/tecnologias/nosql.svg" alt="">
                    <img src="/tecnologias/js.svg" alt="">  
                    <img src="/tecnologias/nest.svg" alt="">
                    <img src="/tecnologias/vue.svg" alt="">
                    <img src="/tecnologias/laravel.svg" alt="">      

                </div>
            </div>
            <div class="flex justify-center">
                <prueba-formulario/>
            </div>
        </div>
</template>

<script>
    export default {
    name: 'ContrataTalento',

    data() {
        return {
            pageText: {},
            offers: [],
            modal: false,
        }
        }
    }
</script>

<style scoped>
.contenedor-nuevo-image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  z-index: 1;
}

</style>