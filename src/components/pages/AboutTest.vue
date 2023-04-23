<script>

export default {
  methods:{
    goToTest(){
      console.log( '!!!!!!!')
      this.$router.push('/test')
    }
  }
}

</script>

<template>
  <section class="about">
    <div class="container">
      <p>
        Прохождение теста займет у вас не более <span class="color">12 минут</span> , а его результаты вы сможете
        <span class="color">использовать всю жизнь.</span>
      </p>
      <div class="rect">
        <p>
          Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить все
          аспекты своей жизни: от финансового до любовного.
        </p>
      </div>
      <button @click="goToTest">Пройти тест</button>
    </div>

  </section>
</template>

<style>

  .about{
    position: relative;
    padding-top: 70px;
    color: white;
    font-size: 16px;
  }
  .about p{
    font-size: 2em;
  }
  .color{
    color: #fdc601;
  }

  .rect{
    margin: 100px 0;
    background: rgba(195, 196, 196, 0.64);
    color: black;
    padding: 50px 30px;
    border-radius: 30px;
  }
  .rect p{
    font-weight: 600;
  }

  .about button{
    cursor: pointer;
    display: block;
    margin: 0 auto;
    background: none;
    color: white;
    border: 2px solid white;
  }

  .about button:hover{
    background: #fdc601;
    color: black;
  }

  .about:before,
  .about:after{
    content: '';
    display: block;
    position: absolute;
    width: 300px;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about:before{
    background-image: url("../../assets/img/lightning_PNG9.png");
    left: 0;
  }
  .about:after{
    background-image: url("../../assets/img/lightning_PNG91.png");
    right: 0;
    top: 300px;
  }
  @media(max-width: 1024px){
    .about{
      font-size: 14px;
    }
  }
  @media(max-width: 768px){
    .about{
      font-size: 12px;
    }
    .rect{
      margin: 70px 0;
      padding: 30px 30px;
    }
  }
  @media(max-width: 480px){
    .about{
      font-size: 10px;
      padding-top: 50px;
    }
    .rect{
      margin: 50px 0;
      padding: 20px 20px;
      border-radius: 15px;
    }
    .about:before,
    .about:after{
      width: 200px;
      height: 350px;
    }
  }

</style>