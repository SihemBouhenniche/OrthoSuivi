<template>
  <v-app>
    <v-toolbar app dense color = "deep-purple darken-1" dark>
      <v-toolbar-title class = "title"> {{name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu
          transition="slide-y-transition"
          bottom
        >
          <v-btn
            slot="activator"
            flat
            key = "Langues"
            >
            <v-icon left>language</v-icon>
            Langues
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, i) in links"
              :key="i"
              @click=""
              >
              <v-list-tile-title>{{ item.link }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat  key = "Connexion" router to = "">
          <v-icon left>account_circle</v-icon>
          Connexion
        </v-btn>
      </v-toolbar-items>
      <v-icon  color = "green darken-2"> {{phoneNumber.icon}} </v-icon>
      <v-toolbar-title class = "subheading"> {{phoneNumber.number}} </v-toolbar-title>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      name : "OrthoSuivi",
      phoneNumber : {
        number : "+213 512 345 678",
        icon : "phone"
      },
      links : [
        {
          link : "العربية",
          path : "",
          icon : "language"
        },
        {
          link : "Français",
          path : "",
          icon : "account_circle"
        },
      ],
    }
  }
}
</script>
