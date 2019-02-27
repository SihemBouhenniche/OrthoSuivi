<template>
  <v-container fluid grid-list-sm style="margin:0px; padding:0px;">
  	<v-layout row>
    	<v-flex xs12 sm6>
    		<v-card flat tile>
      			<img :src="require('../assets/contact.jpg')" class="img-contact">
      		</v-card>
    	</v-flex>
    	<v-flex xs12 sm6>
    		<v-card class="hide-overflow form" dark flat tile >
    		<v-card-title primary-title> <h1>Contactez nous</h1></v-card-title>
    		<v-form v-model="valide">
  				<v-text-field label="Votre email" required v-model="mail" :rules="emailRules"></v-text-field>
      			<v-text-field label="L'objet" v-model="objet"></v-text-field>
      			<v-textarea name="input" label="Message" value="Tapez votre email ici !" v-model="message"></v-textarea>
      			<v-btn round color="primary" dark class="send-btn" @click="send">Envoyer</v-btn>
      		</v-form>
  			</v-card>
    	</v-flex>
  	</v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'contact',
  data(){
  	return{
  		message:'',
  		mail:'',
  		objet:'',
  		valide:false,
  		emailRules: [
        	v => !!v || 'E-mail est obligatoire',
        	v => /.+@.+/.test(v) || 'E-mail doit être valide'
        ]
  	}
  },
  methods:{
  	send:function () {
  		// body...
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-contact{
	padding-top: 20px;
	height: 620px;
	width:100%;
}

.form{
	padding-left: 20px;
	padding-right: 150px;
	padding-top: 100px;
	margin-top: 20px;
	height: 600px;
}

.send-btn{
	margin-right: -250px;
	background: -webkit-linear-gradient(0deg, #1a237e 0%, #80deea 100%); 
}

h1{
	margin-left: -20px;
}

</style>