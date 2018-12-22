<template>
  <v-app>
    <v-toolbar app color = "grey lighten-5">
      <v-toolbar-title class = "font-weight-medium headline gradient"> {{name}} </v-toolbar-title>
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
            <v-icon left class = "gradient">language</v-icon>
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
          <v-icon left class = "gradient">account_circle</v-icon>
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
