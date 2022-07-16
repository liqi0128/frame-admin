//路由配置文件

const layout = () => import('@/layout/AppMain.js')

let constantRouterMap = [
  {
    path: '/',
    component: layout,
    children:[
      {
        path: '/subset0',
        component: () => import('../pages/basis/Subset'),
        meta: {
            title: '业务常识',
            //设置其他权限配置项
        },
      },
      {
        path: '/subset1/:id',
        component: () => import('../pages/basis/Subset1'),
      },
      {
        path: '/subset2',
        component: () => import('../pages/basis/Subset2'),
      },
      {
        path: '/test',
        component: () => import('../pages/basis/Test'),
      },
      {
        path: '/App',
        component: () => import('../pages/basis/App'),
      },
      {

        path: '/context',
        component: () => import('../pages/basis/ContextDemo'),
      },
      {
        path: '/UseMemo',
        component: () => import('../pages/basis/UseMemo'),
      },
      {
        path: '/UseCallback',
        component: () => import('../pages/basis/UseCallback'),
      },
      {
        path: '/MapPage',
        component: () => import('../pages/MapPage'),
      },
      {
        path: '/Useref',
        
        component: () => import('../pages/basis/Useref'),
      },
      {
        path: '/Echarts',
        component: () => import('../pages/Echarts'),
      },
      {
        path: '/dataV',
        component: () => import('@/pages/dateV/DataV'),
      },
    ]
  },
  {
    path:'/basis',
    component:layout,
    children:[
      {
        path:'/basis/reactperiod',
        component: () => import('@/pages/basis/ReactPeriod')
      },
    ]
  },
  {
    path: '/javaScript',
    component: layout,
    children:[
      {
        path:'/javaScript/bindcallapply',
        component: () => import('@/pages/javaScriptBasis/bindCallApply.js')
      },
    ]
  },
  {
    path: '/app2',
    component: () => import('../pages/basis/App')
  },
  {
    path: '/dataVECharts',
    component: () => import('@/pages/dateV/DataVECharts')
  }
]
//异步获取路由
let asyncRouterMap = [

]
export default [...constantRouterMap, ...asyncRouterMap]