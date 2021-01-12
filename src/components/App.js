import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../styles/App.css';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">Contacts</Menu.Item>
                            <Menu.Item key="3">About</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <h1>Content</h1>
                            <h2>Обязательны</h2>
                            <ul>
                                <li>Список всех контактов.</li>
                                <li>Возможность найти контакт со списка (строка поиска)</li>
                                <li>Добавление, изминение, удаление контакта</li>
                                <li>Использовать препроцессор Sass</li>
                                <li>Использовать сборщик проектов Webpac</li>
                                <li>Создать меню адаптивное с пунктами (использовать Routs):
                                    <ol>
                                        <li> Home, который ведет на домашнюю страницу с Заголовком "Home"</li>
                                        <li>Contacts, который ведет страницу с контактами "Contacts"</li>
                                        <li>About, который ведет страницу с Заголовком "About"</li>
                                    </ol>
                                </li>
                            </ul>
                            <h2>Будет плюсом</h2>
                            <p>
                                Добавление контакту фотографии,
                                Разработать дизайн приложения
                            </p>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Phonebook | Ant Design ©2021 Created by <a href="https://github.com/OlegBiletsky/Phonebook" target="blank">Oleg Biletsky</a>
                    </Footer>
                </Layout>
            </div>
        );
    }
};
export default App;