<template>
  <div class="m-2">
    <label class="block text-transparent bg-clip-text bg-gradient-to-r
                      from-[#A6CBFF]
                      to-[#C8DEFF] text-base font-medium  " :for="label">
      Fecha de vencimiento
    </label>
    <div class="flex justify-around">
      <app-select v-model="formulario.exp_month" :items="months" required label="Mes" placeholder="Mes" class="w-32"/>
      <app-select v-model="formulario.exp_year" :items="years" required label="Año" placeholder="Año" class="w-32"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppVencimiento',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      months: [
        {
          llave: "01",
          attribute: "01"
        },
        {
          llave: "02",
          attribute: "02"
        },
        {
          llave: "03",
          attribute: "03"
        },
        {
          llave: "04",
          attribute: "04"
        },
        {
          llave: "05",
          attribute: "05"
        },
        {
          llave: "06",
          attribute: "06"
        },
        {
          llave: "07",
          attribute: "07"
        },
        {
          llave: "08",
          attribute: "08"
        },
        {
          llave: "09",
          attribute: "09"
        },
        {
          llave: "10",
          attribute: "10"
        },
        {
          llave: "11",
          attribute: "11"
        },
        {
          llave: "12",
          attribute: "12"
        }
      ],
      years: this.calculateYears()
    }
  },
  computed: {
    formulario: {
      set(form) {
        this.$emit('input', form)
      },
      get() {
        return this.value
      },
    },
  },
  methods: {
    calculateYears(){
      const years = [];
      let year = new Date().getFullYear();
      for (let i = 1; i <= 12; i++) {
        const value = year.toString().slice(-2);
        years.push({
          llave: value,
          attribute: year
        });
        year++;
      }
      return years;
    }
  }
}
</script>

