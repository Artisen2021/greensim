<template>

    <body class="typeEnergiePV">

    <div class="simulationPV">
      <br>
      <div class="Encard1">
      <br>
      <div><strong>Panneau photovoltaïque</strong></div>
      <br>
      </div>

      <br>
      <div class="Encard">
      <br>
      <h2>Quel type de cellules photovoltaïques souhaitez-vous?</h2>

      <div class="container">

        <div class="box_portrait" @click="choixCellules('Sil_mono')">
            <img src="../assets/PVmonocristallin.jpg" id="Sil_mono" class="image">
              <div class="overlay" id="overlay1">
                <div class="text_titre">Silicium monocristallin</div>
                <div class="texte">Discret et esthétique,</div>
                <div class="texte">Sensible à la température,</div>
                <div class="texte">Parfait pour les régions peu ensoleillées.</div>
              </div>
        </div>

        <div class="box_portrait" @click="choixCellules('Sil_poly')">
        <img src="../assets/PVpolycristallin.jpg" id="Sil_poly" class="image">
        <div class="overlay" id="overlay2">
          <div class="text_titre">Silicium polycristallin</div>
          <div class="texte">Peu sensible à la température,</div>
          <div class="texte">Parfait pour les régions ensoleillées.</div>
        </div>
        </div>

        <div class="box_portrait" @click="choixCellules('CIS')">
        <img src="../assets/PVcis.jpg" id="CIS" class="image">
        <div class="overlay" id="overlay3">
          <div class="text_titre">Les cellules au CIS</div>
          <div class="texte">Bonne performance à faible luminosité,</div>
          <div class="texte">Stabilité à haute température,</div>
          <div class="texte">Fonctionne avec le panneau à l'ombre.</div>
        </div>
        </div>

        <div class="box_portrait" @click="choixCellules('CdTe')">
        <img src="../assets/PVCdTe.jpg" id="CdTe" class="image">
        <div class="overlay" id="overlay4">
          <div class="text_titre">Les cellules au CdTe</div>
          <div class="texte">Adapté au climat chaud et humide,</div>
          <div class="texte">Faible empreinte carbone à la fabrication.</div>
        </div>
        </div>

        </div>
        <br>
        </div>

      <div class="Encard">

      <div class="container">
        <div class="box_portrait">
          <br>
      <h2 >Combien de panneaux souhaitez-vous ? </h2>
      <input type="number" min="1" v-model="NbPV" placeholder="Entrer votre nombre">
          </div>
          <div class="box_portrait">
          <br>
          <h2>Quelle taille de panneaux dites-nous ? </h2>
      <select class="custom-select" v-model="TaillePV" @click="addTaillePV" id="ListeTaille">
        <option >Petit</option>
        <option >Moyen</option>
        <option >Grand</option>
      </select>
          </div>
      </div>
    


      <div class="container">
        <div class="box_portrait">
            <h2>Quelle est l'inclinaison de votre toit ?</h2>
            <select class="custom-select" v-model="Inclinaison" @click="addInclinaison" id="ListeInclinaison">
              <option >0</option>
              <option >15</option>
              <option >25</option>
              <option >35</option>
              <option >50</option>
              <option >70</option>
              <option >90</option>
            </select>
            <br>
            <br>
          </div>
          <div class="box_portrait">
            <h2>Quelle est l'orientation de votre toit?</h2>
            <select class="custom-select" v-model="Orientation" @click="addOrientation" id="ListeOrientation">
              <option >Est</option>
              <option >Sud-est</option>
              <option >Sud</option>
              <option >Sud-ouest</option>
              <option >Ouest</option>
            </select>
          </div>
      </div>
      <br>
      <br>
      </div>

      <div class="Encard">
      <br>
      <h2 id="test">Dans quelle région souhaitez-vous implanter votre panneau solaire?</h2><br>
      <div id="map" class="map">
        <RegionsPV @setevent="setIrradiation"></RegionsPV>
      </div>
      <div id="map_mobile" class="map_mobile">
        <select class="custom-select" v-model="map_mobile" @click="SelectRegion" id="SelectRegion">
        <option >Hauts-de-France</option>
        <option >Île-de-France</option>
        <option >Grand Est</option>
        <option >Normandie</option>
        <option >Bretagne</option>
        <option >Centre-Val de Loire</option>
        <option >Pays De la Loire</option>
        <option >Bourgogne-Franche-Comté</option>
        <option >Nouvelle Aquitaine</option>
        <option >Auvergne-Rhone-Alpes</option>
        <option >Occitanie</option>
        <option >Provence-Alpes-Côte d'Azur</option>
        <option >Corse</option>
      </select>
      </div>
      <br>
      </div>

      <a href="#">
        <button  id="ValiderPV" class =" btn" @click="ValiderPV" :disabled="(Rendement===0) || (NbPV===0) || (TaillePV2===0) || (Correction===0) || (irradiation_an===0)">Je valide mon choix</button>
      </a>


    </div>
    <br> 

    </body>

</template>



<script>
import RegionsPV from './RegionsPV.vue'
export default {
  name: 'SimuPV',
  components:
  {
    RegionsPV
  },
  emits: ['setevent'],
  data() {
    return {
      Rendement:0,
      NbPV:'',
      TaillePV:'',
      TaillePV2:0,
      Inclinaison:0,
      Orientation:'',
      map_mobile:'',
      Correction: 0,
      irradiation_an: 0,
      irradiation_mois: 0,
      PuissancePV_an: 0,

      pv : true,

      PuissancePV_mois:[],
      FacteurInclinaison: [0,15,25,35,50,70,90],
      FacteurOrientation: ['Est','Sud-est','Sud','Sud-ouest','Ouest'],
      FacteurCorrection: [
        [0.88,0.87,0.85,0.83,0.77,0.65,0.5],
        [0.88,0.93,0.95,0.95,0.92,0.81,0.64],
        [0.88,0.96,0.99,1,0.98,0.87,0.68],
        [0.88,0.93,0.95,0.95,0.92,0.81,0.64],
        [0.88,0.87,0.85,0.82,0.76,0.65,0.5]
      ],
    }
  },
  methods:{
    choixCellules(typeCellules){
      if(typeCellules=='Sil_mono'){
        this.Rendement = 0.16;
        document.getElementById("overlay1").style.opacity = 1
        document.getElementById("overlay2").style.removeProperty('opacity')
        document.getElementById("overlay3").style.removeProperty('opacity')
        document.getElementById("overlay4").style.removeProperty('opacity')
      }else if(typeCellules=='Sil_poly'){
        this.Rendement = 0.13;
        document.getElementById("overlay1").style.removeProperty('opacity')
        document.getElementById("overlay2").style.opacity = 1
        document.getElementById("overlay3").style.removeProperty('opacity')
        document.getElementById("overlay4").style.removeProperty('opacity')
      }else if(typeCellules=='CIS'){
        this.Rendement = 0.1;
        document.getElementById("overlay1").style.removeProperty('opacity')
        document.getElementById("overlay2").style.removeProperty('opacity')
        document.getElementById("overlay3").style.opacity = 1
        document.getElementById("overlay4").style.removeProperty('opacity')
      }else if(typeCellules=='CdTe'){
        this.Rendement = 0.8;
        document.getElementById("overlay1").style.removeProperty('opacity')
        document.getElementById("overlay2").style.removeProperty('opacity')
        document.getElementById("overlay3").style.removeProperty('opacity')
        document.getElementById("overlay4").style.opacity = 1
      }
    },
      addTaillePV(){
      if(this.TaillePV=='Petit'){
        this.TaillePV2=1.28
      }else if(this.TaillePV=='Moyen'){
        this.TaillePV2=1.65
      }else if(this.TaillePV=='Grand'){
        this.TaillePV2=2
      }
    },
    addInclinaison(){
      for (let i=0; i<=6; i++){
        for (let j=0; j<=4; j++){
          if(this.Inclinaison==this.FacteurInclinaison[i] && this.Orientation==this.FacteurOrientation[j]){
            this.Correction = this.FacteurCorrection [j][i]
          }
        }
      }
    },
    addOrientation(){
      for (let i=0; i<=6; i++){
        for (let j=0; j<=4; j++){
          if( this.Inclinaison==this.FacteurInclinaison[i] && this.Orientation==this.FacteurOrientation[j]){
            this.Correction = this.FacteurCorrection [j][i]
          }
        }
      }
    },
    setIrradiation(Irr_an,Irr_mois){
      //On récupère les données
      this.irradiation_an = Irr_an
      this.irradiation_mois = Irr_mois
    },
    ValiderPV(){
      this.PuissancePV_an = this.Rendement * this.Correction * this.NbPV * this.TaillePV2 * this.irradiation_an
      for (let i=0; i<12; i++){
        this.PuissancePV_mois[i] = this.Rendement * this.Correction * this.NbPV * this.TaillePV2 * this.irradiation_mois[i]
      }
      //Transmet les données au composant parent => TypeEnergie
      this.$emit('setevent', this.PuissancePV_an, this.PuissancePV_mois, this.NbPV)
    },

    SelectRegion(){
        if(this.map_mobile=='Hauts-de-France' ){
           this.irradiation_an = 1150
           this.irradiation_mois = [0.9,1.56,2.56,3.88,4.84,5.05,5.05,4.49,3.04,1.84,1.04,0.66]
        }else if(this.map_mobile=='Île-de-France'){ 
           this.irradiation_an = 1300
           this.irradiation_mois = [1.04,1.73,2.78,3.95,5.04,5.39,5.36,4.79,3.39,2.04,1.2,0.83]
         }else if(this.map_mobile=='Grand Est'){ 
           this.irradiation_an = 1300
           this.irradiation_mois = [1.09,1.84,2.92,4.11,5.01,5.47,5.46,4.74,3.34,1.95,1.14,0.85]
         }else if(this.map_mobile=='Normandie'){ 
           this.irradiation_an = 1300
           this.irradiation_mois = [0.94,1.63,2.64,3.88,4.9,5.27,5.19,4.63,3.21,1.93,1.12,0.77]
        }else if(this.map_mobile=='Bretagne'){
           this.irradiation_an = 1450
           this.irradiation_mois = [0.95,1.61,2.71,3.99,5.07,5.47,5.32,4.62,3.44,1.97,1.19,0.82]
        }else if(this.map_mobile=='Centre-Val de Loire'){
           this.irradiation_an = 1450
           this.irradiation_mois = [1.11,1.81,2.99,4.06,5.09,5.57,5.57,4.99,3.62,2.1,1.28,0.9]
        }else if(this.map_mobile=='Pays De la Loire'){
           this.irradiation_an = 1450
           this.irradiation_mois = [1.07,1.79,2.92,4.04,5.02,5.57,5.47,4.9,3.62,2.14,1.3,0.9]
        }else if(this.map_mobile=='Bourgogne-Franche-Comté'){
           this.irradiation_an = 1450
           this.irradiation_mois = [1.16,1.92,3.09,4.15,5.12,5.56,5.71,5,3.55,2.12,1.28,0.94]
        }else if(this.map_mobile=='Nouvelle Aquitaine'){
           this.irradiation_an = 1600
           this.irradiation_mois = [1.6,2.44,3.67,4.33,5.09,5.38,5.56,5.01,4.11,2.6,1.71,1.37]
         }else if(this.map_mobile=='Auvergne-Rhone-Alpes'){
           this.irradiation_an = 1600
           this.irradiation_mois = [1.36,2.15,3.39,4.22,5.15,5.87,6.17,5.28,3.91,2.33,1.44,1.11]
        }else if(this.map_mobile=='Occitanie'){
           this.irradiation_an = 1750
           this.irradiation_mois = [1.63,2.51,3.78,4.52,5.34,5.7,6.0,5.34,4.28,2.72,1.74,1.39]
        }else if(this.map_mobile=="Provence-Alpes-Côte d'Azur"){
           this.irradiation_an = 1900
           this.irradiation_mois = [1.86,2.88,4.25,5.19,6.29,7.18,7.22,6.11,4.66,2.82,2.01,1.58]
        }else if(this.map_mobile=='Corse'){
           this.irradiation_an = 1900
           this.irradiation_mois = [1.82,2.73,3.99,4.94,6.16,7.13,7.35,6.12,4.68,3.0,1.88,1.5]
        }
    },

  }
}
</script>


<style scoped>

  strong{
    font-size: 30px;
    font-family: Arial, sans-serif;
  }
  img {
    width: 300px;
    height:200px;
    border-radius:25px
  }

  input{
  max-width: 400px;
  min-width: 180px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
  }

  h2{
    font-size: 20px;
    font-family: Arial, sans-serif;
  }

  .typeEnergiePV{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    filter: drop-shadow(0 0 1rem #002F00);
    height: auto;
    margin: 60px 50px;
  }

  .Encard1{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    height: auto;
    margin: 15px 25px;
  }

  .Encard{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    height: auto;
    margin: 15px 25px;
  }

  .container{
    display: inline-flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .box_portrait {
    position: relative;
  }

  .map{
    display:block;
  }
  .map_mobile{
    display:none;
  }

  .overlay {
    position: absolute;
    border-radius: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    width: 300px;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255, 255, 255, 0.5);;
    margin:auto;
  }

  .box_portrait:hover .overlay {
    opacity: 1;
    border-radius: 25px;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
  }

  .text_titre{
    color: black;
    opacity:1;
    font-size:20px;
    font-weight: 600;
    top:25%
  }

  .texte{
    color: black;
    font-size: 16px;
    position: relative;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  th {
  padding:5px 50px 5px;
  }

.custom-select {
  max-width: 400px;
  min-width: 180px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
}
  .btn{
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  font-family: system-ui;
  margin: 5px;
  border: 2px solid #f1f1f1;
  background: #f1f1f1;
  color: #1E5221;
  }
  
  @media (max-width: 800px) {
  .typeEnergiePV{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    filter: drop-shadow(0 0 1rem #002F00);
    margin: 20px 20px;
  }
  img {
    width: 300px;
    height:200px;
    border-radius :10px;
  }
  .Encard{
    background-color: rgba(255, 255, 250, 0);
  }
  .map{
    display: none;
  }
  .map_mobile{
    display:block;
  }
  h2{
    font-size: 18px;
    margin:20px;
  }
  strong{
    font-size: 20px;
  }
  .overlay {
    position: absolute;
    border-radius: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    width: 300px;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255, 255, 255, 0.5);;
    margin:auto;
  }
  .box_portrait:hover .overlay {
    opacity: 0;
    border-radius: 10px;
    -webkit-transform:scale(1); /* Safari et Chrome */
    -moz-transform:scale(1); /* Firefox */
    -ms-transform:scale(1); /* Internet Explorer 9 */
    -o-transform:scale(1); /* Opera */
    transform:scale(1);
  
  }
  
}


</style>