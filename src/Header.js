import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header } = Layout;


function MyHeader (){
    return (
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
    );
}

export default MyHeader;