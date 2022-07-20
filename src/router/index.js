import { createRouter, createWebHashHistory } from 'vue-router'


// 懒加载
const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Shopcart = () =>
    import ('../views/shopcart/Shopcart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/category',
        name: 'category',
        component: Category,
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: Shopcart,
    }, {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router