<template>
    <div
        id="educacion"
        class="bg-gradient-to-r from-[#000A65] via-[#2c2191] to-[#2F00B5] background-animate  h-screen w-full flex justify-center items-center">
        <div class="flex justify-center items-center">
            <div class="">
                <div class="flex justify-center pt-5 xl:pt-28 lg:pt-24 md:pt-20 ">
                    <p
                     class=" xl:text-5xl lg:text-4xl md:text-3xl text-xl w-full sm:w-[80%] lg:w-4/6 px-7  font-bold  text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Especialízate en desarrollo de software con nuestra increíble metodología en tan
                        solo 10 meses.</p>
                </div>

                <div class="flex justify-center pt-10">
                    <app-btn
                    class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  " @click="toEducation">¡Conoce como!
                    </app-btn>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "HomeEducacion",
    data() {
        return {
            pageText: {},
            btnStar: true,
            isActive: true,
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

        },
      toEducation() {
        this.$router.push("/educacion");
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
