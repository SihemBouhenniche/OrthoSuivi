<template>
  <section>
    <v-parallax :src="require('../assets/services.jpg')" height="350">
      <v-layout column align-center justify-center>
        <div class="display-1 white--text mb-3 text-xs-center gradient font-weight-bold">Avec OrthoSuivi</div>
        <em>Un slogan attirant !!</em>
      </v-layout>
      <ConnexionDialog/>
    </v-parallax>
  </section>
</template>
<script>
  import ConnexionDialog from '../components/ConnexionDialog'
  export default {
    components: {
      ConnexionDialog
    },
    data: () => ({
      
    })
  }
</script>

<style>

</style>
