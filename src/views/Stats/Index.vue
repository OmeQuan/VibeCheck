<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex flex-col justify-center">
      <Picker @updatePicker="test" />
    </div>
    <div class="flex flex-col text-center">
      <div class="flex flex-col">
        <DayName class="text-4xl font-light tracking-wider" />
        <span class="text-2xl font-light">Activities</span>
      </div>
      <UsageChart class="-mt-12" />
    </div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'
import Picker from '@/components/base/Picker'
import DayName from '@/components/base/DayDisplay'

import UsageChart from '@/components/Stats/UsageStat'

export default {
  components: {
    NavBar,
    UsageChart,
    DayName,
    Picker
  },
  methods: {
    test(active) {
      console.log(active)
    }
  }
}
</script>

<style>
</style>