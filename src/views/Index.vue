<template>
  <div class="container mx-auto px-4">
    <div class="mt-8 flex flex-col justify-between">
      <span class="text-4xl">Welcome to VibeCheck</span>
      <span class="text-xl mt-8 cursor-pointer" v-on:click="Continue">
        Continue
        <Icon name="arrow-right" />
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  },
  methods: {
    Continue() {
      this.$router.push('/day')
    }
  }
}
</script>

<style>
</style>