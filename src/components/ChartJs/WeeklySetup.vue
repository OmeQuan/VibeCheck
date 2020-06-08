<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartData: {
      labels: [
        "03-17-2020",
        "03-18-2020",
        "03-19-2020",
        "03-20-2020",
        "03-21-2020",
        "03-22-2020"
      ],
      datasets: [
        {
          label: "Rating",
          borderColor: "#F3F1EB",
          data: [1, 3, 5, 4, 2, 4, 2]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            type: "time",
            autoSkip: false,
            time: {
              unit: "day",
              displayFormats: {
                day: "DD - MM"
              },
              unitStepSize: 2
            },
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              max: 5,
              min: 1,
              stepSize: 3
            }
          }
        ]
      },
      showLine: false
    }
  }),

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
