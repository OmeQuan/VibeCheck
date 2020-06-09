<template>
  <div class="card flex justify-center">
    <div class="flex flex-col justify-center items-center text-white relative">
      <DoughnutChart :height="250" :width="250" />
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/Stats/DoughnutChartComponent'

export default {
  components: {
    DoughnutChart
  }
}
</script>