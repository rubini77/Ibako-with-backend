import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
import ShopCard from "../views/ShopCard.vue"
import Card from "../views/Card.vue"
import AdminPage from '../views/AdminPage.vue'
import ProductViewPage from '../views/ProductViewPage.vue'
import UpdateProductPage from '../views/UpdateProductPage.vue'
import OrdersDetails from '../views/OrdersDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/ShopCard',
      name: 'ShopCard',
      component: ShopCard
    },
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/ProductViewPage',
      name: 'ProductViewPage',
      component: ProductViewPage
    },
    {
      path: '/UpdateProductPage',
      name: 'UpdateProductPage',
      component: UpdateProductPage
    },
    {
      path:'/OrdersDetails',
      name:'OrdersDetails',
      component:OrdersDetails
    }
    
  ]
})

export default router
