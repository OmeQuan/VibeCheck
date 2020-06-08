<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex justify-between text-blue-600">
      <div>
        <a href @click.prevent="createDay">
          <Icon name="plus" class="text-cream" />
        </a>
        <a href @click.prevent="editDay">
          <Icon name="edit" class="text-cream" />
        </a>
      </div>
      <a href @click.prevent="logOut">
        <Icon name="log-out" class="text-cream" />
      </a>
    </div>

    <h1 class="mt-2 font-bold text-4xl">Home</h1>
    <div v-for="day in days" :key="day.id">
      {{ day.date }}
      <br />
      {{ day.wake_up_time }}
      <br />
      <br />
    </div>

    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from "@/components/base/IconComponent";
import NavBar from "@/components/base/NavBarComponent";
import DayService from "@/services/DayService";

export default {
  components: {
    Icon,
    NavBar
  },
  data() {
    return {
      days: []
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    createDay() {
      this.$router.push("/day/create");
    },
    getAllDays() {
      DayService.getAllDays()
        .then(response => {
          this.days = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    },
    editDay() {
      this.$router.push("/day/edit");
    }
  },
  created() {
    this.getAllDays();
  }
};
</script>
