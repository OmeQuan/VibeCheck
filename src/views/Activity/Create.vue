<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex justify-between text-blue-600">
      <span class="text-cream text-2xl">Create Activity</span>
      <a href @click.prevent="cancel">
        <Icon name="x-circle" class="text-cream" />
      </a>
    </div>
    <hr class="opacity-25 mt-2" />

    <!-- input field -->
    <div class="flex-col items-start mt-4">
      <div class="flex">
        <label class="text-cream text-xl mr-4">Category:</label>
        <select
          name="category"
          id="category"
          v-model="typeId"
          class="shadow appearance-none border-none rounded py-2 px-3 mb-4 text-cream leading-tight focus:outline-none focus:shadow-outline bg-dark100"
        >
          <option value="1">Sport</option>
          <option value="2">School</option>
          <option value="3">Chill</option>
          <option value="4">Work</option>
        </select>
      </div>

      <div class="flex">
        <label class="text-cream text-xl mr-4">Duration:</label>
        <input
          type="time"
          v-model="time_input"
          id="duration"
          class="shadow appearance-none border-none rounded py-2 px-3 mb-4 text-cream leading-tight focus:outline-none focus:shadow-outline bg-dark100"
        />
      </div>

      <div class="flex-col flex">
        <label class="text-cream text-xl mr-4 mb-2">Remark:</label>
        <textarea
          v-model="remark"
          id="remark"
          class="shadow appearance-none border-none rounded py-8 px-3 mb-4 text-cream leading-tight focus:outline-none focus:shadow-outline bg-dark100"
        />
      </div>

      <span class="text-red-500">{{ message }}</span>
    </div>

    <!-- Add button -->
    <div class="fixed bottom-0 right-0 mr-4 mb-8">
      <button class="rounded-full bg-dark100" @click.prevent="addActivity" id="add-activity">
        <Icon
          name="check"
          :width="36"
          :height="36"
          class="text-cream align-bottom m-2"
          :strokeWidth="1"
        />
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from '@/components/base/Icon'
import ActivityService from '@/services/ActivityService'

export default {
  components: {
    Icon
  },
  data() {
    return {
      time_input: '00:00',
      typeId: null,
      remark: '',
      message: ''
    }
  },
  computed: {
    dayId() {
      return localStorage.today
    }
  },
  methods: {
    cancel() {
      this.$router.push('/day')
    },
    addActivity() {
      ActivityService.newActivity(
        this.typeId,
        this.calcDuration(),
        this.remark,
        this.dayId
      )
      this.$router.push('/day')
    },
    calcDuration() {
      var a = this.time_input.split(':')
      var minutes = +a[0] * 60 + +a[1]
      return minutes
    }
  },
  created() {}
}
</script>
