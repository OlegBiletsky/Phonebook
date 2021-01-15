import React, { Component } from "react";
import { Layout } from 'antd';
const { Content } = Layout;

class Home extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h1>Home</h1>
                        <h2>Обязательны</h2>
                        <ul>
                            <li>Список всех контактов.</li>
                            <li>Возможность найти контакт со списка (строка поиска)</li>
                            <li>Добавление, изминение, удаление контакта</li>
                            <li>Использовать препроцессор Sass</li>
                            <li>Использовать сборщик проектов Webpack</li>
                            <li>Создать меню адаптивное с пунктами (использовать Routs):
                                <ol>
                                    <li> Home, который ведет на домашнюю страницу с Заголовком "Home"</li>
                                    <li>Contacts, который ведет на страницу с контактами "Contacts"</li>
                                    <li>About, который ведет на страницу с Заголовком "About"</li>
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
            </div>
        );
    }
};
export default Home;