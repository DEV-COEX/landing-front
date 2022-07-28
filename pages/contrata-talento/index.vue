<template>
    <div class="grid w-screen h-screen">
        <div class="bg-gradient-to-r from-[#1C2365] to-[#163B85] fondo z-10  text-white  flex justify-center items-center"
            style="border-bottom-left-radius: 18rem; border-bottom-right-radius: 18rem;">
            <div class="">
                <div>
                    <div class="flex justify-center pt-28">
                        <p class="text-5xl w-4/6 text-center"> ¿Necesitas talento Tecnológico para tu empresa?</p>
                    </div>
                    <div class="flex justify-center p-10">
                        <p class="text-xl  text-center w-3/6">En Coex,formamos el mejor talento para tu empresa,
                            aplicando las estrategias mas usadas para
                            la
                            industria.</p>
                    </div>

                    <div class="flex justify-center ">
                        <app-btn class="
                    bg-gradient-to-r
                    from-blue-500
                    to-blue-400
                    p-1
                    mx-6
                    text-white              
                    hover:from-blue-400 hover:to-blue-500                
                    
                  ">Contrata talentos</app-btn>
                    </div>
                </div>
                <div class="flex justify-center items-center pt-8">
                    <div class="p-2">
                        <img src="/tecnologias/python.svg" alt="">
                    </div>
                    <div class="p-2">
                        <img src="/tecnologias/nosql.svg" alt="">
                    </div>
                    <div class="p-2">
                        <img src="/tecnologias/js.svg" alt="">
                    </div>
                    <div class="p-2">
                        <img src="/tecnologias/nest.svg" alt="">
                    </div>
                    <div class="p-2">
                        <img src="/tecnologias/vue.svg" alt="">
                    </div>
                    <div class="p-2">
                        <img src="/tecnologias/laravel.svg" alt="">
                    </div>
                </div>
            </div>


        </div>
        <div class=" z-0 flex bg-gradient-to-r from-[#000A65] to-[#2F00B5] h-screen w-screen "
            style="position:absolute;">
        </div>
    </div>
</template>

<script>
export default {
    name: "ContrataTalento"
}
</script>
<style scoped>
.fondo {
    height: 80vh;

}
</style>