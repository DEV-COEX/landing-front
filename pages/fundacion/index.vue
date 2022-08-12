<template>
  <div>
    <div id="indexDonar" class="bg-[#1b2233] w-full h-screen flex justify-center items-center">
      <!-- <div class="w-1/5 h-2/6 rounded-full bg-black absolute"></div>-->
      <div class="flex justify-center items-center">

        <div class="">

          <div class="flex justify-center">
            <p class="text-5xl leading-normal  font-bold  w-3/6 text-center text-transparent bg-clip-text bg-gradient-to-r
                      from-[#FFDF8D]
                      via-[#FF9838]
                      to-[#dab255]">¿Quieres apoyar el talento joven en tecnología?</p>
          </div>
          <div class="flex justify-center">
            <p class="text-3xl w-3/6 text-center text-white py-10">Contribuye financiando la educación de uno de
              nuestros talentos COEX. Con un aporte de desde 1 usd puedes cambiar la vida de toda una familia.
            </p>
          </div>
          <div class="flex justify-center">
            <a href="#indexDonar">
              <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  " @click="OPenModal">Quiero donar
              </app-btn>
            </a>

          </div>
        </div>
      </div>

    </div>
    <transition name="fade">
      <app-modal-donar v-model="modal" @close="closeModal" />

    </transition>

  </div>

</template>

<script>
import { SANDBOX_PUBLIC_API_KEY, SANDBOX_URL } from "~/plugins/BASE_CONFIG";
import { generateUUID, verifyUUID } from "~/plugins/Donations";

export default {
  name: "IndexFundacion",
  data() {
    return {
      wompi: {},
      modal: false
    }
  },
  async mounted() {
    // const { data } = await this.$axios.get(`https://sandbox.wompi.co/v1/merchants/${SANDBOX_PUBLIC_API_KEY}`);
    const { data } = await this.$axios.post(`${SANDBOX_URL}/tokens/cards`, {
      number: '4242424242424242',
      cvc: '789',
      exp_month: '12',
      exp_year: '29',
      card_holder: 'Juan Perez',
    }, {
      headers: {
        Authorization: `Bearer ${SANDBOX_PUBLIC_API_KEY}`,
      }
    });
    // this.wompi = data.data;
    // console.log(this.wompi);
    const ref = generateUUID();
    const donations = await this.$axios.get('donations');
    const verify = verifyUUID(donations.data, ref);
    if (!verify) {
      const res = await this.$axios.post('donations', {
        name: 'Jhon',
        lastname: 'Perez',
        email: 'lopez@gmail.com',
        document: '123456789',
        phone: '123456789',
        amount: '100',
        reference: ref,
      });

      console.log(res);
    }
    console.log(data.data.id);
  },
  methods: {
    OPenModal() {
      this.modal = true
      document.getElementById('indexDonar').style.filter = 'blur(5px)'
      document.querySelector('body').classList.add('overflow-hidden')
    },
    closeModal() {
      this.modal = false
      document.getElementById('indexDonar').style.filter = 'blur(0)'
      document.querySelector('body').classList.remove('overflow-hidden')
    },
  }
}
</script>

<style>
.background-animate {
  background-size: 150%;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {

  0%,
  100% {
    background-position: 0% 100%;
  }

  50% {
    background-position: 100% 30%;
  }
}

body::-webkit-scrollbar {
  width: 2px;
  /* width of the entire scrollbar */
}

body::-webkit-scrollbar:hover {
  width: 5px;

  /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: rgb(0, 0, 0);
  /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4A5B95 0%, #90BEFF 100%);
  /* color of the scroll thumb */
  border-radius: 20px;
  /* border: 1px solid rgb(217 70 239);
  /* roundness of the scroll thumb */
  /* creates padding around scroll thumb */
}
</style>
