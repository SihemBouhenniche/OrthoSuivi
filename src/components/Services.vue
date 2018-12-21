<template id="services">
  <v-layout  class = "blue" style="margin:0">
    <v-flex xs12 >
        <v-container grid-list-sm fluid>
          <v-layout align-center justify-space-around row wrap>
            <v-flex xs12 ml-5 >
              <h1 class="display-1 white--text font-weight-bold font-italic mb-3">Nos Services </h1>
              <p class = "subheading white--text" style = "text-align: justify ">
                OrthoSuivi vous procure un servie purement professionnel à travers lequel nous assurons un suivi
                à impact direct sur l’état d’avancement du patient, et ce en vous offrant :
              </p>
            </v-flex>
            <v-flex
            v-for="(item, index) in items"
            :key="index"
              xs4
              ml-1
              mb-2
            >
              <v-card >
                <v-img

                  :src="require('../assets/icon-services-4.png')"
                  height = 125
                  contain
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{item.title}}</h3>
                    <div>{{item.description}}</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      items : [
        {
          title : "Titre de service",
          description : "Des tests et des exercices personnalisés, fruit d’un savoir-faire qui met en valeur la différence des cas et des perturbations rencontrés chez les patients.",
        },
        {
          title : "Titre de service",
          description : "Une prise en charge complémentaire et harmonieuse basée sur l’interaction entre orthophonistes et professionnels",
        },
        {
          title : "Titre de service",
          description : "Un annuaire contenant une liste de coordonnées de toutes les parties actionnaires impliquées dans la prise en charge orthophonique.",
        },
        {
          title : "Titre de service",
          description : "une actualité enrichissante contenant des nouveautés autour de plusieurs thématiques tournant autour l’orthophonie dans tous ses aspects.",
        },
      ]
    }),
    methods : {

    }
  }
</script>

<style>

</style>
