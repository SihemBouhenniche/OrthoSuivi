<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" 
            style = "background: -webkit-linear-gradient(0deg, #1A237E 0%, #80DEEA 100%); margin-top: 30px;"
            class="white--text"
            round
            large>
            Connexion
          <v-icon right dark>arrow_forward_ios</v-icon>  
      </v-btn>
      <form @submit.prevent = "onLogIn">
        <v-card class = "px-5">
          <v-card-title>
            <h1 class="headline gradient font-weight-bold" style = "text-align: center;">Connexion</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Email *" 
                                required
                                required
                                v-model = "email"
                                type = "email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Mot de passe *" 
                                type="password" 
                                required
                                v-model = "password"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small class="red--text">*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="dialog = false">Fermer</v-btn>
            <v-btn color="green darken-1" flat type = "submit">Connexion</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-layout>
</template>
<script>
  
    
  export default {
    data () {
      return {
        email : '',
        password : '',
        dialog: false
      }
    },
    methods : {
      onLogIn(){
        const user = {
          mail : this.email,
          password : this.password,
        }
        this.$store.dispatch('logUserIn',user)
        this.$router.push('/')
      },
    },
    computed : {
      
    }
  }
</script>