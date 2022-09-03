import { Layout } from 'antd';
import HeaderBar from './components/HeaderBar';
import SiderBar from './components/SiderBar';
import TagsView from './components/TagsView';
import './components/less/index.less'
import {Outlet} from'react-router-dom'
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
const { Content } = Layout;

export default function AppMain(){
  let location = useLocation();
  console.log('路由');
  console.log(location);
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
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={500}
                classNames="fade"
                exit={false}
              >
                <Outlet></Outlet>
              </CSSTransition>
            </TransitionGroup>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}