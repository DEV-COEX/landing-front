<template>
    <div
        class="bg-[#1b2233] w-full h-screen flex justify-center items-center">
        <!-- <div class="w-1/5 h-2/6 rounded-full bg-black absolute"></div>-->
        <div class="flex justify-center items-center">
            
            <div class="">
                
                <div class="flex justify-center">
                    <p class="text-5xl leading-normal  font-bold  w-3/6 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">¿Quieres apoyar el talento joven en tecnología?</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-3xl w-3/6 text-center text-white py-10">Contribuye financiando la educación de uno de
                        nuestros talentos COEX. Con un aporte de desde 1 usd puedes cambiar la vida de toda una familia.
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
</template>

<script>
export default {
    name: "FabricaSoftware",
    data() {
        return {
         
        }
    },
    methods: {
       
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

</style>