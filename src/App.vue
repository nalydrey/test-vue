<script>
import QuestionCard from "./components/QuestionCard.vue";
import BurgerMenu from "./components/BurgerMenu.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import AboutTest from "./components/pages/AboutTest.vue";
import HomePage from "./components/pages/HomePage.vue";
import DetailTest from "./components/pages/DetailTest.vue";

export default {
  components: {DetailTest, HomePage, AboutTest, NavigationMenu, BurgerMenu, QuestionCard},
  data() {
    return {
      isOpenMenu: false,
      path: this.$route.path
    }
  },
  methods: {
    controlMenu(bool){
      this.isOpenMenu = bool
    },

  },
  created() {
    this.$watch(
        () => this.$route.path,
        () => {
          this.path = this.$route.path
          console.log(this.$route.path)
        }
    )
  },

}
</script>

<template >

  <header>
    <navigation-menu
        :is-open="isOpenMenu"
        @close-menu="controlMenu"
    />
    <div class="container">
      <burger-menu
          :is-open="isOpenMenu"
          @toggle-menu="controlMenu"
      />
      <div class="title">
        <div class="logo">
          <img src="../src/assets/img/rain.png" alt="logo">
        </div>
      </div>
      <p>{{ path==='/result' ? 'Готово': 'Тест на определение IQ ' }}</p>

    </div>
  </header>

  <main>
      <router-view></router-view>
      <div class="empty">

      </div>
  </main>

  <footer>
    <p class="copyright"
       v-if="path === '/'"
    >© 2019</p>
    <p class="last container"
       v-if="path === '/result'"
    >TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>
  </footer>

</template>

<style>

header {
  background: #181818;
}

header .container{
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 30px
}

header p {
  text-transform: uppercase;
  color: #fdc601;
  font-size: 22px;
  font-weight: 600;
}

.logo{
  width: 90px;
}

main {
  flex-grow: 1;
  background: wheat;
  background-image: url("./assets/img/nebo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  padding: 0px 15px;
  max-width: 1200px;
  margin: 0 auto;
}

footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
}

.copyright
{
  font-size: 2em;
  color: white;
  text-align: center;
}
.last{
  font-size: 1.4em;
  color: white;
  text-align: center;
}
.empty{
  height: 90px;
}


@media (max-width: 1280px){
  .logo{
    width: 80px;
  }

  header .container{
    gap: 25px;
    padding: 2px 30px;
  }
  header p{
    font-size: 21px;
  }
}
@media (max-width: 1024px){
  header{
    /*padding: 7px 0;*/
  }
  header .container{
    gap: 20px;
  }
  header p{
    font-size: 20px;
  }
}
@media (max-width: 768px){
  header{
    padding: 5px 0;
  }

  .logo{
    width: 60px;
  }
  header .container{
    gap: 15px;
  }
  header p{
    font-size: 16px;
  }
  .last{
    font-size: .9em;
  }
}
@media (max-width: 480px){
  .logo{
    width: 45px;
  }
  header p{
    font-size: 14px;
  }
  header .container {
    padding: 0 20px;
  }
  .last{
    font-size: .6em;
  }

}


</style>
