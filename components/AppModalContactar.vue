<template>
  <div v-if="state" class="centrar fondo-modal" style="left: 0; z-index: 20">
    <div class="modal-principal opacity-95">
      <div class="centrar " style="position:relative; bottom:68px; left: 43px;">
        <div class="border-uno  border-b-[30px] border-[#1C233A] "></div>
        <div class="triandulo ">
          <div class="logo centrar">
            <img src="/Coex.svg" alt="" class="" />
          </div>
        </div>
        <div class="border-dos  border-b-[30px] border-[#1C233A] "></div>
      </div>
      <div class="px-6">
        <div class="centrar px-3 pb-8">
         <div>sexo</div>
        </div>

        <div class="end">
          <app-button id="boton" :disabled="disabled" @click="metodoBoton">{{ textBtn }}</app-button>
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
    }
  }
}
</script>


<style scoped>
.modal-principal {
  background: #1C233A;
  border-radius: 10px;
  /* display: grid; */
}


.border-dos{
  width: 100px;
  height: 100px;
  background: transparent;
  border-bottom-left-radius: 77px;
  position: relative;
  right: 101px;
  bottom: 3px;
}
.border-uno {
  width: 100px;
  height: 100px;
  background: transparent;
  border-bottom-right-radius: 77px;
  position: relative;
  left: 11px;
  /* top: -3px; */
  bottom: 3px;
}

.triandulo {
  width: 167px;
  border-right: 96px solid transparent;
  border-left: 96px solid transparent;
  border-bottom: 103px solid #1C233A;
  position: relative;
  right: 45px;
}


.logo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #1C233A;
  position: absolute;
  right: -45px;

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
  height: 100vh;
  width: 100vw;
  background-color: rgb(131 131 131 / 20%);
  position: fixed;
  top: 0;
}

/*ajuste en pantalla*/
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.separar {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
}

.end {
  display: flex;
  justify-content: flex-end;
  padding-right: 12px;
  align-self: center;
}
</style>