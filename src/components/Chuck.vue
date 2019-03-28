<template>
    <div>
        {{jokeG}}
    </div>
</template>

<script>
import chuckService from '../services/ChuckService'
import { mapGetters, mapMutations, mapActions } from "vuex";
import {store} from '../store.js'

export default {
    data(){
        return {
        }
    },

     computed: {
    ...mapGetters(["jokeG"])
    },
    beforeRouteEnter (to, from, next) {
        store.dispatch('getJoke')
    }
    
}
</script>

