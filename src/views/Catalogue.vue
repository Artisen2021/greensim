<template>

    <!------Logo ------>
    <div class="menu">
      <img id="logo" class="logo" alt="Vue logo"  src="../assets/Logo.jpg">
      <h2>GreenSim</h2>
    </div>

        <!-- Popups -->
        <div class="Popup">

            <!-- popup-pv -->
            <div class="popup" v-if="popup_pv">
                <div class="popup-container">
                    <div class="flex-box-container">
                        <div class="flex-box flex-box-image" >
                            <img :src="Source" >
                            <br><br>
                            <h3><strong>{{Marque}} {{Modele}}</strong></h3>
                        </div>
                        <div class="flex-box" >
                            <button id="btn" @click="FermePopup"><croix/></button>
                            <h5><strong>Caractéristiques</strong></h5>
                            <br>
                            <div class="texte">                                
                                <p>Puissance nominale :  {{Caracteristiques_pv [Index_modele][0] }}</p>
                                <p>Masse :  {{Caracteristiques_pv [Index_modele][1] }}</p>
                                <p>Type de cellules :  {{Caracteristiques_pv [Index_modele][2] }}</p>
                                <p>Dimensions :  {{Caracteristiques_pv [Index_modele][3] }}</p>
                                <h6><strong>Energie maximale produite par an =  {{Caracteristiques_pv [Index_modele][4] }}</strong></h6>
                                <h6><strong>Taux de CO2 produit =  {{Caracteristiques_pv [Index_modele][5] }}/kWh</strong></h6>
                            </div>                            
                        </div>
                    </div>  
                </div>               
            </div>

            <!-- popup-eol -->
            <div class="popup" v-if="popup_eol">
                <div class="popup-container">
                    <div class="flex-box-container">
                        <!-- <div class="flex-box image" style="background:red"> -->
                        <div class="flex-box flex-box-image" >
                            <img :src="Source" >
                            <br><br>
                            <h3><strong>{{Marque}} {{Modele}}</strong></h3>
                        </div>
                        <!-- <div class="flex-box" style="background:blue"> -->
                        <div class="flex-box" >
                            <button id="btn" @click="FermePopup"><croix/></button>
                            <h5><strong>Caractéristiques</strong></h5>
                            <br>
                            <div class="texte">                                
                                <p>Puissance nominale :  {{Caracteristiques_eol [Index_modele][0] }}</p>
                                <p>Vitesse nominale du vent :  {{Caracteristiques_eol [Index_modele][1] }}</p>
                                <p>Hauteur du mat :  {{Caracteristiques_eol [Index_modele][2] }}</p>
                                <p>Diamètre du rotor :  {{Caracteristiques_eol [Index_modele][3] }}</p>
                                <p>Vitesse max (rotor) :  {{Caracteristiques_eol [Index_modele][4] }}</p>
                                <h6><strong>Energie maximale produite par an =  {{Caracteristiques_eol [Index_modele][5] }}</strong></h6>
                                <h6><strong>Taux de CO2 produit =  {{Caracteristiques_eol [Index_modele][6] }}/MWh</strong></h6>
                            </div>                           
                        </div>
                    </div> 
                </div>               
            </div>


            <!-- popup-hydro -->
            <div class="popup" v-if="popup_hydro">
                <div class="popup-container">
                    <div class="flex-box-container">
                        <div class="flex-box flex-box-image" >
                            <img :src="Source" >
                            <br><br>
                            <h3><strong>{{Marque}} {{Modele}}</strong></h3>
                        </div>
                        <div class="flex-box" >
                            <button id="btn" @click="FermePopup"><croix/></button>
                            <h5><strong>Caractéristiques</strong></h5>
                            <br>
                            <div class="texte">                                
                                <p>Puissance nominale :  {{Caracteristiques_hydro [Index_modele][0] }}</p>
                                <p>Diamètre du rotor :  {{Caracteristiques_hydro [Index_modele][1] }}</p>
                                <p>Masse :  {{Caracteristiques_hydro [Index_modele][2] }}</p>
                                <p>Position :  {{Caracteristiques_hydro [Index_modele][3] }}</p>
                                <h6><strong>Energie maximale produite par an =  {{Caracteristiques_hydro [Index_modele][4] }}</strong></h6>
                                <h6><strong>Taux de CO2 produit =  {{Caracteristiques_hydro [Index_modele][5] }}/MWh</strong></h6>
                            </div>                                                  
                        </div>
                    </div> 
                </div>               
            </div>

        
        </div>


    <div class="catalogue" id="catalogue">

        <!-- Onglets-catalogue -->
        <div class="onglets-catalogue">
            <p class="link" id="link-pv" style="margin-left: 5%" @click="ClickLien('pv')">Panneaux photovoltaïques</p>
            <p class="link" id="link-eol" @click="ClickLien('eol')">Éoliennes</p>
            <p class="link" id="link-hydro" @click="ClickLien('hydro')">Hydroliennes</p>
            <div>
                <input type="search" list="marques" id="mesMarques" name="mesMarques" v-model="Recherche" placeholder="Rechercher une marque">
                <datalist id="marques">
                    <option value="Alstom"/>
                    <option value="Enercon"/>
                    <option value="Siemens"/>
                    <option value="Vestas"/>
                    <option value="Sabella"/>
                    <option value="Guinard"/>
                    <option value="Qcells"/>
                    <option value="Saronic"/>
                    <option value="Trina"/>
                    <option value="Victron"/>
                </datalist>
            </div>
        </div>

        <!-- Tableau-cartes -->
        <div class="tableau-cartes">

            <!-- Au démarrage ou au refresh de la page, toutes les cartes sont affichées -->
            <div v-if="cartes_demarrage" class="tableau-pv">

                <div class="boites-container">
                    <div class="box" v-for="(item,index) in Curent_Tab_demarrage" :key="(item,index)"> 
                        <img :src="item.image" >
                        <br><br>
                        <h5><strong>{{item.modele}}</strong></h5>
                        <h6>{{item.marque}}</h6>
                        <button  v-if="index<4" id ="btn" @click="AffichePopup(index,'pv')"> CARACTÉRISTIQUES </button > 
                        <button  v-if="index>=4 && index<28" id ="btn" @click="AffichePopup(index-4,'eol')"> CARACTÉRISTIQUES </button >
                        <button  v-if="index>=28" id ="btn" @click="AffichePopup(index-28,'hydro')"> CARACTÉRISTIQUES </button >                        
                    </div>
                </div>

            </div>

            <!-- Lors du clic sur un onglet, seulement les cartes de l'énerie sélectionnée s'affichent -->
            <div v-if="cartes" class="tableau">

                <div class="boites-container">
                    <div class="box" v-for="(item,index) in Curent_Tab" :key="(item,index)"> 
                        <img :src="item.image" >
                        <br><br>
                        <h5><strong>{{item.modele}}</strong></h5>
                        <h6>{{item.marque}}</h6>
                        <button  v-if="pv" id ="btn" @click="AffichePopup(index+AddIndex,'pv')"> CARACTÉRISTIQUES </button > 
                        <button  v-if="eol" id ="btn" @click="AffichePopup(index+AddIndex,'eol')"> CARACTÉRISTIQUES </button >
                        <button  v-if="hydro" id ="btn" @click="AffichePopup(index+AddIndex,'hydro')"> CARACTÉRISTIQUES </button >                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  
</template>



<script>
import croix from '@/components/croix.vue'
 export default {
    name: 'Catalogue',
    components: {
        croix
    }, 

    //Au démarrage, on affiche toutes les cartes
    computed:{
        Curent_Tab_demarrage(){
            return this.Tab_pv.concat(this.Tab_eol).concat(this.Tab_hydro)
        }
    },

    //Surveille les changements dans le texte entré au niveau de la barre de recherche
    watch: {
        Recherche(newRecherche) {
            
            this.cartes_demarrage = false

            //Efface tous les tableaux
            this.pv = false
            this.eol = false
            this.hydro = false

            document.getElementById("link-pv").style.fontWeight = 'normal'
            document.getElementById("link-eol").style.fontWeight = 'normal'
            document.getElementById("link-hydro").style.fontWeight = 'normal'        
            
            if(newRecherche!=''){
                //Afin de respecter la casse
                this.mot = newRecherche[0].toUpperCase().concat( newRecherche.substr(1).toLowerCase())
                console.log("mot = " + this.mot)

                // Marque PV ????
                //A chaque fois que l'on écrit une lettre, on parcourt le tableau Tab_pv pour savoir si le mot entré correspond à une marque d'un panneau photovoltaïque
                var PV = 0
                for( let i=0 ; i<this.Tab_pv.length ; i++ ){
                    if(this.mot==this.Tab_pv[i].marque){
                        //Si oui, on affiche tous les modèle de la marque
                        
                        //On construit le tableau Tab_Recherche
                        this.Tab_Recherche.push(this.Tab_pv[i])
                        PV = 1

                        if(this.mot=='Qcells'){
                            this.AddIndex = 0
                        }else if(this.mot=='Saronic'){
                            this.AddIndex = 1
                        }else if(this.mot=='Trina'){
                            this.AddIndex = 2
                        }else if(this.mot=='Victron'){
                            this.AddIndex = 3
                        }
                    }
                }
                // Marque eolienne ????
                var EOL = 0
                for( let i=0 ; i<this.Tab_eol.length ; i++ ){
                    if(this.mot==this.Tab_eol[i].marque){
                        this.Tab_Recherche.push(this.Tab_eol[i])
                        EOL = 1

                        if(this.mot=='Alstom'){
                            this.AddIndex = 0
                        }else if(this.mot=='Enercon'){
                            this.AddIndex = 6
                        }else if(this.mot=='Siemens'){
                            this.AddIndex = 16
                        }else if(this.mot=='Vestas'){
                            this.AddIndex = 20
                        }
                    }
                }
                // Marque hydrolienne ????
                var HYDRO = 0
                for( let i=0 ; i<this.Tab_hydro.length ; i++ ){
                    if(this.mot==this.Tab_hydro[i].marque){
                        this.Tab_Recherche.push(this.Tab_hydro[i])
                        HYDRO = 1

                        if(this.mot=='Sabella'){
                            this.AddIndex = 0
                        }else if(this.mot=='Guinard'){
                            this.AddIndex = 2
                        }
                    }
                }
                //Remplace le tableau à afficher par Tab_Recherche
                this.Curent_Tab = this.Tab_Recherche
                
                //Affiche le tableau
                if(PV==1){                        
                    this.pv = true
                }else if(EOL==1){                        
                    this.eol = true
                }else if(HYDRO==1){                        
                    this.hydro = true
                }

                //Remet tous les tableaux à l'état initial
                this.Tab_Index = []
                this.Tab_Recherche = []
                                            
            }
        }
    },
    methods: {
        ClickLien(energie){
            this.AddIndex = 0
            this.cartes_demarrage = false
            this.pv = false
            this.eol = false
            this.hydro = false
            document.getElementById("link-pv").style.fontWeight = 'normal'
            document.getElementById("link-eol").style.fontWeight = 'normal'
            document.getElementById("link-hydro").style.fontWeight = 'normal'
            if (energie=='pv'){
                this.pv = true
                this.Curent_Tab = this.Tab_pv
                document.getElementById("link-pv").style.fontWeight = 'bold'
            }else if (energie=='eol'){
                this.eol = true
                this.Curent_Tab = this.Tab_eol
                document.getElementById("link-eol").style.fontWeight = 'bold'
            }else if (energie=='hydro'){
                this.hydro = true
                this.Curent_Tab = this.Tab_hydro
                document.getElementById("link-hydro").style.fontWeight = 'bold'
            }
            this.cartes = true  
        },
        AffichePopup(index,energie){

            //Obscurcit le fond
            document.getElementById("catalogue").style.filter = "brightness(30%)";

            //Affiche la popup correspondante
            if (energie=='pv'){
                this.popup_pv = true
                this.Modele = this.Tab_pv[index].modele
                this.Marque = this.Tab_pv[index].marque
                this.Source = this.Tab_pv[index].image
            }else if (energie=='eol'){
                this.popup_eol = true
                this.Modele = this.Tab_eol[index].modele
                this.Marque = this.Tab_eol[index].marque
                this.Source = this.Tab_eol[index].image
            }else if (energie=='hydro'){
                this.popup_hydro = true
                this.Modele = this.Tab_hydro[index].modele
                this.Marque = this.Tab_hydro[index].marque
                this.Source = this.Tab_hydro[index].image
            }
            this.Index_modele = index
        },        
         FermePopup() {
            this.popup_pv = false
            this.popup_eol = false
            this.popup_hydro = false
            document.getElementById("catalogue").style.filter = "brightness(100%)";
        },
    },
    data() {
      return {
        cartes_demarrage: true,
        pv: true,
        eol: true,
        hydro: true,
        cartes: true,
        popup_pv: false,
        popup_eol: false,
        popup_hydro: false,
        pv_recherche: false,
        eol_recherche: false,
        hydro_recherche: false,

        Marque: '',
        Modele: '',
        Index_modele: '',
        Source: '',
        AddIndex: 0,

        Recherche: '',
        Tab_Index: [],
        Tab_Recherche: [],
        Curent_Tab: [],
        mot: '',

        //Panneau photovoltaïque
        Tab_pv: [ 
        {   modele: '375',
            marque: 'Qcells',
            image: 'https://www.edfenr.com/wp-content/uploads/2021/08/shutterstock_141854731-Large-700x450.jpg'
        },
        {   modele: '370',
            marque: 'Saronic',
            image: 'https://www.yesss-fr.com/produits/85221/photos/85221-4753358.jpg'
        },
        {   modele: '330',
            marque: 'Trina',
            image: 'https://www.maison-travaux.fr/wp-content/uploads/sites/8/2018/04/comment-fonctionne-l-energie-solaire.jpg'
        },
        {   modele: '270',
            marque: 'Victron',
            image: 'https://solaire-coop.fr/wp-content/uploads/2020/01/panneaux-solaire.jpg'
        }],

        //Hydrolienne
        Tab_hydro: [
        {   modele: 'D03',
            marque: 'Sabella',
            image: 'http://hydrolien.fr/wp-content/uploads/2018/10/46G136.jpg'
        },
        {   modele: 'D10',
            marque: 'Sabella',
            image: 'https://www.industrie-techno.com/mediatheque/1/9/4/000025491_600x400_c.jpg'
        },
        {   modele: 'P66',
            marque: 'Guinard',
            image: 'https://www.lemondedelenergie.com/wp-content/uploads/2019/03/hydrolienne.jpg'
        },
        {   modele: 'P154',
            marque: 'Guinard',
            image: 'https://www.batiactu.com/images/auto/620-465-c/20190301_115625_guinard-energie-20190227104058.jpg'
        }],

        //Eolienne
        Tab_eol:[
        {   modele: 'Eco 74',
            marque: 'Alstom',
            image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/a/b/8abb7ae01e_50177793_eoliennes-arguments.jpg'
        },
        {   modele: 'Eco 80',
            marque: 'Alstom',
            image: 'https://www.connaissancedesenergies.org/sites/default/files/image_article/Parc-eolien-Logan-Colorado.jpg'
        },
        {   modele: 'Eco 100',
            marque: 'Alstom',
            image: 'https://cdn.radiofrance.fr/s3/cruiser-production/2021/11/15150fb2-3fd7-4834-8495-66f968e1a3c4/870x489_20211102_153551.jpg'
        },
        {   modele: 'Eco 110',
            marque: 'Alstom',
            image: 'https://www.virage-energy.eu/wp-content/uploads/2020/10/virage-energy-article-energie-eolienne.jpg'
        },
        {   modele: 'Eco 122',
            marque: 'Alstom',
            image: 'https://transition-energetique.eco/wp-content/uploads/2021/07/eolienne-min.jpg'
        },
        {   modele: 'Haliade150',
            marque: 'Alstom',
            image: 'https://static.actu.fr/uploads/2022/02/2022-01-eoliennes-petit-caux-seine-maritime-1.jpg'
        },
        {   modele: 'E-44',
            marque: 'Enercon',
            image: 'https://images.rtl.fr/~c/2000v2000/rtl/www/1413261-des-eoliennes-dans-le-centre-de-la-france-en-juillet-2020.jpg'
        },
        {   modele: 'E-48',
            marque: 'Enercon',
            image: 'https://cdn.radiofrance.fr/s3/cruiser-production/2021/10/bf3e4108-fab8-4c59-9e2a-27edbadc97ec/1136_045-isc12416207.jpg'
        },
        {   modele: 'E-53',
            marque: 'Enercon',
            image: 'https://www.linfodurable.fr/sites/linfodurable/files/styles/landscape_w800/public/2021-07/rawfilm-4y2TkE8NYXY-unsplash.jpeg?h=845e576c&itok=nMsHUhfk'
        },
        {   modele: 'E-82 E2',
            marque: 'Enercon',
            image: 'https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/03/30/node_650356/41136153/public/2018/03/30/B9715212114Z.1_20180330150341_000%2BGD6AVVTU7.2-0.jpg?itok=JvLCmn7L1570807991'
        },
        {   modele: 'E-82 E3',
            marque: 'Enercon',
            image: 'https://img.lemde.fr/2019/06/18/474/0/5184/2592/1440/720/60/0/c0f62df_-TiUAFWXC_W3smwTggg16_bo.jpg'
        },
        {   modele: 'E-82 E4',
            marque: 'Enercon',
            image: 'https://www.usinenouvelle.com/mediatheque/7/9/3/000142397_896x598_c.jpg'
        },
        {   modele: 'E-92',
            marque: 'Enercon',
            image: 'https://img.pixers.pics/pho_wat(s3:700/FO/31/26/93/78/700_FO31269378_80344399c264462e73bdcc09c4976b26.jpg,700,444,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,394,jpg)/stickers-eoliennes-ferme-au-coucher-du-soleil.jpg.jpg'
        },
        {   modele: 'E-101',
            marque: 'Enercon',
            image: 'https://www.economiedenergie.fr/wp-content/uploads/2020/09/rawfilm-ihmzqv3lleo-unsplash-1920x1080.jpg'
        },
        {   modele: 'E-115',
            marque: 'Enercon',
            image: 'https://i-sam.unimedias.fr/2020/11/10/eolienne-infrasons-sante.jpeg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200'
        },
        {   modele: 'E-126',
            marque: 'Enercon',
            image: 'https://assets.letemps.ch/sites/default/files/styles/original/public/media/2020/10/01/file765utmewzz61als55d5y.jpg?itok=42_e4MMQ'
        },
        {   modele: 'SG 2.1 - 114',
            marque: 'Siemens',
            image: 'https://assets.letemps.ch/sites/default/files/styles/original/public/media/2020/05/04/file6uvexk6y0i8pjqt7qw.jpg?itok=lBphsIID'
        },
        {   modele: 'SG 2.2 - 122',
            marque: 'Siemens',
            image: 'https://www.suisse-eole.ch/media/redactor/Windpark%20Rengg_YWRSCIA.jpg'
        },
        {   modele: 'SG 2.6 - 114',
            marque: 'Siemens',
            image: 'https://www.terrenature.ch/wp-content/uploads/2018/11/eoliennes.jpg'
        },
        {   modele: 'SG 2.9 - 129',
            marque: 'Siemens',
            image: 'https://www.elecnor.com/resources/thumbs/90cd43921e612b0ef67d877f7a0f55d7'
        },
        {   modele: 'V90 - 2.0 MW',
            marque: 'Vestas',
            image: 'https://www.afd.fr/sites/afd/files/styles/visuel_principal/public/2021-03-05-24-50/parc-eolien-energie.jpg?itok=v3epKegR'
        },
        {   modele: 'V100 - 2.0 MW',
            marque: 'Vestas',
            image: 'https://media.lesechos.com/api/v1/images/view/5f1858273e454605342e9ba9/1280x720/0603595079087-web-tete.jpg'
        },
        {   modele: 'V105 - 3.45 MW',
            marque: 'Vestas',
            image: 'https://42info.fr/wp-content/uploads/2018/04/eoliennes_1.jpg'
        },
        {   modele: 'V110 - 2.0 MW',
            marque: 'Vestas',
            image: 'https://energiemines.ma/wp-content/uploads/2018/10/%C3%A9olienne.jpg'
        },
        ],

        Caracteristiques_eol: [
            ['1.67 MW','13.0 m/s','60.0 m - 70.0 m - 80.0 m','74.0 m','19.0 U/min','14 629,2 MWh','160 921,2 g'],
            ['1.67 MW','14.0 m/s','80.0 m ','80.0 m','17.9 U/min','14 629,2 MWh','160 921,2 g'],
            ['3.0 MW','12.0 m/s','75.0 m - 90.0 m - 100.0 m ','100.0 m','14.2 U/min','26 280 MWh','289 080 g'],
            ['3.0 MW','11.5 m/s','75.0 m - 90.0 m - 100.0 m ','110.0 m','13.6 U/min','26 280 MWh','289 080 g'],
            ['2.7 MW','10.0 m/s','89.0 m','122.0 m','12.3 U/min','23 652 MWh','260 172 g'],
            ['6.0 MW','14.0 m/s','100.0 m','150.0 m','11.5 U/min','52 560 MWh','578 160 g'],
            ['900.0 kW','16.5 m/s','45 m - 55 m','44.0 m','34.0 U/min','7 884 MWh','86 724 g'],
            ['800.0 kW','12.0 m/s','50 m - 65 m - 76 m','48.0 m','31.0 U/min','7 008 MWh','77 088 g'],
            ['800.0 kW','12.0 m/s','60 m - 73 m','52.9 m','28.3 U/min','7 008 MWh','77 088 g'],
            ['2.3 MW','12.0 m/s','98 m - 108 m - 138 m','82.0 m','18.0 U/min','20 148 MWh','221 628 g'],
            ['3.0 MW','16.0 m/s','98 m - 108 m - 138 m','82.0 m','18.0 U/min','26 280 MWh','289 080 g'],
            ['3.0 MW','16.0 m/s','69 m - 78 m - 84 m','82.0 m','18.0 U/min','26 280 MWh','289 080 g'],
            ['2.35 MW','14.0 m/s','84 m - 108 m - 138 m','92.0 m','16.0 U/min','20 586 MWh','226 446 g'],
            ['3.05 MW','13.0 m/s','124 m - 135 m - 149 m','101.0 m','14.5 U/min','26 718 MWh','293 898 g'],
            ['2.5 MW','12.0 m/s','92.5 m - 149 m','115.0 m','12.8 U/min','21 900 MWh','240 900 g'],
            ['7.58 MW','16.5 m/s','135.0 m','127.0 m','12.1 U/min','66 400,8 MWh','730 408,8 g'],
            ['2.1 MW','- m/s','68 m - 127 m - 153m','114.0 m','- U/min','18 396 MWh','202 356 g'],
            ['2.2 MW','8.5 m/s','108 m - 127 m','122.0 m','- U/min','19 272 MWh','211 992 g'],
            ['2.625 kW','8.5 m/s','63 m - 125 m','122.0 m','- U/min','23 038,8 MWh','253 426,8 g'],
            ['2.900 MW','7.5 m/s','87 m','129.0 m','- U/min','25 404 MWh','279 444 g'],
            ['2.0 MW','13.0 m/s','80 m - 95 m - 105 m','90.0 m','14.9 U/min','17 520 MWh','192 720 g'],
            ['2.0 MW','12.0 m/s','80 m - 95 m - 120 m','100.0 m','- U/min','17 520 MWh','192 720 g'],
            ['3.45 MW','13.0 m/s','- m','105.0 m','- U/min','30 222 MWh','332 442 g'],
            ['2.0 MW','11.5 m/s','80 m - 95 m - 125 m','110.0 m','- U/min','17 520 MWh','192 720 g']
        ],
        Caracteristiques_hydro: [
            ['30 kW','3.0 m','7.0 t','25 m de profondeur','262,8 MWh','6 307,2 g'],
            ['1 MW','10.0 m','400.0 t','55 m de profondeur','8 760 MWh','210 240 g'],
            ['3.5 kW','1.0 m','90.0 kg',"1.5 m d'eau minimum",'30,66 MWh','735,84 g'],
            ['20 kW','1.54 m','750.0 kg',"3.0 m  d'eau minimum",'175,2 MWh','4 204,8 g']
        ],
        Caracteristiques_pv: [
            ['375.0 Wc','19.5 kg','Monocristallin','1840 x 1030 x 32 mm','187 500 kWh','8 250 000 g'],
            ['370.0 Wc','21.0 kg','Monocristallin','1776 x 1052 x 35 mm','185 000 kWh','8 140 000 g'],
            ['330.0 Wc','18.7 kg','Monocristallin','1698 x 1004 x 35 mm','165 000 kWh','7 260 000 g'],
            ['270.0 Wc','18.4 kg','Monocristallin','1640 x 992 x 35 mm','135 000 kWh','5 940 000 g']
        ],


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

.catalogue{
    font-family: system-ui;
    margin: 0;
    padding-bottom: 10%;
    padding-top: 1%;
    background-color: #ffffff;
}

/* Popup */
@media (max-width: 1050px) {
    .flex-box-image{
        display : none
    }
    .flex-box{
        flex: 100%;
    }
    .flex-box .texte{
        margin-left: 10%
    }
}
.flex-box-container{
  display: inline-flex;
  justify-content: center; 
  flex-wrap: wrap;
  width: 100%;
}
.flex-box{
  flex: 50%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.flex-box-image{
    margin-right: -10%;
}
.flex-box img{
    width: 525px;
    height: 300px;
    margin-top: 10%;
}
.flex-box p, .flex-box h6{
    text-align: start;
}
.flex-box h5{
    margin-top: -3%
}
.texte{
    margin-right: 10%;
    margin-left: 20%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-right: 7%;
    padding-left: 7%;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2)
}
h3{
    font-family: Impact, Charcoal, sans-serif;
}
.flex-box #btn{
    border-radius: 3px;
    background: #31a9f5;
    margin-left: 10%;
    margin-top: -1%;
    margin-right: -75%;
    border-radius: 50%;
    padding: 8px
}
.flex-box h5{
    padding-top: 10px;
    margin-left: 10%;
}
.popup{
  position: fixed;
  bottom: 25%;
  margin-left: 7.5%;
  margin-bottom: -9%;  
  z-index: 9;
  width: 85%;
}
.popup-container{
    background-color: white;
}

/* Tableau-cartes */
.tableau-cartes{
  display: flex;
  flex-direction:column;
  justify-content: center; 
  align-items:center;
  margin: 3%;
}
.boites-container{
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  background-color: #ffffff;
}
.box{
  margin-top: 20px;
  margin-right: 20px;
  background-color: #ffffff;
  border: 1.5px solid #f1f1f1;
}
img{
    width: 350px;
    height: 200px;
    border-radius: 0px;
}
#btn{
  font-size: 11px;
  padding: 12px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fdfdfd; 
  background: #4cb050;
  margin-bottom: 4%;
  margin-top: 3%;
}
#btn:hover{
     opacity: 0.8;
}



/* Onglets-catalogue */
.onglets-catalogue{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    padding: 20px;
    position: sticky;
    margin-top: 5%;
}
.onglets-catalogue p{
  margin-right: 2%;
  cursor:pointer;
}
input{
  margin-right: 20px;
  margin-left: 20px;
  margin-top: -5%;
  padding: 15px;
  border-radius: 30px;
  border:none;
  background-color: #f2f2f2;
  outline:none;
}



</style>
