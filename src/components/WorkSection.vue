<template>
  <section >
    <v-layout row class = "mx-5 mt-5">
        <v-flex xs12 sm8>
          <div class="text-xs-center mt-5">
            <h2 class="display-1 gradient font-weight-bold">Méthode de travail</h2>
          </div>
          <span class="subheading mx-3 text-xs-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </span>
          <v-layout  align-center row class = "mt-5">
            <v-flex xs12 sm6 class= "mx-3">
              <v-card>
                <v-img
                  :src="require('../assets/Work/c1.jpg')"
                  aspect-ratio="1.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit. </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 class= "mx-3">
              <v-card>
                <v-img
                  :src="require('../assets/Work/c5.jpg')"
                  aspect-ratio="1.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm4 class = "mt-5">
          <div class="text-xs-center">
            <h2 class="display-1 gradient font-weight-meduim mt-3">Tests & Exercices</h2>
          </div>
          <span class="subheading mx-3 text-xs-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </span>
          <v-expansion-panel 
              popout 
              class = "mt-5" 
              focusable>
            <v-expansion-panel-content 
              v-for="(item,i) in items" 
              :key="i" 
              class = "my-1"
              style = "background-color: #e0e0e0; border-radius: 50px;"
              focusable
              >
              <div slot="header" class="title">
                {{item.title}}
              </div>
              <v-card style = "background-color: #fff; border-radius: 50px;">
                <v-card-text >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
  </section>
</template>





<script>
  export default {
    data: () => ({
      panel: [true, false, false, false],
      items : [
        {
          title : "Tests",
        },
        {
          title : "Traitement de tangue",
        },
        {
          title : "Exercices orales",
        },
        {
          title : "Exercices par images",
        },
      ]
    })
  }
</script>

<style>
  .v-expansion-panel__container--active .v-expansion-panel__header{
    background-color: #2196f3;
    border-radius: 50px;
    color: #fff;
  }
  .v-expansion-panel__container--active{
    background-color: transparent!important;
    box-shadow: none!important;
  }
</style>
