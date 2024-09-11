import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/screens/home.vue'
import Black from '@/screens/black.vue'

export const useScreenRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Black
        },
        {
            path: '/home',
            component: Home
        },
    ]
})