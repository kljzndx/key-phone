import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/screens/home.vue'
import Black from '@/screens/black.vue'
import Lock from '@/screens/lock.vue'
import Unlock from '@/screens/unlock.vue'

export const useScreenRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Black
        },
        {
            path: '/lock',
            component: Lock
        },
        {
            path: '/unlock',
            component: Unlock
        },
        {
            path: '/home',
            component: Home
        },
    ]
})