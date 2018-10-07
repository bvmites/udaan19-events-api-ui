<template>
  <div>
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand href="#" to="/listEvents">Genesis logo</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/listEvents">List events</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" to="/addEvent">Add Event</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user.authToken">
            <b-nav-item href="#" class="mx-auto" @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default{
    name: 'navbarComponent',
    methods: {
      logout() {
        this.$store.commit('logout')
        this.$router.push('/')
        localStorage.clear()
      }
    },
    computed: {
       ...mapState({
         user: state => state.user
       })
    },
    created() {
      if(localStorage.getItem('user')){
        this.$store.state.user = JSON.parse(localStorage.getItem('user'))
      }
    }
  }
</script>

<style scoped lang="sass">
.navbar-dark
  background: #2D3142
  color: #FFFFFB
  box-shadow: 0 5px 5px #333333
  a
    color: #FFFFFB
</style>