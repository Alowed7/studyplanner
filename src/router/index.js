import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '../pages/DashboardPage.vue'
import SubjectsPage from '../pages/SubjectsPage.vue'
import SubjectDetailPage from '../pages/SubjectDetailPage.vue'
import TasksPage from '../pages/TasksPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: SubjectsPage
  },
  {
    path: '/subjects/:id',
    name: 'SubjectDetail',
    component: SubjectDetailPage,
    props: true
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
