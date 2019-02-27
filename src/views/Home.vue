<template>
  <section>
    <v-parallax :src="require('../assets/index_hero.jpg')" height="600">
      <v-toolbar flat color = "transparent">
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat color="blue darken-3" v-for = "item in items" :key = "item.title" @click="$vuetify.goTo(item.link, options)">
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout row wrap class="ma-5 pa-5">
        <v-flex xs12 sm6 md4>
          <h1 class="deep-purple--text h1 gradient">
            ORTHOSUIVI
          </h1>
          <div class="black--text subheading mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
          <ConnexionDialog/>
        </v-flex>
      </v-layout>
    </v-parallax>
    <DefinitionSection id= "definition"/>
    <Devider/>
    <ServicesSection id = "services"/>
    <WhySection id="why"/>
    <ContactSection/>
    <Footer/>
  </section>
</template>

<script>
  import Devider from '../components/Devider'
  import DefinitionSection from '../components/DefinitionSection'
  import ServicesSection from '../components/ServicesSection'
  import WhySection from '../components/WhySection'
  import ContactSection from '../components/ContactSection'
  import ConnexionDialog from '../components/ConnexionDialog'
  import Footer from '../components/Footer'
  export default {
    components: {
      DefinitionSection,
      Devider,
      ConnexionDialog,
      ServicesSection,
      WhySection,
      ContactSection,
      Footer,
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
          link : "#why",
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
<style>
  .h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.15em;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .gradient{
    /*background: -webkit-linear-gradient(0deg, #4527A0 0%, #EC407A 100%);*/
    background: -webkit-linear-gradient(0deg, #1A237E 0%, #80DEEA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>