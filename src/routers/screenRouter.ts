import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/screens/home.vue'
import Black from '@/screens/black.vue'
import Lock from '@/screens/lock.vue'
import Unlock from '@/screens/unlock.vue'
import Powerdown from '@/screens/powerdown.vue'
import Powerup from '@/screens/powerup.vue'
import PhoneBook from '@/screens/phoneBook.vue'
import PageNotFound from '@/screens/PageNotFound.vue'

export const useScreenRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Black
        },
        {
            path: '/powerdown',
            component: Powerdown
        },
        {
            path: '/powerup',
            component: Powerup
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
        {
            path: '/p-book',
            component: PhoneBook
        },
        {
            path: '/:notFound(.*)*',
            component: PageNotFound
        },
    ]
})