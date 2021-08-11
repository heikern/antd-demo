import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function MainContent(props){
    const pageState = props.pageState;
    if (pageState == "Home"){
        return <HomeContent />
    } else if (pageState == "Course"){
        return <CourseContent />
    } else {
        return <Lost />
    }
}


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
        <h2>This is the home page</h2>
        </Content>
    );
}

function CourseContent(){
    return (
        <Content
            className="site-layout-background"
            style={{
            padding: 24,
            margin: 0,
            minHeight: 800,
            }}
        >
        <h2>This is the course page</h2>
        </Content>
    );
}

function Lost(){
    return (
        <Content
            className="site-layout-background"
            style={{
            padding: 24,
            margin: 0,
            minHeight: 800,
            }}
        >
        <h2>Are you lost?</h2>
        </Content>
    );
}

export {
    MainContent,
    HomeContent, 
    CourseContent
}