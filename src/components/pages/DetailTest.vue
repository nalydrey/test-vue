<script>

  export default {
    methods:{
      goToTest(){
        this.$router.push('/test')
      }
    }
  }

</script>

<template>
  <section class="detail">
    <div class="container">
      <p>
        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список
        рекомендаций для повышения этого показателя.
      </p>
    </div>

  </section>
  <section class="detail2">
    <div class="container">
      <p>
        Также по результатам теста вы получите подробные советы по определению наиболее перспективной для вашего типа
        интеллекта сферы деятельности, которая принесет вам скорейший финансовый результат.
      </p>
      <img src="../../assets/img/325-01.jpg" alt="">
      <button @click="goToTest">Перейти к тесту</button>
    </div>

  </section>
</template>

<style scoped>

.detail {
  background-image: url("../../assets/img/image1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 16px;
}

.detail p {
  margin: 0 auto;
  font-size: 2.3em;
  max-width: 700px;
  text-align: center;
  font-weight: 600;
  padding: 150px 0;
}

.detail2{
  background: white;
  padding: 70px 50px;
}
.detail2 p{
  font-size: 2.3em;
}

.detail2 img{
  margin: 50px auto 0;
  max-width: 700px;
}

.detail2 button{
  display: block;
  margin: 0 auto;
}

@media (max-width: 1024px){
  .detail, .detail2 {
    font-size: 14px;
  }
  .detail p {
    margin: 0 auto;
    text-align: center;
    padding: 80px 0;
  }
  .detail2{
    padding: 50px 0;
  }

}
@media (max-width: 768px){
  .detail, .detail2 {
    font-size: 12px;
  }
  .detail p {
    padding: 60px 0;
  }
}
@media (max-width: 480px){
  .detail, .detail2 {
    font-size: 10px;
  }
  .detail p {
    padding: 40px 0;
  }
}


</style>