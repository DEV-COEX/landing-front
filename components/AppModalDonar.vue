<template>
    <div v-if="state" class="centrar fondo-modal z-50" style="left: 0;">
        <div class="modal-principal opacity-95">
            <div class="flex justify-center px-10  py-5">
                <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Información del Donante</p>

            </div>
            <form @submit.prevent="register">
                <div class="px-8">
                    <div class="grid justify-center px-3 ">
                        <div class="flex justify-evenly p-2">
                            <div class="flex items-center ">
                                <div class="p-2">
                                    <div class="flex justify-center">
                                        <app-input required label="Nombres" />
                                        <app-input required label="Apellidos" />


                                    </div>
                                    <div class="flex justify-center p-2">
                                        <app-input required label="Cedula" />
                                        <app-input type="email" required label="Correo" />
                                    </div>
                                    <div class="flex justify-center p-2">
                                        <app-input type="number" required label="CVC" />
                                        <app-input type="number" required label="Teléfono" />
                                    </div>
                                    <div class="">
                                        <app-select required label="Metodo de donacion"/>
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
                  ">Enviar Donación
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
    name: "AppModalDonar",
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
            form: {

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

/* metodos se pago */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
