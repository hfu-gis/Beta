import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Profil from "../views/Profil";
import profilesettings from "../views/profilesettings";
import postinglist from "../views/postinglist";
import wordcloud from "../views/wordcloud";
import registration from "../views/registration";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/Profil',
            component: Profil
        },
        {
            path: '/profilesettings',
            component: profilesettings
        },
        {
            path: '/postinglist',
            component: postinglist
        },
        {
            path: '/wordcloud',
            component: wordcloud
        },
        {
            path: '/registration',
            component: registration
        }]
})
