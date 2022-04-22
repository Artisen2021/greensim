<template>

    <div class="energies">

        <br>
        <div class="vl"></div>

        <div class="container container_pv" id="container_pv">
            <h2>01</h2>
            <h1>Panneau photovoltaïque</h1><br>
            <div class="container_energie">
                <div class="box_energie">
                    <br><br>
                    <img src="../assets/panneau-solaire.png" class="icone icone_panneau_solaire" >
                </div>
                <div class="box_energie">
                    <div class="box_text">
                        <p>L'énergie totale reçue à la surface de la terre est de 720 millions de TWh par an, soit 6000 fois la consommation primaire actuelle de l'ensemble des activités humaines. Mais la disponibilité de cette énergie dépend du cycle jour-nuit, de la latitude de l'endroit où elle est captée,des saisons et de la couverture nuageuse.</p>
                        <p>Le solaire photovoltaïque consiste à produire directement de l'électricité au moyen de cellules au silicium. Lorsqu'il brille et que les conditions climatiques sont favorables, le soleil fournit une puissance crête de 1 kW/m2. La productivité d'un panneau photovoltaïque varie avec l'ensoleillement: environ 100 kWh/m2/an en Europe du Nord, deux fois plus en région sud-méditerranéenne. Si les 10 000 km2 de toiture existant en France étaient utilisées comme générateur solaire, la production serait de 1000 TWh  par an, soit plus du double de la consommation annuelle finale d'électricité en France au début des années 2000.</p>
                        <p>Les principaux freins à l'utilisation massive du solaire photovoltaïque sont l'intermittence de la puissance fournie qui contraint au stockage de l'électricité pour une utilisation autonome ou à l'utilisation de solutions énergétiques complémentaires. </p> 
                        <p>{{message}}</p>
                    </div>
                </div>
            </div>
        </div>

        <br><br>
        <div class="vl"></div>

        <div class="container container_eol" id="container_eol">
            <h2>02</h2>
            <h1>Éolienne</h1><br>
            <div class="container_energie">
                <div class="box_energie">
                    <div class="box_text">
                        <p>La ressource éolienne disponible est évaluée à l'échelle mondiale à 57000 TWh par an. La contribution de l'éolien offshore est estimée de 25000 à 30000 TWh par an. En théorie, l'énergie d'origine éolienne pourrait satisfaire la demande mondiale d'électricité. Cependant, le principal inconvénient de cette source d'énergie est l'instabilité du vent. Les périodes de grand froid, comme de canicule, qui se traduisent par une demande accrue d'énergie s'accompagnent fréquemment de vent faible voire nul. C'est pourquoi un développement important de l'éolien est envisageable en l'associant avec d'autres sources d'énergie renouvelable moins aléatoires ou complémentaires.</p>
                        <p>L'Europe représente 9 % du potentiel éolien disponible dans le monde. Elle a produit 131 TWh  d'électricité d'origine éolienne en 2009.</p>
                    </div>
                </div>
                <div class="box_energie">
                    <br><br>
                    <img src="../assets/eolienne.png" class="icone icone_eolienne" >
                </div>
            </div>
        </div>

        <br><br>
        <div class="vl"></div>

        <div class="container container_hydro" id="container_hydro">
            <h2>03</h2>
            <h1>Hydrolienne</h1><br>
            <div class="container_energie">
                <div class="box_energie">
                    <br><br>
                    <img src="../assets/hydro-energie.png" class="icone icone_hydrolienne" >
                </div>
                <div class="box_energie">
                    <div class="box_text">
                        <p>L’hydraulique en général est actuellement la première source renouvelable d'électricité exploitée. La production mondiale au début des années 2000 est de 2700 TWh par an. On pourrait passer à 8100 TWh à l'horizon 2050.</p>
                        <p>Le principe de l'hydrolienne peut-être assimilé à celui d'une éolienne sous-marine qui convertit une partie de l'énergie cinétique des courants marins.</p>
                        <p>Les courants des côtes de la façade atlantique représentent un important gisement d'énergie. Mais le milieu marin est très contraignant et les récupérateurs d'énergie des courants ne sont pas encore tout à fait matures. Des prototypes sont cependant testés.</p>  
                    
                    </div>
                </div>
            </div>
        </div>

    </div>
    
</template>


<script>
export default {
  name: 'QuelquesChiffresEnergies',
  methods:{
  }
}
</script>


<style scoped>
p{
  text-align: start;
  font-family: system-ui;
  font-weight: lighter;
  font-size: 13px;
}
h1{
    font-family: system-ui;
    font-weight: lighter;
    font-size: 60px;
}
h2{
    font-weight: bolder;
    font-size: 90px;
}
.container_pv h2{
    color: #fae2a6;
}
.container_eol h2{
    color: #abf5ae;
}
.container_hydro h2{
    color: #aadaf8;
}
.icone{
    width: 25%;
    height: auto;
    transition: transform .2s;
    cursor: pointer;
}
.icone:hover{
    transform: scale(1.1);
}
.box_text {
    padding: 40px;
    border-radius: 10px 10px 10px 10px;
    box-shadow:0 4px 8px 0 rgba(124, 117, 117, 0.2);
}
.vl {
    border: 0px;
    border-left: 2px solid rgb(230, 227, 227);
    height: 80px;
    margin-left: 50%;
    border-style: dashed;
    }
.container_energie{
    display: inline-flex;
    justify-content: center; 
    flex-wrap: wrap;
}
.box_energie{
  flex: 25%;
}
.container_pv .box_text, .container_hydro .box_text {
    margin-right: 5%;
}
.container_eol .box_text {
    margin-left: 5%;
}

@media (max-width: 800px) {
  .box_energie {
    flex: 100%;
  }
}
</style>




