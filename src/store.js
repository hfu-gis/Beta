import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchHashtag: ''
    },
    mutations: {
        changeSearchHashtag: function (state, data) {
            //Vue.set(state, 'people', data);
            //state.searchHashtag = { ...state.searchHashtag, newProp: ''}
            state.searchHashtag = data
        }
    },
    actions: {},
    getters: {},
});