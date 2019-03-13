<template>
  <section>
    <v-parallax class= "gradient-background" height="200">
      <v-layout align-center justify-center row>
        <v-flex xs12 sm8>
          <div class="text-xs-center">
            <h1 class="display-1 white--text mb-3 font-weight-bold">Nouveaux offres pour nos patients abonnés</h1>
          </div>
        </v-flex>
        <v-flex xs12 sm4>
          <v-btn large round color="primary" dark>En savoir plus</v-btn>
        </v-flex>
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
  .gradient-background{
    background: -webkit-linear-gradient(0deg, #43b1d2  0%,  #37c3a8 100%);
  }
</style>
