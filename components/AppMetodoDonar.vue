<template>
    <div class="m-2">
        <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>
        <div>
            <div class="flex items-center justify-between">
                <div>
                    <app-btn>
                        <img src="/Metodos/paypal.svg" />
                    </app-btn>
                </div>
                <div class="flex ">
                    <div v-for="(item, i) in metodos" :key="i">
                        <app-btn class="m-2 "> <img class="h-10"  :src=item.image />
                        </app-btn>
                    </div>
                </div>

            </div>
            <div class="flex justify-end">
                <label>seleccione uno de estos metodos</label>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "metodosDonar",
    props: {
        label: {
            type: String,
            default: null
        },
    },
    data() {
        return {
            metodos: [
                {
                    name: "paypal",
                    image: "/Metodos/paypal.svg"
                },
                {
                    name: "paypal",
                    image: "/Metodos/visa.svg"
                },
                {
                    name: "paypal",
                    image: "/Metodos/mastercard.svg"
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>