import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/app-navbar/AppNavbarLayout.vue'
import CheckList from '@/components/CheckList.vue'
import Sidebar from '@/components/Sidebar.vue'
import HomePage from '@/components/HomePage.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
   /*  {
      path:'/checklist',
      name : CheckList,
      component : CheckList,
    },
    {
      path:'/sidebar',
      name : 'Sidebar',
      component : Sidebar
    },
    {
      path:'/homepage',
      name : 'HomePage',
      component : HomePage
    } */
  ]
})
