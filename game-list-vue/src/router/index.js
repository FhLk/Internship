import { createRouter, createWebHistory } from'vue-router'
import DetailPage from '../views/DetailPage.vue';
import ListPage from '../views/ListPage.vue';
const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: ListPage
    },
    {
        path:'/Detail/:id',
        name:'DetailPage',
        component: DetailPage
    }
]
const router = createRouter({ history, routes })
export default router