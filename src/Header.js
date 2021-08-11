import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header } = Layout;


function MyHeader ({navState}){
    function ClickHandler(key){
        console.log(`${key} was clicked`);
        navState(key)
    }
    return (
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => ClickHandler("Home")}>Home</Menu.Item>
            <Menu.Item key="2" onClick={() => ClickHandler("Course")}>Courses</Menu.Item>
          </Menu>
        </Header>
    );
}

export default MyHeader;