<template>
  <div>
    <navbarComponent></navbarComponent>
    <div class="container login">
      <div class="login">
        <b-input-group size="lg">
          <b-form-input placeholder="Name" v-model="id"></b-form-input>
        </b-input-group>
        <b-input-group size="lg">
          <b-form-input placeholder="password" v-model="password" type="password" min-length="3"></b-form-input>
        </b-input-group>
      </div>
      <button class="btn mx-auto" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
  import navbarComponent from '../components/navbarComponent'
  export default {
    name: 'Login',
    components: {
      navbarComponent
    },
    data() {
      return {
        id: null,
        password: null
      }
    },
    methods: {
      login() {
        this.$http.post('https://nameless-retreat-73671.herokuapp.com/users/login', {
          username: this.id,
          password: this.password
        }).then(function(response) {
          this.$store.commit('login', {
            name: this.id,
            number: this.password,
            authToken: response.body.token
          })
        })

        this.$router.push('/listEvents')
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/input"
.login
  margin-top: 20%

</style>