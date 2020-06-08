<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  data: () => ({
    chartData: {
      labels: ["Work", "Travel", "School", "Workout", "Chill"],
      datasets: [
        {
          data: [5, 3, 5, 4, 8],
          backgroundColor: [
            "#F3F1EB",
            "#56595B",
            "#CBCBC7",
            "#44474A",
            "#A8A9A6",
            "#35393D",
            "#888A8A",
            "#2A2F34",
            "#6D7071"
          ],
          label: "Dataset 1",
          borderColor: "#22272C"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "top"
      },
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    }
  }),

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
