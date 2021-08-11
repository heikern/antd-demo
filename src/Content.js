import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function HomeContent(){
    return (
        <Content
            className="site-layout-background"
            style={{
            padding: 24,
            margin: 0,
            minHeight: 800,
            }}
        >
            Content
        </Content>
    );
}

export default HomeContent;