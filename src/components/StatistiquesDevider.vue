<template>
  <section>
    <v-parallax :src="require('../assets/Statistiques/background.jpg')" height="100%">
      <v-layout align-center justify-center row wrap>
        <v-flex xs12 sm2 class="hidden-sm-and-down">
          
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-card class="elevation-0 transparent card" > 
            <v-card-text class ="justify-center">
              <v-layout  align-center column>
                <v-flex xs2>
                  <img :src="require('../assets/Statistiques/logo1.png')"  height="70px" width="70px">
                </v-flex>
                <v-flex xs10>
                   <span class="display-3 white--text text-xs-center font-weight-bold gradient">
                    +10
                  </span>
                </v-flex>
              </v-layout>
            </v-card-text>
            <div style = "border-bottom: solid 5px #fff; margin-left: 60px; margin-right: 60px;"></div>
            <v-card-text class = "text-xs-center headline white--text">
              Médcins Compétents
            </v-card-text>  
          </v-card> 
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-card class="elevation-0 transparent card" > 
            <v-card-text class ="justify-center">
              <v-layout  align-center column>
                <v-flex xs2>
                  <img :src="require('../assets/Statistiques/logo2.png')"  height="70px" width="70px">
                </v-flex>
                <v-flex xs10>
                   <span class="display-3 white--text text-xs-center font-weight-bold gradient">
                    +120
                  </span>
                </v-flex>
              </v-layout>
            </v-card-text>
            <div style = "border-bottom: solid 5px #fff; margin-left: 60px; margin-right: 60px;"></div>
            <v-card-text class = "text-xs-center headline white--text">
              Patients <br> heureux
            </v-card-text>  
          </v-card> 
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-card class="elevation-0 transparent card" > 
            <v-card-text class ="justify-center">
              <v-layout  align-center column>
                <v-flex xs2>
                  <img :src="require('../assets/Statistiques/logo3.png')"  height="70px" width="70px">
                </v-flex>
                <v-flex xs10>
                   <span class="display-3 white--text text-xs-center font-weight-bold gradient">
                    +40
                  </span>
                </v-flex>
              </v-layout>
            </v-card-text>
            <div style = "border-bottom: solid 5px #fff; margin-left: 60px; margin-right: 60px;"></div>
            <v-card-text class = "text-xs-center headline white--text">
              Equipements de qualité
            </v-card-text>  
          </v-card> 
        </v-flex>
        <v-flex xs12 sm6 md2>
          <v-card class="elevation-0 transparent card" > 
            <v-card-text class ="justify-center">
              <v-layout  align-center column>
                <v-flex xs2>
                  <img :src="require('../assets/Statistiques/logo4.png')"  height="70px" width="70px">
                </v-flex>
                <v-flex xs10>
                   <span class="display-3 white--text text-xs-center font-weight-bold gradient">
                    +100
                  </span>
                </v-flex>
              </v-layout>
            </v-card-text>
            <div style = "border-bottom: solid 5px #fff; margin-left: 60px; margin-right: 60px;"></div>
            <v-card-text class = "text-xs-center headline white--text">
              Patients ont guéris
            </v-card-text>  
          </v-card> 
        </v-flex>
        <v-flex xs12 md2 class="hidden-sm-and-down">
          
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

</style>
