import { Layout } from 'antd';
import HeaderBar from './components/HeaderBar';
import SiderBar from './components/SiderBar';
import TagsView from './components/TagsView';
import './components/less/index.less'
import {Outlet} from'react-router-dom'
const { Content } = Layout;
export default function AppMain(){
  return(
    <Layout>
      <HeaderBar/>
      <Layout>
        <SiderBar/>
        <Layout>
          {/* <TagsView/> */}
          <Content
            className="layout-content-style"
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}