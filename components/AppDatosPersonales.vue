<template>
  <div
    v-if="state"
    class="items-end flex fondo-modal px-5 py-5 z-50"
    style="left: 0"
  >
    <div class="modal-principal opacity-95">
      <div class="centrar px-10 pt-8">
        <p
          class="
            font-bold
            text-3xl text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            via-[#FF9838]
            to-[#dab255]
          "
        >
          Protección de datos Datos Personales
        </p>
      </div>
      <div class="px-8">
        <div class="grid justify-center px-3">
          <div class="flex justify-center">
            <p class="text-lg text-white py-5">
              “Al enviar mis datos personales y/o del menor de edad que
              represento, autorizo de manera previa, expresa e inequívoca a
              INFINITY PRIME S.A.S a darles tratamiento,
              incluyendo el consentimiento explicito para tratar datos sensibles
              aun conociendo la posibilidad de oponerme a ello, conforme a las
              finalidades incorporadas en la Política de Tratamiento de la
              Información publicada en "2" y en Calle de los
              estudiantes 9-82 Ciudadela Real de Minas, que declaro conocer y
              estar informado que en ella se presentan los derechos que me
              asisten como titular y los canales de atención donde ejercerlos.”
              ¿Acepta que sus datos sean tratados según la política establecida
              en la Ley 1581 de 2012, de Protección de datos personales?
            </p>
          </div>

          <div class="flex justify-center py-5">
            <div class="flex justify-center">
              <app-btn
                class="
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-400
                  p-1
                  mx-4
                  text-white
                  hover:from-blue-400 hover:to-blue-500
                "
                @click="metodoBoton"
                >Autorizo</app-btn
              >
              <app-btn
                class="bg-[#1C233A] p-1 mx-4 text-white w-full"
                @click="close"
                >Cerrar</app-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AppDatosPersonales',
  props: {
    disabled: {
      type: Boolean,
    },
    titulo: {
      type: String,
      default: 'Modal',
    },
    textBtn: {
      type: String,
      default: 'button',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    state: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value
      },
    },
  },
  data() {
    return {
      Estudiante: false,
    }
  },
  methods: {
    cerrarModal() {
      this.state = false
    },
    metodoBoton() {
      this.$emit('metodoBoton')
    },
    close() {
      this.$emit('close', true)
    },
  },
}
</script>


<style scoped>
.modal-principal {
  background: #0b046e;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px rgb(165, 182, 231);
  /* display: grid; */
}

.logo {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background: #2a344d;
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

/*ajuste en pantalla*/
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
