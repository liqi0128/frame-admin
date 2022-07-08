import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {uuid} from'../utils/tool'

export default [
  {label:'组件0',key:'/subset0',icon:<PieChartOutlined />},
  {
    label:'react基础',
    key:uuid(),
    icon:<DesktopOutlined />,
    children: [
      {label:'组件1',key:'/subset1/123456',icon:<DesktopOutlined />},
      {label:'组件2',key:'/subset2',icon:<ContainerOutlined />},
      {label:'组件3',key:'/test',icon:<MailOutlined />},
      {label:'组件4',key:'/App',icon:<AppstoreOutlined />},
      {label:'生命周期',key:'/basis/reactperiod',icon:<AppstoreOutlined />},
      {label:'context',key:'/context',icon:<AppstoreOutlined />},
      {label:'UseMemo',key:'/UseMemo',icon:<AppstoreOutlined />},
      {label:'UseCallback',key:'/UseCallback',icon:<AppstoreOutlined />},
      {label:'Useref',key:'/Useref',icon:<AppstoreOutlined />},
    ]
  },
  {
    label:'地图',
    key:uuid(),
    icon:<AppstoreOutlined />,
    children: [
      {label:'MapPage',key:'/MapPage',icon:<AppstoreOutlined />},
    ]
  },
  {label:'大屏可视化',key:'/dataV',icon:<AppstoreOutlined />},
  {
    label:'Echarts',
    key:'/Echarts',icon:<AppstoreOutlined />,
    children: [

    ]
  },
]