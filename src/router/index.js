import { createRouter, createWebHashHistory } from 'vue-router'
import ToLista from '@/components/ToLista'
import ToCrear from '@/components/ToCrear'
import Editar from '@/components/Editar'
import ToMostrar from '@/components/ToMostrar'

const routes = [
  {
    path: '/',
    name: 'ToLista',
    component: ToLista
  },
   {
      path: '/crear',
      name: 'ToCrear',
      component: ToCrear
    },
    {
      path: '/edit/:id',
      name: 'Editar',
      component: Editar
    },
    {
      path: '/show/:id',
      name: 'ToMostrar',
      component: ToMostrar
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
