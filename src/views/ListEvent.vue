<template>
  <div>
    <navbarComponent/>
    <div class="container-fluid">
      <div class="heading">Events</div>
      <b-card v-for="event in events">
        <div class="body">
          {{event.eventName}}
        </div>
        <div class="action-buttons">
          <hr>
          <button class="btn" @click="editEvent(event._id)"><font-awesome-icon icon="pen" /></button>
          <button class="btn" @click="deleteEvent(event._id)"><font-awesome-icon icon="trash" /></button>
        </div>
      </b-card>
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
    },
    deleteEvent(id) {
      this.$http.delete('https://nameless-retreat-73671.herokuapp.com/events/' + id, {
        headers: {
          Authorization: this.user.authToken
        }
      }).then(function(response) {
        console.log(response)
        this.$router.push('/')
      })
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

@import '../sass/variables'
@import '../sass/listEvent'

</style>