<template>
  <div id="nav">
    <a class="cursor" @click="refresh()">Accueil</a> 
    <a class="cursor" @click="refreshSimu()">Simulation</a>  
    <router-link to="/Catalogue">Catalogue</router-link> 
    <router-link to="/Quizz">Quiz</router-link> 
  </div>
  <router-view/>  


</template>


<style>


#app {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:15px;
}

#nav {
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 25%;
}

#nav a {
  /*Ajout*/
  display: block;
  padding: 8px 16px;
  width: 150px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: lighter;
}

#nav a.router-link-exact-active {
  color: rgb(135, 179, 126);
}

#nav a:hover:not(.active) {
  font-weight: normal;
}
.cursor{
  cursor:pointer;
}
@media (max-width: 1150px) {
  #nav {
    margin-left: 25%;
  }
}
@media (max-width: 800px) {
  #nav {
    margin-left: 0%;
  }
  #nav a  {
    flex: 100%;
  }
}
@media (max-width: 600px) {
  #nav {
    margin-top: 10%;
  }
}

</style>


<script>
export default {
    name: 'ResultatPV',
    methods:{
        refresh(){
          window.location.href = 'http://localhost:8080/';
        },
        refreshSimu(){
          window.location.href = 'http://localhost:8080/Simulation';
        }
    }
}
</script>