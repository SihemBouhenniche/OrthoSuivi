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
      <v-layout  align-center justify-center row class="mx-2" wrap>
          <v-flex sm12 md4>
            <v-layout column>
              <v-flex xs12 sm6>
                <v-card class="elevation-0 transparent card" > 
                  <v-card-text class="text-sm-left">
                    <v-layout  row>
                      <v-flex xs2>
                        <v-img :src="require('../assets/Services/logo1.png')" width = "100%"></v-img>
                      </v-flex>
                      <v-flex xs10>
                        <span class="display-1 text-xs-center font-weight-bold gradient">
                          Tests et exercices personnalisés
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-text class = "subheading">
                    Le fruit d’un savoir-faire qui met en valeur <br> la différence des cas et des perturbations <br> rencontrés chez les patients. 
                  </v-card-text>  
                </v-card> 
              </v-flex>

              <v-flex xs12 sm6>
                <v-card class="elevation-0 transparent card" > 
                  <v-card-text class="text-sm-left">
                    <v-layout row>
                      <v-flex xs2>
                        <v-img :src="require('../assets/Services/logo3.png')" width = "100%"></v-img>
                      </v-flex>
                      <v-flex xs10>
                        <span class="display-1 text-xs-center font-weight-bold gradient">
                          Un réseau important
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-text class = "subheading">
                    Un annuaire contenant une liste de coordonnées <br>de toutes les parties actionnaires impliquées dans <br>la prise en charge orthophonique.
                  </v-card-text>  
                </v-card> 
              </v-flex>
                 
            </v-layout>
          </v-flex>

          <v-flex sm12 md4>
            <img :src="require('../assets/Services/doc_3.jpg')" height="100%" width="100%" class="hidden-sm-and-down">
          </v-flex>

          <v-flex sm12 md4>
            <v-layout column>
              <v-flex xs12>
                <v-card class="elevation-0 transparent card" > 
                  <v-card-text class="text-sm-left">
                    <v-layout row>
                      <v-flex xs2>
                        <v-img :src="require('../assets/Services/logo2.png')" width = "100%"></v-img>
                      </v-flex>
                      <v-flex xs10>
                        <span class="display-1 text-xs-center font-weight-bold gradient">
                          Une prise en charge complémentaire
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-text class = "subheading">
                    Et harmonieuse basée sur l’interaction entre <br>orthophonistes et professionnels.
                  </v-card-text>  
                </v-card>  
              </v-flex>

              <v-flex xs12>
                <v-card class="elevation-0 transparent card" > 
                  <v-card-text class="text-sm-left">
                    <v-layout row>
                      <v-flex xs2>
                        <v-img :src="require('../assets/Services/logo4.png')" width = "100%"></v-img>
                      </v-flex>
                      <v-flex xs10>
                        <span class="display-1 text-xs-center font-weight-bold gradient">
                          Restez branché
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-text class = "subheading">
                    Une actualité enrichissante contenant des nouveautés <br> autour de plusieurs thématiques tournant <br> autour l’orthophonie dans tous ses aspects. 
                  </v-card-text>  
                </v-card>  
              </v-flex>
                 
            </v-layout>
          </v-flex>
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