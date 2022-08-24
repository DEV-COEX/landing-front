<template>
  <div v-if="state" class="centrar fondo-modal md:px-[1.25rem] px-[0.50rem] " style="left: 0;">
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
                <div v-if="typePay === ''">
                  <div class="xl:p-2">
                    <!--<app-select required label="Metodos de Donación" />-->
                    <app-metodo-donar v-model="typePay" label="Metodos de Donación" />
                  </div>
                </div>
                <div v-else class="xl:p-2 lg:overflow-hidden  lg:h-auto  overflow-y-scroll md:h-96 sm:h-80 h-56 ">
                  <div class="xl:p-2">
                    <!--<app-select required label="Metodos de Donación" />-->
                    <app-metodo-donar v-model="typePay" label="Metodos de Donación" />
                  </div>
                  <div v-if="typePay === 'card'" class="lg:flex  sm:p-2">
                    <div class="lg:border-r-2 border-[#6D6F76]  p-2">
                      <div class="smsm:flex justify-center">
                        <app-input v-model="formUser.name" required minlength="4" label="Nombre completo" />
                        <app-input v-model="formUser.document" type="number" required label="Cédula / NIT" />
                      </div>
                      <div class="lg:flex justify-center ">
                        <app-input v-model="formUser.phone" type="text" pattern="[0-9]{10,20}" title="El número debe contener mínimo 10 caracteres" required label="Telefono" />
                        <app-input v-model="formUser.email" type="email" required label="Correo" />
                      </div>
                      <div class="">
                        <app-input v-model="amount" type="number" min="1500" required label="Cantidad" />
                      </div>
                    </div>
                    <div class="p-2">
                      <div class="">
                        <app-input v-model="formCard.cardNumber" type="text" required label="Número de tarjeta"
                          pattern="[0-9]{16}" title="Tamaño de 16 caracteres tipo número" />
                        <app-input v-model="formCard.cvc" type="text" pattern="[0-9]{3,4}" title="Debe contener max 4 y min 3 caracteres"  required label="CVC" />
                      </div>
                      <div class="p-2">

                        <app-vencimiento v-model="formDate" />
                      </div>
                    </div>


                  </div>
                  <div v-if="typePay === 'pse'" class="">
                    <div class=" lg:border-b-2 border-b-0 border-[#6D6F76] pb-4 ">
                      <div class="smsm:flex ">
                        <div>
                          <div class="">
                            <app-input v-model="formUser.name" minlength="4" required label="Nombre completo" />
                            <app-input v-model="formUser.document" required type="number" label="Cdula / NIT" />
                          </div>
                          <div class="">
                            <app-input v-model="formUser.phone" type="text" pattern="[0-9]{10,20}" title="El número debe contener mínimo 10 caracteres" required label="Telefono" />

                          </div>

                        </div>
                        <div>
                          <div class="">
                            <app-select v-model="formPse.documentType" :items="documentTypes" required
                              label="Tipo de documento" />
                          </div>
                          <div class="">
                            <app-select v-model="formPse.bank" :items="pse" required label="Entidad Bancaria" />
                            <app-select v-model="formPse.userType" :items="userTypes" required
                              label="Tipo de persona" />
                          </div>

                        </div>
                      </div>


                      <div class="">

                        <app-input v-model="formUser.email" type="email" required label="Correo" />
                      </div>
                    </div>

                    <div class="">
                      <app-input v-model="amount" type="number" min="1500" required label="Cantidad" />
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div class="flex justify-center lg:py-2 py-4 border-[#6D6F76] lg:border-t-0 border-t-2" id="btn-donacion">
              <app-btn v-if="typePay !== ''" type="submit" :disabled="loadingPayment" class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-2
                    text-white
                    hover:from-red-400 hover:to-red-500
                  ">{{ loadingPayment ? 'Donando..' : 'Donar' }}
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
import { SANDBOX_PUBLIC_API_KEY, SANDBOX_URL, SANDBOX_PRIVATE_API_KEY } from "~/plugins/BASE_CONFIG";
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
      loadingPayment: false,
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
      clientCard: {},
      transaction2: null
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
  mounted() {
    this.getWompi();
    this.getPse();
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
      this.formUser = {
        name: "",
        document: "",
        phone: null,
        email: null
      }
      this.formCard = {
        cardNumber: null,
        cvc: null,
      }
      this.formPse = {
        bank: null,
        userType: null,
        documentType: null
      }
      this.formDate = {}
      this.amount = null;
      this.loadingPayment = false;
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
        exp_month: this.formDate.exp_month,
        exp_year: this.formDate.exp_year,
        card_holder: this.formUser.name,
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
    async transaction(payment, key) {
      const amountInCents = this.amount * 100;
      const { data } = await this.$axios.post(`${SANDBOX_URL}/transactions`, {
        acceptance_token: this.wompi.presigned_acceptance.acceptance_token,
        amount_in_cents: amountInCents,
        currency: 'COP',
        customer_email: this.formUser.email,
        reference: this.reference,
        payment_method: payment,
      }, {
        headers: {
          Authorization: `Bearer ${key}`,
        }
      });
      this.transaction2 = data;
    },
    endTransaction() {
      const longPolling = setInterval(async () => {
        const { data } = await this.$axios.get(`${SANDBOX_URL}/transactions?reference=${this.reference}`, {
          headers: {
            Authorization: `Bearer ${SANDBOX_PRIVATE_API_KEY}`,
          }
        });
        if (data.data[0].payment_method.extra) {
          if (this.typePay === "pse") {
            window.open(data.data[0].payment_method.extra.async_payment_url, '_blank');
          }
          if (data.data[0].status === "APPROVED") {
            clearInterval(longPolling);
            this.close();
            this.$emit("payment", true);
          } else if (data.data[0].status === "DECLINED") {
            clearInterval(longPolling);
            this.close();
            this.$emit("error", true);
          }else if (data.data[0].status === "ERROR"){
            clearInterval(longPolling);
            this.close();
            this.$emit("error", true);
          }
        } else {
          console.error("No se pudo obtener el token de pago", data);
        }
      }, 1000);
    },
    async prueba() {
      const { data } = await this.$axios.get(`${SANDBOX_URL}/transactions/${this.transaction2.data.id}`, {
        headers: {
          Authorization: `Bearer ${SANDBOX_PRIVATE_API_KEY}`,
        }
      });
      console.log(data);
    },
    async payment() {
      let payment = {}
      switch (this.typePay) {
        case 'card':
          try {
            this.loadingPayment = true;
            await this.getWompi();
            await this.saveCard();
            await this.generatePay();
            payment = {
              type: 'CARD',
              token: this.clientCard.id,
              installments: 2,
            }
            await this.transaction(payment, SANDBOX_PUBLIC_API_KEY);
            await this.endTransaction();
            this.close();
            this.$emit("payment", true);
          } catch (error) {
            this.loadingPayment = false;
            this.$emit("error", true);
          }
          break;
        case 'pse':
          try {
            this.loadingPayment = true;
            await this.getWompi();
            await this.getPse();
            await this.generatePay();
            payment = {
              type: 'PSE',
              user_type: this.formPse.userType,
              user_legal_id_type: this.formPse.documentType,
              user_legal_id: this.formUser.document,
              financial_institution_code: this.formPse.bank,
              payment_description: 'Donación con referencia ' + this.reference,
            }
            await this.transaction(payment, SANDBOX_PRIVATE_API_KEY);
            this.endTransaction();
          } catch (error) {
            this.loadingPayment = false;
            this.$emit("error", true);
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
