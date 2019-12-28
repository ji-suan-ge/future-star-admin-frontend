import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../pages/LoginPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        }
    ]
})
