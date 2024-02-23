import {createRouter, createWebHistory} from 'vue-router'

import Home from "./../components/Home.vue"
import Speeches from "./../components/Speeches.vue"
import Contacts from "./../components/Contacts.vue"
import About from "./../components/About.vue"



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/about',
        name: 'About',
        component: About,
    },

    {
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts,
    },


    {
        path: '/Speeches',
        name: 'Speeches',
        component: Speeches,
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router


