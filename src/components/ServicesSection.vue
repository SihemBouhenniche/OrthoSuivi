<template>
	<section>
    <v-container>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1 gradient font-weight-bold">Nos services</h2>
              <span class="subheading">
                OrthoSuivi vous offre plein de services ! 
              </span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
     <v-container grid-list-xl  fluid style="margin-bottom: 50px;"> 
      <v-layout  align-center>
        <v-hover>
          <v-flex xs12 sm3 class="shadow-effect" slot-scope="{ hover }" 
              :class="`elevation-${hover ? 12 : 2}`">
              <v-card class="elevation-0 transparent card" height ="515" > 
                <v-card-text class ="justify-center">
                  <img :src="require('../assets/doc_1.jpg')"  height="300px" width="260px" >
                </v-card-text>
                <v-card-title primary-title class="layout">
                  <div class="headline text-xs-center gradient">Tests et exercices personnalisés</div>
                </v-card-title>
                <v-card-text>
                  Le fruit d’un savoir-faire qui met en valeur la différence des cas et des perturbations rencontrés chez les patients. 
                </v-card-text>  
              </v-card>
          </v-flex>
        </v-hover>
        <v-hover>
          <v-flex xs12 sm3 class="shadow-effect" slot-scope="{ hover }" 
              :class="`elevation-${hover ? 12 : 2}`">
            <v-card class="elevation-0 transparent card" height ="515">
              <v-card-text class ="justify-center">
                <img :src="require('../assets/doc_2.jpg')"  height="300px" width="260px" >
              </v-card-text>
              <v-card-title primary-title class="layout">
                <div class="headline text-xs-center gradient">Une prise en charge complémentaire</div>
              </v-card-title>
              <v-card-text>
                Et harmonieuse basée sur l’interaction entre orthophonistes et professionnels. <br> <br>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-hover>
        <v-hover>
          <v-flex xs12 sm3 class="shadow-effect" slot-scope="{ hover }" 
              :class="`elevation-${hover ? 12 : 2}`">
            <v-card class="elevation-0 transparent card" height ="515">
              <v-card-text class ="justify-center">
                <img :src="require('../assets/doc_3.jpg')"  height="300px" width="260px" >
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                 <div class="headline text-xs-center gradient"> Un réseau important</div>
              </v-card-title>
              <v-card-text>
                Un annuaire contenant une liste de coordonnées de toutes les parties actionnaires impliquées dans la prise en charge orthophonique. <br><br>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-hover>
        <v-hover>
          <v-flex xs12 sm3 class="shadow-effect" slot-scope="{ hover }" 
              :class="`elevation-${hover ? 12 : 2}`">
            <v-card class="elevation-0 transparent card" height ="515" >
              <v-card-text class ="justify-center">
                <img :src="require('../assets/doc_4.jpg')"  height="300px" width="260px" >
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center gradient"> Restez branché</div>
              </v-card-title>
              <v-card-text>
                Une actualité enrichissante contenant des nouveautés autour de plusieurs thématiques tournant autour l’orthophonie dans tous ses aspects. <br> <br>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-hover>
      </v-layout>
    </v-container> 
  </section>
</template>


<style>
	.shadow-effect{
		padding: 0px;
		width: 100px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-left: 5px;
		margin-right: 5px;
	}
	.card{
		padding-left: 0px;
		padding-right: 0px;
	}
</style>