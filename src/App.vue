<template>
  <v-app>
    <v-toolbar app color = "grey lighten-5">
      <v-toolbar-title class = "font-weight-medium headline gradient"> {{name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon  color = "green darken-2"> {{phoneNumber.icon}} </v-icon>
      <v-toolbar-title class = "subheading"> {{phoneNumber.number}} </v-toolbar-title>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  
  name: 'App',
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
