<template>
  <div
    class="bg-[#1b2233] w-full h-screen flex justify-center items-center">
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
          <app-btn class="
                    bg-gradient-to-r
                    from-red-500
                    to-red-400
                    p-1
                    mx-6
                    text-white
                     hover:from-red-400 hover:to-red-500

                  ">Quiero donar
          </app-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {SANDBOX_PUBLIC_API_KEY, SANDBOX_URL} from "~/plugins/BASE_CONFIG";
import { generateUUID, verifyUUID} from "~/plugins/Donations";

export default {
  name: "IndexFundacion",
  data() {
    return {
      wompi: {}
    }
  },
  async mounted() {
    // const { data } = await this.$axios.get(`https://sandbox.wompi.co/v1/merchants/${SANDBOX_PUBLIC_API_KEY}`);
    const { data } = await this.$axios.post(`${SANDBOX_URL}/tokens/cards`,{
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
      const res = await this.$axios.post('donations',{
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
  methods: {}
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

</style>
