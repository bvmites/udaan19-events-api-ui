<template>
  <div>
    <b-input-group size="lg">
      <b-form-input v-model="event.eventName" placeholder="Event Name"></b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-select v-model="event.department" :options="departmentOptions"></b-form-select>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-input v-model="event.entryFee" placeholder="Entry Fee"></b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-select v-model="event.eventType" :options="typeOptions"></b-form-select>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-input v-model="event.tagline" placeholder="Tagline"> </b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-input v-model="event.teamSize" placeholder="Team Size"> </b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-form-textarea v-model="event.notes" placeholder="Additional Notes" :rows="3"></b-form-textarea>
    </b-input-group>
    <!--Managers-->
    <div class="managers">
      <div class="sub heading">Managers</div>
      <b-card v-if="event.managers.length > 0">
        <div class="row details">
          <div class="col-sm-1">Sr. no.</div>
          <div class="col-sm-4">Manager's Name</div>
          <div class="col-sm-4">Manager's Number</div>
        </div>
        <div v-for="(manager,index) in event.managers" class="details row">
          <div class="col-sm-1">{{index+1}}.</div>
          <div class="col-sm-4">{{manager.name}}</div>
          <div class="col-sm-4">{{manager.phone}}</div>
        </div>
      </b-card>
      <b-input-group size="lg">
        <b-form-input v-model="manager.name" placeholder="Manager Name"> </b-form-input>
      </b-input-group>
      <b-input-group size="lg">
        <b-form-input v-model="manager.phone" placeholder="Manager Number" @keyup.enter.native="addManager">
        </b-form-input>
      </b-input-group>
      <button class="btn ml-auto" @click="addManager">Add Manager</button>
    </div>
    <!--Rounds-->
    <div class="rounds">
      <div class="sub heading">Rounds</div>
      <b-card v-if="event.rounds.length > 0">
        <div class="row details">
          <div class="col-sm-2">Round no.</div>
          <div class="col-sm-6">Round Details</div>
        </div>
        <div v-for="(round, index) in event.rounds" class="row details">
          <div class="col-sm-2">{{index+1}}</div>
          <div class="col-sm-6">{{round}}</div>
        </div>
      </b-card>
      <b-input-group size="lg">
        <b-form-input v-model="round" placeholder="Round Description" @keyup.enter.native="addRound"></b-form-input>
      </b-input-group>
      <button class="btn ml-auto" @click="addRound">Add Round</button>
    </div>
    <div class="action-buttons">
      <button class="btn" @click="submit">Submit</button>
      <button class="btn btn-warning" @click="$router.push('/')">Cancel</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'inputComponent',
  props: ['event'],
  data() {
    return {
      manager: {
        name: null,
        phone: null
      },
      round: null,
      typeOptions: [
        { value: null, text: "Select Event Type" },
        { value: 'tech', text: "Tech" },
        { value: 'non-tech', text: "Non-Tech" }
      ],
      departmentOptions: [
        { value: null, text: "Select Department"},
        { value: 'ecel' , text: "EC/EL"},
        { value: 'mech' , text: "Mechanical"},
        { value: 'ee' , text: "Electrical"},
        { value: 'non-tech' , text: "Non Tech"},
        { value: 'cpit' , text: "CP/IT"},
        { value: 'prod' , text: "Production"},
        { value: 'civil', text: "Civil"}
      ]
    }
  },
  methods: {
    addManager() {
      let manager = Object.assign({}, this.manager)
      this.event.managers.push(manager)
      this.manager.name = null
      this.manager.phone = null
    },
    addRound() {
      const round = this.round
      this.event.rounds.push(round)
      this.round = null
    },
    submit() {
      this.event['entryFee'] = parseInt(this.event.entryFee)
      this.event['teamSize'] = parseInt(this.event.teamSize)
      console.log(this.event)
      this.$emit('updateEvent', this.event)
    }
  },
  computed: {
     ...mapState({
       user: state => state.user
     })
  }
}
</script>

<style scoped lang="sass">
@import '../sass/input'
@import '../sass/variables'
.action-buttons
  text-align: center

  .btn
    display: inline-block
    margin-left: 20px
    border: none



.btn-warning
  background-color: darken($secondaryColor, 20%)

.sub
  margin-top: 20px
  font-size: 32px

.details
  font-size: 20px

</style>