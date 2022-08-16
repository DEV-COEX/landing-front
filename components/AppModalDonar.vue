<template>
  <div v-if="state" class="centrar fondo-modal z-50" style="left: 0;">
    <div class="modal-principal opacity-95">
      <div class="flex justify-center px-10  py-5">
        <p class="font-bold  text-xl text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">Información del Donante</p>

      </div>
      <form @submit.prevent="payment">
        <div class="px-8">
          <div class="grid justify-center px-3 ">
            <div class="flex justify-evenly p-2">
              <div class="flex items-center ">
                <div class="p-2">
                  <div class="p-2">
                    <!--<app-select required label="Metodos de Donación" />-->
                    <app-metodo-donar v-model="typePay" label="Metodos de Donación" />
                  </div>
                  <div v-if="typePay === 'card'" class="flex  ">
                    <div class="border-r-2 border-[#4736df] p-2">
                      <div class="">
                        <app-input v-model="form.name" required label="Nombre completo" />
                        <app-input v-model="form.document" required label="Cedula / NIT" />
                      </div>
                      <div class=" ">
                        <app-input v-model="form.phone" type="number" required label="Telefono" />
                        <app-input v-model="form.email" type="email" required label="Correo" />
                      </div>

                    </div>
                    <div class="p-2">
                      <div class=" ">
                        <app-input v-model="form.cardNumber" type="number" required label="Numero de tarjeta" />
                        <app-input v-model="form.cvc" type="number" required label="CVC" />
                      </div>
                      <div class="">
                        <app-input v-model="form.amount" type="number" required label="Cantidad" />
                        <app-input type="date" required label="Mes y año de vencimiento" />
                      </div>
                    </div>

                  </div>
                  <div v-if="typePay === 'pse'">
                    <div class="flex justify-center">
                      <app-input v-model="form.name" required label="Nombre completo" />
                      <app-input v-model="form.document" required label="Cedula / NIT" />
                    </div>
                    <div class="flex justify-center p-2">
                      <app-input v-model="form.phone" type="number" required label="Telefono" />
                      <app-input v-model="form.email" type="email" required label="Correo" />
                    </div>
                    <div class="flex justify-center w-full">
                      <app-select :items="pse" required label="Entidad Bancaria" />
                      <app-select :items="userTypes" required label="Tipo de persona" />
                    </div>
                    <div class="flex justify-center">
                      <app-select :items="documentTypes" required label="Tipo de documento" />
                      <app-input required label="Número de documento" placeholder="Número de documento" />
                    </div>

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
      form: {
        name: null,
        document: null,
        phone: null,
        email: null,
        cardNumber: null,
        cvc: null,
        amount: null,

      },
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
      this.$emit("close", true)
    },
    async getWompi() {
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
        number: this.form.cardNumber,
        cvc: this.form.cvc,
        exp_month: '12',
        exp_year: '29',
        card_holder: this.form.name,
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
          name: this.form.name,
          email: this.form.email,
          document: this.form.document,
          phone: this.form.phone,
          amount: this.form.amount,
          reference: this.reference,
        });
        const payment = {
          type: 'CARD',
          token: this.clientCard.id,
          installments: 2,
        }
        await this.transaction(payment);
      }
    },
    async transaction(payment) {
      const amountInCents = this.form.amount * 100;
      await this.$axios.post(`${SANDBOX_URL}/transactions`, {
        acceptance_token: this.wompi.presigned_acceptance.acceptance_token,
        amount_in_cents: amountInCents,
        currency: 'COP',
        customer_email: this.form.email,
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
</style>
