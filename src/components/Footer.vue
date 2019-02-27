<template>
  <v-footer dark height="auto">
    <v-card class="flex text-xs-center" flat tile>
      <v-card-actions class="grey darken-3 justify-center ">
        <strong class="subheading "> 
          <h3 >Contactez nous!</h3> <br>
          25 Rue Kerrouche Sliman, Birkhadem, Alger
          <h1>0559-481-538</h1>
          <h1>0556-937-488</h1>
        </strong> 
         
      </v-card-actions>
      <h3 class="copy-right">&copy; {{ new Date().getFullYear() }} - <strong>OrthoSuivi</strong></h3>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data() {
      return{
      
      }
     
    }
  }
</script>
<style scoped>
  h1{

    background: -webkit-linear-gradient(0deg, #1a237e 0%, #80deea 100%); 
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent; 

  }
 .copy-right{
    padding-left: 950px;
  }
</style>