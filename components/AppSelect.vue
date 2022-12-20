<template>

  <div class=" bg-[#2C2D4D] h-[40px] items-center flex rounded-md cursor-pointer text-white">


    <!-- {{ items }}
    <label :for='label'>{{ label }}</label>
    <select v-model='val' :required='required'>
       <option selected :value='null'>{{ firstOpt }}</option>
      <option v-for='(item, key) in items' :key='key' :value='item?.llave'>
        {{ item?.attribute }}
      </option>
    </select> -->
    <div class="relative w-full">
      <p class="flex items-center w-full h-full justify-evenly" @click="changestatusCheck">{{ itemClick }}
        <svg v-if="!statusCheck" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L6 6L11 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="statusCheck" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6L6 1L1 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </p>
      <div :class="statusCheck ? 'block' : 'hidden '" class="bg-[#2C2D4D] fixed mt-3 w-[144px] flex flex-col gap-y-3 py-3 rounded-md">
        <p v-for='(item, key) in items' :key='key' :value='item?.llave' class="hover:bg-[#3B3C55] w-full p-2 px-4" @click="[prueba(item?.attribute), changestatusCheck()]"  > {{ item?.attribute }}</p>
<!--         <p class="hover:bg-[#3B3C55] w-full p-2 px-4">Ver menos</p> -->
      </div>
    </div>

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
    placeholder:{
      type: String,
      default: null
    },
    value: {
      type: [Number, String, Boolean],
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    attribute: {
      type: [Number, String, Boolean],
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
    },
    firstOpt: {
      type: String,
      default: "Seleccionar..."
    }
  },
  data()
  {
    return{
    statusCheck: false,
    itemClick: this.firstOpt
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
  },
  methods: {
    prueba(value){
      this.val = value
      this.itemClick = value

      /* value = this.
      this.val = value */
    },
    changestatusCheck(){
      this.statusCheck =! this.statusCheck
    }
  },
  }
</script>
