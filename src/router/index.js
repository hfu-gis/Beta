import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import Profil from "../views/Profil";
import profilesettings from "../views/profilesettings";

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
            component: profilesettings
        }]
})
