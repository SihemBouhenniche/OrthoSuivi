<template>
  <section>
    <v-parallax :src="require('../assets/Statistiques/background.jpg')" height="100%" class="my-5 py-5">
      <v-layout column wrap class="my-2" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1 gradient white--text font-weight-bold" style="">Nos nouvelles</h2>
              <span class="subheading">
                Vous trouverez plus de détails dans notre Bblog.
              </span>
          </div>
        </v-flex>
      </v-layout>

        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex  xs12 sm6 md4  d-fle >
                  <v-card flat tile class="d-flex">
                    <v-img :src="require('../assets/nouvelle/c1.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-end>
                          <v-flex xs12 align-end flexbox style="background-color: black; opacity: 0.6;bottom: 0px; height: 40px;" > 
                            Blablabla
                          <v-icon x-large dark style="position: absolute; right:  10px;">arrow_right</v-icon>
                         
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>



                <v-flex  xs12 sm6 md4  d-fle >
                  <v-card flat tile class="d-flex">
                    <v-img :src="require('../assets/nouvelle/c2.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-end>
                          <v-flex xs12 align-end flexbox style="background-color: black; opacity: 0.6;bottom: 0px; height: 40px;" > 
                            Blablabla
                          <v-icon x-large dark style="position: absolute; right:  10px;">arrow_right</v-icon>
                         
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>



                <v-flex xs12 sm6 md4 d-fle >
                  <v-card flat tile class="d-flex">
                    <v-img :src="require('../assets/nouvelle/c1.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-end>
                          <v-flex xs12 align-end flexbox style="background-color: black; opacity: 0.6;bottom: 0px; height: 40px;" > 
                            Blablabla
                          <v-icon x-large dark style="position: absolute; right:  10px;">arrow_right</v-icon>
                         
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>


                <v-flex xs12 sm6 md4 d-fle >
                  <v-card flat tile class="d-flex">
                    <v-img :src="require('../assets/nouvelle/c1.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-end>
                          <v-flex xs12 align-end flexbox style="background-color: black; opacity: 0.6;bottom: 0px; height: 40px;" > 
                            Blablabla
                          <v-icon x-large dark style="position: absolute; right:  10px;">arrow_right</v-icon>
                         
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>


                <v-flex xs12 sm6 md4 d-fle >
                  <v-card flat tile class="d-flex">
                    <v-img :src="require('../assets/nouvelle/c2.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-end>
                          <v-flex xs12 align-end flexbox style="background-color: black; opacity: 0.6;bottom: 0px; height: 40px;" > 
                            Blablabla
                          <v-icon x-large dark style="position: absolute; right:  10px;">arrow_right</v-icon>
                         
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm6 md4 d-fle >
                  <v-card flat tile class="d-flex" style="background-color: black; opacity: 0.6;">
                    <v-img :src="require('../assets/nouvelle/c1.jpg')"  class="grey lighten-2" >
                      <v-container fill-height fluid style=" padding:0px;">
                        <v-layout fill-height align-center justify-center >
                          <v-flex xs12 flexbox style="text-align:center;" >
                            <v-btn class="group pa-2 teal" fab >
                              <v-icon x-large dark  >play_arrow</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </v-parallax>
  </section>
</template>



<script>
  export default {
    data: () => ({
      items:[
        {
          imgUrl:'../assets/nouvelle/c1.jpg'
        },
        {
          imgUrl:'../assets/nouvelle/c2.jpg'
        },
        {
          imgUrl:'../assets/nouvelle/c3.jpg'
        },
        {
          imgUrl:'../assets/nouvelle/c1.jpg'
        },
        {
          imgUrl:'../assets/nouvelle/c2.jpg'
        },
        {
          imgUrl:'../assets/nouvelle/c3.jpg'
        }
      ]
      
    })
  }
</script>

<style>

.img-shadow{
  position: relative;
  display: inline-block;
  opacity: 0.4;
}

div.transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
  filter: alpha(opacity=60); /* For IE8 and earlier */
}

.test-div{
  background-color: #000;
  opacity: 0.6;
}

</style>
