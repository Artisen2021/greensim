<template>

    <div class="quelques_chiffres_alarmants">

      <h1>Quelques chiffres</h1>
      <br><br><br>

        <div class="container_chiffres_alarmants">
          <div class="box">
              <img src="../assets/QuelquesChiffresAlarmants.jpg">
          </div>
          <div class="box">
              <div class="texte">
                  <h2>01. Changement climatique</h2>
                  <p>Depuis la période préindustrielle (1700-1800), la concentration de gaz carbonique CO2 a augmenté de <important>50 %</important>.
                  Depuis 1860, la température moyenne à la surface de la Terre a augmenté de<important> 0,6°C</important> et devrait encore augmenter entre 1,5 et 6°C d'ici 2100.</p>
                  </div>
              <div class="texte">
                <br>
                <h2>02. Augmentation de la demande d'énergie</h2>
                <p>Au début du 21e siècle, la consommation énergétique mondiale était d'environ une dizaine de Gtep et devrait atteindre <important>15 à 25 Gtep</important> en 2050. 
                Cette augmentation est dûe à la croissance économique, à l'augmentation de la population mondiale et aux besoins croissants des pays en voie de développement.</p>
              </div>
              <div class="texte">
                <br>
                <h2>03. Limitation des réserves de combustible fossile</h2>
                <p>Le rapport R/P (réserves connues sur production) annuelle du pétrole est d'environ <important>40 ans</important> tandis qu'il est de <important>17 ans</important> pour le gaz naturel si l'on voulait remplacer le pétrole et le charbon par le gaz pour réduire les émissions à effet de serre. 
                La demande énergétique jusqu'en 2050 pourrait continuer à être satisfaite en majorité par des matières premières énergétiques non renouvelables, ce qui aurait des conséquences dramatiques sur le climat et l'environnement. </p>
              </div>
              <div class="texte">
                <br>
                <h2>04. Faible rendement globale du système énergétique</h2>
                <p>En 2008, pour satisfaire les besoins français d'énergie finale, le rendement était de <important>63 %</important>. 
                Ces pertes sont associées aux mauvais usages de l'énergie finale (faible isolation des bâtiments…)</p>
              </div>
          </div>
        </div>

    </div>

</template>


<style scoped>
.quelques_chiffres_alarmants{
  margin-top: 5%;
}
h1{
    font-family: system-ui;
    padding-left: 10% ;
}
h2{
  font-family: system-ui;
  font-weight: lighter;
}
p{
    font-family: system-ui;
    font-weight: lighter;
    font-size: 14px;
}
important{
  font-weight: bold;
}
img{
  width: 60%;
  height:auto;
}
.container_chiffres_alarmants{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
}
.box{
  flex: 25%;
}
.texte{
  text-align: start;
  padding-right: 35%;
}
@media (max-width: 800px) {
  .box {
    flex: 100%;
  }
  .texte{
    padding: 5%;
  }
} 
</style>



<script>
export default {
  name: 'QuelquesChiffresAlarmants'
}
</script>