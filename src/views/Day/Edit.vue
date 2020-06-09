<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex justify-between text-blue-600 mb-4">
      <span class="text-cream text-lg">Edit Day</span>
      <div>
        <DayName :name="false" class="text-cream text-xl" />
      </div>
      <a href @click.prevent="cancel">
        <Icon name="x-circle" class="text-cream" />
      </a>
    </div>
    <div>
      <div v-if="!done" class="flex flex-col items-start mt-4">
        <span class="mb-2">You woke up on:</span>
        <input
          type="time"
          name="wake_up_time"
          id="wake_up_time"
          v-model="wake_up_time"
          class="bg-cream100 py-1 px-2 rounded mb-2"
        />
        <span class="text-red-500">{{ message }}</span>
        <div v-if="to_sleep_time" class="flex flex-col items-start mt-4">
          <span class="mb-2">You are going to sleep on:</span>
          <input
            type="time"
            name="to_sleep_time"
            id="to_sleep_time"
            v-model="to_sleep_time"
            class="bg-cream100 py-1 px-2 rounded mb-2"
          />
          <span class="text-red-500">{{ message }}</span>
        </div>

        <button
          @click.prevent="editDay"
          class="bg-cream text-dark uppercase font-semibold py-1 px-4 rounded mt-2"
          id="save-day"
        >Edit</button>
      </div>
      <div v-if="done">
        <button
          @click.prevent="cancel"
          class="bg-cream text-dark uppercase font-semibold py-1 px-2 rounded mt-2"
          id="return"
        >return</button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/Icon'
import DayService from '@/services/DayService'
import DayName from '@/components/base/DayDisplay'

export default {
  components: {
    Icon,
    DayName
  },
  data() {
    return {
      today: null,
      done: false,
      wake_up_time: null,
      to_sleep_time: null,
      message: ''
    }
  },
  methods: {
    cancel() {
      this.$router.push('/day')
    },
    getToday() {
      DayService.getToday()
        .then(response => {
          this.today = response.data
          this.wake_up_time = this.today.wake_up_time

          this.to_sleep_time = this.today.to_sleep_time
          localStorage.setItem('today', response.data.id)
        })
        .catch(error => {
          console.log('ERROR: ' + error.message)
        })
    },
    editDay() {
      this.today.wake_up_time = this.wake_up_time

      this.today.to_sleep_time = this.to_sleep_time
      DayService.editToday(this.today)
      this.done = true
    }
  },
  created() {
    this.getToday()
    //this.getActivities();
  }
}
</script>

<style></style>
