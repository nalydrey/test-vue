<script>
export default {
  data(){
    return {

    }
  },
  props:{
    name: String,
    image: String,
    listType: String,
    question: String,
    variants: Array,
    currentQwestion: Number,
    ind: Number,
    myVariant: String,
    isLastQuestion: Boolean
  },

  methods:{
    selectVariant(e){
      this.$emit('selectVariant', e.target.value, this.ind)
    }
  }
}



</script>

<template>

  <div class="card"
       v-if="ind===currentQwestion"
  >
    <h1>{{ question }}:</h1>

    <div class="foto"
         v-if="image"
    >
      <img :src="`../src/assets/img/${image}`" alt="foto">
    </div>

    <div  :class="`select-container--${listType}`">
      <label :class="`list--${listType} ${listType!=='text' && variant===myVariant ? 'active': ''}`"
             v-for="variant of variants"
             :style="{background: variant}"
      >
        <input type="radio"
               :name="name"
               :value="variant"
               @click="selectVariant"
        />

        <div class="checkbox"
             v-if="listType==='text'"
             :class="{'checkbox--active': variant===myVariant}"
        ></div>
        <span v-if="listType!=='color'">{{ variant }}</span>
      </label>
    </div>
    <button
        :disabled="!myVariant"
        @click="$emit('nextQuestion')"
    >{{isLastQuestion ? 'Показать результат': 'Далее'}}</button>
<!--    <p>{{ myVariant }}</p>-->
  </div>

</template>

<style>

  h1{
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    color: white;
  }

  .select-container--text,
  .select-container--number,
  .select-container--color{
    flex-grow: 1;
  }

  .select-container--text{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    gap: 10px
  }
  .select-container--number{
    display: flex;
    gap: 20px;
  }
  .select-container--color{
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }

  .card{
    flex-grow: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  input{
    display: none;
  }

  .list--text{
    user-select: none;
    width: 100%;
    transition: .2s;
    display: flex;
    align-items: center;
    gap: 25px;
    background: #302f33;
    padding: 10px 50px;
    color: white;
    font-size: 1.7em;
    border-radius: 7px;
  }

  .list--color{
    transition: .2s;
    border: 1px solid black;
    width: 150px;
    height: 150px;
  }

  .list--number{
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    font-size: 20px;
  }

  .list--text:hover{
    background: #fdc601;
    color: black;
  }

  .list--color:hover{
    transform: scale(1.1);
    color: black;
  }
  .list--text:hover .checkbox{
    border-color: black;
  }
  .checkbox{
    transition: .5s;
    width: 30px;
    min-height: 30px;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid white;
  }
  .checkbox--active{
    background: #2950c1;
  }

  .foto{
    max-width: 30%;
  }
  img{
    display: block;
    width: 100%;
  }

  button{
    cursor: pointer;
    transition: .2s;
    background: #d9d9d9;
    border: none;
    border-radius: 30px;
    font-size: 1.5em;
    font-weight: 600;
    padding: 10px 50px;
  }
  button:hover{
    background: #fdc601;
  }

  .active{
    outline: 10px solid #fdc601;
  }



  @media (max-width: 1024px ) {
      .card{
        font-size: 12px;
      }
    .list--text{
      padding-left: 20px;
    }
    .foto{
      max-width: 230px;
    }
    .select-container--color{
      gap: 10px
    }
    .list--color{
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 768px ) {
      .card{
        font-size: 10px;
      }
    .list--text{
      padding: 10px 20px;
      gap: 15px
    }
    .foto{
      max-width: 230px;
    }
    .checkbox{
      width: 23px;
      height: 23px;
      min-width: 23px;
      min-height: 23px;
    }
    .select-container--color{
      gap: 10px
    }
    .list--color{
      width: 100px;
      height: 100px;
    }
  }
  
  @media (max-width: 480px) {
    .card{
      font-size: 8px;
    }
    button{
      padding: 10px 20px;
    }
    .list--color{
      width: 80px;
      height: 80px;
    }

    .list--number{
      width: 40px;
      height: 40px;
    }
    .select-container--number{
      gap: 15px
    }
  }

</style>

