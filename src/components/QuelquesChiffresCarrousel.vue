<template>
    <br><br><br><br>

    <div class="Sources_energies" id="energies-renouvelables">
      <br><br><br>
      <h1>Énergies renouvelables</h1>
      <br><br>
      <p>Les énergies renouvelables sont celles qui sont dispensées continûment par la nature. Elles sont issues du rayonnement solaire, du noyau terrestre et des interactions gravitationnelles de la Lune et du Soleil avec les océans. </p>
      <p>On distingue les énergies renouvelables d'origine éolienne, solaire hydraulique ainsi que géothermique et issue de la biomasse.</p>
      <br><br><br>
    </div>



    <div class="QuelquesChiffres">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/quelques_chiffres_pv.jpg" class="img-pv d-block w-100" alt="quelques_chiffres_pv">
                <div class="carousel-caption d-none d-md-block">
                    <div class="box-qqChiffres">
                        <h3>Soleil</h3>
                        <hr>
                        <br>
                        <h1>Panneau photovoltaïque</h1>
                        <br><br>
                        <a href="#container_pv">
                            <button  class =" btn btn-pv"> VOIR PLUS </button >
                        </a>
                        </div>  
                    </div>
                </div>
                <div class="carousel-item">
                <img src="../assets/quelques_chiffres_eol.jpg" class="img-eol d-block w-100" alt="quelques_chiffres_eol">
                <div class="carousel-caption d-none d-md-block">
                    <div class="box-qqChiffres">
                        <h3>Vent</h3>
                        <hr>
                        <br>
                        <h1>Éolienne</h1>
                        <br><br>
                        <a href="#container_eol">
                            <button  class =" btn btn-eol"> VOIR PLUS </button >
                        </a>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                <img src="../assets/quelques_chiffres_hydro.jpg" class="img-hydro d-block w-100" alt="quelques_chiffres_hydro">
                <div class="carousel-caption d-none d-md-block">
                    <div class="box-qqChiffres">
                        <h3>Courants</h3>
                        <hr>
                        <br>
                        <h1>Hydrolienne</h1>
                        <br><br>
                        <a href="#container_hydro">
                            <button  class =" btn btn-hydro"> VOIR PLUS </button >
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        
        </div>
    


</template>



<style scoped>
.Sources_energies{
  background-color: #ededed;
}
.Sources_energies p{
  text-align: center;
  padding-right: 15%;
  padding-left: 15%;
  font-family: system-ui;
  font-weight: lighter;
}
h1{
    font-family: system-ui;
}



.carousel-inner{
  height: 70vh;
}
.box-qqChiffres{
    margin-top: -55%;
}
@media (max-width: 800px) {
  .QuelquesChiffres{
    display: none;
  }
} 
.img-pv{
    filter: brightness(80%);
}
.img-eol{
    filter: brightness(80%);
}
.img-hydro{
    filter: brightness(80%);
}
h3{
    font-family: system-ui;
    font-weight: lighter;
    font-size: 20px;
}
hr{
    width: 20%;
    margin-left: auto;
    margin-right: auto;
}
.btn{
    font-size: 11px;
    font-weight: bold;
    padding: 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #fdfdfd; 
}
.btn:hover {
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.btn-eol{
    background: #4cb050; 
}
.btn-pv{
    background: #fac02e;
}
.btn-hydro{
    background: #31a9f5;
}


</style>


<script>
export default {
  name: 'QuelquesChiffresCarrousel'  
}
</script>