<template>

<div class="Resultat">

    <!--RESULTAT DU RENDEMENT-->

    <div id="RESULTAT">

            <br>
            <div class="encard1 encard-Resultat">
                    <div class="titre"><strong>Résultats</strong></div>
            </div>

        <div class="encard encard-Resultat">

            <div>
                <p>Sur quelle durée souhaitez-vous obtenir l'énergie totale de votre/vos ressource(s) ?</p>
                <form>
                    <input type="radio" name="duree" id="Année" @click="Affiche('Année')" checked>
                    <label for="Année">Année</label><br>
                    <input type="radio" name="duree" id="Mois" @click="Affiche('Mois')">
                    <label for="Mois">Mois</label><br>
                    <input type="radio" name="duree" id="Journée" @click="Affiche('Journée')">
                    <label for="Journée">Journée</label><br>
                </form> 
            </div>


            <!--RESULTAT DU RENDEMENT SUR L'ANNEE-->

            <div v-if="annee" id="resultat_annee">

                <div v-if="DETAILS_AN">
                <br>
                    <i>Détail de la/des ressource(s) choisie(s) :</i>
                </div>

                <div v-if="DETAILS_PV_AN" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_pv_an')">Panneau Photovoltaïque</button>
                    <div v-if="detailsPVan">
                        <GraphPV v-if="GraphPV"/>
                        <p>Energie totale d'un PV répondant aux critères sélectionnés en un an : {{Math.round((msg1/msg7)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg7}} PV répondant aux critères sélectionnés en un an : {{Math.round(msg1*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="DETAILS_EOL_AN" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_eol_an')">Eolienne</button>
                    <div v-if="detailsEOLan">
                        <GraphEol v-if="GraphEol"/>
                        <p>Energie totale d'une éolienne répondant aux critères sélectionnés en un an : {{Math.round((msg3/msg6)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg6}} éolienne(s) répondant aux critères sélectionnés en un an : {{Math.round(msg3*100)/100}} kWh</strong></p>  
                    </div>      
                </div>

                <div v-if="DETAILS_HYDRO_AN" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_hydro_an')">Hydrolienne</button>
                    <div v-if="detailsHYDROan">
                        <GraphHYDRO v-if="GraphHYDRO"/>
                        <p>Energie totale d'une hydrolienne répondant aux critères sélectionnés en un an : {{Math.round((msg5/msg8)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg8}} hydrolienne(s) répondant aux critères sélectionnés en un an : {{Math.round(msg5*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="RDMT_AN">
                    <br>
                    <h1> Rendement énergétique total sur l'Année : {{Math.round((msg1 + msg3 + msg5)*100)/100}} kWh </h1>
                </div>

            </div>
        
        

                <!--RESULTAT DU RENDEMENT SUR UN MOIS-->

            <div v-if="mois">
                
                <br>
                <p class="text-co2" v-if="SELECTION_MOIS_MOIS">Sélectionnez votre mois :</p>

                <select class="custom-select" v-model="MOIS" @click="selectMois(MOIS)">
                    <option >Janvier</option>
                    <option >Février</option>
                    <option >Mars</option>
                    <option >Avril</option>
                    <option >Mai</option>
                    <option >Juin</option>
                    <option >Juillet</option>
                    <option >Août</option>
                    <option >Septembre</option>
                    <option >Octobre</option>
                    <option >Novembre</option>
                    <option >Décembre</option>
                </select>

                <div v-if="DETAILS_MOIS">
                    <br>
                    <i>Détail de la/des ressource(s) choisie(s) :</i>
                </div>

                <div v-if="DETAILS_PV_MOIS" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_pv_mois')">Panneau Photovoltaïque</button>
                    <div v-if="detailsPVmois">
                        <GraphPV v-if="GraphPV"/>
                        <p>Energie totale d'un PV au mois de {{MOIS}} : {{Math.round((Puis_PV_mois/msg7)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg7}} PV au mois de {{MOIS}} : {{Math.round(Puis_PV_mois*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="DETAILS_EOL_MOIS" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_eol_mois')">Eolienne</button>
                    <div v-if="detailsEOLmois">
                        <GraphEol v-if="GraphEol"/>
                        <p>Energie totale d'une éolienne au mois de {{MOIS}}  : {{Math.round((Puis_EOL_mois/msg6)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg6}} éolienne(s) au mois de {{MOIS}} : {{Math.round(Puis_EOL_mois*100)/100}} kWh</strong></p>     
                    </div>      
                </div>

                <div v-if="DETAILS_HYDRO_MOIS" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_hydro_mois')"> Hydrolienne</button>
                    <div v-if="detailsHYDROmois">
                        <GraphHYDRO v-if="GraphHYDRO"/>
                        <p>Energie totale d'une hydrolienne sur un mois est de {{Math.round(((msg5/(12))/msg8)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg8}} hydrolienne(s) sur un mois est de {{Math.round((msg5/12)*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="RDMT_MOIS">
                    <br>
                    <h1> Rendement énergétique total au mois de {{MOIS}} : {{Math.round((Puis_PV_mois + Puis_EOL_mois + (msg5/12))*100)/100}} kWh </h1>
                </div>

            </div>

                <!--RESULTAT DU RENDEMENT SUR UNE JOURNEE-->

            <div v-if="jour" id="selectJour">

                <br>
                <p class="text-co2" v-if="SELECTION_MOIS_JOUR">Sélectionnez votre mois :</p>

                <select class="custom-select" v-model="MOIS_JOUR" @click="selectJour(MOIS_JOUR)">
                    <option >Janvier</option>
                    <option >Février</option>
                    <option >Mars</option>
                    <option >Avril</option>
                    <option >Mai</option>
                    <option >Juin</option>
                    <option >Juillet</option>
                    <option >Août</option>
                    <option >Septembre</option>
                    <option >Octobre</option>
                    <option >Novembre</option>
                    <option >Décembre</option>
                </select>

                <div v-if="DETAILS_JOUR">
                    <br>
                    <i>Détail de la/des ressource(s) choisie(s) :</i>
                </div>

                <div v-if="DETAILS_PV_JOUR" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_pv_jour')">Panneau Photovoltaïque</button>
                    <div v-if="detailsPVjour">
                        <GraphPV v-if="GraphPV"/>
                        <p>Energie totale d'un PV sur une journée du mois de {{MOIS_JOUR}} : {{Math.round((Puis_PV_jour/msg7)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg7}} PV sur une journée au mois de {{MOIS_JOUR}} : {{Math.round(Puis_PV_jour*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="DETAILS_EOL_JOUR" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_eol_jour')">Eolienne</button>
                    <div v-if="detailsEOLjour">
                        <GraphEol v-if="GraphEol"/>
                        <p>Energie totale d'une éolienne sur une journée au mois de {{MOIS_JOUR}} : {{Math.round((Puis_EOL_jour/msg6)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg6}} éolienne(s) sur une journée du mois de {{MOIS_JOUR}} : {{Math.round(Puis_EOL_jour*100)/100}} kWh</strong></p>     
                    </div>      
                </div>

                <div v-if="DETAILS_HYDRO_JOUR" class="encard1 encard-Resultat">
                    <button class ="btn" @click="AFFICHE_DETAILS('details_hydro_jour')">Hydrolienne</button>
                    <div v-if="detailsHYDROjour">
                        <GraphHYDRO v-if="GraphHYDRO"/>
                        <p>Energie totale d'une hydrolienne sur une journée : {{Math.round(((msg5/12*30)/msg8)*100)/100}} kWh</p>
                        <p><strong>Energie totale de(s) {{msg8}} l'hydrolienne(s) sur une journée : {{Math.round((msg5/(12*30))*100)/100}} kWh</strong></p>
                    </div>
                </div>

                <div v-if="RDMT_JOUR">
                    <br>
                    <h1> Rendement énergétique total sur une journée du mois de {{MOIS_JOUR}} : {{Math.round((Puis_PV_jour + Puis_EOL_jour + (msg5/(12*30)))*100)/100}} kWh </h1>
                </div>

            </div>
            
        </div>

    </div>

    <!--PROPOSITION DE STOCKAGE-->

    <br>
    <div id="encard-Stockage" class="encard1 encard-Stockage">
        <div class="titre"><strong>Solution de stockage</strong></div>
    </div>


    <div  class="encard encard-Stockage">
        <div>
            <p>Notre site peut également vous proposer des solutions de stockage pour votre projet.</p>
                <div>
                    <p>Quelle est votre consommation d'électricité à l'année ?</p>
                        <input class='INPUT_conso' type='text' placeholder="Entrez votre consommation" v-model="conso"> kWh
                </div> 
                <br>
            <button href="#encard-Stockage" class ="btn" @click="Stockage(conso/12)">Découvrir les solutions de stockage pour mon projet !</button>
            <br>
            <br>
        </div>


        <div v-if="SOLUSTOCKAGE">

            <h6><strong v-if="PHRASE_CONSO">Pour une consommation annuelle d'électricité de {{conso}} kWh :</strong></h6>
            <p v-if="PHRASE_STOCK_NUL">Votre consommation est bien trop élevée pour qu'une solution de stockage vous soit proposée. 
            Nous vous conseillons d'acheter de l'éléctricité afin de combler votre consommation, ou de modifier certains paramètres de votre projet 
            en recommançant la simulation.</p>
            <p v-if="PHRASE_STOCK">Sur les mois de {{TabDIFF_STOCK_MOIS}}, vous allez pouvoir stocker au total {{Math.round(stockage)}} kWh. Voici nos solutions de stockage :</p>

            <div class="container">

                <div class="box_portrait" v-if="STEP">
                    <img class="photo" src="../assets/step.jpg" />
                    <div class="overlay">
                        <div class="texte_titre">Station de transfert d'énergie par pompage</div>
                        <div class="texte">Sa capacité de stockage va jusqu'à 10 GWh et son temps d'utilisation va de quelques heures à plusieurs mois.</div>
                    </div>
                </div>

                <div class="box_portrait" v-if="AIR_COMP">
                    <img class="photo" src="../assets/Aircomprime.png" />
                    <div class="overlay">
                        <div class="texte_titre">Station de stockage par air comprimé</div>
                        <div class="texte">Sa capacité de stockage va jusqu'à 10 GWh et son temps d'utilisation va de quelques heures à plusieurs mois.</div>
                    </div>
                </div>

                <div class="box_portrait" v-if="POW_GAS">
                    <img class="photo" src="../assets/powertogas.jpg" />
                    <div class="overlay">
                        <div class="texte_titre">Power to Gas - Hydrogène</div>
                        <div class="texte">Sa capacité de stockage va jusqu'à 10 GWh et son temps d'utilisation s'étale sur plusieurs mois.</div>
                    </div>
                </div>

                <div class="box_portrait" v-if="BATTERIE">
                    <img class="photo" src="../assets/batterie.jpg" />
                    <div class="overlay">
                        <div class="texte_titre">Batterie</div>
                        <div class="texte">Sa capacité de stockage va jusqu'à 10 MWh et son temps d'utilisation va de la journée à la semaine.</div>
                    </div>
                </div>

                <div class="box_portrait" v-if="VOLANT_INERTIE">
                    <img class="photo" src="../assets/volantdinertie.jpg" />
                    <div class="overlay">
                        <div class="texte_titre">Volant d'inertie</div>
                        <p class="texte">Sa capacité de stockage va jusqu'à 10 kWh et son temps d'utilisation est très court (quelques minutes seulement).</p>
                    </div>
                </div>

            </div>


            <p v-if="PHRASE_PUIS">Pour les mois de {{TabDIFF_PUIS_MOIS}}, vous allez devoir puiser au total {{Math.round(puisage)}} kWh dans votre stockage afin de combler votre consommation.</p>
            <p v-if="PHRASE_PUIS_NUL">Votre consommation d'électricité est suffisamment basse pour ne pas à avoir à puiser de l'électricité dans votre stockage.</p>
            <p><strong v-if="PHRASE_STOCK_INF">Malheureusement, votre stockage ne sera pas suffisant pour vous apporter l'électricité nécessaire pour combler votre consommation.
                Nous vous conseillons d'acheter de l'éléctricité afin de combler votre consommation, ou de modifier certains paramètres de votre projet 
                en recommançant la simulation.</strong></p>
            <p><strong v-if="PHRASE_STOCK_SUP">Votre stockage d'électricité sera suffisant pour vous aider à puiser l'électricité nécessaire à votre consommation.</strong></p>
    
        </div>

    </div>


    <!-- lcoe -->
    <br>
    <div class="encard1 encard-lcoe">
        <div class="titre"><strong>LCOE</strong></div>
    </div>

        <div class="encard encard-lcoe">

            <div class="lcoe">
                <br>
                <h6><strong> LCOE signifie « coût actualisé de l’énergie » et correspond au prix complet d’une énergie sur la durée de vie de l’équipement qui la produit.</strong></h6><br>

                <p>Quel est le coût d'achat total des générateurs ? </p>
                <input type="text"  v-model="coutAchat"> € <br><br>

                <p>Quel est le coût d'installation total ? </p>
                <input type="text" v-model="coutInstallation"> € <br><br>

                <p>Quel est le coût de maintenance  mensuel ? </p>
                <input type="text" v-model="coutMaintenance"> € <br><br>

                <p>Quel est la durée de vie de votre système ?</p>
                <form>
                    <input v-model="dureeSysteme" type="range" min="15" max="35" step="5"/>
                    <output name="result">{{dureeSysteme}}</output> ans
                </form>

                <div class="box-resultat">
                    <div>
                        <br>
                        <strong><span>Votre LCOE est de : </span> 
                         <span v-if="(coutAchat!==0) && (coutInstallation!==0) && (coutMaintenance!==0) && (lcoe>=1)">{{ Math.round((lcoe)*100)/100 }} €/kWh</span>   
                        <span v-if="(coutAchat!==0) && (coutInstallation!==0) && (coutMaintenance!==0) && (lcoe<1) && (lcoe>=0.01)">{{ Math.round((lcoe*100)*1)/1 }} c/kWh</span>   
                        <span v-if="(coutAchat!==0) && (coutInstallation!==0) && (coutMaintenance!==0) && (lcoe<0.01)">{{ Math.round((lcoe*1000)*100)/100 }} €/MWh</span>   </strong>
                    </div>
                    <br>
                </div>
                
            </div>

        </div>

        <!-- co2 -->
        <br>
        <div class="encard1 encard-co2">
            <div class="titre"><strong>Taux de CO2</strong></div>
        </div>

        <div class="encard encard-co2">

            <div class="co2">
                <br>
                <h6><strong>Les énergies sont toutes émettrices de CO2, les énergies fossiles étant largement en tête. Les énergies renouvelables n’en émettent pas en produisant de l’électricité, mais lors de la construction des infrastructures.</strong></h6><br>

                <div class="text-co2">
                    <p>Sur l’ensemble de leur cycle de vie, ces différentes sources de production d’électricité émettent :</p>
                    <div class="container-box-energie">
                        <div class="box-energie">
                            <img src="../assets/panneau-solaire.png" class="icone">
                            <br><p>45 g de Co2 par KWh</p><br>
                        </div>
                        <div class="box-energie">
                            <img src="../assets/eolienne.png" class="icone">
                            <br><p>11 g de Co2 par KWh</p><br>
                        </div>
                        <div class="box-energie">
                            <img src="../assets/hydro-energie.png" class="icone">
                            <br><p>24 g de Co2 par KWh</p><br>
                        </div>
                    </div>
                </div>
                <br>

                <div class="box-resultat">

                    <h6><strong>Sur 1 an, votre installation émet :</strong></h6>

                    <div class="co2_pv" v-if="(msg1!==0)">
                        <h6><strong>{{ Math.round(msg1*45*100/1000)/100 }} kg de CO2 par kWh d'énergie solaire produite</strong></h6>
                    </div>

                    <div class="co2_eol" v-if="(msg3!==0)">
                        <h6><strong>{{ Math.round(msg3*11*100/1000)/100 }} kg de CO2 par kWh d'énergie éolienne produite</strong></h6>
                    </div>

                    <div class="co2_hydro" v-if="(msg5!==0)">
                        <h6><strong>{{ Math.round(msg5*24*100/1000)/100 }} kg de CO2 par kWh d'énergie hydrolienne produite</strong></h6>
                    </div>
                    <br>

                </div>

            </div>

        </div>

        <button class ="btn" @click="NewResult">Recommencer la simulation</button>
        <br>
        <br>

</div>

</template>


<script>
import GraphEol from '@/components/GraphEol.vue'
import GraphPV from '@/components/GraphPV.vue'
import GraphHYDRO from '@/components/GraphHYDRO.vue'
export default {
    name: 'ResultatPV',
    props: ["msg1","msg2","msg3","msg4","msg5","msg6","msg7","msg8"],
    components:{
        GraphEol,
        GraphPV,
        GraphHYDRO
    },
    data(){
        return{
            annee: true,
            mois: false,
            jour: false,

            detailsEOLan:false,
            detailsEOLmois:false,
            detailsEOLjour:false,
            detailsPVan:false,
            detailsPVmois:false,
            detailsPVjours:false,
            detailsHYDROan:false,
            detailsHYDROmois:false,
            detailsHYDROjour:false,

            RDMT_AN:false,
            RDMT_MOIS:false,
            RDMT_JOUR:false,

            DETAILS_AN:false,
            DETAILS_MOIS:false,
            DETAILS_JOUR:false,

            SELECTION_MOIS_JOUR:false,
            SELECTION_MOIS_MOIS:false,

            GraphEol:true,
            GraphHYDRO:true,
            GraphPV:true,

            STEP:false,
            AIR_COMP:false,
            POW_GAS:false,
            BATTERIE:false,
            VOLANT_INERTIE:false,
            PHRASE_STOCK_NUL:false,
            PHRASE_PUIS_NUL:false,
            PHRASE_STOCK_INF:false,
            PHRASE_STOCK_SUP:false,
            PHRASE_PUIS:false,
            PHRASE_STOCK:false,
            SOLUSTOCKAGE:false,

            ResultatLCOE:false,

            Puis_PV_mois: 0,
            Puis_PV_jour: 0,
            Puis_EOL_mois: 0,
            Puis_EOL_jour: 0,
            stockage:0,
            puisage:0,
            TabMois: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
            TabNbJoursMois: [31,28,31,30,31,30,31,31,30,31,30,31],
            TabTOTMOIS:[],
            TabDIFF:[],
            TabDIFF_STOCK:[],
            TabDIFF_PUIS:[],
            TabDIFF_STOCK_MOIS:"",
            TabDIFF_PUIS_MOIS:"",
            MOIS: '',
            JOUR:'',
            coutAchat: 0,
            coutInstallation: 0,
            coutMaintenance: 0,
            dureeSysteme: 15,
            energieTotaleAnnee: 0
        }
    },
    computed:{
        lcoe(){
            return Math.round((( parseFloat(this.coutAchat) + parseFloat(this.coutInstallation) + parseFloat(this.coutMaintenance * 12 * this.dureeSysteme)) / parseFloat(((this.msg1 + this.msg3 + this.msg5) * this.dureeSysteme )))*10000)/10000
            // return Math.round((( this.coutAchat + this.coutInstallation + this.coutMaintenance * 12 * this.dureeSysteme) / ((this.msg1 + this.msg3 + this.msg5) * this.dureeSysteme ))*10000)/10000
        }
    },
    methods:{
        Affiche(duree){
            
            console.log(this.TabTOTMOIS)

            if (duree=='Année'){
                this.RDMT_AN = true,
                this.RDMT_MOIS = false,
                this.RDMT_JOUR = false,

                this.annee = true
                this.mois = false
                this.jour = false

                this.DETAILS_AN=true
                this.DETAILS_MOIS=false
                this.DETAILS_JOUR=false
                if(this.msg1!=0){
                    this.DETAILS_PV_AN=true
                    }
                if(this.msg3!=0){
                    this.DETAILS_EOL_AN=true
                    }
                if(this.msg5!=0){
                    this.DETAILS_HYDRO_AN=true
                    }

            }else if (duree=='Mois'){
                this.RDMT_AN = false
                this.RDMT_MOIS = false
                this.RDMT_JOUR = false

                this.annee = false
                this.mois = true
                this.jour = false

                this.SELECTION_MOIS_MOIS=true
                this.SELECTION_MOIS_JOUR=false

            }else if (duree=='Journée'){
                this.RDMT_AN = false,
                this.RDMT_MOIS = false,
                this.RDMT_JOUR = false,

                this.annee = false
                this.mois = false
                this.jour = true

                this.SELECTION_MOIS_JOUR=true
                this.SELECTION_MOIS_MOIS=false

            }
        },
        selectMois(Mois){
            this.DETAILS_AN=false
            this.DETAILS_MOIS=true
            this.DETAILS_JOUR=false

            this.RDMT_AN = false
            this.RDMT_MOIS = true
            this.RDMT_JOUR = false
            for (let i=0; i<12; i++){
                if(Mois == this.TabMois[i]){
                    this.Puis_PV_mois = this.msg2[i] * this.TabNbJoursMois[i] 
                    if(isNaN(this.Puis_PV_mois)){
                        this.Puis_PV_mois =0
                    }
                    this.Puis_EOL_mois = this.msg4[i] * this.TabNbJoursMois[i] 
                    if(isNaN(this.Puis_EOL_mois)){
                        this.Puis_EOL_mois =0
                    }
                }
                if(this.Puis_PV_mois!=0){
                    this.DETAILS_PV_MOIS=true
                    }
                if(this.Puis_EOL_mois!=0){
                    this.DETAILS_EOL_MOIS=true
                    }
                if((this.msg5/12)!=0){
                    this.DETAILS_HYDRO_MOIS=true
                    }
            }
                             
        },
        selectJour(Mois){
            this.DETAILS_AN=false
            this.DETAILS_MOIS=false
            this.DETAILS_JOUR=true

            this.RDMT_AN = false
            this.RDMT_MOIS = false
            this.RDMT_JOUR = true
            for (let i=0; i<12; i++){
                if(Mois == this.TabMois[i]){
                    this.Puis_PV_jour = this.msg2[i]
                    if(isNaN(this.Puis_PV_jour)){
                        this.Puis_PV_jour =0
                    }
                    this.Puis_EOL_jour = this.msg4[i]
                    if(isNaN(this.Puis_EOL_jour)){
                        this.Puis_EOL_jour =0
                    }
                    }
                }
                if(this.Puis_PV_jour!=0){
                    this.DETAILS_PV_JOUR=true
                    }
                if(this.Puis_EOL_jour!=0){
                    this.DETAILS_EOL_JOUR=true
                    }
                if((this.msg5/(12*30))!=0){
                    this.DETAILS_HYDRO_JOUR=true
                    }        
        },
        Stockage(consommation){
            this.PHRASE_CONSO=true
            this.SOLUSTOCKAGE=true

            this.annee=false
            this.mois=false
            this.jour=false

            this.TabTOTMOIS=[]
            this.TabDIFF_STOCK=[]
            this.TabDIFF_PUIS=[]
            this.TabDIFF=[]

            this.TabDIFF_STOCK_MOIS=""
            this.TabDIFF_PUIS_MOIS=""

            this.puisage=0
            this.stockage=0

            this.STEP=false
            this.AIR_COMP=false
            this.POW_GAS=false
            this.BATTERIE=false
            this.VOLANT_INERTIE=false
            this.PHRASE_STOCK_NUL=false
            this.PHRASE_PUIS_NUL=false
            this.PHRASE_STOCK_INF=false
            this.PHRASE_STOCK_SUP=false
            this.PHRASE_PUIS=false
            this.PHRASE_STOCK=false

            if(this.msg2!=0 && this.msg4!=0){
                for(let i=0; i<12; i++){
                    this.TabTOTMOIS[i]=((this.msg2[i]*this.TabNbJoursMois[i])+(this.msg4[i] * this.TabNbJoursMois[i])+this.msg5/12)
                }
            }
            if(this.msg2==0 && this.msg4!=0){
                for(let i=0; i<12; i++){
                    this.TabTOTMOIS[i]=((this.msg4[i] * this.TabNbJoursMois[i])+this.msg5/12)
                }
            }
            if(this.msg2!=0 && this.msg4==0){
                for(let i=0; i<12; i++){
                    this.TabTOTMOIS[i]=((this.msg2[i]*this.TabNbJoursMois[i])+this.msg5/12)
                }
            }
            if(this.msg2==0 && this.msg4==0){
                for(let i=0; i<12; i++){
                    this.TabTOTMOIS[i]=(this.msg5/12)
                }
            }
            
            for(let i=0; i<12; i++){
                this.TabDIFF[i]=(this.TabTOTMOIS[i]-consommation)
                if(this.TabTOTMOIS[i]-consommation>0){
                    this.TabDIFF_STOCK_MOIS+=this.TabMois[i]+", "
                    this.TabDIFF_STOCK[i]=this.TabTOTMOIS[i]-consommation
                }
                else{
                    this.TabDIFF_PUIS_MOIS+=this.TabMois[i]+", "
                    this.TabDIFF_PUIS[i]=-(this.TabTOTMOIS[i]-consommation)
                }
            }
            
            this.TabDIFF_STOCK_MOIS=this.TabDIFF_STOCK_MOIS.substring(0,this.TabDIFF_STOCK_MOIS.length-2)
            this.TabDIFF_PUIS_MOIS=this.TabDIFF_PUIS_MOIS.substring(0,this.TabDIFF_PUIS_MOIS.length-2)


            console.log('TabDIFF'+ this.TabDIFF)
            console.log('TabDIFF_STOCK_MOIS'+ this.TabDIFF_STOCK_MOIS)
            console.log('TabDIFF_STOCK'+ this.TabDIFF_STOCK)
            console.log('TabDIFF_PUIS_MOIS'+ this.TabDIFF_PUIS_MOIS)
            console.log('TabDIFF_PUIS'+ this.TabDIFF_PUIS)

            if(this.TabDIFF_STOCK.length==0){
                this.PHRASE_STOCK_NUL=true
            }
            else{
                for(let i=0; i<12; i++){
                    if(this.TabDIFF_PUIS.length==0){
                        if(this.TabDIFF_STOCK[i]==null){
                            this.TabDIFF_STOCK[i]=0
                        }
                        this.stockage=this.stockage+this.TabDIFF_STOCK[i]
                        this.PHRASE_STOCK=true
                        this.PHRASE_PUIS=false
                        this.PHRASE_PUIS_NUL=true
                    }
                    else{
                        if(this.TabDIFF_STOCK[i]==null){
                            this.TabDIFF_STOCK[i]=0
                        }
                        if(this.TabDIFF_PUIS[i]==null){
                            this.TabDIFF_PUIS[i]=0
                        }
                        this.stockage=this.stockage+this.TabDIFF_STOCK[i]
                        this.puisage=this.puisage+this.TabDIFF_PUIS[i]
                        this.PHRASE_STOCK=true
                        this.PHRASE_PUIS=true
                        this.PHRASE_PUIS_NUL=false
                    }
                }
                    if(this.stockage> 10000000 || (this.stockage<=10000000 && this.stockage>10000)){
                        this.STEP = true
                        this.POW_GAS = true
                        this.AIR_COMP = true
                        this.VOLANT_INERTIE = false
                        this.BATTERIE = false
                        }
                    else if(this.stockage<=10000 && this.stockage>10){
                        this.STEP = false
                        this.POW_GAS = false
                        this.AIR_COMP = false
                        this.VOLANT_INERTIE = false
                        this.BATTERIE = true
                        }
                    else if(this.stockage<=10){
                        this.STEP = false
                        this.POW_GAS = false
                        this.AIR_COMP = false
                        this.VOLANT_INERTIE = true
                        this.BATTERIE = false
                        }
                    if(this.stockage-this.puisage>0){
                        if(this.puisage==0){
                        this.PHRASE_STOCK_SUP=false
                        this.PHRASE_STOCK_INF=false
                        }
                        else{
                        this.PHRASE_STOCK_SUP=true
                        this.PHRASE_STOCK_INF=false
                        }
                    }
                    else{
                        this.PHRASE_STOCK_INF=true
                        this.PHRASE_STOCK_SUP=false
                    }


                }
        },
        AFFICHE_DETAILS(id){
            if(id=='details_eol_an'){
                this.detailsEOLan=true
                this.detailsPVan=false
                this.detailsHYDROan=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphEol=false
                }
            }
            if(id=='details_pv_an'){
                this.detailsEOLan=false
                this.detailsPVan=true
                this.detailsHYDROan=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphPV=false
                }
            }
            if(id=='details_hydro_an'){
                this.detailsEOLan=false
                this.detailsPVan=false
                this.detailsHYDROan=true
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphHYDRO=false
                }
            }
            if(id=='details_eol_mois'){
                this.detailsEOLmois=true
                this.detailsPVmois=false
                this.detailsHYDROmois=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphEol=false
                }
            }
            if(id=='details_pv_mois'){
                this.detailsEOLmois=false
                this.detailsPVmois=true
                this.detailsHYDROmois=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphPV=false
                }
            }
            if(id=='details_hydro_mois'){
                this.detailsEOLmois=false
                this.detailsPVmois=false
                this.detailsHYDROmois=true
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphHYDRO=false
                }
            }
            if(id=='details_eol_jour'){
                this.detailsEOLjour=true
                this.detailsPVjour=false
                this.detailsHYDROjour=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphEol=false
                }
            }
            if(id=='details_pv_jour'){
                this.detailsEOLjour=false
                this.detailsPVjour=true
                this.detailsHYDROjour=false
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphPV=false
                }
            }
            if(id=='details_hydro_jour'){
                this.detailsEOLjour=false
                this.detailsPVjour=false
                this.detailsHYDROjour=true
                if(window.matchMedia("(max-width: 800px)").matches){
                    this.GraphHYDRO=false
                }
            }
        },
        NewResult(){
            window.location.href = 'http://localhost:8080/Simulation/';
            },
        test(){
            document.getElementById("bouh").style.display = "none";
        },
        
    }
}

</script>

<style scoped>
 .Resultat{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    filter: drop-shadow(0 0 1rem #002F00);
    height: auto;
    margin: 60px 50px;
  }


.INPUT_conso{
  max-width: 400px;
  min-width: 250px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
  }

.titre{
    font-size: 30px;
    font-family: Arial, sans-serif;
  }
  .encard1{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    height: auto;
    margin: 15px 25px;
    padding: 1% 5%;
    padding-right: 5%;
    padding-left: 5%;
    font-size: 18px;
  }

.encard{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    height: auto;
    margin: 15px 25px;
    padding:10px;
    font-size: 18px;
  }
.encard h6, .encard span{
    font-size: 18px;
}
.lcoe input{
    max-width: 400px;
    min-width: 180px;
    border-radius:5px;
    border: white;
    margin-top: 0px;
}

.overlay{
    position: absolute;
    border-radius: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 370px;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .container{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
    cursor: pointer;
  }

  .box_portrait{
    position: relative;
    margin:15px;
  }

  .box_portrait:hover .overlay{
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

.photo {
    width: 370px;
    height:300px;
    border-radius:25px
  }


.texte_titre{
    color: black;
    font-size: 25px;
    font-weight: 500;
    position: relative;
    top: 35%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

.texte{
    color: black;
    font-size: 16px;
    position: relative;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

@media (max-width: 440px) {
  .box-energie {
    flex: 100%;
    margin: 15px 10px;
    padding-right: 35px;
    padding-left: 35px;
    padding-top: 30px;
  }
}
@media (min-width: 440px) {
  .box-energie {
    margin: 15px 2%;
    padding-right: 4%;
    padding-left: 4%;
    padding-top: 3%;
  }
}
.text-co2{
    font-weight: lighter;
}
.icone{
    width: 45%;
    height: auto;
    padding-bottom: 3%;
}
.container-box-energie{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
}
.box-energie{
    flex: 25%;
    background-color: rgba(255, 255, 250, 0.5);
    border-radius :50px;
    background-size: cover;
    height: auto;
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

.custom-select {
  max-width: 400px;
  min-width: 180px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
}

@media (max-width: 800px) {

  .Resultat{
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
  .encard{
    background-color: rgba(255, 255, 250, 0);
    margin:auto;
  }
  h2{
    font-size: 18px;
    margin:20px;
  }
  strong{
    font-size: 20px;
  }
  .overlay{
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