import logo from './logo.svg';
import './App.less';

import MyHeader from './Header.js'

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MySidebar from './Sidebar';
import HomeContent from './Content';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader />
        <Layout>
          <MySidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <HomeContent />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
