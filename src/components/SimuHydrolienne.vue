<template>
  <div class="simulationHydrolienne">

  <br>
      <div class="Encard1">
      <br>
      <div><strong>Hydrolienne</strong></div>
      <br>
      </div>

    <br>
    <div class="Encard">
    <br>
    <h2>Nombre d'hydroliennes voulues ?</h2>
    <input type="number" min="1" v-model="NbHydro"  @keyup.enter="addValue" placeholder="Entrer un nombre">

    <div>
      <br>
      <h2>Quelle taille de pale souhaitez-vous ?</h2>
      <form>
          <input v-model="RayonPale" type="range" name="rayon" min="1" max="5" step="0.5" @input="addValue"/>
          <output name="result">{{RayonPale}}</output> m
      </form>
    </div>
    <br>
    </div>

    <div class="Encard">
    <br>
    <h2>Quelle localisation sur la côte française?</h2><br><br>
    <div class="map">
      <RegionsHydro @setevent="setCourant"></RegionsHydro>
    </div>
    <div id="mapHYDRO_mobile" class="mapHYDRO_mobile">
        <select class="custom-select" v-model="map_mobile" @click="SelectRegion" id="SelectRegion">
        <option >Raz de Barfleur</option>
        <option >Raz Blanchard</option>
        <option >Paimpol-Bréhat</option>
        <option >Bassin Girondin</option>
        <option >Passage du Fromveur</option>
        <option >Raz de Sein</option>
      </select>
      </div>
    <br>
    </div>
    
    <a href="#">
        <button class ="btn" id="ValiderHydro" @click="ValiderHydro" :disabled="(RayonPale===0) || (NbHydro===0) || (courant===0)">Je valide mon choix</button>
    </a>
    <br>
    <br>
            
  </div>    
</template>


<script>
import RegionsHydro from './RegionsHydro.vue'
export default {
    name: 'SimuHydrolienne',
    components:
  {
    RegionsHydro
  },
    data() {
        return{
            RayonPale: 0,
            NbHydro:0,
            courant:0,
            Puissance_an: 0,
            hydro: true,  
            map_mobile:'',
        }
    },
    methods:{
      setCourant(Courant){
        //On récupère les données
        this.courant = Courant

      },
      ValiderHydro(){
        this.Puissance_an = 0.5 * 16/27 * 1000 * Math.PI * Math.pow(this.RayonPale,2) * Math.pow(this.courant,3) * this.NbHydro *365*24 * Math.pow(10,-3)
        this.$emit('setevent', this.Puissance_an, this.NbHydro)   
      },
      SelectRegion(){
        if(this.map_mobile=='Raz de Barfleur' ){
           this.courant = 5
         }else if(this.map_mobile=='Raz Blanchard'){ 
           this.courant = 5.5
        }else if(this.map_mobile=='Paimpol-Bréhat'){
           this.courant = 4
        }else if(this.map_mobile=='Bassin Girondin'){
           this.courant = 3
        }else if(this.map_mobile=='Passage du Fromveur'){
           this.courant = 3.5
         }else if(this.map_mobile=='Raz de Sein'){
           this.courant = 3
        }
    },
    }
}
</script>


<style scoped>
  html {
  scroll-behavior: smooth;
  }
  .simulationHydrolienne{
    background-color: rgba(255, 255, 250, 0.7);
    border-radius :50px;
    background-size: cover;
    filter: drop-shadow(0 0 1rem #002F00);
    height: auto;
    margin: 60px 50px;
  }
  input{
  max-width: 400px;
  min-width: 180px;
  border-radius:5px;
  border: white;
  background-color: #FFFFFF;
  }
  .map{
    display: block;
  }
  .mapHYDRO_mobile{
    display:none;
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
  h2{
    font-size: 20px;
    font-family: Arial, sans-serif;
  }
  strong{
    font-size: 30px;
    font-family: Arial, sans-serif;
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
  .simulationHydrolienne{
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
  .mapHYDRO_mobile{
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

      