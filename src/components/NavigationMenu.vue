<script>
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
  },
  emits:{
    closeMenu: (bool)=>{
      return (typeof bool === "boolean") ? true : false
    },
  },
  methods:{
    goToPage(page){
      this.$router.push(`/${page}`)
      this.$emit('closeMenu', false)
    }
  }

}
</script>


<template>
  <nav :class="isOpen ? '':'close--active'">
    <div class="close"
         @click="$emit('closeMenu', false)"
    >
      <div class="bar first"></div>
      <div class="bar last"></div>
    </div>
    <ul>
      <li @click="goToPage('')">Главная</li>
      <li @click="goToPage('about')">Информация о тесте</li>
      <li @click="goToPage('test')">Пройти тест</li>
    </ul>
  </nav>
</template>

<style scoped>

ul{
  padding: 25px;
  list-style-type: none;
  font-size: 1.3em;
}

li{
  margin-bottom: 15px;
  font-weight: 600;
}

li:hover{
  cursor: pointer;
  color: #fdc601;
}

nav{
  padding: 5px;
  border: 1px solid #fdc601;
  transition: .3s;
  min-height: 100vh;
  min-width: 250px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(24, 24, 24, 0.96);
  color: white;
  z-index: 3;
  left: 00%;
}

.close{
  width: 30px;
  height: 30px;
  /*background: white;*/
  position: relative;
  cursor: pointer;
  margin-left: auto;
}

.bar{
  border-radius:  5px;
  background: #fdc601;
  width: 100%;
  height: 4px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
}
.first{
  transform: rotate(45deg);
}
.last{
  transform: rotate(-45deg);
}
.close--active{
  transform: translate(-100%);
}

</style>