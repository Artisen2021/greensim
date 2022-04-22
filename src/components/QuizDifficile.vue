<template>
        
    <div class="box box-demarrage box-quiz-difficile" v-if="QuizDifficile">
        <h3> Vous êtes prêt? 🥊 </h3>
        <button id="btn_DemarrerQuiz"  @click="DemarrerQuiz" >C'EST PARTI !</button>
    </div>
    

    <!-- Quiz en cours -->
    <div class="quiz" v-if="Quiz">
        <div class="box box-quiz">
            <div class="Question" style="font-weight: bolder">
                <h5><strong>Question {{Compteur+1}}/7</strong></h5>
            </div>
            <br>
            <h4>{{question_selectionnee}}</h4>
            <button  class="btn_Reponse" :id="item" @click="ReponseSelection(item)" v-for="item in Tab_boutons" :key="item">
                {{item}}
            </button>
            <br><br>
            <button id="btn_Valider" @click="ValiderReponse" :disabled="(reponse_selectionnee==='')">VALIDER</button>
        </div>
    </div>
    
    <!-- Résultats -->
    <div class="bilan" v-if="Bilan">
        <div class="box-bilan">
            <br><br>
            <h1>Résultats</h1>
            <br>
            <img src="../assets/stupid2.gif" v-if="stupid">
            <img src="../assets/do_better2.gif" v-if="do_better" >
            <img src="../assets/good_job2.gif" v-if="good_job">
            <br><br><br>
            <h2><strong>Votre score est de {{Resultat}}/7</strong></h2>
            <br>
            <h5>{{message}}</h5>
            <button id="btn_VoirReponses" @click="VoirReponses">VOIR LES RÉPONSES</button>
        </div>
        <div class="box box-res" v-if="resultat">
            <div class="resultat"  v-for="item2 in tab_item2" :key="item2">
                <div class="Question" style="font-weight: bolder">
                    <p><strong>{{Tab_questions[item2]}}</strong></p>
                </div>
                <br>
                <div class="Mauvaises_reponses">
                    <p>{{Tab_mauvaises_reponses[item2]}}</p>
                </div>
                <div class="Reponse">
                    <p>{{Tab_reponses[item2]}}</p>
                </div>
                <div class="Explications">
                    <p>{{Tab_explications[item2]}}</p>
                </div>
                <div class="PointHistorique" v-if="Tab_points_historiques[item2]">
                    <button class="btn_PointHistorique ">POINT HISTORIQUE</button>
                    <p>{{Tab_point_historique[item2]}}</p>
                </div>
                <br>
            </div>
        </div>
        <button id="btn_Recommencer" @click="Recommencer">RECOMMENCER LE QUIZ</button>
    </div>
    

</template>





<script>
 export default {
    name: 'QuizDifficile',
    data() {
      return {
        Quiz: false,
        Bilan: false,
        resultat: false,
        QuizFacile: true,
        QuizDifficile: true,

        Compteur: 0,
        rand: 0,
        tab_rand: [],
        Resultat: 0,

        //Affichage
        Tab_questions: [],
        Tab_reponses: [],
        Tab_mauvaises_reponses: [],
        Tab_explications: [],
        Tab_boutons: [],
        Tab_points_historiques: [],
        Tab_point_historique: [],
        item: '',
        item2: '',
        tab_item2: [0,1,2,3,4,5,6],

        question_selectionnee: '',
        reponse_selectionnee: '',
        nb_points: 0,

        Questions:["La durée de vie du gaz carbonique dans l'atmosphère est de l'ordre du siècle. Vrai ou Faux?",
                    "En France métropolitaine, quel est le secteur qui constitue la première source de gaz à effet de serre?",
                    "En quelle année a été défini le concept de développement durable comme suit: “satisfaire les besoins du présent sans hypothéquer la capacité des générations futures à satisfaire leurs propres besoins”?",
                    "A quelle puissance est évaluée la ressource éolienne disponible à l'échelle mondiale?",
                    "L'énergie solaire totale reçue à la surface de la terre est de 720 000 TWh par an, soit 2000 fois la consommation primaire actuelle de l'ensemble des activités humaines. Vrai ou Faux?",
                    "Si les 10 000 km2 de toiture existant en France étaient utilisés comme générateur solaire, la production serait de 1000 TWh par an, Vrai ou Faux?",
                    "La dépendance énergétique des pays occidentaux explique l'intérêt croissant pour le développement des énergies renouvelables. Quel pourcentage de l'énergie consommée au sein de la communauté européenne provient de ressources situées dans des pays en dehors de l'Union européenne?",
                    "En quelle année a été découvert l’effet photovoltaïque?",
                    "De quel siècle date l’invention de la roue à eau?",
                    "Qui est le physicien et mathématicien suisse qui a posé les bases de l'hydrodynamique et, d'une façon plus générale, de la mécanique des fluides?",
                    "De quelle année date le premier moulin à vent?",
                    "Depuis la période préindustrielle (1700-1800), de quel pourcentage la concentration de gaz carbonique CO2 a-t-elle augmenté?",
                    "Quelle est l’énergie qui constitue la première source renouvelable d'électricité exploitée?",
                    "Parmi les différents constats inquiétants établis par l’OMM (Organisation Météorologique Mondiale), lequel n’est pas exact?"],
        Tab_bonnes_reponses: ["Vrai","Transports","1987","57000 TWh par an","Faux","Vrai","Environ 50 %","1839","1er siècle avant J.C","Daniel Bernoulli","an 620","50%","L’hydraulique","Phrase n°2"],
        Explications: ["Inquiétant non?",
                            "En France, le secteur des transports est responsable de plus de 30 % du CO2 émis dans l'atmosphère en 2017 (LeMonde.fr). Cette répartition est très différente d'un pays à l'autre. Au début du 21e siècle, la répartition par secteur des émissions de CO2 dans le monde est la suivante: production électrique 39 %, transport 23 %, industrie 22 %, résidentiel 10 %, tertiaire 4 %, agriculture 2%.",
                            "Cette définition a été donnée par la Première Ministre norvégienne Gro Harlem Brundtland. En 1987, son rapport de commission intitulé « Notre Avenir Commun » pose la définition internationale officielle du « développement durable » et constitue désormais la référence pour les politiques environnementales.",
                            "Elle est évaluée à 57000 TWh par an. La contribution de l'éolien offshore est estimée de 25000 à 30000 TWh par an. En théorie, l'énergie d'origine éolienne pourrait satisfaire la demande mondiale d'électricité. Cependant, le principal inconvénient de cette source d'énergie est l'instabilité du vent.",
                            "L'énergie totale reçue à la surface de la terre est de 720 millions de TWh par an, soit 6000 fois la consommation primaire actuelle de l'ensemble des activités humaines.",
                            "La production serait de 1000 TWh par an, soit plus du double de la consommation annuelle finale d'électricité en France au début des années 2000.",
                            "Sans changement au niveau de la production énergétique, et compte tenu de l'augmentation prévisible de la consommation, cette dépendance énergétique passerait à 70% d'ici 2030.",
                            "L’effet photovoltaïque est découvert en 1839 par le français Edmond Becquerel. Il désigne la capacité que possèdent certains matériaux, notamment les semi-conducteurs, à convertir directement les rayonnements solaires en électricité.",
                            "La roue à eau était utilisée pour le broyage du grain.",
                            "Daniel Bernoulli établit en 1738 le principe de Bernoulli qui énonce que dans le flux d'un fluide homogène et incompressible soumis uniquement aux forces de pression et de pesanteur, une accélération se produit simultanément avec la diminution de la pression.",
                            "L'ancêtre de l'éolienne est le moulin à vent, apparu en Perse dès l'an 620.",
                            "Du fait de l'activité humaine, la concentration des gaz à effet de serre a explosé.",
                            "La production mondiale d’énergie hydraulique au début des années 2000 est de 2700 TWh par an. On pourrait passer à 8100 TWh à l'horizon 2050.",
                            "La température moyenne à la surface du globe a dépassé de 1,2 °C celle de l’époque préindustrielle"],
        Tab_ToutesLesReponses: [
                        ["Vrai","Faux"],
                        ["Production électrique","Transports","Industrie","Résidentiel"],
                        ["1987","1973","1980","1996"],
                        ["8000 TWh par an","32000 TWh par an","44000 TWh par an","57000 TWh par an"],
                        ["Vrai","Faux"],
                        ["Vrai","Faux"],
                        ["Environ 50 %","Environ 30 %","Environ 40 %","Environ 70 %"],
                        ["1883","1839","1805","1930"],
                        ["1er siècle avant J.C","2ème siècle avant J.C","2ème siècle après J.C","5ème siècle après J.C"],
                        ["Edmond Becquerel","Daniel Bernoulli","Albert Einstein","Erwin Schrödinger"],
                        ["an 830","an 620","an 340","an 0"],
                        ["5%","10%","30%","50%"],
                        ["Le solaire","L’éolien","La géothermie","L’hydraulique"],
                        ["2020 a été l'une des trois années les plus chaudes jamais observées","La température moyenne à la surface du globe a dépassé de 0,6 °C celle de l’époque préindustrielle (période 1850-1900)","Les six années écoulées depuis 2015 ont été les plus chaudes jamais enregistrées"]
                    ],//ATTENTION a la derniere reponse: phrase num 2
        Points_historiques: ["","","","","","","",
                                "En 1930 apparaissent les cellules en oxyde cuivreux puis au sélénium. Mais ce n’est qu’en 1954, avec la réalisation des premières cellules photovoltaïques au silicium que l’on entrevoit la possibilité de fournir de l’énergie. Elles sont très rapidement utilisées pour l’alimentation d’engins spatiaux (satellites en 1958). Au cours des années 1990, la technologie photovoltaïque progresse par l’installation de toits photovoltaïques puis de plusieurs centrales. Elle devient même familière à travers son intégration dans de nombreux produits de faibles puissances: montres, calculatrices, balises radio et météorologiques…",
                                "À partir du XIe siècle, les moulins à eau sont utilisés en tant que moteurs industriels jusqu’à l'invention de la machine à vapeur au XVIIIᵉ siècle. Les fondements de l'hydrodynamique et de l'écoulement des fluides sont établis au XVIIIe siècle par Daniel Bernoulli et Leonhard Euler. En 1827, la première première turbine hydraulique voit le jour. Le développement des premières centrales hydroélectriques remonte à la fin du XIXe siècle avec des puissances de quelques dizaines de kW. En 1950, la production hydroélectrique représente 58 % de la production totale d'électricité en France. Suite au développement du programme nucléaire, la part d'hydroélectricité dans la production totale d'électricité en France passe à 40 % en 1970, à 20 % en 1990 et à 9 % en 2003. On distingue la grande hydraulique qui regroupe les aménagements hydroélectriques de forte puissance - au-delà de la dizaine de Mégawatt - de la petite hydraulique qui regroupe les centrales de puissance inférieure.",
                                "",
                                "En 1888, Charles Francis Brush construit une grande éolienne pour alimenter sa maison en électricité, avec stockage par batterie d'accumulateurs. La première éolienne « industrielle » génératrice d'électricité est mise au point en 1890, pour fabriquer de l'hydrogène par électrolyse. Il faudra attendre les années 1970 et le premier choc pétrolier pour voir cette technologie se développer. ",
                                "","",""],
        Tab_nb_points: [   [1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,1],[1,0],[1,0,0,0],[0,1,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,1],[0,0,0,1],[0,1,0]  ],

        Message: ["Vous êtes le frère jumeau de Donald Trump (ce n'est pas un compliment).", "Ok boomer, y a du progrès.","Le poste de ministre de la transition écologique, ça te dit?"],
        message: '',
        stupid: false,
        do_better: false,
        good_job: false,
        id_bouton: '',
        //Ajout
        Tab_rand:[]
      }
    },
    methods: {
        DemarrerQuiz(){
            //choisit une question au hasard
            this.rand = Math.floor(Math.random()*this.Questions.length);
            this.question_selectionnee = this.Questions[this.rand];
            console.log("this.rand = "+this.rand)

            //Affiche les boutons correspondant à la question prise au hasard
            this.Tab_boutons = this.Tab_ToutesLesReponses[this.rand]

            this.QuizFacile = false
            this.QuizDifficile = false
            this.Quiz = true
        },
        ReponseSelection(rep){          
                //Récupère la réponse sélectionnée lors de l'appui sur un des boutons
                this.reponse_selectionnee = rep

                //Récupère le nombre de point de la réponse sélectionnée
                for (let i=0; i<=this.Tab_boutons.length; i++){
                    if( this.reponse_selectionnee == this.Tab_boutons[i]){
                        this.nb_points = this.Tab_nb_points[this.rand] [i]
                    }
                }

                if( this.id_bouton!=''){
                    this.id_bouton.style.fontWeight = "normal"
                    this.id_bouton.style.boxShadow = "none"
                    this.id_bouton.style.transform = "scale(0.9)"
                }
                this.id_bouton = document.getElementById(rep)
                this.id_bouton.style.fontWeight = "bold"
                this.id_bouton.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                this.id_bouton.style.transform = "scale(1.1)"
        },
        
        ValiderReponse(){
            
            console.log("\n")

            //Pour l'affichage ensuite:
            // => Récupère la question et la place à la suite du tableau Tab_questions[]
            this.Tab_questions[this.Compteur] = this.question_selectionnee
            this.Tab_rand[this.Compteur] = this.rand
            console.log("this.Tab_rand = "+this.Tab_rand)
            // => Récupère la bonne réponse associée à la question et la place à la suite du tableau Tab_reponses[]
            this.Tab_reponses[this.Compteur] = this.Tab_bonnes_reponses[this.rand]
            // => Récupère les mauvaises réponses et les place à la suite du tableau Tab_mauvaises_reponses[]
            if (this.nb_points==0){
                this.Tab_mauvaises_reponses[this.Compteur] = this.reponse_selectionnee
            }else{
                this.Tab_mauvaises_reponses[this.Compteur] = ''
            }
            // => Récupère l'explication associée à la question et la place à la suite du tableau Tab_explications[]
            this.Tab_explications[this.Compteur] = this.Explications[this.rand]
            // => Récupère les mauvaises réponses et les place à la suite du tableau Tab_mauvaises_reponses[]
            if (this.nb_points==0){
                this.Tab_mauvaises_reponses[this.Compteur] = this.reponse_selectionnee
            }else{
                this.Tab_mauvaises_reponses[this.Compteur] = ''
            }
            // => Récupère le point historique associé à la question et le place à la suite du tableau Tab_points_historiques[]
            this.Tab_point_historique[this.Compteur] = this.Points_historiques[this.rand]
            if (this.Points_historiques[this.rand]==''){
                this.Tab_points_historiques[this.Compteur] = false
            }else{
                this.Tab_points_historiques[this.Compteur] = true
                
            }

            //Résultat
            this.Resultat += this.nb_points

            this.Compteur++
            
            //Fin
            if (this.Compteur == 7){

                if( this.Resultat<=2 ){
                    this.message = this.Message[0]
                    this.stupid = true
                }
                else if( (this.Resultat>2) && (this.Resultat<=4)){
                    this.message = this.Message[1]
                    this.do_better = true
                }
                else if (this.Resultat>4){
                    this.message = this.Message[2]
                    this.good_job = true
                }

                this.Quiz = !this.Quiz
                this.Bilan = !this.Bilan
            }
            
            //Remet une chaine vide dans reponse_selectionnee afin que le bouton Valider soit non cliquable pour la prochaine question
            this.reponse_selectionnee = ''

            //On choisit une question au hasard
            //Afin d'éviter que 2 questions se répètent, on la compare aux autres questions déjà sélectionnées auparavant
            this.rand = Math.floor(Math.random()*this.Questions.length);
            this.question_selectionnee = this.Questions[this.rand];
            console.log("this.rand = "+this.rand)
            var i = 0
            for (i = 0; i<this.Tab_questions.length ; i++){
                while (this.question_selectionnee == this.Tab_questions[i]){
                    this.rand = Math.floor(Math.random()*this.Questions.length);
                    this.question_selectionnee = this.Questions[this.rand];
                    console.log("this.rand_remplacee = "+this.rand)
                    i=0
                }  
            }
            
            //Affiche les boutons correspondant à la question prise au hasard
            this.Tab_boutons = this.Tab_ToutesLesReponses[this.rand]              
            
        },
        VoirReponses(){
            this.resultat = true
        },
        Recommencer(){
            window.location.href = 'http://localhost:8080/Quizz';
        }
    }
 }
</script>


<style scoped>

.quiz, .bilan{
    font-family: system-ui;
}
.box{
    margin: 5%;
    padding: 50px;
    padding-top: 70px;
    padding-bottom: 70px;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2)
}
/* Résultats */
.bilan{
    background-color:#d3e4d7;
    margin-top: -3%;
    padding-bottom: 10%;
}
.box-bilan{
    font-family: Impact, Charcoal, sans-serif;
}
img{
    height: 210px;
    width: 245px;
}
h1{
    font-size: 60px;
}
.box-res{
    background-color:#ffffff;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 15%;
    margin-right: 15%;
}
.box-res p{
    font-weight: lighter;
    text-align: start;
}
.PointHistorique button{
    margin: 2%;
    font-family: system-ui;
    font-size: 12px;
    padding: 12px;
    border-radius: 25px;
    cursor: context-menu;
    border: none;
    outline: none;
    background-color: #fac02e; 
    color: white
}
#btn_VoirReponses{
    margin: 2%;
    font-family: system-ui;
    font-size: 13px;
    padding: 16px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: #31a9f5; 
    color: white
}
.Reponse{
    color: green;
}
.Mauvaises_reponses{
    color: red;
}
#btn_Recommencer{
    margin-bottom: 3%;
    font-family: system-ui;
    font-size: 13px;
    padding: 16px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: #f5319d; 
    color: #ffffff
}

/*Quiz en cours*/
.box-quiz{
    background-color: #f1f1f1;
}
.btn_Reponse{
    margin: 2%;
    font-family: system-ui;
    font-size: 13px;
    padding: 16px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: rgb(157, 201, 167); 
} 
.btn_Reponse:hover {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.btn_Reponse:active  {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
#btn_Valider{
    font-size: 15px;
    padding: 13px;
    cursor: pointer;
    border-radius: 25px;
    font-family: system-ui;
    margin: 5px;
    border: 2px solid rgb(157, 201, 167); 
    outline: none;
    background: transparent;
    color: rgb(157, 201, 167); 
  
}
#btn_Valider:hover{
    transition: all 0.3s ease-in-out;
    background: #f1f1f1;
}
/*Avant de démarrer le quiz*/
.box-demarrage{
    background-color: rgb(157, 201, 167);
    padding: 10%;
}
#btn_DemarrerQuiz{
    margin-top: 5%;
    font-size: 15px;
    padding: 10px;
    margin-left: 2%;
    margin-right: 2%;
    cursor: pointer;
    border-radius: 25px;
    font-family: system-ui;
    border: 2px solid #f1f1f1;
    outline: none;
    background: transparent;
    color: #f1f1f1;
}
#btn_DemarrerQuiz:hover{
    transform: scale(1.1);
    transition: transform .2s;
}

</style>