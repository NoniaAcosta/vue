import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/addtask',
      name: 'AddTask', // Ruta para añadir tareas
      component: AddTask // Aquí se debe cargar el componente AddTask
      // Implementa la lógica para añadir nuevas tareas.
    },
    {
      path: '/lista_tareas',
      name: 'Lista de Tareas', // Ruta para añadir tareas
      component: TaskList // Aquí se debe cargar el componente AddTask
      // Implementa la lógica para añadir nuevas tareas.
    },
    {
      path: '/vista_combinada',
      name: 'Vista Combinada', // Ruta para añadir tareas
      component: CombinedView // Aquí se debe cargar el componente AddTask
      // Implementa la lógica para añadir nuevas tareas.
    },
  ],
})

export default router
