
<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {},
  data() {
    return {
      chartData: {
        datasets: [],
        labels: ['School', 'Chill', 'Work', 'Sport']
      },
      chartOptions: {
        legend: {
          display: false
        },
        cutoutPercentage: 50,
        circumference: Math.PI,
        rotation: Math.PI
      }
    }
  },
  created() {
    this.chartData.datasets = this.datasets
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  computed: {
    datasets() {
      return [
        {
          data: [5, 6, 7, 5],
          backgroundColor: [
            '#F3F1EB',
            '#8A8C8B',
            '#616465',
            '#B4B4B2',
            '#373B3F',
            '#DEDDD8'
          ], //give color list
          borderColor: '#22272C',
          borderWidth: 1
        }
      ]
    }
  },
  methods: {}
}
</script>
