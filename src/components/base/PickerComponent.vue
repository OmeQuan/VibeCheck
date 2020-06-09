<template>
  <div class="flex justify-center">
    <div class="rounded-full border-cream border">
      <button
        type="button"
        class="px-4 rounded-full text-md font-bold border-dark border-2"
        :class="{active: activeBtn === 'daily' }"
        @click.prevent="setPicker"
      >Weekly</button>
      <button
        type="button"
        class="px-4 rounded-full text-md font-bold border-dark border-2"
        :class="{active: activeBtn === 'weekly' }"
        @click.prevent="setPicker"
      >Monthly</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 'daily'
    }
  },
  methods: {
    setPicker() {
      if (this.activeBtn == 'daily') {
        this.activeBtn = 'weekly'
      } else {
        this.activeBtn = 'daily'
      }
      this.updatePicker(this.activeBtn)
    },
    updatePicker(active) {
      this.$emit('updatePicker', active)
    }
  }
}
</script>

<style>
.active {
  background-color: #f3f1eb;
  color: #273a3a;
}
</style>