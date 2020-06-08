import axios from "axios";
let user = JSON.parse(localStorage.getItem("user"));

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

const apiClient = axios.create({
  baseURL: "http://localhost:8085/api/",
  userCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + user.accessToken
  },
  timeout: 10000
});

export default {
  getAllDays() {
    return apiClient.get("day");
  },
  newDay(time) {
    apiClient
      .post("day", {
        date: today,
        user: {
          id: user.id
        },
        wake_up_time: time
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log("ERROR: " + error);
      });
  },
  getToday() {
    return apiClient.get("day/today", {
      params: {
        userId: user.id,
        date: today
      }
    });
  },
  editToday(today) {
    if (today.to_sleep_time == null) {
      apiClient
        .put("day", {
          id: today.id,
          date: today.date,
          user: today.user,
          wake_up_time: today.wake_up_time
        })
        .then(resp => {
          console.log(resp.data);
        })
        .catch(error => {
          console.log("ERROR: " + error);
        });
    } else {
      apiClient
        .put("day", {
          id: today.id,
          date: today.date,
          user: today.user,
          wake_up_time: today.wake_up_time,
          to_sleep_time: today.to_sleep_time
        })
        .then(resp => {
          console.log(resp.data);
        })
        .catch(error => {
          console.log("ERROR: " + error);
        });
    }
  }
};
