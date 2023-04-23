<script>

export default {
  data(){
    return{
      minutes: 10,
      seconds: 0,
      timerId: null,
      response: null
    }
  },
  mounted() {
    this.timer()
  },
  computed:{
    secondsString(){
      return this.seconds<=9 && `0${this.seconds}` || this.seconds || '00'
    },
    minutesString(){
      return this.minutes<=9 && `0${this.minutes}` || this.minutes || '00'
    }

  },
  methods:{
    timer(){
      this.timerId = setInterval(()=>{
        if(!this.seconds){
          this.seconds = 60
          this.minutes--
        }
        this.seconds--
      }, 1000)
    },
    async request(){
      this.timerId = null
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await resp.json()
      console.log(user)
      this.response = user
    }
  },
  watch:{
    minutes(){
      if(this.minutes < 0){
        clearTimeout(this.timerId)
        this.timerId = null
      }
    }
  }
}


</script>


<template>
  <section class="result">
    <div class="container">
      <h1>Ваш результат расчитан</h1>
      <p class="relate">
        Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на
        15 пунктов отличается от среднего в большую или меньшую сторону!
      </p>
      <h2>Скорее получите свой результат!</h2>
      <p class="aim">
        В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде
        голосового сообщения по звонку с вашего мобильного телефона
      </p>
      <p class="timer"
         v-if="timerId"
      >
        Звоните скорее, запись доступна всего
        <br/>
        <span class="digital">{{ minutesString }}:{{secondsString}}</span> минут
      </p>
      <div  class="call"
            v-if="timerId"
            @click="request"
      >
        <div class="svg">
          <img src="../../assets/img/Group.png">
        </div>
        <p>
          позвонить и прослушать результат
        </p>
      </div>
      <div class="response"
            v-if="response"
      >
        <h3>Результат</h3>
        <h4>Пользователь</h4>
        <ul>
          <li>
            <p>Имя</p>
            <p>{{ response.name}}</p>
          </li>
          <li>
            <p>Никнейм</p>
            <p>{{ response.username }}</p>
          </li>
          <li>
            <p>Телефон</p>
            <p>{{ response.phone}}</p>
          </li>
          <li>
            <p>Email</p>
            <p>{{ response.email}}</p>
          </li>
          <li>
            <p>Сайт</p>
            <p>{{ response.website}}</p>
          </li>
          <h4>Адрес</h4>
          <li>
            <p>Город</p>
            <p>{{ response.address.city}}</p>
          </li>
          <li>
            <p>Улица</p>
            <p>{{ response.address.street}}</p>
          </li>
          <h4>Компания</h4>
          <li>
            <p>Имя</p>
            <p>{{ response.company.name}}</p>
          </li>
        </ul>
      </div>
    </div>


  </section>
</template>

<style>

.result .container{
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: white;
  font-size: 16px;
}
.result h1{
  font-size: 2.3em;
}
.result h2{
  font-size: 2.4em;
  text-align: center;
  font-weight: 600;
  color: #3bdd7c;
}
.result p{
  text-align: center;

}
.relate{
  font-size: 1.6em;
  text-align: center;
}

.aim{
  font-size: 1.6em;
  background: #1c2741;
  border-radius: 30px;
  padding: 20px 30px;
}
.timer{
  color: #3bdd7c;
  font-size: 1.6em;
}
.digital{
  font-size: 1.4em;
}

.call{
  cursor: pointer;
  display: flex;
  gap: 30px;
  align-items: center;
  background: #ea1b01;
  border-radius: 20px;
  padding: 20px 50px;
  font-size: 1.5em;
}

.svg{
  width: 50px;
  height: 50px;
}

.response{
  background: #525962;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  padding: 10px 50px 50px;
  border-radius: 30px;
}

.response h3,
.response h4{
  text-align: center;
  margin-bottom: 20px;
}


.response ul{
  list-style-type: none;
  padding: 0;
}
.response li{
  gap: 50px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .result .container{
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .result .container{
    font-size: 14px;
  }
  .call{
    gap: 20px;
    border-radius: 15px;
    padding: 15px 30px;
  }
}
@media (max-width: 480px) {
  .result .container{
    font-size: 12px;
  }
  .call{
    gap: 10px;
    border-radius: 15px;
    padding: 15px 30px;
  }
  .response{
    font-size: 1.3em;
    padding: 10px 20px 30px;
    border-radius: 15px;
  }
}

</style>