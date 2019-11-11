import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import Profil from "../views/Profil";
import Profilesettings from "../views/Profilesettings";
import postinglist from "../views/postinglist";
import wordcloud from "../views/wordcloud";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/Profil',
            component: Profil
        },{
            path: '/profilesettings',
            component: Profilesettings
        },{
            path: '/postinglist',
            component: postinglist
        },{
            path: '/wordcloud',
            component: wordcloud
        }]
})
