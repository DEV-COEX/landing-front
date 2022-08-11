<template>

    <div class="m-2">
        <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for='label'>{{ label }}</label>
        <select :id='label' v-model='val' class=" appearance-none bg-transparent
      inp w-full py-2 px-3 text-[#B8B8B8] leading-tight
      border-[#FFFFFF] border-solid border
      focus:outline-none focus:shadow-outline focus:border-[#dab255] focus:bg-transparent
                     hover:border-[#FFDF8D]" :name='label' :required='required' :disabled='disabled'>
            <option selected :value='null' class='bg-[#FFFFFF] hover:bg-[#E2DCFF]'>Seleccionar...</option>
            <option v-for='(item, key) in items' :key='key' :value='item[llave]'
                class='bg-[#FFFFFF] hover:bg-[#E2DCFF]'>
                {{ item[attribute] }}
            </option>
        </select>
    </div>


</template>

<script>
export default {
    name: 'AppSelect',
    props: {
        label: {
            type: String,
            default: null
        },
        value: {
            type: Number,
            default: null
        },
        items: {
            type: Array,
            default: () => []
        },
        attribute: {
            type: String,
            default: 'name'
        },
        llave: {
            type: String,
            default: 'id'
        },
        required: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    computed: {
        val: {
            set(value) {
                this.$emit('input', value)
            },
            get() {
                return this.value
            }
        }
    }
}
</script>

<style scoped>
</style>