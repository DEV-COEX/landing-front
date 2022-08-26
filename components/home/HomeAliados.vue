<template>
    <div>
        <div class="bg-gradient-to-r from-[#1C2365]  to-[#163B85] flex justify-center items-center  ">
            <div class="flex justify-center items-center">
                <div class="">
                    <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20">
                        <p class="xl:text-5xl lg:text-4xl md:text-3xl text-xl w-full text-center font-bold px-7 text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Nuestros Aliados</p>
                    </div>
                    <div class="block justify-center lg:flex 
        items-center xl:p-10 lg:p-5 p-5 md:p-6">
                        <div class="cuadradoAliados p-4 m-4">
                            <img src="/aliados/uts.png" class="w-[16rem]" />
                        </div>
                        <div class="cuadradoAliados p-4 m-4 ">
                            <img src="/aliados/IMEBU.png" class="w-[16rem]" />
                        </div>
                        <div class="cuadradoAliados p-4 m-4 ">
                            <img src="/aliados/Empaques.png" class="w-[16rem]" />
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>


</template>

<script>
export default {
    name: "HomeAliados",
    data() {
        return {
            pageText: {}
        }
    },
    async mounted() {
        this.getPageText();
        await this.$store.dispatch("fetchTexts");
        this.getPageText();
    },
    methods: {
        getPageText() {
            this.$store.commit("filterText", "fabrica")
            this.pageText = this.$store.state.text;
        },
        toFactory() {
            this.$router.push("/fabrica");
            if (process.client) {
                window.scrollTo(0, 0)
            }
        }
    }
}
</script>

<style>
.cuadradoAliados {
    background: white;
    border-radius: 26px;
    box-shadow: 0px 0px 20px 0px #c8deff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
