import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import Profil from "../views/Profil";

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
            path: '/profil',
            component: profil
        },{
            path: '/profilesettings',
            component: profilesettings
        },{
            path: '/anmelden',
            component: 
        },{
            path: '/registration',
            component: registration
        },
    ]
})
