<template>
  <v-app>
    <v-toolbar app flat color = "grey lighten-5" height="100%">
      <v-toolbar-title class = "ml-5 font-weight-medium headline gradient"> {{name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="px-5">
        <v-layout align-center justify-center row wrap>
          <v-flex xs12 sm6 v-for = "item in links" :key = "item.title">
            <v-btn flat>
              <v-img :src="getImgUrl(item.icon)"  height="40px" width="40px" ></v-img>
              <div style="display: inline-block; margin-left: 10px;" >
                <span class="font-weight-bold"> {{item.title}} </span><br>
                <span class="font-weight-regular"> {{item.subtitle}} </span>
              </div>
            </v-btn>
          </v-flex>
        </v-layout>
        
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <v-divider style = "background-color: #BDBDBD; margin-left: 150px; margin-right: 150px;"></v-divider>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  
  name: 'App',
  data () {
    return {
      name : "ERO",
      links : [
        {
          title : "Appelez nous",
          subtitle : "+213 551 12 34 14",
          path : "",
          icon : "phone_icon"
        },
        {
          title : "Contactez nous",
          subtitle : "ero@gmail.com",
          path : "",
          icon : "mail_icon"
        },
      ],
    }
  },
  methods : {
    getImgUrl(pet) {
      var images = require.context('./assets/Header', false, /\.png$/)
      return images('./' + pet + ".png")
    } 
  },
  computed : {
      
  }
}
</script>
