import { chuckService } from "../services/ChuckService";
export const chuckModule = {
  state: {
    joke:[]
  },
  mutations: {
    setJoke(state,joke){
      state.joke=joke;
    }
  },
  
  actions: {
    getJoke(store, state){
      chuckService.getRandomJoke()
      .then((response)=>{
        store.commit('setJoke',response.value)
      })
    }
  },
  getters:{
    jokeG:state=>state.joke
  }
}

