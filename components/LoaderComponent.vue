<template>
  <div class="flex justify-center items-center w-[100vw] h-[100vh]">
    <div class="animation-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'LoaderComponent',
}
</script>

<style scoped>
.animation-loader{
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
}

.animation-loader > div{
  width: 1.5rem;
  height: 1.5rem;
  margin: 3rem .5rem;
  border-radius: 50%;
  background-color: white;
  animation: loader .6s infinite alternate;
}

@keyframes loader {
  to {
    opacity: .1;
    transform: translate3d(0, -1rem, 0)
  }
}
.animation-loader > :nth-child(2){
  animation-delay: .2s;
}
.animation-loader> :nth-child(3) {
  animation-delay: .2s;
}
</style>
