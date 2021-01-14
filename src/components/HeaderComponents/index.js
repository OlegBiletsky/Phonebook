import React, { Component } from "react";
import Navbar from './Navbar';
import { Layout } from 'antd';
import { BookOutlined } from "@ant-design/icons";
const { Header } = Layout;

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Header>
                    <div className="logo">
                        <BookOutlined style={{color: "blue"}} />
                        Phonebook
                    </div>
                    <Navbar/>
                </Header>
            </div>
        );
    }
};
export default HeaderComponent;