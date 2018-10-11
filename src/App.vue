<template>
  <div id="app">
    <navbarComponent/>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import navbarComponent from './components/navbarComponent'

export default {
  name: 'MainComponent',
  components: {
    navbarComponent: navbarComponent
  }
}


</script>
<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Titillium+Web|Play')
@font-face
  font-family: 'Neptune'
  src: url('./assets/Neptune_Trial.otf') format('opentype')
@import './sass/variables'

body
  background: $primaryColor
  font-family: $primaryFont

::-webkit-scrollbar
  display: none
.heading
  text-align: center
  font-size: 45px
  color: #FFFFFF
  font-weight: bold
  text-transform: uppercase
  font-family: $headingFont

.discription
  text-align: justify
  font-size: 18px
  color: #BFC0C0

.slide-enter-active
  animation: slide .5s ease-in-out
  animation-delay: .5s
.slide-leave-active
  animation: slide .5s ease-in-out reverse


@keyframes slide
  0%
    transform: scale(0) translateY(100%)
    opacity: 0
  50%
    opacity: 0
  100%
    transform: scale(1) translateY(0%)
    opacity: 1
</style>
