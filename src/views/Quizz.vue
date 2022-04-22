<template>

    <!------Logo ------>
    <div class="menu">
      <img id="logo" class="logo" alt="Vue logo"  src="../assets/Logo.jpg">
      <h2>GreenSim</h2>
    </div>

    <div class="quiz">

        <!-- Avant de démarrer le quiz-->
        <div class="box box-demarrage" v-if="Demarrer">
            <h1>Quiz</h1>
            <br><br>
            <p> Voulez-vous devenir incollable sur les questions d'environnement et d'énergies renouvelables? </p>
            <p> Voici un quiz qui vous permettra de tester les connaissances acquises lors de votre expériences sur ce site.</p>
            <p> Bon courage ! 😉</p>
            <button id="btn_DemarrerQuiz"  @click="ChoixDifficile">DÉMARRER LE QUIZ</button>
        </div>
        
        <div class="quiz-difficile" v-if="QuizDifficile">
            <QuizDifficile/>
        </div>

    </div>

</template>


<script>
import QuizDifficile from '@/components/QuizDifficile.vue'
 export default {
    name: 'Quiz',
    components: {
        QuizDifficile
    },
    data() {
      return {
        Demarrer: true,
        QuizDifficile: false,
        QuizFacile: false,

        Compteur: 0,
        rand: 0,
        tab_rand: [],
        Resultat: 0,
      }
    },
    methods: {

        ChoixFacile(){
            this.Demarrer = false
            this.QuizFacile = true
        },
        ChoixDifficile(){
            this.Demarrer = false
            this.QuizDifficile = true
        }
    }
 }
</script>


<style scoped>

.logo {
    position: absolute;
    left: -1px;
    top: 0px;
    width: 80px;
    height: auto;
    cursor: pointer;
}
.menu h2{
  
  font-family: system-ui;
  font-weight: lighter;
  position: absolute;
  left: 70px;
  top: 8px;
}

html {
  overflow-x: Hidden
}

.quiz, .bilan{
    font-family: system-ui;
    background-image: url('../assets/confettis.jpg');
    background-size: cover;
    height: auto;
    padding: 5%;
}
.box{
    margin: 5%;
    padding: 50px;
    padding-top: 70px;
    padding-bottom: 70px;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2)
}
/*Avant de démarrer le quiz*/
.box-demarrage{
    background-color: rgb(157, 201, 167);
}
#btn_DemarrerQuiz{
    margin-top: 5%;
    font-size: 15px;
    padding: 10px;
    margin-left: 2%;
    margin-right: 2%;
    cursor: pointer;
    border-radius: 25px;
    font-family: system-ui;
    border: 2px solid #f1f1f1;
    outline: none;
    background: transparent;
    color: #f1f1f1;
}
#btn_DemarrerQuiz:hover{
    transform: scale(1.1);
    transition: transform .2s;
}

</style>