<template>
  <v-footer dark height="auto">
    <v-container fluid class="white--text" style = "padding: 0px;">
      <div class="grey darken-3 white--text py-5 px-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-list two-line subheader>
              <v-subheader inset class="headline white--text font-weight-bold">Restez connecté</v-subheader>

              <v-list-tile
                v-for="item in items"
                :key="item.title"
                avatar
                @click=""
              >
                <img :src="getImgUrl(item.icon)" :height = "item.height" :width = "item.width"></img>

                <v-list-tile-content class = "mx-3">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile> 
            </v-list> 
            <div class="mt-5">
              <v-btn icon>
                <v-icon color = "#2196f3">fab fa-facebook</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon color = "#2196f3">fab fa-twitter</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon color = "#2196f3">fab fa-google-plus</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon color = "#2196f3">fab fa-linkedin</v-icon>
              </v-btn>
           </div>  
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-list subheader>
              <v-subheader inset class="headline white--text font-weight-bold">Liens rapides</v-subheader>

              <v-list-tile
                v-for="item in links"
                :key="item.title"
                @click=""
              >
                <img :src="getImgUrl(item.icon)" :height = "item.height" :width = "item.width"></img>

                <v-list-tile-content class = "mx-3">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile> 
            </v-list>   
          </v-flex>
          <v-flex xs12 sm6 md3 >
            <v-list subheader>
              <v-subheader inset class="headline white--text font-weight-bold">Nos Services</v-subheader>

              <v-list-tile
                v-for="item in links"
                :key="item.title"
                @click=""
              >
                <img :src="getImgUrl(item.icon)" :height = "item.height" :width = "item.width"></img>

                <v-list-tile-content class = "mx-3">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile> 
            </v-list>   
          </v-flex>
          <v-flex xs12 sm6 md3>
            <div>
              <ContactSection/>
            </div>
          </v-flex>
        </v-layout>
      </div>
  
      <v-divider></v-divider>

      <div class="white--text grey darken-4 text-xs-center py-5">
        &copy;2018 — <strong>ERO.dz | UNICEF Inovation Lab, ELIP, ESI</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
  import ContactSection from '../components/ContactSection'
  export default {
    components: {
      ContactSection
    },
    data() {
      return{
        items: [
          { 
            icon: 'message_icon', 
            title: 'ero@gmail.com', 
            subtitle: '',
            width : '40px',
            height : '31px' 
          },{ 
            icon: 'phone_icon', 
            title: '+213 551 23 45 67', 
            subtitle: '+213 551 23 45 67',
            width : '27px',
            height : '40px' 
          },{ 
            icon: 'location_icon', 
            title: '25 Rue de la gare', 
            subtitle: 'Oued semar, Alger',
            width : '38px',
            height : '40px' 
          }
        ],
        links: [
          { 
            icon: 'blue_arrow_icon', 
            title: 'A propos', 
            width : '8px',
            height : '12px' 
          },{ 
            icon: 'blue_arrow_icon', 
            title: 'Blog', 
            width : '8px',
            height : '12px' 
          },{ 
            icon: 'blue_arrow_icon', 
            title: 'Contactez nous', 
            width : '8px',
            height : '12px' 
          },{ 
            icon: 'blue_arrow_icon', 
            title: 'Qui sommes nous ?', 
            width : '8px',
            height : '12px' 
          },{ 
            icon: 'blue_arrow_icon', 
            title: 'FAQ', 
            width : '8px',
            height : '12px' 
          },{ 
            icon: 'blue_arrow_icon', 
            title: 'Pourquoi nous ?', 
            width : '8px',
            height : '12px' 
          }
        ],
      }
    },
    methods : {
      getImgUrl(pet) {
        var images = require.context('./../assets/Footer', false, /\.png$/)
        return images('./' + pet + ".png")
      } 
    },
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