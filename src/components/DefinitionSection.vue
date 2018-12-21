<template>
  <section>
    <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1">Orthophonie</h2>
              <span class="subheading">
                Vous vous dites qu'est ce que l'orthophonie ?! 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container>
              <v-layout row wrap align-center>
                <v-flex xs12 class = "px-5">
                  <v-card class="elevation-0 transparent mx-5 px-5">
                    <v-card-text class="text-xs-center">
                      <img :src="require('../assets/logo.png')" alt="Orthophonie">
                    </v-card-text>
                    <v-card-text class = "subheading" style = "text-align: justify;">
                      un champ d'expertise spécialisé dans l&#39;évaluation et le traitement des
                      troubles de la communication liés a la voix , a la parole et au langage
                      oral et écrit , le champ de l'orthophonie inclut aussi les troubles de la
                      déglutition et de motricité bucco-faciale , les troubles concernés
                      apparaissent a des ages divers et sont causés par des facteurs d&#39;ordre
                      organique ( atteintes ou dysfonctions sensorielles , motrices ,
                      neurologiques ) , ou d'ordre psycho-social ( difficultés de développement
                      plus au moins marquées , carences socio-culturelles ). 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
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
