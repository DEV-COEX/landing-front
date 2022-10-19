<template>
    <div >
        <div class="flex justify-center px-10  py-5  ">
        <p class="
                px-2
                md:px-4
                lg:text-4xl
                md:text-2xl
                lg:leading-relaxed
                font-bold
                text-2xl text-center text-transparent
                bg-clip-text bg-gradient-to-r
                from-[#FFDF8D]
                via-[#FF9838]
                to-[#dab255]
              ">Formulario de contacto</p>
      </div>
      <form @submit.prevent="register" class="bg-[rgba(255,255,255,0.1)] border-solid  rounded-3xl pt-5">
        <div class="xl:px-8 ">
          <div class="grid justify-center lg:px-3 ">
              <div class="flex items-center   border-[#6D6F76]">
                <div class="xlchikito:p-2 p-0 ">
                  <div class="sm:flex justify-center">
                    <app-input v-model="form.name" type="text" minlength="4" required label="Nombre" />
                    <app-input v-model="form.charge" type="text"  pattern="[0-9]{2,3}" title="El número debe contener maximo 3 caracteres" required label="Cargo" />
                  </div>
                  <div class="sm:flex justify-center md:p-2 p-0">
                    <div>
                      <app-input v-model="form.email" type="email" required label="Correo" />
                      <label v-if="error" id="errorPosicion" class="lbl-validation" style="display: flex">Este correo ya
                        esta registrado</label>
                    </div>

                    <app-input v-model="form.phone" type="text" pattern="[0-9]{10,20}"
                      title="El número debe contener mínimo 10 caracteres" required label="Teléfono" />
                  </div>
                </div>
            </div>
            <div class="flex m-2 justify-center gap-2">
                <input type="checkbox"/> <p class="text-white">Autorizo ser contactado por COEX</p>
            </div>
            <div class="flex justify-center py-4 ">
                
              <app-btn type="submit" class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-2
                    text-white
                    hover:from-red-400 hover:to-red-500
                  " @click="metodoBoton">Enviar Formulario
              </app-btn>
              
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "PruebaFormulario",
  props: {
    disabled: {
      type: Boolean
    },
    titulo: {
      type: String,
      default: "Modal"
    },
    textBtn: {
      type: String,
      default: "button"
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      error: false,
      academic: [
        {
          llave: 'bachiller',
          attribute: 'Bachiller',
        },
        {
          llave: 'tecnico',
          attribute: 'Técnico',
        },
        {
          llave: 'tecnologico',
          attribute: 'Técnologico',
        },
        {
          llave: 'universitario',
          attribute: 'Universitario',
        },
      ],
      genders: [
        {
          llave: 'masculino',
          attribute: 'Masculino',
        },
        {
          llave: 'femenino',
          attribute: 'Femenino',
        },
      ],
      schedules: [
        {
          llave: '6am a 10am',
          attribute: '6am a 10am',
        },
        {
          llave: '10am a 2pm',
          attribute: '10am a 2pm',
        },
        {
          llave: '2pm a 6pm',
          attribute: '2pm a 6pm',
        },
        {
          llave: '6pm a 10pm',
          attribute: '6pm a 10pm',
        },
        {
          llave: 'ninguno',
          attribute: 'Ninguno de los horarios ofrecidos',
        },
      ],
      advertising: [
        {
          llave: 'feria empresarial',
          attribute: 'Feria Empresarial',
        },
        {
          llave: 'colegio',
          attribute: 'Visita a colegio',
        },
        {
          llave: 'universidad',
          attribute: 'Visita a universidad',
        },
        {
          llave: 'comercial',
          attribute: 'Contacto comercial',
        },
        {
          llave: 'referido',
          attribute: 'Referido',
        },
        {
          llave: 'redes sociales',
          attribute: 'Redes Sociales',
        },
        {
          llave: 'otro',
          attribute: '  Otro',
        },

      ],
      form: {
        name: null,
        age: null,
        email: null,
        phone: null,
        school: null,
        schedule: null,
        address: null,
        roomies: null,
        gender: null,
        education: null,
        advertising: null,
      }
    }
  },
  computed: {
    state: {
      set(value) {
        this.$emit("input", value)
      },
      get() {
        return this.value
      }
    }
  },
  methods: {
    cerrarModal() {
      this.state = false
    },
    metodoBoton() {
      this.$emit("metodoBoton")
    },
    close() {
      this.$emit("close", true)
    },
    async register() {
      try {
        await this.$axios.post('students', this.form);
        this.$emit("close", true)
        this.form = {}
        this.error = false
        this.$emit("exito", true);
        document.getElementById("errorPosicion").style.display = "flex";
      } catch (e) {
        this.error = true
      }
    }
  }
}
</script>