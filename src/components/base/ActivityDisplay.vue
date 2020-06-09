<template>
  <div>
    <div class="mt-2 flex justify-between mx-2" @click.prevent="deleteAct()" :id="item.remark">
      <span class="truncate w-20 my-auto">{{ item.remark }}</span>
      <span
        class="text-cream font-medium tracking-wider text-2xl text-center w-24"
      >{{ item.type.name }}</span>
      <span class="text-cream font-normal tracking-wider text-md my-auto w-20">{{ timeSpend }}</span>
    </div>
    <div v-if="options" class="mt-2 flex justify-between mx-8">
      <a @click.prevent="confirmDel()" id="delete">
        <Icon name="check" class="mr-4 text-green-400" />
      </a>
      <span>Delete activity?</span>
      <a @click.prevent="cancelDel()" id="cancel">
        <Icon name="x" class="text-red-500" />
      </a>
    </div>

    <hr class="opacity-25 px-4 -mx-4 mt-4" />
  </div>
</template>

<script>
import Icon from '@/components/base/Icon'

import ActivityService from '@/services/ActivityService'

export default {
  components: {
    Icon
  },
  props: {
    item: {},
    today: {}
  },
  data() {
    return {
      timeSpend: this.timeConvert(this.item.duration_time),
      options: false
    }
  },
  methods: {
    timeConvert(num) {
      var hours = num / 60
      var rhours = Math.floor(hours)
      var minutes = (hours - rhours) * 60
      var rminutes = Math.round(minutes)
      return rhours + 'hrs \n' + rminutes + 'min'
    },
    deleteAct() {
      if (!this.options) {
        this.options = true
      } else {
        this.options = false
      }
    },
    cancelDel() {
      this.options = false
    },
    confirmDel() {
      ActivityService.deleteActivity(this.item.id)

      this.updateActivities()

      location.reload()
    },
    updateActivities() {
      this.$emit('updateActivities')
    }
  }
}
</script>

<style></style>
