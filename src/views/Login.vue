<template>
  <div class="h-screen container mx-auto px-4">
    <div class="w-full flex flex-col items-center">
      <img alt="Vue logo" class="mb-4 max-w-sm" src="../assets/logo.png" />
    </div>
    <div class="flex items-center justify-center min-w-0">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/Register/LoginForm'
export default {
  components: {
    LoginForm
  }
}
</script>

<style></style>
