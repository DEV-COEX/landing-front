<template>
    <div v-if="state" class="centrar fondo-modal z-50" style="left: 0;">
        <div class="modal-principal opacity-95">
            <div class="flex justify-center px-10  py-5">
                <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Inscripción para profesor</p>

            </div>
            <form @submit.prevent="register">
                <div class="px-8">
                    <div class="grid justify-center px-3 ">
                        <div class="flex justify-evenly p-2">
                            <div class="flex items-center border-r-2 border-[#4736df]">
                                <div class="p-2">
                                    <div class="flex justify-center">
                                        <app-input v-model="form.name" required label="Nombre Completo" />
                                        <app-input v-model="form.age" type="number" required label="Edad" />
                                    </div>
                                    <div class="flex justify-center p-2">
                                        <div>
                                            <app-input v-model="form.email" type="email" required label="Correo" />
                                            <label id="errorPosicion" class="lbl-validation" style="display: flex">Este
                                                correo ya tiene sexo</label>
                                        </div>

                                        <app-input v-model="form.phone" type="number" required label="Teléfono" />
                                    </div>
                                    <div class="">

                                        <app-select required label="Ultimo titulo académico finalizado" />
                                        <app-input required label="Mencione los lenguajes de programación que maneja" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class=" p-2">
                                    <div class=" ">
                                        <app-input v-model="form.barrio" required label="¿En que Barrio reside?" />
                                        <app-input v-model="form.roomies" required label="¿Con quien vive?" />

                                    </div>
                                    <div class="">
                                        <app-select required v-model="form.gender" label="Genero" />
                                        <app-select required v-model="form.education" label="Nivel educativo Actual" />
                                        <app-select required label="¿Tiene experiencia como profesor?" />
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
                  ">Enviar Formulario
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
            form: {
                name: null,
                age: null,
                email: null,
                phone: null,
                school: null,
                schedule: null,
                barrio: null,
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
            await this.$axios.post('students', this.form);
            this.$emit("close", true)
            this.form = {}

            document.getElementById("errorPosicion").style.display = "flex";


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
