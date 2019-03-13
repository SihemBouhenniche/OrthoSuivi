<template>
  <section>
    <v-parallax class= "gradient-background" height="350">
      <v-layout align-center justify-center row>
        <v-flex xs12 sm6>
          <div class="text-xs-center">
            <h1 class="display-3 white--text mb-3 font-weight-bold">Avec OrthoSuivi</h1>
            <em class="display-1">Un slogan attirant !!</em>
          </div>
        </v-flex>
        <v-flex xs12 sm6>
          <ConnexionDialog/>
        </v-flex>
      </v-layout>
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
  .gradient-background{
    background: -webkit-linear-gradient(0deg, #43b1d2  0%,  #37c3a8 100%);
  }
</style>
