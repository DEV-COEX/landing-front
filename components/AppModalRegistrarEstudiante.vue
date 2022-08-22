<template>
  <div v-if="state" class="centrar fondo-modal md:px-[1.25rem] px-[0.25rem] z-50" style="left: 0;">
    <div class="modal-principal opacity-95">
      <div class="flex justify-center px-10  py-5 ">
        <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Inscripción talento</p>
      </div>
      <form @submit.prevent="register">
        <div class="xl:px-8">
          <div class="grid justify-center lg:px-3 ">
            <div class="md:flex justify-evenly md:p-2 sm:h-[30rem] h-[20rem] overflow-y-auto md:border-b-0 border-b-2 border-[#4736df]">
              <div class="flex items-center md:border-r-2  border-[#4736df]">
                <div class="md:p-2 p-0">
                  <div class="sm:flex justify-center">
                    <app-input v-model="form.name" minlength="4" required label="Nombre Completo"/>
                    <app-input v-model="form.age" type="number" required label="Edad"/>
                  </div>
                  <div class="sm:flex justify-center md:p-2 p-0">
                    <div>
                      <app-input v-model="form.email" type="email" required label="Correo"/>
                      <label v-if="error" id="errorPosicion" class="lbl-validation" style="display: flex">Este correo ya
                        esta registrado</label>
                    </div>

                    <app-input v-model="form.phone" type="text" pattern="[0-9]{10,20}" title="El número debe contener mínimo 10 caracteres" required label="Teléfono"/>
                  </div>
                  <div class="md:p-2 p-0">
                    <app-input v-model="form.school" required
                               label="Mencione el colegio en donde cursa o cursó su bachillerato"/>


                    <app-select v-model="form.schedule" :items="schedules" required
                                label="Indique el horario en el cual podria asistir(De lunes a viernes)"/>
                  </div>
                </div>
              </div>
              <div class="sm:flex items-center">
                <div class="md:p-2 p-0">
                  <div class="md:block sm:flex">
                    <app-input v-model="form.address" required label="¿En que Barrio reside?"/>
                    <app-input v-model="form.roomies" required label="¿Con quien vive?"/>
                  </div>
                  <div class="">
                    <app-select v-model="form.gender" :items="genders"   required label="Género"/>
                    <app-select v-model="form.education"  :items="academic"  required label="Nivel educativo Actual"/>
                  </div>
                </div>
              </div>
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
              <app-btn type="button" class="
                     bg-[#1C233A]
                    p-1
                    mx-4
                    text-white
                  " @click="close">Cerrar
              </app-btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "AppModalEstudiante",
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


<style scoped>
.modal-principal {
  background: #2B3348;
  border-radius: 25px;
   box-shadow: 0px 0px 10px 0px rgb(165, 182, 231);
  /* display: grid; */
}


.logo {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background: #2B3348;
  position: absolute;
  right: -51px;

}


.btn-cerrar {
  right: 0;
  top: 13px;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  position: relative;
}

.fondo-modal {
  height: 100%;
  width: 100%;
  background-color: rgb(131 131 131 / 40%);
  position: fixed;

  top: 0;
}

.lbl-validation {
  text-align: left;
  font: normal 13px/15px sans-serif;
  letter-spacing: 0px;
  color: #df0909;
  margin-bottom: 0;
  margin-left: 10px;
}


/*ajuste en pantalla*/
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
