<template>
    <div v-if="state" id="donacion" class="centrar fondo-modal z-50" style="left: 0" @click="close">
        <div class="modal-principal opacity-95 ">
            <div class="">
                <div class="flex flex-col justify-center items-center w-full  p-6 opacity-100">

                    <img src="/check.gif" alt="iconAirplane" class="w-52" />
                    <p class="text-center text-white text-xl">
                        Donación exitosa, gracias por tu colaboración
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AppModal',
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
    background: #2b3348;
    border-radius: 40px;
    box-shadow: 0px 0px 10px 0px rgb(165, 182, 231);
    /* display: grid; */
}

.border-dos {
    width: 100px;
    height: 100px;
    background: transparent;
    border-bottom-left-radius: 77px;
    position: relative;
    right: 105px;
    bottom: 2px;
}

.border-uno {
    width: 100px;
    height: 100px;
    background: transparent;
    border-bottom-right-radius: 78px;
    position: relative;
    left: 13px;
    /* top: -3px; */
    bottom: 3px;
}

.triangulo {
    width: 167px;
    border-right: 96px solid transparent;
    border-left: 96px solid transparent;
    border-bottom: 103px solid #2b3348;
    position: relative;
    right: 45px;
    top: 15px;
}

.logo {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background: #2b3348;
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
