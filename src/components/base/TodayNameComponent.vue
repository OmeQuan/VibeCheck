<template>
  <div>
    <span v-if="!name" id="today-date">{{ todayDate }}</span>
    <span v-if="name" id="today-name">{{ todayName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      todayDate: this.getTodayDate(),
      todayName: this.getTodayName()
    }
  },
  methods: {
    getTodayDate() {
      var today = new Date()
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
      var yyyy = today.getFullYear()

      today = yyyy + '-' + mm + '-' + dd
      //console.log(today);
      return today
    },
    getTodayName() {
      var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]

      var d = new Date()
      d.getDate()
      var dayName = days[d.getDay()]
      return dayName
    }
  }
}
</script>

<style></style>
