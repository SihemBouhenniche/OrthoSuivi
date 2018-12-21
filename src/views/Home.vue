<template>
  <section>
    <v-parallax :src="require('../assets/index_hero.jpg')" height="600">
      <v-toolbar flat color = "transparent">
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat color="deep-purple darken-3" v-for = "item in items" :key = "item.title" @click="$vuetify.goTo(item.link, options)">
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout column align-center justify-center class="white--text">
        <img :src="require('../assets/logo.png')" alt="Vuetify.js">
        <h1 class="deep-purple--text mb-2 display-2 text-xs-center">OrthoSuivui</h1>
        <div class="deep-purple--text title mb-3 text-xs-center">Build your application today!</div>
      </v-layout>
    </v-parallax>
    <DefinitionSection id= "definition"/>
    <Devider/>
  </section>
</template>

<script>
  import Devider from '../components/Devider'
  import DefinitionSection from '../components/DefinitionSection'
  export default {
    components: {
      DefinitionSection,
      Devider
    },
    data: () => ({
      items : [
        {
          title : "Orthophonie",
          link : "#definition",
        },
        {
          title : "Nos Services",
          link : "#services",
        },
        {
          title : "Pourqoui OrthoSuivi ?",
          link : "",
        },
      ],
      options : {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      }
    })
  }
</script>
