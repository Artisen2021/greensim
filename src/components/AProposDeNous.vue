<template>

  <div class="Apropos">

    <h1>À propos</h1>
    <hr>

    <div class="container">
      <div class="box_portrait">
        <img src="../assets/Melanie.jpg" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text"><strong>Mélanie TUAL</strong><br>Étudiante à l'ISEN en spécialité génie logiciel</div>
        </div>
        <div class="text-mobile"><strong>Mélanie TUAL</strong><br>Étudiante à l'ISEN en spécialité génie logiciel</div>
      </div>
      
      <div class="box_portrait">
        <img src="../assets/Aurore.jpg" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text"><strong>Aurore D'Hondt</strong><br>Étudiante à l'ISEN en spécialité technologies biomédicales</div>
        </div>
        <div class="text-mobile"><strong>Aurore D'Hondt</strong><br>Étudiante à l'ISEN en spécialité technologies biomédicales</div>
      </div>
      
      <div class="box_portrait">
        <img src="../assets/Amirat.png" alt="Avatar" class="image">
        <div class="overlay">
          <div class="text"><strong>Yassine AMIRAT</strong><br>Encadrant, Professeur d'énergie à l'ISEN</div>
        </div>
        <div class="text-mobile"><strong>Yassine AMIRAT</strong><br>Encadrant, Professeur d'énergie à l'ISEN</div>
      </div>
    </div>

    <br><br>
    
    <div class="texte-explication">
      <br>
      <h4>Explication du projet:</h4>
      <br>
      <p>Le binôme a réalisé ce site dans le cadre de sa formation à l’ISEN de Brest. Ce projet consiste en la création d’une application web permettant le calcul du rendement énergétique de différentes ressources renouvelables.</p>
      <p>L’application web possède quatre interfaces.
      Sur la page d'accueil, vous trouverez du contenu explicatif pour vous informer sur les enjeux que présente l’utilisation des énergies renouvelables.
      Sur la page de simulation, vous pourrez sélectionner les différents paramètres attribués aux ressources que vous avez choisies. Les ressources sont au nombre de trois : ressource éolienne, hydrolienne, et solaire via les panneaux photovoltaïques. Différentes informations complémentaires vous seront transmises, telles que les solutions de stockage adaptées à votre projet, le calcul de LOCE (coût actualisé de l’énergie) ou bien l’estimation du taux de CO2 produit.
      Dans le catalogue, vous pourrez vous renseigner sur les modèles déjà existants de générateurs présents sur le marché.
      Enfin, un quiz vous permettra de tester vos connaissances sur le sujet des énergies renouvelables!</p>
      <br>
    </div>

  </div>


</template>


<script>
export default {
  name: 'AProposDeNous'
}
</script>



<style scoped>
.Apropos{
    background: url('../assets/fond_ampoules.jpg');
    background-size: cover;
    margin-top: 3%;
    padding-bottom: 5%
}
img {
    border-radius: 50%;
    width: 230px;
    height:auto;
}
h1{
    font-family: system-ui;
    padding-top: 17% ;
}
hr{
    width: 20%;
    margin-left: auto;
    margin-right: auto;
}
.text{
  font-family: system-ui;
  font-weight: lighter;
}
.container{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
    cursor: pointer;
}
.texte-explication{
  font-family: system-ui;
  text-align: start;
  margin-right: 6%;
  margin-left: 6%;
  margin-top: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-right: 7%;
  padding-left: 7%;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  background-color: #d5ead7;
  /* background-color: #9dc9a7; */
  /* background-color: #ededed; */
}
p{
  font-weight: lighter;
  font-size: 13px;
}

@media (max-width: 1200px) {
  .overlay{
    display: none;
  }
}
@media (min-width: 1200px) {
  .text-mobile{
    display: none;
  }
}
@media (max-width: 1000px) {
  h1{
    padding-top: 30%;
  }
}
@media (max-width: 800px) {
  .box_portrait {
    flex: 100%;
  }
  h1{
    padding-top: 40%;
  }
  .Apropos{
    padding-bottom: 20%;
  }
}
@media (max-width: 500px) {
  h1{
    padding-top: 80%;
  }
  .Apropos{
    padding-bottom: 30%;
  }
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  right: 0;
  border-radius: 50%;
  width: 230px;
  height:230px;
  opacity: 0;
  transition: .5s ease;
  background-color: #638c80;
}

.box_portrait {
position: relative;
border-radius: 50%;
width: 230px;
height:230px;
margin:40px;
}

.box_portrait:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}



</style>