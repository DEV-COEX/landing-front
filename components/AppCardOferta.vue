<template>
    <div class="bg-gradient-to-r from-[#1C233A] to-[#1C233A] w-[40rem]  rounded-2xl p-6 px-10 flex-col mb-3">
        <div class="  ">
            <p class="text-xl leading-normal font-bold  text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">{{ offer.tittle }}</p>
        </div>
        <div class="">
            <p class="text-xl  text-white py-3 ">{{ offer.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardOferta",
    props: {
        offer: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>
</style>
