<script>
  import navigationMenu from "../components/NavigationMenu.vue";
  export default {
    data(){
      return{
      }
    },
    props:{
      isOpen: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  }


</script>

<template>
  <div class="burger"
       @click="$emit('toggleMenu', !isOpen)"
  >
    <span class="bar top"></span>
    <span class="bar middle"></span>
    <span class="bar bottom"></span>
  </div>
</template>

<style scoped>
  .burger{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45px;
    height: 45px;
  }

  .bar{
    border-radius: 5px;
    width: 100%;
    height: 6px;
    background: white;
  }

  @media (max-width: 1280px) {
    .burger{
      width: 40px;
      height: 40px;
    }
    .bar{
      height: 5px;
    }
  }
  @media (max-width: 768px) {
    .burger{
      width: 35px;
      height: 35px;
    }
    .bar{
      height: 4px;
    }
  }
  @media (max-width: 768px) {
    .burger{
      width: 30px;
      height: 30px;
    }
  }

</style>