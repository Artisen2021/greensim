<template>

  <body class="typeEnergieEOL">




      <br>
      <div class="Encard1">
      <br>
      <div><strong>Eolienne</strong></div>
      <br>
      </div>

    <br>
    <div class="Encard">
        <br>
        <h2 id="bouh">Quel type d'éolienne souhaitez-vous ?</h2>
        <br>
        
        <div class="containerEOL">

        <div class="box_portraitEOL" @click="affiche('eoldom')">
            <img src="../assets/eoldom.jpg" id="eoldom">
              <div class="overlayEOL" id="overlay1">
                <div class="text_titre">Eolienne domestique</div>
                <div class="texte">Pour produire votre propre électricité !</div>
              </div>
        </div>

        <div class="box_portraitEOL" @click="affiche('eolhoriz')">
        <img src="../assets/eolhorizontal.jpg" id="eolhoriz">
        <div class="overlayEOL" id="overlay2">
          <div class="text_titre">Eolienne horizontale</div>
          <div class="texte">Le modèle d'éolienne le plus répandu.</div>
        </div>
        </div>

        <div class="box_portraitEOL" @click="affiche('eoloffsh')">
        <img src="../assets/eoloffshore.jpg" id="eoloff">
        <div class="overlayEOL" id="overlay3">
          <div class="text_titre">Eolienne Offshore</div>
          <div class="texte">Profitez du vent marins !</div>
        </div>
        <br>
        <br>
        </div>
        </div>

    </div>
<div class="Encard">
<br>
    <div class="nbeol">
        <div>
          <h2 class='label' id='nbeol'>Combien d'éoliennes souhaitez-vous ? </h2>
          <input class='input' type='number' min='1' name='email' placeholder="Nombre d'éolienne" v-model="nbEol">
          <br>
          <br>
        </div>        
    </div>
    

<span id="IntEolDom" style="display:inline;">
  <div>
    <h2>Quel sera la hauteur de votre mât ?</h2>
    <form>
        <input v-model="Dom" type="range" name="d" min="2" max="5" step="1" oninput="result4.value=parseInt(d.value)"  />
        <output name="result4">--</output> m
        <div><i class="output" id="RayonDom" >Pour information → Rayon d'une pâle : {{Math.round((Dom*(65/100))*100)/100}} m</i></div>
    </form>
  </div>
</span>

<span id="IntEolHoriz" style="display:none;" >
  <div>
    <h2>Quel sera la hauteur de votre mât ?</h2>
    <form>
        <input  v-model="Horiz" type="range" name="d" min="30" max="70" step="1" oninput="result4.value=parseInt(d.value)"/>
        <output name="result4">--</output> m
        <div><i class="output" id="RayonHoriz" >Pour information → Rayon d'une pâle : {{Math.round((Horiz*(65/100))*100)/100}} m</i></div>
    </form>
  </div>
</span>

<span id="IntEolOff" style="display:none;" >
  <div>
    <h2>Quel sera la hauteur de votre mât ?</h2>
    <form>
        <input  v-model="Offsh" type="range" name="d" min="30" max="70" step="1" oninput="result4.value=parseInt(d.value)"/>
        <output name="result4">--</output> m
        <div><i class="output" id="RayonOff">Pour information → Rayon d'une pâle : {{Math.round((Offsh*(65/100))*100)/100}} m</i></div>
    </form>
    
  </div>
</span>
<br>
</div>

<div class="Encard">
<br>
<h2 id="phrase1" class="phrase1">Dans quelle région souhaitez-vous implanter votre éolienne ?</h2>
<h2 id="phrase2" class="phrase2">Dans quelle région du littoral français souhaitez-vous implanter votre éolienne ?</h2>
      <div id="mapEOL" class="mapEOL">
        <RegionsEol @setevent="setIrradiation"/>
      </div>
      <div id="mapOFFSH" class="mapOFFSH">
        <RegionsEolOffsh @setevent="setIrradiation"/>
      </div>
      <div id="mapEOL_mobile" class="mapEOL_mobile">
        <select class="custom-select" v-model="map_mobile" @click="SelectRegionEOL" id="SelectRegion">
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
      <div id="mapOFFSH_mobile" class="mapOFFSH_mobile">
        <select class="custom-select" v-model="map_mobile" @click="SelectRegionOFFSH" id="SelectRegion">
        <option >Hauts-de-France</option>
        <option >Normandie</option>
        <option >Bretagne</option>
        <option >Pays De la Loire</option>
        <option >Nouvelle Aquitaine</option>
        <option >Occitanie</option>
        <option >Provence-Alpes-Côte d'Azur</option>
        <option >Corse</option>
      </select>
      </div>
<br>
</div>

<a href="#">
  <span id="ButtDom" style="display:inline;">
      <button class =" btn" id="ValiderDOM" @click="ValiderEol('RayonDom')" disabled>Je valide mon choix</button>
  </span>
  <span id="ButtHoriz" style="display:none;">
      <button class =" btn" id="ValiderHORIZ" @click="ValiderEol('RayonHoriz')" disabled>Je valide mon choix</button>
  </span>
  <span id="ButtOff" style="display:none;">  
      <button class =" btn" id="ValiderOFFSH" @click="ValiderEol('RayonOff')" disabled>Je valide mon choix</button>
  </span>
</a>
  <br>
  <br>
  </body>

</template>


<script>
import RegionsEolOffsh from './RegionsEolOffsh.vue'
import RegionsEol from './RegionsEol.vue'
export default{
  name: 'SimuEolienne',
  components:
  {
    RegionsEolOffsh,
    RegionsEol,
  },
  emits: ['setevent'],
  data(){
    return{
      irradiation_an: 0,
      irradiation_mois: 0,
      hauteurmat : 0,
      Dom : 0,
      Horiz :0,
      Offsh :0,
      nbEol: 0,
      map_mobile:'',

      Rendement:0,
      PuissanceEol_an: 0,
      PuissanceEol_mois: [],
      eol : true,

      EolSelectionnees:[],
      tabE:['EolDom','EolHoriz','EolOff'],
      tabOverlay:['overlay1','overlay2','overlay3'],

    }
  },
  methods : {

affiche(typeEolienne){
      if(typeEolienne=='eoldom'){
        document.getElementById("IntEolDom").style.display = "inline";
        document.getElementById("IntEolHoriz").style.display = "none";
        document.getElementById("IntEolOff").style.display = "none";
        document.getElementById("ButtDom").style.display = "inline";
        document.getElementById("ButtHoriz").style.display = "none";
        document.getElementById("ButtOff").style.display = "none";
        document.getElementById("overlay1").style.opacity = 1
        document.getElementById("overlay2").style.removeProperty('opacity')
        document.getElementById("overlay3").style.removeProperty('opacity')
        document.getElementById("phrase1").style.display="block";
        document.getElementById("phrase2").style.display="none";
        if(window.matchMedia("(max-width: 800px)").matches){
          document.getElementById("mapOFFSH_mobile").style.display="none";
          document.getElementById("mapEOL_mobile").style.display="block";
        }
        else if(window.matchMedia("(min-width: 800px)").matches){
          document.getElementById("mapOFFSH").style.display="none";
          document.getElementById("mapEOL").style.display="block";
        }
        if ( (this.nbEol!=0) && (this.Dom!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
      }else if(typeEolienne=='eolhoriz'){
        document.getElementById("IntEolDom").style.display = "none";
        document.getElementById("IntEolHoriz").style.display = "inline";
        document.getElementById("IntEolOff").style.display = "none";
        document.getElementById("ButtDom").style.display = "none";
        document.getElementById("ButtHoriz").style.display = "inline";
        document.getElementById("ButtOff").style.display = "none";
        document.getElementById("overlay1").style.removeProperty('opacity')
        document.getElementById("overlay2").style.opacity = 1
        document.getElementById("overlay3").style.removeProperty('opacity')
        document.getElementById("phrase1").style.display="block";
        document.getElementById("phrase2").style.display="none";
        if(window.matchMedia("(max-width: 800px)").matches){
          document.getElementById("mapOFFSH_mobile").style.display="none";
          document.getElementById("mapEOL_mobile").style.display="block";
        }
        else if(window.matchMedia("(min-width: 800px)").matches){
          document.getElementById("mapOFFSH").style.display="none";
          document.getElementById("mapEOL").style.display="block";
        }
        if ( (this.nbEol!=0) && (this.Horiz!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
      }else if(typeEolienne=='eoloffsh'){
        document.getElementById("IntEolDom").style.display = "none";
        document.getElementById("IntEolHoriz").style.display = "none";
        document.getElementById("IntEolOff").style.display = "inline";
        document.getElementById("ButtDom").style.display = "none";
        document.getElementById("ButtHoriz").style.display = "none";
        document.getElementById("ButtOff").style.display = "inline";
        document.getElementById("overlay1").style.removeProperty('opacity')
        document.getElementById("overlay2").style.removeProperty('opacity')
        document.getElementById("overlay3").style.opacity = 1;
        document.getElementById("phrase1").style.display="none";
        document.getElementById("phrase2").style.display="block";
        if(window.matchMedia("(max-width: 800px)").matches){
          document.getElementById("mapOFFSH_mobile").style.display="block";
          document.getElementById("mapEOL_mobile").style.display="none";
        }
        else if(window.matchMedia("(min-width: 800px)").matches){
          document.getElementById("mapOFFSH").style.display="block";
          document.getElementById("mapEOL").style.display="none";
        }
        if ( (this.nbEol!=0) && (this.Offsh!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
      }
    },

  ValiderEol(Rayon){
    if(Rayon=='RayonDom'){
      this.PuissanceEol_an=((((1.2*(Math.pow(this.Dom*(65/100),2)*3.14)*(Math.pow(this.irradiation_an/3.6,3)))*(16/27))*this.nbEol)*365*24)/1000;
      //Calcul de la puissance sans l'irrandiance (sera utiliser dans ResultatPV pr le calcul en fonction du mois)
      for (let i=0; i<12; i++){
        this.PuissanceEol_mois[i]=(((1.2*(Math.pow(this.Dom*(65/100),2)*3.14)*(Math.pow(this.irradiation_mois[i]/3.6,3)))*(16/27))*this.nbEol*24)/1000;
      }
      //Transmet les données au composant parent => TypeEnergie
      this.$emit('setevent', this.PuissanceEol_an, this.PuissanceEol_mois, this.nbEol, this.eol)

      }else if(Rayon=='RayonHoriz'){
        this.PuissanceEol_an=((((1.2*(Math.pow(this.Horiz*(65/100),2)*3.14)*(Math.pow(this.irradiation_an/3.6,3)))*(16/27))*this.nbEol)*365*24)/1000;
      //Calcul de la puissance sans l'irrandiance (sera utiliser dans ResultatPV pr le calcul en fonction du mois)
      for (let i=0; i<12; i++){
        this.PuissanceEol_mois[i] =(((1.2*(Math.pow(this.Horiz*(65/100),2)*3.14)*(Math.pow((this.irradiation_mois[i]/3.6),3)))*(16/27))*this.nbEol*24)/1000;
      }
      //Transmet les données au composant parent => TypeEnergie
      this.$emit('setevent', this.PuissanceEol_an, this.PuissanceEol_mois, this.nbEol, this.eol)

      } else if(Rayon=='RayonOff'){
      this.PuissanceEol_an =((((1.2*(Math.pow(this.Offsh*(65/100),2)*3.14)*(Math.pow(this.irradiation_an/3.6,3)))*(16/27))*this.nbEol)*365*24)/1000;
      //Calcul de la puissance sans l'irrandiance (sera utiliser dans ResultatPV pr le calcul en fonction du mois)
      for (let i=0; i<12; i++){
        this.PuissanceEol_mois[i] =(((1.2*(Math.pow(this.Offsh*(65/100),2)*3.14)*(Math.pow((this.irradiation_mois[i]/3.6),3)))*(16/27))*this.nbEol*24)/1000;
      }
      //Transmet les données au composant parent => TypeEnergie
      this.$emit('setevent', this.PuissanceEol_an, this.PuissanceEol_mois, this.nbEol, this.eol)
    }
    },
    setIrradiation(Irr_an,Irr_mois){
      //On récupère les données
      this.irradiation_an = Irr_an
      this.irradiation_mois = Irr_mois
        if ( (this.nbEol!=0) && (this.Dom!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Horiz!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderHORIZ").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Offsh!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderOFFSH").disabled = false
        }
    },

    SelectRegionEOL(){
        if(this.map_mobile=='Hauts-de-France' ){
           this.irradiation_an = 24
           this.irradiation_mois = [24,24,24.5,24,25,23.5,23,24,24,24.5,23.5,24]
        }else if(this.map_mobile=='Île-de-France'){ 
           this.irradiation_an = 19,5
           this.irradiation_mois = [19,19,19.5,18.5,18,18.5,18,19,19.5,19,19.5,19.5]
         }else if(this.map_mobile=='Grand Est'){ 
           this.irradiation_an = 16,6
           this.irradiation_mois = [16.6,16,16,17,17,17,16.5,16.6,16,16,15.5,16]
         }else if(this.map_mobile=='Normandie'){ 
           this.irradiation_an = 22,25
           this.irradiation_mois = [22,22.5,23,22,22.5,21.5,22,23,23.5,22.5,23,22.2]
        }else if(this.map_mobile=='Bretagne'){
           this.irradiation_an = 23,5
           this.irradiation_mois = [24,24,23.5,23,22.5,23,23.5,24,24.5,25,24,24]
        }else if(this.map_mobile=='Centre-Val de Loire'){
           this.irradiation_an = 18
           this.irradiation_mois = [18,18,19,19,18,17.5,18,18.5,17,17.5,18,18.9]
        }else if(this.map_mobile=='Pays De la Loire'){
           this.irradiation_an = 21,5
           this.irradiation_mois = [22,21.5,21,22,22.5,23,22,21.5,20,20.5,21,21.5]
        }else if(this.map_mobile=='Bourgogne-Franche-Comté'){
           this.irradiation_an = 15,5
           this.irradiation_mois = [15.5,15.5,16,16,16.5,15,14.5,14,14,14.5,15,15.5]
        }else if(this.map_mobile=='Nouvelle Aquitaine'){
           this.irradiation_an = 15
           this.irradiation_mois = [15,15,15,14.5,14,14,14.5,15,15,15.5,15.5,15]
         }else if(this.map_mobile=='Auvergne-Rhone-Alpes'){
           this.irradiation_an = 17,25
           this.irradiation_mois = [17.25,17,17,16.6,17,18,17.9,17.5,17,16.7,17,17.25]
        }else if(this.map_mobile=='Occitanie'){
           this.irradiation_an = 18,5
           this.irradiation_mois = [18,18.25,19,19,18.9,18,17.5,17.9,17,18,19,19]
        }else if(this.map_mobile=="Provence-Alpes-Côte d'Azur"){
           this.irradiation_an = 18,5
           this.irradiation_mois = [18,19,19,18.5,19,18,17.9,17.5,18,19,18.5,18.5]
        }else if(this.map_mobile=='Corse'){
           this.irradiation_an = 18
           this.irradiation_mois = [18,18.4,19,18,17.5,18,18.5,19,19.5,18,18,18]
        }
        if ( (this.nbEol!=0) && (this.Dom!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Horiz!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderHORIZ").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Offsh!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderOFFSH").disabled = false
        }
    },

    SelectRegionOFFSH(){
        if(this.map_mobile=='Hauts-de-France' ){
           this.irradiation_an = 24
           this.irradiation_mois = [24,24,24.5,24,25,23.5,23,24,24,24.5,23.5,24]
         }else if(this.map_mobile=='Normandie'){ 
           this.irradiation_an = 22,25
           this.irradiation_mois = [22,22.5,23,22,22.5,21.5,22,23,23.5,22.5,23,22.2]
        }else if(this.map_mobile=='Bretagne'){
           this.irradiation_an = 23,5
           this.irradiation_mois = [24,24,23.5,23,22.5,23,23.5,24,24.5,25,24,24]
        }else if(this.map_mobile=='Pays De la Loire'){
           this.irradiation_an = 21,5
           this.irradiation_mois = [22,21.5,21,22,22.5,23,22,21.5,20,20.5,21,21.5]
        }else if(this.map_mobile=='Nouvelle Aquitaine'){
           this.irradiation_an = 15
           this.irradiation_mois = [15,15,15,14.5,14,14,14.5,15,15,15.5,15.5,15]
         }else if(this.map_mobile=='Occitanie'){
           this.irradiation_an = 18,5
           this.irradiation_mois = [18,18.25,19,19,18.9,18,17.5,17.9,17,18,19,19]
        }else if(this.map_mobile=="Provence-Alpes-Côte d'Azur"){
           this.irradiation_an = 18,5
           this.irradiation_mois = [18,19,19,18.5,19,18,17.9,17.5,18,19,18.5,18.5]
        }else if(this.map_mobile=='Corse'){
           this.irradiation_an = 18
           this.irradiation_mois = [18,18.4,19,18,17.5,18,18.5,19,19.5,18,18,18]
        }
        if ( (this.nbEol!=0) && (this.Dom!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderDOM").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Horiz!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderHORIZ").disabled = false
        }
        if ( (this.nbEol!=0) && (this.Offsh!=0) && (this.irradiation_an!=0) ){
          document.getElementById("ValiderOFFSH").disabled = false
        }
    },

    test(){
      document.getElementById("bouh").style.display = "none";
    }
  }
}

</script>

<style scoped >
.typeEnergieEOL{
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

h2{
    font-size: 20px;
    font-family: Arial, sans-serif;
  }

strong{
    font-size: 30px;
    font-family: Arial, sans-serif;
  }

input{
  max-width: 400px;
  min-width: 180px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
  }

img {
    width: 400px;
    height:250px;
    border-radius:25px
  }

.pointer {cursor: pointer;}

.overlayEOL{
    position: absolute;
    border-radius: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 250px;
    width: 400px;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .containerEOL{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
    cursor: pointer;
  }

  .box_portraitEOL{
    position: relative;
    margin:15px;
  }

  .box_portraitEOL:hover .overlayEOL {
    opacity: 1;
    border-radius: 25px;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
  }

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.mapEOL{
    display:block;
  }

.mapOFFSH{
    display:none;
  }
.mapEOL_mobile{
  display:none;
}
.mapOFFSH_mobile{
  display:none;
}

.phrase1{
  display:block;
}

.phrase2{
  display:none;
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

input[type=range] {
  height: 34px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background:transparent;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 1px 1px 1px #17690B;
  background: #17690B;
  border-radius: 5px;
  border: 1px solid #17690B;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 26px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #17690B;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 1px 1px 1px #17690B;
  background: #17690B;
  border-radius: 5px;
  border: 1px solid #17690B;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 26px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  transition: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #17690B;
  border: 1px solid #17690B;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #17690B;
}
input[type=range]::-ms-fill-upper {
  background: #17690B;
  border: 1px solid #17690B;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #17690B;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 26px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #17690B;
}
input[type=range]:focus::-ms-fill-upper {
  background: #17690B;
}

  @media (max-width: 800px) {

  .typeEnergieEOL{
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
    margin:auto;
  }

  .mapEOL{
    display: none;
  }
  .mapOFFSH{
    display: none;
  }
  .mapEOL_mobile{
  display:block;
  }
  .mapOFFSH_mobile{
  display:none;
  }
  h2{
    font-size: 18px;
    margin:20px;
  }
  strong{
    font-size: 20px;
  }
  .overlayEOL {
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
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .box_portraitEOL:hover .overlayEOL {
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




