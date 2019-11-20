import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Profil from "../views/Profil";
import postinglist from "../views/postinglist";
import wordcloud from "../views/wordcloud";
import registration from "../views/registration";
import homepage from "../views/homepage";
import App from "../App";
import wordcloud2 from "../views/wordcloud2";
import Profilesettings from "../views/Profilesettings";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'root',
            component: App
        },
        {
            path: '/wordcloud2',
            component: wordcloud2
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/Profil',
            component: Profil
        },
        {
            path: '/Profilesettings',
            component: Profilesettings
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
        },
        {
            path: '/homepage',
            component: homepage
        }
        ]
})
