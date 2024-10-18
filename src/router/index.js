import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/' ,
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/by-ingredients/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient,
            },
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
          
        ]
    }
   
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;