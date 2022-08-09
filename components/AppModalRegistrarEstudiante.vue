<template>
  <div v-if="state" class="centrar fondo-modal z-50" style="left: 0;" @click="close">
    <div class="modal-principal opacity-95">
      <div class="centrar px-10  py-5">
        <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Inscripción estudiante</p>
      </div>
      <div class="px-8">
        <div class="grid justify-center px-3 ">
          <div class="flex justify-center p-2">
           <app-input />

          </div>
          <div class="flex justify-center p-2">

            hola

          </div>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AppModal",
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
    }
  }
}
</script>


<style scoped>
.modal-principal {
  background: #2B3348;
  border-radius: 25px;
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

/*ajuste en pantalla*/
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
