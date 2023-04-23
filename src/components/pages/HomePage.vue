<script>

export default {
  methods:{
    goToPage(page){
      this.$router.push(`/${page}`)
    }
  }
}

</script>


<template>
  <section class="home">
    <div>
      <h3>Пройдите точный и быстрый</h3>
      <h1>тест на определение IQ</h1>
      <div class="home__foto">
        <img src="../../assets/img/rain.png">
      </div>
      <button class="home__button"
              @click="goToPage('test')"
      >Пройти тест</button>
      <p>
        <span class="color">И получите рекомендации по развитию своего интеллекта</span>
        <br/>
        и улучшению финансового благосостояния и личной жизни
      </p>
      <button class="home__button"
              @click="goToPage('detail')"
      >Подробнее</button>
    </div>
  </section>
</template>

<style scoped>
  .home {
    padding: 20px 0 50px;
    font-size: 16px;
    color: white;
  }

  .home h1 {
    color: #fdc601;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .home h3 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: white;
  }

  .home p {
    font-size: 1.6em;
    text-align: center;
    margin: 40px 0;
  }

  .home__foto {
    position: relative;
    width: 400px;
    margin: 0 auto;
  }

  .home__foto:before {
    content: '';
    position: absolute;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    background: rgba(41, 80, 193, 0.68);
    filter: blur(100px);
  }

  .home__button {
    display: block;
    margin: 0 auto;
  }
  .color{
    color: #fdc601;
  }
  
  @media (max-width: 1024px) {
    .home {
      font-size: 14px;
    }
    .home__foto {
      width: 350px;
    }
  }
  @media (max-width: 768px) {
    .home {
      font-size: 13px;
    }
  }
  @media (max-width: 480px) {
    .home {
      font-size: 12px;
    }
    .home__foto {
      width: 300px;
    }
    .home p {
      margin: 30px 0;
    }
  }


</style>