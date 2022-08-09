<template>
    <div>
        <div class="bg-black flex justify-center items-center h-screen ">
            <div class="flex justify-center items-center">
                <div class="">
                    <div class="flex justify-center">
                        <p class="text-3xl w-4/5 font-bold  text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">COEX MODEL:</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-2xl w-3/4 text-center text-white py-10">Es un Bootcamp en el cual formamos la
                            base del hacer, del ser y el saber de cada talento juvenil que quiere ser Talento,
                            provenientes de diversos tipos de comunidades de nuestra ciudad, bajo un ambiente de alta
                            productividad dónde se entrenan como desarrolladores de software.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  ">Conoce más
                        </app-btn>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="">
                    <div class="flex justify-center">
                        <p class="text-3xl w-4/5 font-bold   text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">¿Quieres apoyar el talento joven en tecnología?</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-2xl w-3/4 text-center text-white py-10">Es un Bootcamp en el cual formamos la
                            base del hacer, del ser y el saber de cada talento juvenil que quiere ser Talento,
                            provenientes de diversos tipos de comunidades de nuestra ciudad, bajo un ambiente de alta
                            productividad dónde se entrenan como desarrolladores de software.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  ">Quiero donar
                        </app-btn>
                    </div>
                </div>
            </div>

        </div>

    </div>


</template>

<script>
export default {
    name: "HomeCoexModel",
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
        }
    }
}
</script>

<style>
</style>
