<template>

  <div id="fondo" v-if="state" class="items-end flex fondo-modal supersm:px-5 px-[0.25rem] py-5 z-50" style="left: 0">
    <div class="modal-principal bg-gradient-to-r from-[#321586] via-[#4736df] to-[#2E1477] background-animate opacity-95" id="personales">
      <div class="centrar supersm:px-10 pt-8 pb-2">
        <p class="
            font-bold
            text-center
            text-2xl
            lg:text-3xl text-transparent
            bg-clip-text bg-gradient-to-r
            from-[#FFDF8D]
            via-[#FF9838]
            to-[#dab255]
          ">
          Protección de datos Datos Personales
        </p>
      </div>
      <div class="supersm:px-8">
        <div class="grid justify-center px-3">
          <div class="flex justify-center">
            <p class="text-lg text-white py-5 xl:h-auto lg:h-60 overflow-y-auto md:h-52 pr-2 h-44">
              “En cumplimiento de las disposiciones de la Ley 1581 de 2012 y del Decreto reglamentario 1377 de 2013
              que
              desarrollan el derecho de habeas data, solicitamos su autorización para que la empresa INFINITY PRIME
              SAS
              (Marca Comercial COEX), en calidad de responsable del Tratamiento pueda recopilar, almacenar, archivar,
              copiar, analizar, usar y consultar los datos que se señalan a continuación. Estos datos serán
              recolectados
              por INFINITY PRIME SAS (Marca Comercial COEX) con las siguientes finalidades, todas relacionados con las
              actividades de Infinity Prime y el ejercicio de su objeto y sus actividades: 1. Validar la veracidad de
              la
              información; 2. Ser contactado por parte de Infinity Prime SAS; 3. envío de información relacionada con
              programas, actividades, eventos, noticias, publicidad, contenidos por área de interés, productos y demás
              bienes o servicios ofrecidos por la marca COEX; La autorización para adelantar el tratamiento de mis
              datos
              personales, se extiende por tiempo indefinido, siempre que tal tratamiento se encuentre relacionado con
              las finalidades para los cuales los datos personales fueron inicialmente suministrados. ¿Desea
              continuar?
            </p>
          </div>

          <div class="flex justify-center py-5">
            <div class="flex justify-center">
              <app-btn class="
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-400
                  p-1
                  mx-4
                  text-white
                  hover:from-blue-400 hover:to-blue-500
                " @click="metodoBoton">Autorizo
              </app-btn>
              <app-btn class="bg-[#1C233A] p-1 mx-4 text-white w-full" @click="close">Cerrar
              </app-btn>
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
      document.getElementById('personales').classList.add('animate__animated', 'animate__rollOut')

    },
  },
}
</script>


<style scoped>
.modal-principal {
  /* background: #0b046e; */
  border-radius: 25px;
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
  /* background-color: rgb(131 131 131 / 40%); */
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
