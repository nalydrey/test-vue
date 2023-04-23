<script>
  import questionsList from "../../data";
  import QuestionCard from "../QuestionCard.vue";

  export default {
    data(){
      return{
        currentQwestion: 0,
        questionsList,
      }
    },
    components:{
      QuestionCard
    },

    watch:{
      currentQwestion(){
        if(this.isLoading) {
            const timer = setTimeout(()=>{
              clearTimeout(timer)

              this.$router.push('/result')
            }, 3000)
          }
      }
    },
    computed:{
      isLoading(){
        return this.questionsList.length === this.currentQwestion
      },
      noted() {
        return this.questionsList.filter(({myVariant}) => myVariant).length
      },
      progress() {
        return this.noted / this.questionsList.length * 100
      },
      isLastQuestion() {
        return this.questionsList.length === this.currentQwestion + 1
      }
    },
    methods:{
      addMyVariant(myVariant, index) {
        this.questionsList[index].myVariant = myVariant
      },


    }
  }
</script>

<template>
  <section class="test">
    <div class="container">
      <div class="progress">
        <div class="progress__bar"
             :style="{width: `${progress}%`}"
        >
        </div>
      </div>

      <QuestionCard v-bind="question"
                    v-for="(question, ind)  of questionsList"
                    :current-qwestion="currentQwestion"
                    :isLastQuestion="isLastQuestion"
                    :ind="ind"
                    @select-variant="addMyVariant"
                    @next-question="currentQwestion++"
      />

      <div class="preloader__wrap"
           v-if="isLoading"
      >
        <h1>Обработка результатов</h1>
        <div  class="preloader">
          <div class='ring'></div>
          <span>loading...</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>



.test .container{
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  gap: 50px;
  min-height: 75vh;
  flex-direction: column;
  justify-content: space-between;
}

.preloader__wrap{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 100px
}

.preloader{
  position: relative;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}
.preloader span{
  color: #737373;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: text 3s ease-in-out infinite;
}

.ring{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation:ring 2s linear infinite;
}
.ring:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
}

@keyframes ring {
  0%{
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #e65c00;
  }
  50%{
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px #18b201;
  }
  100%{
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #0456c8;
  }
}
@keyframes text {
  50%{
    color: black;
  }
}

.progress {
  overflow: hidden;
  position: relative;
  height: 30px;
  background: #939396;
  border-radius: 15px;
  width: 95%;
  margin: 0 auto;
}

.progress__bar {
  background: #3bdd7c;
  transition: 1s;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

@media (max-width: 768px ) {
  .progress {
    height: 25px;
  }
  .preloader__wrap{
    gap: 50px
  }
}

@media (max-width: 420px ) {
  .progress {
    height: 20px;
  }
}


</style>