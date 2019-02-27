import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	orthophoniste : {
  		mail : "fs_bouhenniche@esi.dz",
  		password : "123456"
  	}
  },
  mutations: {
  	setOrthophoniste(state,payload){
		state.user = payload
	},
  },
  actions: {
  	logUserIn({commit},payload){
		/*appeler l'api pour se connecter ensuite commit()*/
	},

  },
  getters : {
		
  }
})
