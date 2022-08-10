<template>
  <div class="m-2">
    <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium mb-2" :for="label">
      {{ label }}
    </label>
    <input :id="label" v-model="val" class=" appearance-none bg-transparent
      inp w-full py-2 px-3 text-[#B8B8B8] leading-tight
      border-[#FFFFFF] border-solid border
      focus:outline-none focus:shadow-outline focus:border-[#dab255]
                     hover:border-[#FFDF8D]" :type="type" :placeholder="placeholder" :required="required"
      :disabled="disabled" :readonly="readonly" :min="min" :minlength="minlength" :maxlength="maxlength" :max="max"
      @change="$emit('change')" />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    number: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: null
    },
    minlength: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    }
  },
  computed: {
    val: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value
      },
    },
  }
}
</script>
<style>
.inp {
  border-radius: 0.5rem;

}

.inp:focus {
  box-shadow: 0px 0px 5px 0px #C8DEFF;
}
</style>
