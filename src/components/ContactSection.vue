<template>
  <v-card class="hide-overflow form" dark flat tile >
    <v-card-title primary-title> <h1>Contactez nous</h1></v-card-title>
    <v-form v-model="valide">
  		<v-text-field label="Votre email" required v-model="mail" :rules="emailRules"></v-text-field>
      <v-text-field label="L'objet" v-model="objet"></v-text-field>
      <v-textarea name="input" label="Message" value="Tapez votre email ici !" v-model="message"></v-textarea>
      <v-btn round color="primary" dark  @click="send">Envoyer</v-btn>
    </v-form>
  </v-card>
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


.form{
	padding-left: 20px;
	padding-right: 50px;
}

h1{
	margin-left: -20px;
}

</style>