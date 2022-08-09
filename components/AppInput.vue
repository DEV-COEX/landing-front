<template>
  <div>
    <label class="block text-[#A6CBFF] text-sm font-bold mb-2" :for="label">
      {{ label }}
    </label>
    <input
      :id="label"
      v-model="val"
      class="shadow appearance-none bg-transparent
      rounded-lg w-full py-2 px-3 text-[#B8B8B8] leading-tight
      border-[#FFFFFF] border-solid border
      focus:outline-none focus:shadow-outline focus:border-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :min="min"
      :minlength="minlength"
      :maxlength="maxlength"
      :max="max"
      @change="$emit('change')"
    />
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
