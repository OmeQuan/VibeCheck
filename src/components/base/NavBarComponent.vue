<template>
  <nav class="navbar text-cream flex items-center fixed bottom-0 left-0 w-full shadow-inner">
    <div class="container px-16 flex justify-between mx-auto md:mx-64">
      <router-link :to="{ name: 'stats' }" class="opacity-50 link px-4">
        <Icon name="pie-chart" />
      </router-link>

      <router-link :to="{ name: 'day' }" class="opacity-50 link px-4">
        <Icon name="clock" />
      </router-link>

      <router-link :to="{ name: 'personal' }" class="opacity-50 link px-4">
        <Icon name="smile" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  }
}
</script>

<style scoped>
.navbar {
  height: 56px;
  background-color: #22272c;
}

.router-link-active {
  opacity: 1;
  border-bottom: #f3f1eb 1px solid;
}

.link {
  padding-bottom: 14.5px;
  padding-top: 14.5px;
}
</style>
