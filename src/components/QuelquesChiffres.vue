<template>

    <QuelquesChiffresContexte id="contexte"/>

    <QuelquesChiffresAlarmants id="quelques-chiffres"/>

    <QuelquesChiffresCarrousel id="energies-renouvelables"/>

    <QuelquesChiffresEnergies/>
    
</template>



<script>
import QuelquesChiffresContexte from '@/components/QuelquesChiffresContexte.vue'
import QuelquesChiffresAlarmants from '@/components/QuelquesChiffresAlarmants.vue'
import QuelquesChiffresCarrousel from '@/components/QuelquesChiffresCarrousel.vue'
import QuelquesChiffresEnergies from '@/components/QuelquesChiffresEnergies.vue'
export default {
  name: 'QuelquesChiffres',
  components: {
      QuelquesChiffresContexte,
      QuelquesChiffresCarrousel,
      QuelquesChiffresEnergies,
      QuelquesChiffresAlarmants
  }
}
</script>



<style scoped>


</style>