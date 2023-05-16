import {
    MenuFoldOutlined, MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
const { Header, Sider, Content } = Layout;
const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <NavLink
                        to='/secure/home'>
                                Главная
                            </NavLink>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <NavLink
                                to='/secure/styles'>
                                Жанры фильмов
                            </NavLink>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <NavLink
                                to='/secure/find-film-by-id'>
                                Поиск фильма
                            </NavLink>,
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: <NavLink
                                to='/secure/add-films'>
                                Добавить фильм
                            </NavLink>,
                        },
                        {
                            key: '5',
                            icon: <UploadOutlined />,
                            label: <NavLink
                                to='/secure/delete-films'>
                                Удалить фильм
                            </NavLink>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomePage;