import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import profil from "../views/profil";
import postinglist from "../views/postinglist";
import registration from "../views/registration";
import homepage from "../views/homepage";
import App from "../App";
import profilesettings from "../views/profilesettings";
import popup2 from "../views/popup2";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'root',
            component: App
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/profile.json',
            component: profil
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
            path: '/registration',
            component: registration
        },
        {
            path: '/homepage',
            component: homepage
        },{
            path: '/popup2',
            component: popup2
        }
        ]
})
