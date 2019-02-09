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
  name: 'EditEvents',
  components: {
    inputComponent
  },
  data() {
    return {
      event: null
    }
  },
  methods: {
    sendEvent(event) {
      this.event = event
      this.$http.put('https://udaan19-events-api.herokuapp.com/events', this.event, {
        headers: {
          Authorization: this.user.authToken
        }
      }).then(function(response) {
        this.$router.push('/listEvents')
      })
    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  },
  mounted() {
    let id = this.$route.params.id
    this.$http.get('https://udaan19-events-api.herokuapp.com/events/' + id, {
      headers: {
        Authorization: this.user.authToken
      }
    }).then(function(response) {
      this.event = response.body
      console.log(response.body)
    })
  }
}
</script>

<style scoped lang="sass">
.container
  margin-top: 5%
  padding-bottom: 5%
</style>