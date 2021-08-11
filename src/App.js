import React, { useState, useEffect } from 'react';
import './App.less';

import MyHeader from './Header.js'

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import MySidebar from './Sidebar';
import {HomeContent, MainContent} from './Content';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [pageState, setPageState] = useState("Home")
  return (
    <div className="App">
      <Layout>
        <MyHeader navState = {pageState => setPageState(pageState)}/>
        <Layout>
          <MySidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <MainContent pageState = {pageState}/>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
