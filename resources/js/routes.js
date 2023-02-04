import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//import componenti che fungono da pagine
import AboutUs from './views/pages/AboutUs.vue';
import PostsIndex from './views/pages/posts/PostsIndex.vue';
import HomePage from './views/pages/HomePage.vue';
import PostShow from './views/pages/posts/PostShow.vue';

const router = new VueRouter({ //quando utilizzo new instanzio il router di vue e lo abbino alla variabile router
    //scriverò tutti i miei path per le diverse pagine
    mode: 'history', //questo comando permette di ricordare la successione delle pagine in modo da spostarmi avanti e indietro con le pagine (freccette vicino alla barra di ricerca in alto)
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {

            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },
        {

            path: '/posts/:id',
            name: 'singlePost',
            component: PostShow
        }
    ]
});

export default router;
