<template>
    <div>
        <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>

        <div>

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
    }
}
</script>

<style scoped>
</style>