<template>
    <div id="educacion"
        class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  w-full h-screen flex justify-center items-center">
        <div class="flex justify-center items-center">
            <div class="">
                <div class="flex justify-center ">
                    <p class="text-5xl font-bold  w-4/5 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Especialízate en desarrollo de software con nuestra increíble metodología en tan
                        solo 10 meses.</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-3xl w-3/6 text-center text-white py-10">¡Conoce como!

                    </p>

                </div>
                <div class="grid justify-center items-center ">
                    <div class="grid items-center justify-center">
                        <div v-bind:class="[isActive ? 'animate-bounce' : '']"
                            class="w-32 h-32  ml-1 rounded-full border-4 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]  p-1 flex items-center  justify-center">
                            <button class="
                        bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE]
                        m-0
                         text-blue-400   p-2 w-24 h-24   rounded-full  text-xl font-semibold"
                                @click="btnStarEducacion">Star</button>
                        </div>
                    </div>
                    <transition name="fade">
                        <div v-if="show" class="grid items-center justify-center pb-44">
                            <div class="flex-col">
                                <div class="flex  justify-center">
                                    <div class="linea bg-gradient-to-r from-[#4A5B95]  to-[#90BEFF] "></div>

                                </div>

                                <div class="cuadrado border-2 border-bg-gradient-to-r from-[#E0EAF9]   to-[#DBEAFE] ">
                                    <div>
                                        <img src="/educacion.png" alt="" class="img">
                                    </div>
                                </div>
                                <div class="p-4 text-white absolute">
                                    <p class="text-xl font-medium">SEXO uno</p>
                                    <p class="font-semibold">sexo sexo ssexo sexo sexo sexo ssexo sexo sexo sexo ssexo
                                        sexo</p>
                                </div>

                            </div>




                        </div>

                    </transition>


                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "FabricaSoftware",
    data() {
        return {
            pageText: {},
            btnStar: true,
            isActive: true,
            show: false,
        }
    },
    async mounted() {
        this.getPageText()
        await this.$store.dispatch("fetchTexts");
        this.getPageText()
    },
    methods: {
        getPageText() {
            this.$store.commit("filterText", "educacion")
            this.pageText = this.$store.state.text
        },
        btnStarEducacion() {
            this.isActive = !this.isActive
            this.show = !this.show
            if (this.show === false) {
                document.getElementById("educacion").style.paddingTop = "0rem"

                document.getElementById("educacion").style.alignItems = "center"
                document.getElementById("educacion").style.height = "100vh"

            }
            else {
                document.getElementById("educacion").style.paddingTop = "20rem"
                document.getElementById("educacion").style.alignItems = "center"
                document.getElementById("educacion").style.height = "100%"
            }
        }
    }
}
</script>

<style>
.background-animate {
    background-size: 150%;
    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {

    0%,
    100% {
        background-position: 0% 100%;
    }

    50% {
        background-position: 100% 30%;
    }

}

.cuadrado {
    width: 38rem;
    height: 22rem;
    background: #1C233A;
    border-radius: 26px;
    box-shadow: 0px 0px 20px 0px #C8DEFF;
    display: flex;
    justify-content: center;
    align-items: center;

}

.img {
    width: 35.5rem;
    height: 19.5rem;
    background-color: azure;
    border-radius: 12px;


}

.linea {
    width: 1px;
    height: 15rem;
    box-shadow: 0px 0px 3px 0px white;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transition: opacity .1s
}
</style>
