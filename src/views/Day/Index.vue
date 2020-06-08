<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex justify-between text-blue-600">
      <div>
        <a href @click.prevent="createDay" v-if="!today" id="create-day">
          <Icon name="plus" class="text-cream" />
        </a>
        <a href @click.prevent="editDay" v-if="today">
          <Icon name="edit" class="text-cream" />
        </a>
      </div>
      <div>
        <DayName :name="false" class="text-cream text-xl" />
      </div>
      <a href @click.prevent="logOut">
        <Icon name="log-out" class="text-cream" />
      </a>
    </div>
    <div class="text-center">
      <div v-if="!today">
        <h1 class="font-light text-cream text-4xl mb-4" id="title">
          Start a new day
        </h1>
        <a href @click.prevent="createDay">
          <Icon
            name="plus"
            :width="48"
            :height="48"
            class="text-cream align-bottom"
          />
        </a>
      </div>
      <div v-if="today">
        <h1 class="font-light text-cream text-4xl" id="title">
          Your day so far
        </h1>
        <div class="mb-2">
          <span class="opacity-50 font-light text-cream text-xl"
            >Woke up around {{ today.wake_up_time }}</span
          >
        </div>
        <div v-if="!noActivities">
          <div v-for="activity in activities" :key="activity.id">
            <Activity @updateActivities="refresh" :item="activity" />
          </div>
        </div>

        <div v-if="noActivities">
          <div @click.prevent="createActivity" class="cursor-pointer">
            <span class="opacity-50 font-light text-cream text-2xl">
              Add new
              <br />activities for <br />today!
            </span>
          </div>
        </div>
        <div v-if="today.to_sleep_time" class="mt-2">
          <span class="opacity-50 font-light text-cream text-xl"
            >Going to sleep around {{ today.to_sleep_time }}</span
          >
        </div>
      </div>
    </div>
    <div v-if="today">
      <div class="fixed bottom-0 right-0 mr-4 mb-16">
        <button
          class="rounded-full bg-dark100"
          @click.prevent="createActivity"
          id="create-activity"
        >
          <Icon
            name="plus"
            :width="36"
            :height="36"
            class="text-cream align-bottom m-2"
            :strokeWidth="1"
          />
        </button>
      </div>
      <div v-if="!today.to_sleep_time" class="fixed bottom-0 left-0 ml-4 mb-16">
        <button
          class="rounded-full bg-dark100"
          @click.prevent="addSleep"
          id="create-activity"
        >
          <Icon
            name="moon"
            :width="36"
            :height="36"
            class="text-cream align-bottom m-2"
            :strokeWidth="1"
          />
        </button>
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from "@/components/base/IconComponent";
import NavBar from "@/components/base/NavBarComponent";
import DayName from "@/components/base/TodayNameComponent";
import Activity from "@/components/base/ActivityDisplayComponent";
import DayService from "@/services/DayService";
import ActivityService from "@/services/ActivityService";

export default {
  components: {
    Icon,
    NavBar,
    DayName,
    Activity
  },
  data() {
    return {
      today: null,
      activities: [],
      noActivities: false
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      localStorage.removeItem("today");
      this.$router.push("/login");
    },
    createDay() {
      this.$router.push("/day/create");
    },
    createActivity() {
      this.$router.push("/activity/create");
    },
    addSleep() {
      this.$router.push("/day/sleep");
    },
    getToday() {
      DayService.getToday()
        .then(response => {
          this.today = response.data;
          //console.log(response.data);
          this.getActivities(response.data.id);
          localStorage.setItem("today", response.data.id);
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    },
    editDay() {
      this.$router.push("/day/edit");
    },
    getActivities(id) {
      ActivityService.getActivitiesByDayId(id)
        .then(response => {
          if (response.data.length == 0) {
            this.noActivities = true;
          } else {
            this.noActivities = false;
          }
          this.activities = response.data;
        })
        .catch(error => {
          console.log("ERROR: " + error.message);
        });
    },
    refresh() {
      this.getActivities(this.today.id);
    }
  },
  created() {
    this.getToday();
    //this.getActivities();
  }
};
</script>
