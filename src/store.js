import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Vuex-Store zum Abspeichern und Übergeben der aktuellen Sucheingabe etc.
export const store = new Vuex.Store({
    state: {
        searchHashtag: '',
        doubleLoaded: false
    },
    mutations: {
        changeSearchHashtag: function (state, data) {
            state.searchHashtag = data
        },
        setLoadedTrue: function (state) {
            state.doubleLoaded = true
        }
    },
    actions: {},
    getters: {},
});