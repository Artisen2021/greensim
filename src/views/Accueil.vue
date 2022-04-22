<template>   
  
  <div class="Accueil">

    <!------Logo ------>
    <div class="menu">
      <img id="logo" class="logo" alt="Vue logo"  src="../assets/Logo.jpg">
      <h2>GreenSim</h2>
    </div>
  
    <EnTete id="entete"/>

    <QuelquesChiffres/>

    <AProposDeNous id="a-propos"/>


    <!------Bouton retour haut de page ------>
    <a href="#">
        <button  class =" btn-haut-de-page"> ↑ </button >
    </a>

  </div>

</template>



<script>
import EnTete from '@/components/EnTete.vue'
import QuelquesChiffres from '@/components/QuelquesChiffres.vue'
import AProposDeNous from '@/components/AProposDeNous.vue'
export default {
  name: 'Accueil',
  components: {
    EnTete,
    QuelquesChiffres,
    AProposDeNous
  }
}
</script>


<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
  scroll-behavior: smooth;
  overflow-x: Hidden
}

/*-----------------Logo------------------------*/

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
/*-----------------Animations------------------------*/

.logo, h1, h2, .b1, .b2 {
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari et Chrome */
    -o-animation: fadein 2s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* sur Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* sur Safari et Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}

/*-----------------Bouton vers haut de page------------------------*/
.btn-haut-de-page {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: rgb(157, 201, 167); /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px; /* Increase font size */
}
.btn-haut-de-page:hover {
  background-color: rgb(135, 179, 126); /* Add a dark-grey background on hover */
}
</style>





