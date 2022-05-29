//路由配置文件
import { lazy } from 'react'
const layout = lazy(() => import('../layout/AppMain'))

let constantRouterMap = [
  {
    path: '/',
    name:'main',
    component: layout,
    children:[
      {
        path: '/subset0',
        name:'subset0',
        component: lazy(() => import('../pages/Subset')),
      },
      {
        path: '/subset1',
        name:'subset1',
        component: lazy(() => import('../pages/Subset1')),
      },
      {
        path: '/subset2',
        name:'subset2',
        component: lazy(() => import('../pages/Subset2')),
      },
      {
        path: '/test',
        name:'test',
        component: lazy(() => import('../pages/Test')),
      },
      {
        path: '/App',
        name:'app',
        component: lazy(() => import('../pages/App')),
      },
    ]
  },
  {
    path: '/app2',
    name:'main',
    component: lazy(() => import('../pages/App'))
  }
]
//异步获取路由
let asyncRouterMap = [

]
export default [...constantRouterMap, ...asyncRouterMap]