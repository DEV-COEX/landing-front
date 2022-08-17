<template>
  <div v-if="state" class="centrar fondo-modal z-50" style="left: 0;">
    <div class="modal-principal opacity-95">
      <div class="flex justify-center sm:px-10  xl:py-5 py-3">
        <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Información del Donante</p>

      </div>
      <form @submit.prevent="payment">
        <div class=" xl:px-8 px-2">
          <div class="grid justify-center lg:px-3 ">
            <div class="flex justify-evenly xl:p-2">
              <div class="flex items-center ">
                <div v-if="typePay === ''"
                  >
                  <div class="xl:p-2">
                    <!--<app-select required label="Metodos de Donación" />-->
                    <app-metodo-donar v-model="typePay" label="Metodos de Donación" />
                  </div>
                </div>
                <div v-else class="xl:p-2 xl:overflow-hidden  lg:h-72  overflow-y-scroll h-56 ">
                  <div class="xl:p-2">
                    <!--<app-select required label="Metodos de Donación" />-->
                    <app-metodo-donar v-model="typePay" label="Metodos de Donación" />
                  </div>
                  <div v-if="typePay === 'card'" class="lg:flex  sm:p-2">
                    <div class="lg:border-r-2 border-[#4736df]  p-2">
                      <div class="lg:flex justify-center">
                        <app-input v-model="formUser.name" required label="Nombre completo" />
                        <app-input v-model="formUser.document" required label="Cedula / NIT" />
                      </div>
                      <div class="lg:flex justify-center ">
                        <app-input v-model="formUser.phone" type="number" required label="Telefono" />
                        <app-input v-model="formUser.email" type="email" required label="Correo" />
                      </div>
                      <div class="">
                        <app-input v-model="amount" type="number" required label="Cantidad" />
                      </div>
                    </div>
                    <div class="p-2">
                      <div class="">
                        <app-input v-model="formCard.cardNumber" type="number" required label="Numero de tarjeta" />
                        <app-input v-model="formCard.cvc" type="number" required label="CVC" />
                      </div>
                      <div class="p-2">

                        <app-vencimiento v-model="formDate" />
                      </div>
                    </div>


                  </div>
                  <div v-if="typePay === 'pse'" class="">
                    <div class=" lg:border-b-2 border-b-0 border-[#4736df] pb-4 ">
                      <div class="smsm:flex ">
                        <div>
                          <div class="">
                            <app-input v-model="formUser.name" required label="Nombre completo" />
                            <app-input v-model="formUser.document" required label="Cedula / NIT" />
                          </div>
                          <div class="">
                            <app-input v-model="formUser.phone" type="number" required label="Telefono" />

                          </div>

                        </div>
                        <div>
                          <div class="">
                            <app-select :items="documentTypes" v-model="formPse.documentType" required
                              label="Tipo de documento" />
                          </div>
                          <div class="">
                            <app-select :items="pse" v-model="formPse.bank" required label="Entidad Bancaria" />
                            <app-select :items="userTypes" v-model="formPse.userType" required
                              label="Tipo de persona" />
                          </div>

                        </div>
                      </div>


                      <div class="">

                        <app-input v-model="formUser.email" type="email" required label="Correo" />
                      </div>
                    </div>

                    <div class="">
                      <app-input v-model="amount" type="number" required label="Cantidad" />
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div class="flex justify-center lg:py-2 py-4 border-[#4736df] lg:border-t-0 border-t-2" id="btn-donacion">
              <app-btn type="submit" :disabled="typePay === ''" v-if="typePay !== ''" class="
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
import { SANDBOX_PUBLIC_API_KEY, SANDBOX_URL } from "~/plugins/BASE_CONFIG";
import { generateUUID, verifyUUID } from "~/plugins/Donations";

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
      userTypes: [
        {
          llave: "0",
          attribute: "Persona Natural"
        },
        {
          llave: "1",
          attribute: "Persona Juridica"
        }
      ],
      documentTypes: [
        {
          llave: "CC",
          attribute: "Cédula de Ciudadanía"
        },
        {
          llave: "NIT",
          attribute: "NIT"
        }
      ],
      typePay: "",
      paymentsMethods: [
        {
          llave: "card",
          attribute: "Tarjeta de Credito/Debito"
        }
      ],
      error: false,
      amount: null,
      formUser: {
        name: null,
        document: null,
        phone: null,
        email: null
      },
      formCard: {
        cardNumber: null,
        cvc: null,
      },
      formPse: {
        bank: null,
        userType: null,
        documentType: null
      },
      formDate: {},
      wompi: {},
      pse: [],
      clientCard: {}
    }
  },
  mounted() {
    this.getWompi();
    this.getPse();
  },
  computed: {
    state: {
      set(value) {
        this.$emit("input", value)
      },
      get() {
        return this.value
      }
    },
    formulario: {
      set(form) {
        this.$emit("input", form)
      },
      get() {
        return this.form
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
      this.typePay = "";
      this.$emit("close", true)
    },
    async getWompi() {
      /* document.getElementById("btn-donacion").style.display="none" */
      const { data } = await this.$axios.get(`https://sandbox.wompi.co/v1/merchants/${SANDBOX_PUBLIC_API_KEY}`);
      this.wompi = data.data;
    },
    async getPse() {
      const { data } = await this.$axios.get(`${SANDBOX_URL}/pse/financial_institutions`, {
        headers: {
          Authorization: `Bearer ${SANDBOX_PUBLIC_API_KEY}`
        }
      });
      const pse = data.data.map(item => {
        return {
          llave: item.financial_institution_code,
          attribute: item.financial_institution_name

        }
      });
      this.pse = pse;
    },
    async saveCard() {
      const { data } = await this.$axios.post(`${SANDBOX_URL}/tokens/cards`, {
        number: this.formCard.cardNumber,
        cvc: this.formCard.cvc,
        exp_month: this.formCard.exp_month,
        exp_year: this.formDate.exp_year,
        card_holder: this.formDate.name,
      }, {
        headers: {
          Authorization: `Bearer ${SANDBOX_PUBLIC_API_KEY}`,
        }
      });
      this.clientCard = data.data;

    },
    async generatePay() {
      this.reference = generateUUID();
      const donations = await this.$axios.get('donations');
      const verify = verifyUUID(donations.data, this.reference);
      if (!verify) {
        await this.$axios.post('donations', {
          name: this.formUser.name,
          email: this.formUser.email,
          document: this.formUser.document,
          phone: this.formUser.phone,
          amount: this.amount,
          reference: this.reference,
        });
      }
    },
    async transaction(payment) {
      const amountInCents = this.amount * 100;
      await this.$axios.post(`${SANDBOX_URL}/transactions`, {
        acceptance_token: this.wompi.presigned_acceptance.acceptance_token,
        amount_in_cents: amountInCents,
        currency: 'COP',
        customer_email: this.formUser.email,
        reference: this.reference,
        payment_method: payment,
      }, {
        headers: {
          Authorization: `Bearer ${SANDBOX_PUBLIC_API_KEY}`,
        }
      });
    },
    async payment() {

      let payment = {}
      switch (this.typePay) {
        case 'card':
          await this.saveCard();
          await this.generatePay();
          payment = {
            type: 'CARD',
            token: this.clientCard.id,
            installments: 2,
          }
          await this.transaction(payment);
          break;
        case 'pse':
          await this.generatePay();
          payment = {
            type: 'PSE',
            user_type: this.formPse.userType,
            user_legal_id_type: this.formPse.documentType,
            user_legal_id: this.formUser.document,
            financial_institution_code: this.formPse.bank,
            payment_description: 'Donación con referencia ' + this.reference,
          }
          break;
        default:
          break;
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
  background-color: rgb(131 131 131 / 20%);
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

body::-webkit-scrollbar {
  width: 3px;
}

body::-webkit-scrollbar:hover {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);

}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4A5B95 0%, #90BEFF 100%);
  border-radius: 20px;
}
</style>
