<template>
  <section class="container">
    <div>
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line
import * as animationData from '~/assets/bgImg.json'

export default {
  name: 'LottiePage',
  data() {
    return {
      // eslint-disable-next-line
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    }
  },
  methods: {
    // eslint-disable-next-line
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>

<style>
body {
  background-color: #002c3e;
}
a {
  position: absolute;
  color: #fff;
  top: 40px;
  right: 40px;
}
</style>
