<template>
  <div>
    <div class="container">
      <inputComponent :event="event" @updateEvent="sendEvent($event)"/>
    </div>
  </div>
</template>

<script>
import inputComponent from '../components/inputComponent'
import {mapState} from 'vuex'

export default {
  name: 'AddEvent',
  components: {
    inputComponent
  },
  data() {
    return {
      event: {
        department: null,
        description: 'genesis event',
        prizeMoney: [20],
        entryFee: null,
        eventName: null,
        eventType: null,
        managers: [],
        rounds: [],
        tagline: null,
        teamSize: null,
        notes: null
      }
    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  },
  methods: {
    sendEvent(event) {
      this.event = event
      console.log(this.event)
      this.$http.post('https://nameless-retreat-73671.herokuapp.com/events', this.event, {
        headers: {
          Authorization: this.user.authToken
        }
      }).then(function(response) {
        console.log(response)
        this.$router.push('listEvents')
      })
    }
  }
}
</script>

<style scoped lang="sass">

.container
  margin-top: 5%
  padding-bottom: 5%
</style>