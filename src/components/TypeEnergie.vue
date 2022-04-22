<template> 

  <div id ="typeEnergie" class="typeEnergie">

    <div v-if="choix_energie" class="ChoixEnergie">

      <br>
      <br>
      <h2>Quel(s) types(s) d'énergies renouvelables souhaitez-vous?</h2>
      <i>Vous pouvez sélectionner plusieurs ressources ;)</i>
      <br>

      <div class="container">


          <div class="box_portrait">
            <a  @click="choixEnergie('Eolienne')">
              <img src="../assets/SimulationEolienne.jpg" alt="Eol">
                <div class="overlay" id="overlay1">
                  <strong class="text_titre">Énergie Éolienne</strong>
                  <div class="text">Énergie produite à partir de la <strong>force du vent</strong>. 
                  Lorsque le vent souffle, <strong>les forces s'appliquent sur les pales des hélices</strong> et induisent 
                  la rotation du rotor. Un tranformateur vient alors <strong>distibuer l'énergie électrique produite</strong> au 
                  réseau électrique.</div>
                  <br>
                  <br>
                  <img class="gif" src="../assets/wind.gif">
                </div>
              </a>
          </div>

          <div class="box_portrait">
            <a  @click="choixEnergie('Hydrolienne')">
              <img src="../assets/SimulationHydrolienne.jpg" alt="Hydro">
                <div class="overlay" id="overlay2">
                  <strong class="text_titre">Énergie Hydraulique</strong>
                  <div class="text">L'énergie hydraulique est l'énergie fournie par <strong>le mouvement de l'eau.</strong> 
                  Ce mouvement peut être converti en énergie électrique dans une <strong>centrale hydroélectrique.</strong></div>
                  <br>
                  <br>
                  <br>
                  <img class="gif" src="../assets/sea.gif">
                </div>
              </a>
          </div>

          <div class="box_portrait">
            <a  @click="choixEnergie('PanneauPhoto')">
              <img src="../assets/SimulationPV.jpg" alt="PV">
                <div class="overlay" id="overlay3">
                  <strong class="text_titre">Énergie solaire photovoltaïque</strong>
                  <div class="text">L'énergie solaire photovoltaïque est une énergie électrique produite à partir du 
                  <strong>rayonnement solaire</strong> grâce à des panneaux ou des centrales solaires photovoltaïques.</div>
                  <br>
                  <br>
                  <img class="gif" src="../assets/sun.gif">
                </div>
              </a>
          </div>

      </div>

    <div class="valider" v-if="energie_sectionnee===0">
        <a @click="ValiderEnergie">
          <button ref="submit" :class="{ 'apply-shake': shake }" @click="shakeAnimation()" class =" btn-first b1 " > JE VALIDE MON CHOIX </button >
        </a>
        <i id='Attention' class='Attention'>* Il faut sélectionner au moins une ressource !</i>
        <br>
    </div>

    <div class="valider" v-if="energie_sectionnee!=0">
        <a href="#" @click="ValiderEnergie">
          <button ref="submit" :class="{ 'apply-shake': shake }" @click="shakeAnimation()" class =" btn-first b1 " > JE VALIDE MON CHOIX </button >
        </a>
        <i id='Attention' class='Attention'>* Il faut sélectionner au moins une ressource !</i>
        <br>
    </div>
   

  </div>
  
  </div>

    <div id="sectionSimulation">

        <!-- SIMULATION ÉOLIENNE -->
        <div v-if="eol" class="simulationEolienne">
          <SimuEolienne @setevent="setEol"/>
        </div>

        <!-- SIMULATION HYDROLIENNE -->
        <div v-if="hydro" class="simulationHydrolienne">
          <SimuHydrolienne @setevent="setHydro"/>
        </div>

        <!-- SIMULATION PV -->
        <div v-if="pv" class="simulationPV">
          <SimuPV @setevent="setPV" />
        </div>   

        <!-- RESULTAT  -->

        <div class="resultat">
          <div v-if="Resultat" class="Resultat" >
            <Resultat
              :msg1="PuissancePV_an" :msg2="PuissancePV_mois" :msg3="PuissanceEol_an" :msg4="PuissanceEol_mois" :msg5="PuissanceHydro_an" :msg6="nbEolienne" :msg7="nbPanneauPhoto" :msg8="nbHydrolienne"
            />
          </div>
        </div>


    </div>

</template>


<script>
  import SimuEolienne from '@/components/SimuEolienne.vue'
  import SimuHydrolienne from '@/components/SimuHydrolienne.vue'
  import SimuPV from '@/components/SimuPV.vue'
  import Resultat from '@/components/Resultat.vue'


  export default {
    name: 'TypeEnergie',

    components:
    {
      SimuEolienne,
      SimuHydrolienne,
      SimuPV,
      Resultat,
    },
    el: '#app', 
    data() {
      return {

        shake: false,

        choix_energie: true,
        eol: false,
        hydro: false,
        pv:false,

        PuissancePV_an: 0,
        PuissancePV_mois: 0,
        PuissanceHydro_an: 0,
        PuissanceEol_an: 0,
        PuissanceEol_mois: 0,

        EnergiesSelectionnees:[],
        longueur: 0,
        tabE:['Eolienne','Hydrolienne','PanneauPhoto'],
        tabOverlay: ['overlay1','overlay2','overlay3'],
        tabAfficheE:[],
        compteur:0

      }
    },

    mounted() {
      this.$refs.submit.addEventListener("animationend", () => {
        this.shake = false;
      });
    },
    computed:{
      energie_sectionnee(){
        return this.EnergiesSelectionnees.length
      }
    },

    methods: {
      shakeAnimation(){
        this.shake = true;
      },

      choixEnergie(energie){
        var j = 0;
        for (let i = 0; i<3 ; i++){
          if(energie==this.EnergiesSelectionnees[i]){
            j = 1;
          }
        }
        if(j == 1){
          this.EnergiesSelectionnees = this.EnergiesSelectionnees.filter((t) => t !== energie)
          for (let i = 0; i<3 ; i++){
            if(energie==this.tabE[i]){
              document.getElementById(this.tabOverlay[i]).style.removeProperty('opacity')
            }
          }
        }else{
          this.EnergiesSelectionnees.push(energie)
          for (let i = 0; i<3 ; i++){
            if(energie==this.tabE[i]){
              document.getElementById(this.tabOverlay[i]).style.opacity = 1
            }
          }
        }
      },

      ValiderEnergie(){
        this.tabAfficheE[0] = this.eol 
        this.tabAfficheE[1] = this.hydro 
        this.tabAfficheE[2] = this.pv 
        this.longueur = this.EnergiesSelectionnees.length
        //Affiche la première énergie sélectionnée
        if(this.longueur == 0){
          document.getElementById("Attention").style.visibility ="visible"
          this.choix_energie = true
        }
        else{
        for (let i = 0; i<3 ; i++){
          this.show = false,
          this.choix_energie = false
          document.getElementById("typeEnergie").style.display ="none"
          if (this.EnergiesSelectionnees[0]==this.tabE[i]){
            this.tabAfficheE[i] = true
            this.eol= this.tabAfficheE[0]
            this.hydro= this.tabAfficheE[1]
            this.pv= this.tabAfficheE[2]
            this.compteur++ 
            //compteur = 1
          }
        }
        }
      },

      setPV(puis_pv_an, puis_pv_mois, nb_PV){
        //On récupère les données
        this.PuissancePV_an = puis_pv_an
        this.PuissancePV_mois = puis_pv_mois
        this.nbPanneauPhoto = nb_PV
        // this.PV = pv
        this.tabAfficheE[0] = false 
        this.tabAfficheE[1] = false 
        this.tabAfficheE[2] = false
        this.eol = false 
        this.hydro = false 
        this.pv = false 
        //Si 1 énergie a été sélectionnée
        //Affiche le résultat
        if ( this.longueur==1 ){
          this.Resultat = true
        //Si 2 énergies ont été sélectionnées
        }else if ( this.longueur==2 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur == 1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          //soit le résultat (si la deuxième énergie sélectionnée a été affichée)
          }else if(this.compteur == 2){
            this.Resultat = true
          }  
        //Si 3 énergies ont été sélectionnées
        }else if ( this.longueur==3 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur==1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit la troisième énergie sélectionnée
          else if(this.compteur==2){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[2]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit le résultat (si la troisième énergie sélectionnée a été affichée)    
          else if(this.compteur == 3){
            this.Resultat = true
          }      
        }
      },

      setHydro(puis_hydro_an,nb_hydro){
        //On récupère les données
        this.PuissanceHydro_an = puis_hydro_an
        this.nbHydrolienne = nb_hydro
        // this.HYDRO = hydro
        this.tabAfficheE[0] = false 
        this.tabAfficheE[1] = false 
        this.tabAfficheE[2] = false
        this.eol = false 
        this.hydro = false 
        this.pv = false 
        //Si 1 énergie a été sélectionnée
        //Affiche le résultat
        if ( this.longueur==1 ){
          this.Resultat = true
        //Si 2 énergies ont été sélectionnées
        }else if ( this.longueur==2 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur == 1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          //soit le résultat (si la deuxième énergie sélectionnée a été affichée)
          }else if(this.compteur == 2){
            this.Resultat = true
          }  
        //Si 3 énergies ont été sélectionnées
        }else if ( this.longueur==3 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur==1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit la troisième énergie sélectionnée
          else if(this.compteur==2){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[2]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit le résultat (si la troisième énergie sélectionnée a été affichée)    
          else if(this.compteur == 3){
            this.Resultat = true
          }      
        }
      },

      setEol(puis_eol_an, puis_eol_mois, nb_Eol){
        //On récupère les données
        this.PuissanceEol_an = puis_eol_an
        this.PuissanceEol_mois = puis_eol_mois
        this.nbEolienne = nb_Eol
        // this.EOL = eol

        this.tabAfficheE[0] = false 
        this.tabAfficheE[1] = false 
        this.tabAfficheE[2] = false
        this.eol = false 
        this.hydro = false 
        this.pv = false 
        //Si 1 énergie a été sélectionnée
        //Affiche le résultat
        if ( this.longueur==1 ){
          this.Resultat = true
        //Si 2 énergies ont été sélectionnées
        }else if ( this.longueur==2 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur == 1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          //soit le résultat (si la deuxième énergie sélectionnée a été affichée)
          }else if(this.compteur == 2){
            this.Resultat = true
          }  
        //Si 3 énergies ont été sélectionnées
        }else if ( this.longueur==3 ){
          //Affiche : soit la deuxième énergie sélectionnée
          if(this.compteur==1){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[1]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit la troisième énergie sélectionnée
          else if(this.compteur==2){
            for (let i = 0; i<3 ; i++){
              if (this.EnergiesSelectionnees[2]==this.tabE[i]){
                this.tabAfficheE[i] = true
                this.eol= this.tabAfficheE[0]
                this.hydro= this.tabAfficheE[1]
                this.pv= this.tabAfficheE[2]
                this.compteur++
              }
            }
          }
          //soit le résultat (si la troisième énergie sélectionnée a été affichée)    
          else if(this.compteur == 3){
            this.Resultat = true
          }      
        }
      }
    }
  }

</script>


<style>

  .typeEnergie{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    filter: drop-shadow(0 0 1rem #002F00);
    margin: 60px 50px;
  }

  img {
    width: 400px;
    height:300px;
    border-radius :10px;
  }

  .gif{
    width: 190px;
    height:90px;
    border-radius: 5px;
  }

  .overlay {
    position: absolute;
    border-radius: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 400px;
    opacity: 0;
    transition: .5s ease;
    background-color: #014806;
    margin:auto;
  }

  .container {
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
    cursor: pointer;
  }

  .box_portrait {
    position: relative;
    margin:15px;
  }
  
  .box_portrait:hover .overlay {
    opacity: 1;
    border-radius: 10px;
    -webkit-transform:scale(1.05); /* Safari et Chrome */
    -moz-transform:scale(1.05); /* Firefox */
    -ms-transform:scale(1.05); /* Internet Explorer 9 */
    -o-transform:scale(1.05); /* Opera */
    transform:scale(1.05);
  }
  .text_titre{
    color: white;
    position: absolute;
    font-size: 18px;
    top: 14%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .text{
    color: white;
    font-size: 14px;
    position: relative;
    top: 42%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding:20px;
  }
  .Attention{
    visibility:hidden;
    display:block;
    font-weight:bold;
    color:crimson;
  }

  html {
    scroll-behavior: smooth;
  }
.btn-first{
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  font-family: system-ui;
  margin: 5px;
}
.b1 {
    border: 2px solid #f1f1f1;
    background: #f1f1f1;
    color: #1E5221;
}
.b1:hover {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -webkit-transform:scale(1.05); /* Safari et Chrome */
  -moz-transform:scale(1.05); /* Firefox */
  -ms-transform:scale(1.05); /* Internet Explorer 9 */
  -o-transform:scale(1.05); /* Opera */
  transform:scale(1.05);
}

@keyframes shake {
  10%,
  90% {transform: translate3d(-1px, 0, 0);}
  20%,
  80% {transform: translate3d(2px, 0, 0);}
  30%,
  50%,
  70% {transform: translate3d(-4px, 0, 0);}
  40%,
  60% {transform: translate3d(4px, 0, 0);}
}
.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (max-width: 800px) {
  .typeEnergie{
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
  .overlay {
    position: absolute;
    border-radius: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    width: 300px;
    opacity: 0 ;
    background-color: #014806;
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
  .gif{
    display:none;
  }
  .text_titre{
    color: white;
    position: absolute;
    font-size: 17px;
    top: 19%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .text{
    color: white;
    font-size: 13px;
    position: relative;
    top: 58%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding:20px;
  }
  
}

</style>

