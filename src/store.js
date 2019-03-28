import Vue from 'vue'
import Vuex from 'vuex'

import {triviaModule} from './modules/triviaModule'
import {chuckModule} from './modules/chuckModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        triviaModule,
        chuckModule
    }
  });   
    



