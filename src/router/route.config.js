//路由配置文件

const layout = () => import('../layout/AppMain')

let constantRouterMap = [
  {
    path: '/',
    name:'main',
    component: layout,
    children:[
      {
        path: '/subset0',
        name:'subset0',
        component: () => import('../pages/Subset'),
        meta: {
            title: '业务常识',
        },
      },
      {
        path: '/subset1/:id',
        name:'subset1',
        component: () => import('../pages/Subset1'),
      },
      {
        path: '/subset2',
        name:'subset2',
        component: () => import('../pages/Subset2'),
      },
      {
        path: '/test',
        name:'test',
        component: () => import('../pages/Test'),
      },
      {
        path: '/App',
        name:'app',
        component: () => import('../pages/App'),
      },
    ]
  },
  {
    path: '/app2',
    name:'main',
    component: () => import('../pages/App')
  }
]
//异步获取路由
let asyncRouterMap = [

]
export default [...constantRouterMap, ...asyncRouterMap]