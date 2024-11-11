import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
