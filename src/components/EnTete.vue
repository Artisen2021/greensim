<template>

<div class="entete"> 

  <div  class =" container-first " >

    <div class="menu-title">
      <h1><span1>S</span1><span2>I</span2><span3>M</span3><span4>U</span4><span5>L</span5><span6>E</span6><span7>Z</span7><span > votre production d’énergie électrique à partir de ressources renouvelables</span > </h1 ><br><br>
    </div>
    <h2>Trouvez l'énergie produite par votre futur réseau électrique</h2>
    <br><br><br>
    <div  class =" container-btns " >
      <a href="../Simulation">
        <button  class =" btn-first b1 " > LANCER LA SIMULATION </button >
      </a>
      <a href="../Quizz">
        <button  class =" btn-first b2 " > QUIZZ </button >
      </a>
    </div >
          
    <div class="boites-container">
      <div class="box boite-contexte">
        <img src="../assets/icone_bleu.jpg" class="icone icone_bleu" >
        <h3>Contexte</h3><br>
        <p>Les enjeux énergétiques et environnementaux sont à l'origine d'une forte croissance de la production d'électricité à partir...</p><br>
        <a href="#contexte">
          <button  class ="btn-box bb4 " > EN SAVOIR PLUS </button >
        </a>
      </div>
      <div class="box boite-quelques-chiffres">
        <img src="../assets/icone_verte.jpg" class="icone icone_verte" >
        <h3>Quelques chiffres</h3><br>
        <p>Depuis la période préindustrielle (1700-1800), la concentration de gaz carbonique CO2 a augmenté de 50 %. Depuis 1860...</p><br>
        <a href="#quelques-chiffres">
          <button  class =" btn-box bb1 " > EN SAVOIR PLUS </button >
        </a>
      </div>
      <div class="box boite-energies-renouvelables">
        <img src="../assets/icone_jaune.jpg" class="icone icone_jaune" >
        <h3>Énergies renouvelables</h3><br>
        <p>Les énergies renouvelables sont celles qui sont dispensées continûment par la nature. Elles sont issues du rayonnement...</p><br>
        <a href="#energies-renouvelables">
          <button  class =" btn-box bb2 " > EN SAVOIR PLUS </button >
        </a>
      </div>
      <div class="box boite-a-propos">
        <img src="../assets/icone_violette.jpg" class="icone icone_violette" >
        <h3>À propos</h3><br>
        <p>Nous avons réalisé ce site dans le cadre de notre formation à l’ISEN de Brest. Ce projet consiste principalement en la création...</p><br>
        <a href="#a-propos">
          <button  class ="btn-box bb3 " > EN SAVOIR PLUS </button >
        </a>
      </div>
    </div>

  </div >
  
</div >

</template>



<script>
export default {
  name: 'EnTete'
}
</script>



<style scoped>

/*-----------------accueilText-------------------*/

.entete {
    background: #333;
    height: 140vh;
    background: url('../assets/AccueilRogne.jpg');
    background-size: cover;
}
.container-first {
    padding: 5%; 
    padding-top: 10%;
}
.container-first h1 {
    text-transform: uppercase;
    font-size: 70px;
    color: #f1f1f1;
    font-family: system-ui;
}
@media (max-width: 800px) {
  .container-first h1 {
    font-size: 55px;
  }
}
@media (max-width: 600px) {
  .container-first h1 {
    font-size: 40px;
  }
}
span1, span2, span3, span4, span5, span6, span7, span8, span9{
  color: #fac02e;
}
.container-first h2{
  font-size: 30px;
  color: #f1f1f1;
  font-family: system-ui;
}
.container-first h2{
  text-align: center;
}
.btn-first{
  font-size: 15px;
  padding: 20px;
  cursor: pointer;
  border-radius: 7px;
  font-family: system-ui;
  margin: 5px;
}
.b2{
    border: 2px solid #f1f1f1;
    outline: none;
    background: transparent;
    color: #f1f1f1;
}
.b1 {
    border: 2px solid #f1f1f1;
    background: #f1f1f1;
    color: #326e8a;
}
.b1:hover {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.b2:hover {
    transition: all 0.3s ease-in-out;
    background: #f1f1f1;
    color: #326e8a;
}

/*-----------------Animation-accueilText-------------------*/

  span1, span2, span3, span4, span5, span6, span7, span8, span9 {
    transition: transform 200ms;
    transform-origin: bottom left;
    display: inline-block;
    cursor: pointer;
  }
    span1 {
      transition-delay: calc(600ms);
    }
    span2 {
      transition-delay: calc(525ms);
    }
    span3 {
      transition-delay: calc(450ms);
    }
    span4 {
      transition-delay: calc(375ms);
    }
    span5 {
      transition-delay: calc(300ms);
    }
    span6 {
      transition-delay: calc(225ms);
    }
    span7 {
      transition-delay: calc(150ms);
    }
    span8 {
      transition-delay: calc(75ms);
    }
    span9 {
      transition-delay: 0;
    }
  span1:hover, span2:hover, span3:hover, span4:hover ,span5:hover, span6:hover, span7:hover, span8:hover, span9:hover {
    transform: rotate(12deg);
    transition-delay: 0ms;
  }

/*-----------------Boites------------------------*/

* {
  box-sizing: border-box;
}
.boites-container {
  display: inline-flex;
  justify-content: center; 
  flex-wrap: wrap;
  width: 85%;
  padding-top: 100px;
}
.box{
  padding: 20px;
  flex: 25%;
}
.boite-contexte {
  border-radius: 15px 0px 0px 15px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.boite-quelques-chiffres {
  background: #fdfdfd;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.boite-energies-renouvelables {
  background: #f7f7f7;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.boite-a-propos {
  border-radius: 0px 15px 15px 0px;
  background: #fafafa;
  box-shadow: 0 0 15px  0 rgba(0, 0, 0, 0.2);
}
/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 800px) {
  .boite-contexte, .boite-energies-renouvelables, .boite-a-propos {
    flex: 100%;
    border-radius: 0px 0px 0px 0px;
  }
  .boites-container {
    padding-top: 70px;
  }
}
.icone{
  width: 25%;
  height: auto;
  padding-bottom: 4%;
}
h3{
  font-family: system-ui;
  font-size: 16px;
}
.box p{
  font-family: system-ui;
  font-size: 12px;
  color: rgb(150, 145, 145);
}
.btn-box{
  font-size: 11px;
  font-weight: bold;
  padding: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #fdfdfd; 
}
.btn-box:hover {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.bb1{
    background: #4cb050; 
}
.bb2{
    background: #fac02e;
}
.bb3{
    background: #8c24a1;
}
.bb4{
  background: #31a9f5;
}

</style>