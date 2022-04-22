<template>
  <const>Graphique du rendement total moyen d'un panneau photovoltaïque (KWh) en fonction des mois de l'année.</const>
  <Chart
    :size="{ width: 800, height: 300 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis">
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'pl']" :lineStyle="{ stroke: 'blue' }"/>
      <Line :dataKeys="['name', 'avg']" :lineStyle="{ stroke: 'red' }"/>
      <Line :dataKeys="['name', 'inc']" :lineStyle="{ stroke: 'green' }"/>
    </template>
    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          pl: { color: 'blue' },
          avg: { color: 'red' },
          inc: { color: 'green' }
        }"
      />
    </template>
  </Chart>
    <b class="moy">Energie moyenne d'un PV en France </b> -
    <b class="max"> Energie maximale d'un PV en France </b> -
    <b class="min"> Energie minimale d'un PV en France</b>
    <br>
    <br>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import { DATA_PV_AN } from '@/data'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(DATA_PV_AN)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })
    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['0', '40'],
        type: 'linear',
        ticks: 8
      }
    })
    return { data, direction, margin, axis }
  }
})
</script>

<style>
.moy{
    color : blue;
}
.min{
    color : red;
}
.max{
    color : green;
}
b{
  font-size:15px
}
</style>

