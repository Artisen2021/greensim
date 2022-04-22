<template>

    <div class="QuelquesChiffres_Contexte">
        
        <div class="container_context_one">
            <br><br>
            <h1>Contexte</h1>
            <div class="container_context">
                <div class="box_context">
                    <img src="../assets/energie-renouvelable.png" class="icone icone_energie_renouvelable" >
                </div>
                <div class="box_context">
                    <p>Les enjeux énergétiques et environnementaux sont à l'origine d'une forte croissance de la production d'électricité à partir d'énergie renouvelable depuis le début du 20e siècle. </p>
                    <p>Le concept de développement durable et le souci des générations futures nous interpellent au quotidien permettant l'émergence de nouvelles technologies de production des énergies et de nouveaux comportements d'utilisation de ces énergies. </p>
                </div>    
            </div>  
        </div>

        <br><br>

        <div class="container_context_two">
            <div class="container_context">
                <div class="box_context">
                   <p>L'intérêt croissant pour le développement des énergies renouvelables est motivé par plusieurs constats: le changement climatique, l'augmentation de la demande d'énergie, la limitation des réserves de combustibles fossiles et le faible rendement global du système énergétique.</p> 
                </div>
                <div class="box_context">
                    <img src="../assets/energie.png" class="icone icone_energie" >
                </div>
            </div>
        </div>
        <br><br>

    </div>

</template>



<style scoped>
h1{
    font-family: system-ui;
}
p{
    text-align: start;
    font-family: system-ui;
    font-weight: lighter;
}
.QuelquesChiffres_Contexte{
    margin-top: 20%;
    background-color: #f1f7f9;
}
.icone{
    width: 55%;
    height: auto;
    transition: transform .2s;
    cursor: pointer;
}
.icone:hover{
    transform: scale(1.1);
}


.container_context{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
    width: 65%;
}
.box_context{
  padding: 20px;
  flex: 25%;
}
@media (max-width: 800px) {
  .box_context {
    flex: 100%;
  }
  .QuelquesChiffres_Contexte{
    margin-top: 180%;
    }
}
@media (max-width: 576px) {
  .QuelquesChiffres_Contexte{
    margin-top: 220%;
    }
}
@media (max-width: 500px) {
  .QuelquesChiffres_Contexte{
    margin-top: 300%;
    }
}
</style>


<script>
export default {
  name: 'QuelquesChiffresContexte',
  data(){
      return{
          context: false
      }
  },
  methods:{
  }
}

</script>