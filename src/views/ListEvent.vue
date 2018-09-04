<template>
  <div>
    <navbarComponent/>
    <div class="container">
      <div class="heading">Events</div>
      <b-card v-for="event in events" :title="event.eventName" @click="editEvent(event._id)"></b-card>
    </div>
  </div>
</template>

<script>
import navbarComponent from '../components/navbarComponent'
import {mapState} from 'vuex'

export default {
  name: 'ListEvent',
  components: {
    navbarComponent
  },
  data() {
    return {
      events: null
    }
  },
  methods: {
    editEvent(id) {
      this.$router.push('/editEvent/' + id)
    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  },
  mounted() {
    this.$http.get('https://nameless-retreat-73671.herokuapp.com/events', {
      headers: {
        Authorization: this.user.authToken
      }
    }).then(function(response) {
      this.events = response.body
    })
  }
}
</script>

<style scoped lang="sass">

.card
  margin-top: 20px
  cursor: pointer

.container
  margin-top: 5%
  padding-bottom: 5%
</style>