<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex justify-between text-blue-600">
      <span class="text-cream text-xl">Create Day - {{ today }}</span>
      <a href @click.prevent="cancel">
        <Icon name="x-circle" class="text-cream" />
      </a>
    </div>
    <div v-if="!done" class="flex flex-col items-start mt-4">
      <span class="mb-1">At what time dit you wake up today?</span>
      <input
        type="time"
        name="woke_up_time"
        id="woke_up_time"
        v-model="woke_up_time"
        class="bg-cream100 py-1 px-2 rounded mb-2"
      />
      <span class="text-red-500">{{ message }}</span>
      <button
        @click.prevent="addDay"
        class="bg-cream text-dark uppercase font-semibold py-1 px-2 rounded mt-2"
        id="save-day"
      >
        save
      </button>
    </div>
    <div v-if="done">
      <button
        @click.prevent="cancel"
        class="bg-cream text-dark uppercase font-semibold py-1 px-2 rounded mt-2"
        id="return"
      >
        return
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from "@/components/base/IconComponent";
import DayService from "@/services/DayService";

export default {
  components: {
    Icon
  },
  data() {
    return {
      woke_up_time: null,
      message: "",
      today: this.getToday(),
      done: false
    };
  },
  methods: {
    cancel() {
      this.$router.push("/day");
    },
    addDay() {
      if (this.woke_up_time != null) {
        DayService.newDay(this.woke_up_time);
        this.done = true;
      } else {
        this.message = "Please select a time!";
        console.log("Bruh moment");
      }
    },
    getToday() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      console.log(today);
      return today;
    }
  },
  created() {}
};
</script>
