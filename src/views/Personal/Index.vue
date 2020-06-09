<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex flex-col justify-between">
      <div class="flex flex-col justify-start">
        <div class="flex flex-col">
          <span class="text-xl opacity-50">Username:</span>
          <span class="text-2xl">{{ currentUser.username }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xl opacity-50">Email:</span>
          <span class="text-2xl">{{ currentUser.email }}</span>
        </div>
        <div class="flex flex-col mt-4">
          <span class="text-md opacity-50">Total entries:</span>
          <span class="text-xl">{{entriesAmount}}</span>
        </div>
      </div>
    </div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBar'

import DayService from '@/services/DayService'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      days: [],
      entriesAmount: null
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    setDays() {
      DayService.getAllDaysByUserId()
        .then(resp => {
          this.days = resp.data
          this.entriesAmount = this.days.length
        })
        .catch(error => {
          console.log('ERROR: ' + error.message)
        })
    }
  },
  created() {
    this.setDays()
  }
}
</script>

<style>
</style>