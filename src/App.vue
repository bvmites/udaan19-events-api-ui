<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Titillium+Web|Play')
@font-face
  font-family: 'Neptune'
  src: url('./assets/Neptune_Trial.otf') format('opentype')
@import './sass/variables'

body
  background: $primaryColor
  font-family: $primaryFont

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
</style>
