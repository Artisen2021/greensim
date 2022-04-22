<template>

  <div class="Simulation">

    <!------Logo ------>
    <div class="menu">
      <img id="logo" class="logo" alt="Vue logo"  src="../assets/Logo.jpg">
      <h2>GreenSim</h2>
    </div>

    <TypeEnergie/>

  </div>

</template>


<script>
import TypeEnergie from '@/components/TypeEnergie.vue'
export default {
  name: 'Simulation',
  components: {
    TypeEnergie
  }
}
</script>


<style scoped>
html {
  overflow-x: Hidden
}
.Simulation{
  background: url('../assets/TypeEnergie.jpg');
  background-size: cover;
  height:auto;
  padding:1%
}

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
</style>