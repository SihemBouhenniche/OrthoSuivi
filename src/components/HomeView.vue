<template>
  <v-parallax
    dark
    :src="require('../assets/index_hero.jpg')"
    height = 600
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 blue--text font-weight-bold font-italic mb-3">OrthoSuivi</h1>
      <h4 class="subheading"><v-icon>format_quote</v-icon> Build your application today! <v-icon>format_quote</v-icon></h4>
    </v-layout>
  </v-parallax>
</template>
<script>
  export default {
    data: () => ({

    })
  }
</script>

<style>

</style>
