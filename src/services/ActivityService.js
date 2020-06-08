import axios from "axios";
let user = JSON.parse(localStorage.getItem("user"));

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
  getActivitiesByDayId(dayId) {
    return apiClient.get("activity/" + dayId);
  },
  newActivity(type, duration, remark, dayId) {
    apiClient
      .post("activity", {
        type: {
          id: type
        },
        duration_time: duration,
        remark: remark,
        day: {
          id: dayId
        }
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log("ERROR: " + error);
      });
  },
  deleteActivity(id) {
    apiClient.delete("activity/" + id);
  }
};
