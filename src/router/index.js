import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import History from '@/components/History'
import PayCostProject from '@/components/PayCostProject'
import ProjectDetail from '@/components/ProjectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/project',
      name: 'project',
      component: Project
    }, {
      path: '/history',
      name: 'history',
      component: History
    }, {
      path: '/payCostProject',
      name: 'payCostProject',
      component: PayCostProject
    }, {
      path: '/projectDetail',
      name: 'projectDetail',
      component: ProjectDetail
    }
  ]
})
