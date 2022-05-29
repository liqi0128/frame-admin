import { 
  Layout,
  Dropdown,
  Menu,
  Avatar,
 } from 'antd';
import {
  HomeOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import Sound from './Sound';
import FullScreen from './FullScreen';
import Setting from './Setting';

const { Header } = Layout;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" >
            <HomeOutlined style={{marginRight:'8px'}}/>
            个人中心
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" >
            <ImportOutlined style={{marginRight:'8px'}}/>
            安全退出
          </a>
        ),
      },

    ]}
  />
);

function HeaderBar(){

  return(
    <Header>
      <div className='header_main'>
        <div>

        </div>
        <div>
          <FullScreen/>
          <Sound/>
          <Setting/>
          <Dropdown overlay={menu} placement="bottom" arrow trigger={['click']}>
            <Avatar 
              style={{
                color: '#f56a00',
                backgroundColor: '#FFF',
              }} 
              src="https://joeschmoe.io/api/v1/random" />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}

export default HeaderBar