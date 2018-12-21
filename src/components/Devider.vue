<template>
  <section>
    <v-parallax :src="require('../assets/services.jpg')" height="350">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">Avec OrthoSuivi</div>
        <em>Un slogan attirant !!</em>
        <v-btn
            class="deep-purple darken-3 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style>

</style>
