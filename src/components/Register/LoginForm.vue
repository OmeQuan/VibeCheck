<template>
  <div class="w-full max-w-md">
    <form name="form" @submit.prevent="handleLogin">
      <div class="mb-4">
        <input
          type="text"
          class="form-control py-2 px-4 placeholder-gray-700 w-full appearance-none leading-tight"
          name="username"
          placeholder="Username"
          id="username"
          v-model="user.username"
        />
        <div v-if="this.usernameMissing" role="alert">
          <p class="text-red-500 text-xs">Please choose an Username!</p>
        </div>
      </div>
      <div class="mb-4">
        <input
          type="password"
          class="form-control py-2 px-4 placeholder-gray-700 w-full appearance-none"
          name="password"
          placeholder="Password"
          v-model="user.password"
          id="password"
        />
        <div v-if="this.passwordMissing" role="alert">
          <p class="text-red-500 text-xs">Please choose a password!</p>
        </div>
      </div>
      <div class="flex justify-between">
        <button
          class="login-btn font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="submit"
          id="submit"
        >Sign In</button>
      </div>
      <div class="form-group">
        <div v-if="message" class="text-red-500 text-md" role="alert">
          <br />
          {{ message }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import User from '@/models/user'

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      message: '',
      usernameMissing: false,
      passwordMissing: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    handleLogin: function(e) {
      if (this.user.username == '') {
        this.usernameMissing = true
      }
      if (!this.user.password) {
        this.passwordMissing = true
      }

      if (this.user.username && this.user.password) {
        this.usernameMissing = false
        this.passwordMissing = false
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/day')
          },
          error => {
            if (error.response.data.title == 'Unauthorized') {
              this.message = 'Incorrect username or password, please try agian.'
            } else {
              this.message = 'Incorrect username or password, please try again.'
              // remove later //
              console.log(
                (error.response && error.response.data) ||
                  error.message ||
                  error.toString()
              )
            }
          }
        )
      }
      e.preventDefault()
    }
  }
}
</script>

<style lang="css" scoped>
.form-control {
  background-color: #3b3f43;
  color: #b4b4b2;
  border-bottom: solid #b4b4b2 1px;
}

.login-btn {
  background-color: #56595b;
  border-bottom: solid #b4b4b2 1px;
  width: auto;
  display: inline-block;
}
</style>
