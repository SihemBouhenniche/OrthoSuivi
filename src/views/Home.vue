<template>
  <section>
    <v-parallax :src="require('../assets/Main Description/doctor1.jpg')" height="600" class="padding-parallax">
      <v-toolbar color = "grey lighten-5" class = "px-5">
        <v-toolbar-items class="hidden-sm-and-down px-5 mx-5">
          <v-btn flat color="blue darken-3" v-for = "item in items" :key = "item.title" @click="$vuetify.goTo(item.link, options)">
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
         <v-spacer></v-spacer>
           <div class="mx-5 px-5">
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
      </v-toolbar>
      <v-layout row wrap class="pa-5" style = "margin-left: 150px;">
        <v-flex xs12 sm6 md4>
          <h1 class="h1 gradient text-xs-center">
            ERO
          </h1>
          <div class="black--text subheading font-weight-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
    <Devider/>
    <ServicesSection id = "services"/>
    <WhySection id="why"/>
    <StatistiquesDevider/>
    <WorkSection/>
    <OrthophonistesSection/>
    <PlusDevider/>
    <Footer id="contact"/>
  </section>
</template>

<script>
  import Devider from '../components/Devider'
  import PlusDevider from '../components/PlusDevider'
  import StatistiquesDevider from '../components/StatistiquesDevider'
  import DefinitionSection from '../components/DefinitionSection'
  import ServicesSection from '../components/ServicesSection'
  import WorkSection from '../components/WorkSection'
  import OrthophonistesSection from '../components/OrthophonistesSection'
  import WhySection from '../components/WhySection'
  import ConnexionDialog from '../components/ConnexionDialog'
  import Footer from '../components/Footer'
  export default {
    components: {
      DefinitionSection,
      Devider,
      ConnexionDialog,
      ServicesSection,
      WhySection,
      Footer,
      StatistiquesDevider,
      WorkSection,
      OrthophonistesSection,
      PlusDevider
    },
    data: () => ({
      items : [
        {
          title : "Home",
          link : "#definition",
        },
        {
          title : "Services",
          link : "#services",
        },
        {
          title : "Pourqoui ERO ?",
          link : "#why",
        },
        {
          title : "Contact",
          link : "#contact",
        },
      ],
      options : {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      },
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
    color: #424242;
  }
  .padding-parallax div{
    padding: 0px;
  }
  .padding-parallax .v-parallax__image-container img{
    top: 45px;
  }
</style>